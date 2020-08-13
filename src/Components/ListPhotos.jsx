import React from "react";
import Image from "./Image";
import styled from "styled-components";
import ModalPhoto from './ModalPhoto';

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
`

const SubContainer = styled.div`
    width: 33%;
    margin: 10px;
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
        return arr.length && arr.map(item => <Image key={item.id} onClick={() => this.switchModalStatus(item)} item={item} />)
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