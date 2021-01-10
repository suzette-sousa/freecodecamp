# Send Action Data to the Store
FreecodeCamp - Front End Libraries Certification - Redux: Send Action Data to the Store


---


### What is asked

There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.

Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.

The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store state.


#### Script to complete

```javascript  
  
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
  

```

---


### What I answered

```javascript  
  
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
      break;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {type: ADD_NOTE, text: note}
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
  

```

---


### Tests passed

✓ The action creator addNoteText should return an object with keys type and text.

✓ Dispatching an action of type ADD_NOTE with the addNoteText action creator should update the state to the string passed to the action creator.

