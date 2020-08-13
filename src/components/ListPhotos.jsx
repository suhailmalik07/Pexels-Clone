import React from 'react';
import Image from './Image';
import styled from 'styled-components';
import ModalPhoto from './ModalPhoto';

const Container = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    img{
        margin: 8px;
    }
`

export default class ListPhotos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            modalData: {}
        }
    }

    handleShowModal = (modalData = {}) => {
        this.setState({
            showModal: !this.state.showModal,
            modalData
        })
    }

    render() {
        const { data } = this.props
        const { showModal, modalData } = this.state
        return (
            <>
                <ModalPhoto show={showModal} closeModal={this.handleShowModal} src={modalData} />
                <Container>
                    {data.map(item => (
                        <Image
                            onClick={() => this.handleShowModal(item.src)}
                            key={item.id}
                            src={item.src.medium}
                        />
                    ))}
                </Container>
            </>
        )
    }
}