import React from 'react';
import styled from 'styled-components';
import ListPhotos from '../Components/ListPhotos';
import Axios from '../utils/Api';
import api from 'axios';
import { AppContext } from '../Context/AppContextProvider';
import Tablets from '../Components/Tablets';

const Container = styled.div`
    
`

export default class PhotosPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            suggestions: [],
            query: ""
        }
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
                console.log("suggestions are", res)
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

    render() {
        const { data, suggestions } = this.state
        return (
            <>
                <Tablets suggestions={suggestions} />
                <Container>
                    <ListPhotos data={data} />
                </Container>
            </>
        );

    }
}

PhotosPage.contextType = AppContext