import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BooksGrid from "../../Common/BooksGrid";

export default class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={this.props.books}
                               onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }
}

BookShelf.PropTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};