# Remove an Item from an Array
FreecodeCamp - Front End Libraries Certification - Redux: Remove an Item from an Array


---


### What is asked

The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.


#### Script to complete

```javascript  
  
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
  

```

---


### What I answered

```javascript  
  
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1,state.length)];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
  

```

---


### Tests passed

✓ The Redux store should exist and initialize with a state equal to [0,1,2,3,4,5]

✓ removeItem and immutableReducer both should be functions.

✓ Dispatching the removeItem action creator should remove items from the state and should NOT mutate state.
