import React from 'react';
import '../styling/Search.css';

const Search = (props) => {
    return (
        <div className="searchBar">
            <h1 className="title">ZipSearch</h1>
            <form className="inputForm" onSubmit={(ev) => props.handleSubmit(ev)}>
                <input
                    type="text"
                    className="search"
                    placeholder="Search For..."
                    onChange={(event) => props.handleChange(event)}
                />
                <button className="submitButton">Search</button>
            </form>
        </div>
    )
}

export default Search;