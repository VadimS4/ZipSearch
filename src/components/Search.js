import React from 'react';
import '../styling/Search.css';

function Search() {
    return(
        <div className="searchBar">
            <h1 className="title">ZipSearch</h1>
            <form className="inputForm">
                <input
                    type="text"
                    className="search"
                    id="searchTerm"
                    placeholder="Search For..."
                />
            </form>
        </div>
    )
}

export default Search;