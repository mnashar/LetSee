import React from 'react'

class SearchBar extends React.Component{
    constructor() {
        super();
        
        this.state = {
            searchQuery: ''
        };
        this.update = this.update.bind(this);
        this.gotfocus = this.gotfocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    gotfocus(event){
    }

    update(event) {
        event.preventDefault();
        this.setState({ searchQuery: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        
        this.props.getSearchProducts(this.state.searchQuery)
            .then(() => this.props.history.push(`/search/${this.state.searchQuery}`));
    }

    render(){
       
        return(
            <form onSubmit={this.handleSubmit} className="search-products-form">

                <input className="searchBar" id="inputSearchText"
                    onChange={this.update}
                   
                    type="text" 
                    // value="Search for items"
                    />



            <div className="searchIconDiv">
                        <button>   <i className="fas fa-search searchBarIcon"></i></button>
                    </div>
            </form>
            )
    }
}

export default SearchBar