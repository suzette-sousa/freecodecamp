# Use the Spread Operator on Arrays
FreecodeCamp - Front End Libraries Certification - Redux: Use the Spread Operator on Arrays


---


### What is asked

Use the spread operator to return a new copy of state when a to-do is added.


#### Script to complete

```javascript  
  
const INCREMENT = null; // Define a constant for increment action types
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
  

```

---


### What I answered

```javascript  
  
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
  

```

---


### Tests passed

✓ The Redux store should exist and initialize with a state equal to [Do not mutate state!].

✓ addToDo and immutableReducer both should be functions.

✓ Dispatching an action of type ADD_TO_DO on the Redux store should add a todo item and should NOT mutate state.

✓ The spread operator should be used to return new state.