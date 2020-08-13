import React from "react";
import Image from "./Image";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {AppContext} from "../Context/AppContextProvider"

const Conatiner = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
`;

const SubContainer = styled.div`
  width: 33%;
  margin: 10;
`;

export default class ImagesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getImages(arr) {
        let {option} = this.context
        console.log()
        return (
            arr.length > 0 &&
            arr.map((image) => {
                return (
                    <div key={uuidv4()}>
                        {
                            <Image
                                height={image.height}
                                width={image.width}
                                src={image.src[option]}
                            />
                        }
                    </div>
                );
            })
        );
    }
    render() {
        console.log("in image section", this.props)
        let images = this.props.data;
        let len = images.length;
        let size = Math.floor(len / 3);
        var arr1 = images.slice(0, size);
        var arr2 = images.slice(size, 2 * size);
        var arr3 = images.slice(2 * size, 3 * size);
        return (
            <>
                <Conatiner>
                    <SubContainer>{this.getImages(arr1)}</SubContainer>
                    <SubContainer>{this.getImages(arr2)}</SubContainer>
                    <SubContainer>{this.getImages(arr3)}</SubContainer>
                </Conatiner>
            </>
        );
    }
}

ImagesSection.contextType = AppContext