import React from 'react';
import { shallow, simulate } from 'enzyme';
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

    describe('and updating the title', () => {
        const CHANGED_TITLE = 'Changed Title';

        beforeEach(()=> {
            stackForm.find('FormControl').simulate('change', {target: {
                value: CHANGED_TITLE
            }})
        })

        it('updates the title in state', () => {
            expect(stackForm.state().title).toEqual(CHANGED_TITLE )
        })

        afterEach(()=> {
            stackForm.setState({cards: []})
        })
    })

    describe('when adding a new card', () => {
        beforeEach(()=> {
            stackForm.find('Button').at(0).simulate('click')
        })

        it('adds a new card to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1)
        })

        it('renders the prompt call to action', () => {
            expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:');
        })

        it('renders the prompt call to action', () => {
            expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:');
        })

    })

    describe('and updating the card prompt', () => {
        const CHANGED_PROMPT = 'Changed Prompt';

        beforeEach(()=> {
            stackForm.find('FormControl').at(1).simulate('change', {target: { value: CHANGED_PROMPT}})
        })

        it('updates the card prompt in the state', () => {
            expect(stackForm.state().cards[0].prompt).toEqual(CHANGED_PROMPT)
        })

    })


    describe('and updating the card prompt', () => {
        const CHANGED_ANSWER = 'Changed Answer';

        beforeEach(()=> {
            stackForm.find('FormControl').at(2).simulate('change', {target: { value: CHANGED_ANSWER}})
        })

        it('updates the card prompt in the state', () => {
            expect(stackForm.state().cards[0].answer).toEqual(CHANGED_ANSWER)
        })

    })


});
