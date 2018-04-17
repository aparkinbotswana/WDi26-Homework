import React, {PureComponent as Component} from 'react';
import jsonp from 'jsonp-es6';
import axios from 'axios';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state= {images: " "};
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    //Call our own onSubmit callback function in parent which will grab the param and return.
    this.props.onSubmit(this.state.images);
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <button type="submit">Generate Dog!</button>
      </form>
    )
  }
}
/////////////////////////////////////////////////
class Results extends Component {
  render() {
    let props = this.props.images
    console.log(props);
    let fileType = props.substr(props.length - 1 );
    let showImage;
    console.log(fileType);
      if (fileType === "4") {
        showImage = <iframe src={props} width="500px" height="500px"></iframe>
      }
      else {
        showImage = <img src={props} width="500px" height="500px"/>
      }

    return(
      <div>
        <h2>Results:</h2>
        {showImage}
      </div> /*STUCK HERE: this.props.images.map is not a function. Map is not a function because it's a single image and not an array*/
    )      //{this.props.images.map((img) => <Image url={img} key={img}/>)}
  }
}
/////////////////////////////////////////////////
class RandomDog extends Component {
  constructor(props) {
    super(props);
    this.state = {images: " "};
    this.fetchImages = this.fetchImages.bind(this);
  }
  fetchImages(response){
    console.log('Generating Random Dog', response);
    const dogURL = "https://random.dog/woof.json";

    axios.get(dogURL).then(function (apiResponse) {
      //debugger;
      console.log(apiResponse);
      const apiResponseURL = apiResponse.data.url
    console.log(apiResponseURL);
    this.setState({images: apiResponseURL});
    }.bind(this));
  }
  render() {
    return(
      <div>
        <h1>Random Dog Search </h1>
        <SearchForm onSubmit={this.fetchImages}/>
        <Results images={this.state.images}/>
      </div>
    )
  }
}


export default RandomDog;
