import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from "./BookShelfChanger";

export default class Book extends Component {

    render() {
        const {book, onChange} = this.props;
        let url = book && book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : null; // there were issues with books not having imagelinks

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: url}}/>
                    <BookShelfChanger book={book}
                                      onChange={onChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && (
                    book.authors.map(author => (
                        <div className="book-authors" key={author}>{author}</div>
                    ))
                )}
            </div>
        )
    }
}

Book.PropTypes = {
    book: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}