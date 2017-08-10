import React, {Component} from "react";
import PropTypes from 'prop-types';

import * as BooksAPI from '../utils/BooksAPI';
import SearchBar from "./SearchBar";
import BooksGrid from "../Common/BooksGrid";

export default class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: []
        }
    }

    mergeBooksFromShelves(searchedBooks, shelvedBooks) {
        searchedBooks.forEach(b => {
            let shelvedBook = shelvedBooks.filter(sb => sb.id === b.id)[0];
            b.shelf = shelvedBook ? shelvedBook.shelf : b.shelf;
        })
        return searchedBooks;
    }

    updateQuery(event) {
        let query = event.target.value;
        if(query) {
            BooksAPI.search(query).then(books => {

                this.setState({
                    query: query,
                    books: books.error ? [] : this.mergeBooksFromShelves(books, this.props.books)
                })
            });
        } else {
            this.setState({
                query: query,
                books: []
            });
        }
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar query={this.state.query}
                           onChange={this.updateQuery.bind(this)} />
                <div className="search-books-results">
                    {this.state.books.length > 0 && (
                        <BooksGrid books={this.state.books}
                                   onChange={this.props.onChange} />
                    )}
                </div>
            </div>
        );
    }
}

BookSearch.PropTypes = {

    onChange: PropTypes.func.isRequired
};