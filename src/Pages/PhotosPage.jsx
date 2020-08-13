import React from 'react';
import styled from 'styled-components';
import ListPhotos from '../Components/ListPhotos';
import Axios from '../utils/Api';
import api from 'axios';
import { AppContext } from '../Context/AppContextProvider';
import Tablets from '../Components/Tablets';
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.div`
    padding: 1rem;
`

export default class PhotosPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            suggestions: [],
            query: ""
        }
        this.page = 1
    }

    componentDidMount() {
        this.loadData(this.context.query)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.context.query) {
            this.loadData(this.context.query)
        }
    }

    loadData = query => {
        api.get("https://api.datamuse.com/words?ml=" + query)
            .then(res => {
                this.setState({
                    suggestions: res.data.length > 0 ? res.data.slice(0, 6) : [],
                    query: query
                })
            })
            .catch(res => console.log(res))
        Axios.get("search?query=" + query)
            .then(res => {
                this.setState({
                    data: res.data.photos,
                    query: query
                })
            })
            .catch(res => console.log(res))
    }

    fetchMoreData = () => {
        Axios.get("search?query=" + this.context.query, {
            params: {
                page: ++this.page
            }
        })
            .then(res => {
                this.setState({
                    data: [...this.state.data, ...res.data.photos],
                    query: this.context.query
                })
            })
            .catch(res => console.log(res))
    }


    render() {
        const { data, suggestions } = this.state
        return (
            <Container>
                <Tablets suggestions={suggestions} />
                <ListPhotos data={data} />

                {/* infinite scroll */}
                <InfiniteScroll
                    dataLength={this.state.data.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                ></InfiniteScroll>
            </Container>
        );

    }
}

PhotosPage.contextType = AppContext