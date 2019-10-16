import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from 'react-bootstrap';

export default class StackForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      cards: []
    };
  }

  addCard () {
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: '', answer: '' });
    this.setState({ cards });
  }

  addCardSection (event, index, part) {
    const value = event.target.value;
    const cards = this.state.cards;
    cards[index][part]= value;
    this.setState({ cards });
  }

  handleChange (event) {
    this.setState({ title: event.target.value });
  }

  render () {
    console.log('TCL: StackForm -> render -> this.state', this.state);
    return (
      <div>
        <Link to='/' className='link-home'>
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <FormLabel>Title: </FormLabel>
            <FormControl onChange={event => this.handleChange(event)} />
          </FormGroup>
          {this.state.cards.map((card, index) => {
            return (
              <div key={index}>
                <br />
                <FormGroup>
                  <FormLabel>Prompt:</FormLabel>{' '}
                  <FormControl onChange={e => this.addCardSection(e, index, 'prompt')} />{' '}
                  <FormLabel>Answer:</FormLabel>{' '}
                  <FormControl onChange={e => this.addCardSection(e, index, 'answer')} />
                </FormGroup>
              </div>
            );
          })}
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>{' '}
        <Button onClick={() => {}}>Save Cards</Button>
      </div>
    );
  }
}
