import React from 'react';
import styled from 'styled-components';
import ListPhotos from '../Components/ListPhotos';
import Axios from '../utils/Api';
import api from 'axios';
import { AppContext } from '../Context/AppContextProvider';
import Tablet from '../Components/Tablet';
import { uuid } from "uuidv4";

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
                <div style={{ marginLeft: "15%", display: "flex", justifyContent: "space-between", width: "60%" }}>
                    {suggestions.length && suggestions.map(ele => { return <Tablet key={uuid()} name={ele.word} /> })}
                </div>
                <Container>
                    <ListPhotos data={data} />
                </Container>
            </>
        );

    }
}

PhotosPage.contextType = AppContext