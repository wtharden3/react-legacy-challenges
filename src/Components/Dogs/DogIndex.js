import React, {Component} from 'react';

export default class Dogindex extends Component{
  constructor(){
    super();
    this.state = {
      img: ''
    }
  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      this.setState({
        img: data.message
      })
    })
  }

  render(){
    return(
      <div>
        <h1><span role="img" aria-label="emoji">😍</span>  Dog! <span role="img" aria-label="emoji">😍</span></h1>
        <button onClick={e => this.componentDidMount()}>Click to See a New Doggie</button>
        <br />
        <br />
        <img src={this.state.img} alt="dog" />
      </div>
    )
  }
}