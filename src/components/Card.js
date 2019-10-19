import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false
    };
  }

  handleClick = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  };

  render() {
    const { prompt, answer } = this.props.card;

    return (
      <div className="card">
        <div className={'card-prompt'} onClick={() => this.handleClick()}>
          <h4>
            {prompt}
          </h4>
        </div>

        <div className={'card-answer'}>
          <h4
            className={this.state.showAnswer ? 'text-revealed' : 'text-hidden'}
          >
            {answer}
          </h4>
        </div>
      </div>
    );
  }
}

export default Card;
