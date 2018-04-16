import React, {PureComponent as Component} from 'react';
import axios from 'axios';

// class MemeSearch extends Component {
//   constructor(props) {
//     super(props);
//     this._handleClick = this._handleClick.bind(this);
//   }
//   _handleClick() {
//     this.props.onClick();
//   }
//   render() {
//     return (
//       <button className="button" onClick={this._handleClick}>Get random meme</button>
//     );
//   }
// }

class QuoteSearch extends Component {

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button className="button" onClick={this._handleClick}>Get random quote</button>
    );
  }
}

class QuoteResult extends Component {
  render() {
    return (
      <div>
        {this.props.quote}
      </div>
    );
  }
}

class TrumpDumpSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
    this.fetchQuote = this.fetchQuote.bind(this);
    // this.fetchMeme = this.fetchMeme.bind(this);
  }

  fetchQuote() {
    console.log('about to send a request for a random quote');
    axios.get('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote')
      .then(function (response) {
        console.log(response);
        const quote = response.data.value
        this.setState({quote});
      }.bind(this));
      // .catch(function (error) {
      //   console.log(error);
      // });
  }

  // fetchMeme() {
  //   console.log('about to send request for random meme');
  //   axios.get('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/meme', {
  //     headers: {Accept: 'image/jpeg'},
  //     responseType: 'blob'
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //     // response = response[data];
  //   })
  //   .then(blob => URL.createObjectURL(blob))
  // };

  render() {
    return (
      <div className="main">
        <h1>The Trump Dump</h1>
        <h3>Bite-sized servings of shit Donald Trump says</h3>
        <div className="button">
        <QuoteSearch onClick={this.fetchQuote}/>
        </div>

        <div className="results">
        <QuoteResult quote={this.state.quote}/>
        </div>
      </div>
    )
  }
}

export default TrumpDumpSearch;
