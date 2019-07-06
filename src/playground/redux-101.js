import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

// Actions
// I'd like to increment the count
// I'd I like to reset the count to zero