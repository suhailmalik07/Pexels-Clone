import React from "react";
import Image from "./Image";
import styled from "styled-components";
import ModalPhoto from './ModalPhoto';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const SubContainer = styled.div`
    flex: 1;
    margin: 5px;
`

export default class ListPhotos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            modalData: {}
        }
    }

    switchModalStatus = item => {
        this.setState({
            showModal: !this.state.showModal,
            modalData: item
        })
    }

    getPhotosList = arr => {
        return arr.length && arr.map(item => <Image key={uuidv4()} onClick={() => this.switchModalStatus(item)} item={item} />)
    }

    render() {
        const images = this.props.data
        const len = images.length

        const arr1 = []
        const arr2 = []
        const arr3 = []
        let i = 0

        while (i < len) {
            i < len && arr1.push(images[i++])
            i < len && arr2.push(images[i++])
            i < len && arr3.push(images[i++])
        }

        const { showModal, modalData } = this.state
        return (
            <>
                <ModalPhoto show={showModal} close={this.switchModalStatus} item={modalData} />
                <Container>
                    <SubContainer>{this.getPhotosList(arr1)}</SubContainer>
                    <SubContainer>{this.getPhotosList(arr2)}</SubContainer>
                    <SubContainer>{this.getPhotosList(arr3)}</SubContainer>
                </Container>
            </>
        )
    }
}