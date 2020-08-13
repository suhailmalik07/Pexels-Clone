import React from "react"
import OptionBoxes from "./OptionBoxes"
import FilterOption from "./FilterOption"
import styled from "styled-components"

const OptionBarContainer = styled.div`
display:felx;
justify-content:space-between;
padding:15px;
cursor:pointer;
`

export default class OptionBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            select: "medium"
        }
    }
    handleSelect = (e) => {
        this.setState({
            select: e.target.value
        })
        return <FilterOption name={"large"} url={"https://via.placeholder.com/30"} />
    }
    render() {
        return (<>
            <OptionBarContainer>
                <div>
                    <OptionBoxes name={"Photos"} url={"https://via.placeholder.com/30"} count={48} />
                    <OptionBoxes name={"videos"} url={"https://via.placeholder.com/30"} count={52} />
                    <OptionBoxes name={"Users"} url={"https://via.placeholder.com/30"} count={96} />
                </div>
                <div>
                    <FilterOption name={"large"} url={"https://via.placeholder.com/30"} />
                    <FilterOption name={"medium"} url={"https://via.placeholder.com/30"} />
                    <FilterOption name={"small"} url={"https://via.placeholder.com/30"} />
                </div>
            </OptionBarContainer>
        </>)
    }
}
