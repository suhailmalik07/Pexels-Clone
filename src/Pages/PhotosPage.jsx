import React from 'react';
import styled from 'styled-components';
import ListPhotos from '../components/ListPhotos';
import Axios from '../utils/Api';
import data from './dummydata.json';
import { AppContext } from '../contexts/AppContextProvider';

const Container = styled.div`
    
`
export default class PhotosPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
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
        const { data } = this.state
        return (
            <Container>
                <ListPhotos data={data} />
            </Container>
        );

    }
}

PhotosPage.contextType = AppContext