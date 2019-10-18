import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

export class Stack extends Component {
  render () {
    const { title, cards } = this.props.stack;

    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h3>
          {title}
        </h3>
        <br />
        {cards.length > 0 &&
          cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    stack: state.stack
  };
}

export default connect(mapStateToProps, null)(Stack);
