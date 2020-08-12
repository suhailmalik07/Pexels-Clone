import React from 'react';
import styled from 'styled-components';
import ListPhotos from '../components/ListPhotos';
import Axios from '../utils/Api';
import SearchBar from '../components/SearchBar';
import data from './dummydata.json';
import NavBar from '../components/NavBar';

const Container = styled.div`
    
`
export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        // Axios.get("search?query=nature")
        //     .then(res => {
        //         this.setState({
        //             data: res.data.photos
        //         })
        //         console.log(res.data.photos)
        //     })
        //     .catch(res => console.log(res))

        this.setState({
            data: data.photos
        })
    }

    render() {
        const { data } = this.state
        return (
            <>
                <Container>

                    <ListPhotos data={data} />

                </Container>
            </>
        );

    }
}