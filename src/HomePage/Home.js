import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import BookShelf from "./Book/BookShelf";
import * as Constants from "../Constants/Constants";

export default class Home extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title={Constants.ShelfTypes.CURRENTLY_READING.title}
                                   books={this.props.books.filter(b => b.shelf === Constants.ShelfTypes.CURRENTLY_READING.value)}
                                   onChange={this.props.onChange} />
                        <BookShelf title={Constants.ShelfTypes.WANT_TO_READ.title}
                                   books={this.props.books.filter(b => b.shelf === Constants.ShelfTypes.WANT_TO_READ.value)}
                                   onChange={this.props.onChange} />
                        <BookShelf title={Constants.ShelfTypes.READ.title}
                                   books={this.props.books.filter(b => b.shelf === Constants.ShelfTypes.READ.value)}
                                   onChange={this.props.onChange} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" />
                </div>
            </div>
        )
    }
}