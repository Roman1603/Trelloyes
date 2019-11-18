import React from 'react';
import './Card.css';
import ErroBoundary from './ErrorBoundary';

export default function Card(props) {
  console.log('props from card', props);
  return (
    <div className='Card'>
      <button
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}