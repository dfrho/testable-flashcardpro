import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { stack } from '../data/fixtures';

const { cards } = stack;
const card = cards[0];
const props = { card };

describe('Card component', () => {
    let card = shallow(<Card {...props} />)

    it('renders the h4 prompt', () => {
        expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt);
    });

    it('has the answer', () => {
        expect(card.find('.card-answer h4').text()).toEqual(props.card.answer);
    })

    it('initially hides the answer', () => {
        expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
    })

    it('renders the clickable prompt div', () => {
        expect(card.find('div').at(1).exists()).toBe(true);
    });

    describe('and on clicking the prompt', () => {
        beforeEach(()=> {
            card.find('div').at(1).simulate('click');
        })

        it('updates reveal to be true', () => {
            expect(card.state().showAnswer).toBe(true);
        })

        it('reveals the answer', () => {
            expect(card.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
        })

        afterEach(()=> {
            card.find('div').at(1).simulate('click');
        })
    })

});
