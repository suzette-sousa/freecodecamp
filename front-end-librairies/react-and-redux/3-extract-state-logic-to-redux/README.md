# Use the Spread Operator on Arrays
FreecodeCamp - Front End Libraries Certification - React and Redux: Extract State Logic to Redux


---


### What is asked

First, define an action type 'ADD' and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.


#### Script to complete

```javascript  
  
// Define ADD, addMessage(), messageReducer(), and store here:

  

```

---


### What I answered

```javascript  
  
// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.message];
      break;
    default:
      return state;
  }
};

const addMessage = (message) => {
  return {type: ADD, message: message}
};

const store = Redux.createStore(messageReducer);

  

```

---


### Tests passed

✓ The const ADD should exist and hold a value equal to the string ADD

✓ The action creator addMessage should return an object with type equal to ADD and message equal to the message that is passed in.

✓ messageReducer should be a function.

✓ The store should exist and have an initial state set to an empty array.

✓ Dispatching addMessage against the store should immutably add a new message to the array of messages held in state.

✓ The messageReducer should return the current state if called with any other actions.