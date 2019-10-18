import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';
import { stack } from '../data/fixtures';

const props = { stack };

describe('StackForm component', () => {
    let stackForm = shallow(<StackForm {...props}/>)
    it('renders the h4 form title', () => {
        expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it('renders the h4 Home link', () => {
        expect(stackForm.find('Link h4').at(0).text()).toEqual('Home');
    });


    it('renders a Form to create new stacks', () => {
        expect(stackForm.find('Form').exists()).toBe(true);
    });

    it('renders a button to add a new card', () => {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card')
    });

    it('renders a button to submit a new stack', () => {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Save Stack')
    });


});
