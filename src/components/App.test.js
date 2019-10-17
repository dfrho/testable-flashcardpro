import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    let app = shallow(<App />)

    it('renders the h2 title', () => {
        expect(app.find('h2').text()).toEqual('FlashCard Pro');
    });

    it('renders the Stacklist', () => {
        expect(app.find('Connect(Stacklist)').exists()).toBe(true);
    });

    it('renders a Link to create new stcks', () => {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack');
    });
});
