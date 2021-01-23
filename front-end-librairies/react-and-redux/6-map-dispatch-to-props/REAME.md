# Map Dispatch to Props
FreecodeCamp - Front End Libraries Certification - React and Redux: Map Dispatch to Props


---


### What is asked

The code editor provides an action creator called addMessage(). Write the function mapDispatchToProps() that takes dispatch as an argument, then returns an object. The object should have a property submitNewMessage set to the dispatch function, which takes a parameter for the new message to add when it dispatches addMessage().


#### Script to complete

```javascript  
  
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
  

```

---


### What I answered

```javascript  
  
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  let newMsg = {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  };
  return newMsg;
}

  

```

---


### Tests passed

✓ addMessage should return an object with keys type and message.

✓ mapDispatchToProps should be a function.

✓ mapDispatchToProps should return an object.

✓ Dispatching addMessage with submitNewMessage from mapDispatchToProps should return a message to the dispatch function.