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
        const size = Math.floor(len / 3)
        const arr1 = images.slice(0, size)
        const arr2 = images.slice(size, 2 * size)
        const arr3 = images.slice(2 * size, 3 * size)

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