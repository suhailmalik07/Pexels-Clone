import React from 'react';
import styled from 'styled-components';
// import ListPhotos from '../components/ListPhotos';
import ImageSection from "../Components/ImageSection"
import Axios from '../utils/Api';
import SearchBar from '../Components/SearchBar';
// import axios from "axios"
// import data from './dummydata.json';

const Container = styled.div`
    
`

const BackgroundImage = styled.div`
    height: 80vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width: 40%;
    margin: auto;
    color: white;
`

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }

    }

    componentDidMount() {
        Axios.get("search?query=temperature")
            .then(res => {
                this.setState({
                    data: res.data.photos
                })
                console.log(res.data.photos)
            })
            .catch(res => console.log(res))

        // axios.get("https://api.datamuse.com/words?ml=sun")
        //     .then(res => {
        //         this.setState({
        //             suggestions: res.slice(0,11)
        //         })
        //         // console.log(res.data.photos)
        //     })
        //     .catch(res => console.log(res))

        // // this.setState({
        // //     data: data.photos
        // // })
    }

    render() {
        const { data } = this.state
        console.log("in home page",this.state)
        return (
            <>
                <Container>
                    <BackgroundImage>
                        <Content>
                            <h1>The best free stock photos & videos shared by talented creators.</h1>
                            <SearchBar />
                        </Content>
                    </BackgroundImage>

                    <ImageSection data={data} suggestions={[]} />

                </Container>
            </>
        );

    }
}