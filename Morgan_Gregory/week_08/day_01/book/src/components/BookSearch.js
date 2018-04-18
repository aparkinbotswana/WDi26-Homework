import React, { PureComponent as Component } from 'react';
import axios from 'axios';

// CHILD 1: component 1 - search form function:
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: ''};
    // JOEL NOTE: ANY EVENT HANDLER THAT NEEDS TO USE this HAS TO BE BOUND TO this HERE
    this._handleIput = this._handleIput.bind(this);
    this._handleSubmimt = this._handleSubmimt.bind(this);
  }

  _handleIput(e) {
    this.setState( {query: e.target.value} );
  }

  _handleSubmimt(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmimt }>
        <input type="search" placeholder="Book title" onInput={ this._handleIput }/>
        <input type="submit" value="search" />
      </form>
    );
  }
}

// CHILD 2: component 2 - book display function:
// <img src={this.props.books} alt={props.url} />
class Book extends Component {
  render() {
    return(
      <div>

       <img src={this.props.books} />

      </div>
    );
  }
}

// functinal Component for when a Component doesn't need state or a callback
function Image (props) {
  return(
    <img src={props.url} alt={props.url} />
  )
}

// PARENT: component 3 - book search function:
class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { books: "" } // changed to an empty string as no arrays are returned as in the flickr-search example
    this.fetchBooks = this.fetchBooks.bind( this );
  }
  // Axios installed for AJAX
  fetchBooks(query) { // NOTE: MG what is query? Is this the same as ${query} below ***
    const booksURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA`;
    axios.get(booksURL).then(function (results) {
      const books = results.data.items[0].volumeInfo.imageLinks.thumbnail; // NOTE: MG look into .data ***
      this.setState({books}); // same as writing {books: books} // NOTE: MG what is setState ***
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Book search</h1>
        <SearchForm onSubmit={ this.fetchBooks }/>
        <Book books={ this.state.books } />
      </div>
    )
  }
}

export default BookSearch;
