import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import BookSearch from "./Search/BookSearch";
import Home from "./HomePage/Home";

class BooksApp extends React.Component {

    constructor(props) {
        super(props);
        this.moveBookToShelf = this.moveBookToShelf.bind(this);

        this.state = {
            books: [],
        };
    }

    componentWillMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books
            })
        });
    }

    moveBookToShelf(book, shelf) {
        BooksAPI.update(book,shelf).then(() => {
            BooksAPI.getAll().then(books => {
                this.setState({
                    books: books
                });
            });
        });

    }

    render() {
        return (
            <div className="App">
                <Route path="/search" render={() => (
                    <BookSearch books={this.state.books}
                                onChange={this.moveBookToShelf} />
                )}/>
                <Route exact path="/" render={() => (
                    <Home books={this.state.books}
                          onChange={this.moveBookToShelf}/>
                )}/>
            </div>)
    }
}

export default BooksApp
