import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from './Stack';
import { stack } from '../data/fixtures';

const props = { stack };

describe('Stack component', () => {
    let stack = shallow(<Stack {...props}/>)

    it('renders the h3 title', () => {
        expect(stack.find('h3').text()).toEqual('States');
    });

    it('renders a Link to create new stacks', () => {
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('renders the correct number of Cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    });


});
