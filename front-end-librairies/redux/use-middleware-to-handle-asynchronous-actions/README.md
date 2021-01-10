# Use Middleware to Handle Asynchronous Actions
FreecodeCamp - Front End Libraries Certification - Redux: Use Middleware to Handle Asynchronous Actions


---


### What is asked

Write both dispatches in the handleAsync() action creator. Dispatch requestingData() before the setTimeout() (the simulated API call). Then, after you receive the (pretend) data, dispatch the receivedData() action, passing in this data. Now you know how to handle asynchronous actions in Redux. Everything else continues to behave as before.


#### Script to complete

```javascript  
  
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
  

```

---


### What I answered

```javascript  
  
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    store.dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      store.dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
  

```

---


### Tests passed

✓ The requestingData action creator should return an object of type equal to the value of REQUESTING_DATA.

✓ The receivedData action creator should return an object of type equal to the value of RECEIVED_DATA.

✓ asyncDataReducer should be a function.

✓ Dispatching the requestingData action creator should update the store state property of fetching to true.

✓ Dispatching handleAsync should dispatch the data request action and then dispatch the received data action after a delay.

