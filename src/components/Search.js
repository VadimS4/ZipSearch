import React from 'react';
import '../styling/Search.css';

const Search = (props) => {
    return (
        <div className="searchBar">
            <h1 className="title">ZipSearch</h1>
            <form className="inputForm" onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    type="text"
                    className="search"
                    id="searchTerm"
                    placeholder="Search For..."
                    onChange={(event) => props.handleChange(event)}
                />
            </form>
        </div>
    )
}

export default Search;