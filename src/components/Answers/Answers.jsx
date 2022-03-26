import React from 'react';
import './Answers.css'

const Answers = () => {
   return (
      <div className='ans'>
         <h2>How React Works?</h2>
         <p>React is a library that allows JavaScript components to be written. It has an XML-like syntax known as JSX, and the markup of the components is a hybrid of HTML and XML. To manage changes, it employs a technique known as "Virtual DOM." A huge object having all the components presented on the page and their properties is referred to as a virtual DOM. React knows what to do when one of them changes. React registers a global event handler (on the HTML or Body element) for event handling, and it takes responsibility for propagating the relevant events and triggering the right handlers within components further down the chain whenever events occur through that listener. It's also worth noting that using ES6 and JSX isn't mandatory to use React. Because React is based on "JavaScript," we may get the same effect on the page by using standard JavaScript functions. Babel, an ES6 to ES5 transpiler, however, lets us to access JSX and ES6 capabilities, making React development easier, faster, and more intuitive.</p>
         <br />
         <h2>Props vs State</h2>
         <p>Props is a shorthand for "properties."
            The objects that are supplied into the component from the outside, usually from a parent component, are known as properties or props. Props can be thought of as function parameters to simplify things. A child will re-render whenever a component delivers new props to it unless the child prevents this using shouldComponentUpdate.
            State, on the other hand, represents the component's internal "state." Each instance of a component on the page is given its own state since it is given an instance of the component class. A pure functional component still gets an instance, but that instance is controlled fully by React, and hooks allow you to store and manage state on that instance.
            Props and state should both be regarded immutable, although their sources differ.</p>
            <br />
            <h2>How useState works in react?</h2>
            <p>The use state hook is a popular react hook that is used to save and update any variable value on a component level. The rationale for storing the variable value inside the state is so that we may access those values without having to do any DOM manipulations that React JS does not support. A state hook is intended for usage with functional components. When you create a React component, it establishes a context under the hood, and your component will always reflect and present whatever this context state is at any given time from the UI perspective. The useState hook literally "hooks" to this context, and the component will reload with the new state anytime you alter the state via the callback provided by the useState hook.</p>
      </div>
   );
};

export default Answers;