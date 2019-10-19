import React from 'react';
import StackList from './StackList';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>FlashCard Pro</h2>
      <hr />
      <StackList />
      <hr />
      <Link to='stack_form'>
        <h4>Create a New Stack</h4>
      </Link>
    </div>
  );
};

export default App;
