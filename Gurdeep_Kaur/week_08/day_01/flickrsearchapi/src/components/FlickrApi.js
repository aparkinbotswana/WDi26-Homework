import React, { PureComponent as Component } from 'react';
//import jsonp from 'jsonp-es6';
import axios from 'axios';

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


_handleInput(e){
  console.log(e.target.value);
  this.setState( { query: e.target.value } );
}

_handleSubmit(e){
  e.preventDefault();
  this.props.onSubmit( this.state.query );
}

  render(){
    return(
      <form onSubmit={ this._handleSubmit }>
      <input type="search" placeholder="images" onInput={ this._handleInput }/>
      <input type="submit" value="search"/>
      </form>
    );
  }
}


class Gallery extends Component{
  render(){

    return(
      <div>
        <img src={ this.props.images } height="150" width="150" alt={ this.props.images } />
      </div>
    )
  }
}

// function Image (props){
//   return(
//     <img src={ props.url } height="150" width="150" alt={ props.url } />
//   );
// }

class FlickrApi extends Component {

  constructor(props){
      super(props);
      this.state = { images: [] }
      this.fetchImages = this.fetchImages.bind( this );
  }

  fetchImages(q){
    console.log('searching flickr for', q);
    //ajax except it's really JSONP
    const flickrURL = 'https://www.googleapis.com/books/v1/volumes?Q=title'
    const flickrParams = {
      params: {
        q:q,
        key: 'AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA',
    }
}

axios.get( flickrURL, flickrParams).then( function (results) {
  console.log(results);

  const images = results.data.items[0].volumeInfo.imageLinks.thumbnail;
  console.log(images);

  this.setState( { images } );
}.bind(this));
}





  render(){
    return(
      <div>
      <h1>Images Search</h1>
      <SearchForm onSubmit={ this.fetchImages} />
      <Gallery images={this.state.images}/>
      </div>
    );
  }

}

export default FlickrApi;
