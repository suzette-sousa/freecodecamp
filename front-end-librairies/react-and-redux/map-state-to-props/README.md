# Map State to Props
FreecodeCamp - Front End Libraries Certification - React and Redux: Map State to Props


---


### What is asked

Create a function mapStateToProps(). This function should take state as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via props. Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component. Create a property messages in the object that's being returned, and set it to state.


#### Script to complete

```javascript  
  
const state = [];

// Change code below this line

  

```

---


### What I answered

```javascript  
  
const state = [];

// Change code below this line
const mapStateToProps = (state) => {
    let obj = {
        messages: state
    }
    return obj;
}

  

```

---


### Tests passed

✓ The const state should be an empty array.

✓ mapStateToProps should be a function.

✓ mapStateToProps should return an object.

✓ Passing an array as state to mapStateToProps should return this array assigned to a key of messages.