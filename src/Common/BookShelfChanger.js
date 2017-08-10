import React, {Component} from 'react';
import PropTypes from 'prop-types'
import * as Constants from "../Constants/Constants";

export default class BookShelfChanger extends Component {
    render() {
        const {book, onChange} = this.props;
        return (
            <div className="book-shelf-changer">
                {book && (
                        <select onChange={(e) => {onChange(book, e.target.value)}} defaultValue={book.shelf ? book.shelf : "none"}>
                            <option value="none" disabled>Move to...</option>
                            <option value={Constants.ShelfTypes.CURRENTLY_READING.value}>{Constants.ShelfTypes.CURRENTLY_READING.title}</option>
                            <option value={Constants.ShelfTypes.WANT_TO_READ.value}>{Constants.ShelfTypes.WANT_TO_READ.title}</option>
                            <option value={Constants.ShelfTypes.READ.value}>{Constants.ShelfTypes.READ.title}</option>
                            <option value={Constants.ShelfTypes.NONE.value}>{Constants.ShelfTypes.NONE.title}</option>
                        </select>
                )}
            </div>
        );
    }
}

BookShelfChanger.PropTypes = {
    book: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};