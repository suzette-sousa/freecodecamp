# Write a Counter with Redux
FreecodeCamp - Front End Libraries Certification - Redux: Write a Counter with Redux


---


### What is asked

In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!


#### Script to complete

```javascript  
  
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
  

```

---


### What I answered

```javascript  
  
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state += 1;
    case DECREMENT:
      return state -= 1;
    default:
      return state;
  }
};

const incAction = () => {
    return {type: INCREMENT}
};

const decAction = () => {
    return {type: DECREMENT}
};

const store = Redux.createStore(counterReducer);
  

```

---


### Tests passed

✓ The action creator incAction should return an action object with type equal to the value of INCREMENT

✓ The action creator decAction should return an action object with type equal to the value of DECREMENT

✓ The Redux store should initialize with a state of 0.

✓ Dispatching incAction on the Redux store should increment the state by 1.

✓ Dispatching decAction on the Redux store should decrement the state by 1.

✓ counterReducer should be a function
