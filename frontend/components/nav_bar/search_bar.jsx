import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <>
            <input className="searchBar" type="text" value="Search for items"/>
        
        <div className="searchIconDiv">
                <i class="fas fa-search searchBarIcon"></i>
                </div>
            </>
            )
    }
}

export default SearchBar