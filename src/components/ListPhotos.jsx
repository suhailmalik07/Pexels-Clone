import React from 'react';
import Image from '../Components/Image';
import styled from 'styled-components';
import ModalPhoto from '../Components/ModalPhoto'


const Container = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    img{
        margin: 8px;
    }
`

export default function ListPhotos({ data }) {
    return (
        <>
            <ModalPhoto />
            <Container>
                {data.map(item => (
                    <Image
                        key={item.id}
                        src={item.src.medium}
                    />
                ))}
            </Container>
        </>
    )
}