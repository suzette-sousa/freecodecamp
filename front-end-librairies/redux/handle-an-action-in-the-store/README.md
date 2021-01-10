# Handle an Action in the Store
FreecodeCamp - Front End Libraries Certification - Redux: Handle an Action in the Store


---


### What is asked

The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.


#### Script to complete

```javascript  
  
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
  

```

---


### What I answered

```javascript  
  
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  let newState = {login: true}
  return action.type === 'LOGIN' ? newState : state;
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};  




```

---


### Tests passed

✓ Calling the function loginAction should return an object with type property set to the string LOGIN.

✓ The store should be initialized with an object with property login set to false.

✓ Dispatching loginAction should update the login property in the store state to true.

✓ If the action is not of type LOGIN, the store should return the current state.