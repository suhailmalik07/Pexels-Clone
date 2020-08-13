import React from 'react';


export const AppContext = React.createContext()


export default class AppContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "homePage",
            query: "",
            option:"medium",
            filter:false
        }
    }

    switchPage = () => {
        this.setState({
            page: this.state.page === "homePage" ? "photos" : "homePage",
        })
    }

    handleSearch = query => {
        this.setState({
            page: "photos",
            query
        })
    }

    handleFilter = (option) => {
        this.setState({
            option:option
        })
        alert("filtering by "+option)
    }
    render() {
        const { page, query,filter,option } = this.state
        const value = { page, query,option, switchPage: this.switchPage, handleSearch: this.handleSearch,handleFilter:this.handleFilter }
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}