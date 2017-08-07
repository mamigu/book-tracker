import React, {Component} from 'react';
import Book from "./Book";

export default class BooksGrid extends Component {

    render() {
        const {books, onChange} = this.props;
        return (
            <ol className="books-grid">
                {books.length > 0 && (
                    books.map(book => (
                        <li key={book.id}>
                            <Book book={book}
                                  onChange={onChange}/>

                        </li>
                    ))
                )}
            </ol>
        )
    }
}