import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

const props = { stacks };

describe('StackList component', () => {
    let stacklist = shallow(<StackList {...props}/>)

    it('renders the correct number of Stacks', () => {
        expect(stacklist.find('Link').length).toEqual(props.stacks.length);
    });
    it('renders the first h4 title', () => {
        expect(stacklist.find('h4').at(0).text()).toEqual('States');
    });
    it('renders the second h4 title', () => {
        expect(stacklist.find('h4').at(1).text()).toEqual('Actors');
    });




});
