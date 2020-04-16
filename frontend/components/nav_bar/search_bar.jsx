import React from 'react'

class SearchBar extends React.Component{
    constructor() {
        super();

        // this.state = {
        //     redirect: false
        // };
        
        this.state = {
            searchQuery: 'wwwwwwwwwww'
        };

       
        
        this.update = this.update.bind(this);
        this.gotfocus = this.gotfocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    gotfocus(event){
        // alert('zzzz');
        // event.target.value="";
    }

    update(event) {
        event.preventDefault();
        this.setState({ searchQuery: event.target.value });
        // if (event.target.value==='Search for items')
        // {
        //     let x = document.getElementById("inputSearchText");
        //     x.value='';
        // }
        // event.preventDefault();
        // alert('aaaaa');
        //  alert(event.target.value );
        //  this.setState({ searchQuery: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        
        this.props.getSearchProducts(this.state.searchQuery)
            .then(() => this.props.history.push(`/search/${this.state.searchQuery}`));

        






        // this.props.history.push('/cart_items');
        // this.setState({ searchQuery: '' });

        // let val = (document.getElementById("inputSearchText")).value;
        // this.setState({ searchQuery: val}, () => {
        //     // alert(this.state.searchQuery);    
        //     // this.props.history.pushState(`/search/${this.state.searchQuery}`);
        // }); 
            // this.setState({ redirect: true });
            
            // alert('aaaaaa');

        // let val= (document.getElementById("inputSearchText")).value;
        // this.props.history.pushState('/search/silk');




        // this.setState({ searchQuery: val}, function () {
        //     this.props.history.pushState('/search/silk');
        // });
        // event.preventDefault();
        // this.props.history.pushState(`/search/${this.state.searchQuery}`);
        // alert('sssss');



        
        // <Link to="/" className="logo">
        //     <h1 >Letsyyy</h1>
        // </Link>
        // this.props.fetchSearchProducts(this.state.searchQuery);
        // this.setState({ searchQuery: '' });
    }

    render(){
        // const { redirect } = this.state;

        // if (redirect) {
        //     return <Redirect to='/somewhere' />;
        // }
        // else
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