import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Card from './Card';
import List from './List';
import ErrorBoundary from './ErrorBoundary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const cards = [];
  ReactDOM.render(<List cards={cards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const cards = [
    { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
  ]
  const header = 'First list'
  const tree = renderer.create(<List cards={cards} header={header} />).toJSON()
  expect(tree).toMatchSnapshot();
})

it('rendere the UI as expected', () => {
  const tree = renderer.create(<Card />).toJSON()
  expect(tree).toMatchSnapshot();
})

