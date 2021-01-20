import React from 'react';

class sendNews extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '', email: '', phone: 0, news: ''};
    }
    nameChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }
    phoneChangeHandler = (event) => {
        this.setState({phone: event.target.value});
    }
    newsChangeHandler = (event) => {
        this.setState({news: event.target.value});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.nameChangeHandler}
        />
        <p>Enter your email:</p>
        <input
          type='email'
          onChange={this.emailChangeHandler}
        />
        <p>Enter your phone:</p>
        <input
          type='number'
          onChange={this.phoneChangeHandler}
        />
        <p>Enter your news:</p>
        <textarea
          onChange={this.newsChangeHandler}
        />
        <hr></hr>
        <input type="submit"></input>
        </form>
      );
    }
}

export default sendNews;