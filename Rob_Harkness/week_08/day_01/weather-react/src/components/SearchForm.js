import React, { PureComponent } from 'react';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this._submit = this._submit.bind(this);
    this._input = this._input.bind(this);
  }
  _input(e) {
    this.setState({ query: e.target.value });
  }
  _submit(e) {
    e.preventDefault();
    this.props.setWeather(this.state.query);
  }
  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <input type="search" id="query" onInput={this._input} />
          <button>Go</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
