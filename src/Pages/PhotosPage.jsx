import React from 'react';
import styled from 'styled-components';
// import ListPhotos from '../components/ListPhotos';
import ImageSection from "../Components/ImageSection"
import Axios from '../utils/Api';
import { AppContext } from '../contexts/AppContextProvider';
import axios from "axios";
import Tablet from '../Components/Tablet';

const Container = styled.div`
    
`
export default class PhotosPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            query: "",
            suggestions: []
        }
    }

    componentDidMount() {
        this.loadData(this.context.query)
        this.setState({
            data: data.photos
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.context.query) {
            this.loadData(this.context.query)
        }
    }

    loadData = query => {
        if (query !== "") {
            axios.get("https://api.datamuse.com/words?ml=" + query)
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


    }

    render() {
        const { data, suggestions } = this.state
        return (
            <Container>
                <div style={{ marginLeft: "15%", display: "flex", justifyContent: "space-between", width: "60%" }}>
                    {suggestions.length && suggestions.map(ele => (
                        <Tablet
                            key={1}
                            name={ele.word}
                            onClick={() => this.context.handleSearch(ele.word)}
                        />
                    ))}
                </div>
                <ImageSection data={data} suggestions={suggestions} />
            </Container>
        );

    }
}

PhotosPage.contextType = AppContext