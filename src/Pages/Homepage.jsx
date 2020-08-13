import React from 'react';
import styled from 'styled-components';
import ListPhotos from '../Components/ListPhotos';
import Axios from '../utils/Api';
import SearchBar from '../Components/SearchBar';
import InfiniteScroll from "react-infinite-scroll-component";

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
    width: 50%;
    margin: auto;
    color: white;

    @media all and (max-width:900px){
        width: 70%;
    }
    @media all and (max-width: 600px){
        width: 100%;
        margin: 1rem;
    }
`

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.page = 1
    }

    componentDidMount() {
        Axios.get("search?query=nature")
            .then(res => {
                this.setState({
                    data: res.data.photos
                })
            })
            .catch(res => console.log(res))
    }

    fetchMoreData = () => {
        Axios.get("search?query=nature", {
            params: {
                page: ++this.page
            }
        })
            .then(res => {
                this.setState({
                    data: [...this.state.data, ...res.data.photos],
                })
            })
            .catch(res => console.log(res))
    }

    render() {
        const { data } = this.state
        return (
            <>
                <Container>
                    <BackgroundImage>
                        <Content>
                            <h1>The best free stock photos & videos shared by talented creators.</h1>
                            <SearchBar />
                        </Content>
                    </BackgroundImage>

                    <div style={{margin: "0 1rem"}}>
                        <ListPhotos data={data} />
                    </div>

                    {/* infinite scroll */}
                    <InfiniteScroll
                        dataLength={this.state.data.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                    ></InfiniteScroll>

                </Container>
            </>
        );

    }
}