# Getting Started with React Redux
FreecodeCamp - Front End Libraries Certification - React and Redux: Getting Started with React Redux


---


### What is asked

Start with a DisplayMessages component. Add a constructor to this component and initialize it with a state that has two properties: input, that's set to an empty string, and messages, that's set to an empty array.


#### Script to complete

```javascript  
  
class DisplayMessages extends React.Component {
  // Change code below this line


  // Change code above this line
  render() {
    return <div />
  }
};
  

```

---


### What I answered

```javascript  
  
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }

  // Change code above this line
  render() {
    return <div />
  }
};


```

---


### Tests passed

✓ The DisplayMessages component should render an empty div element.

✓ The DisplayMessages constructor should be called properly with super, passing in props.

✓ The DisplayMessages component should have an initial state equal to {input: "", messages: []}.
