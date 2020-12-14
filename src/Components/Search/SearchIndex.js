import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        'pen',
        'marker',
        'eraser',
        'notebook',
        'pencil',
        'scissors',
        'highlighter',
        'stapler',
        'paper clip',
        'binder',
        'hole punch',
        'laminator',
        'laminating sheets',
        'protective sheets',
        'index cards',
      ],
      searchValue: ''
    };
  }

  searchFn(searchValue) {
    this.setState({ searchValue: searchValue });
  }

  matchKeywords() {
    if (this.state.things.includes(this.state.searchValue)) {
      this.state.things
        .filter(word => {
          return word.includes(this.state.searchValue);
        })
        .map((word, index) => {
          console.log('first map==>', index, word);
          //this does not work below
          this.state.filteredThings.push(word);
          console.log(this.state.filteredThings);
          return <p key={index}>{word}</p>;
        });
      return this.state.filteredThings.map((word, index) => (
        <p key={index}>{word}</p>
      ));
      //return(<p>worked</p>);
    } else {
      return this.state.things.map((word, index) => <p key={index}>{word}</p>);
    }
  }

  render() {
    return (
      <div>
        <Input
          placeholder="Search Here"
          // value={this.state.searchValue}
          onChange={e => this.searchFn(e.target.value)}
        />
        <h3>Results:</h3>
        <ul></ul>
        <h2>function results below</h2>
        {this.state.things
          .filter(thing => {
            if (thing.includes(this.state.searchValue)) {
              return true;
            } else {
              return false;
            }
          })
          .map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default SearchIndex;
