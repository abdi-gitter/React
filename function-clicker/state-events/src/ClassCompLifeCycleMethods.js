import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
// Component didMount is called after the component is rendered. 
// It is called only once in the lifecycle of a component.

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }
// shouldComponentUpdate is called before the component is updated.
// It is used to determine if the component should be updated or not.

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
// getSnapshotBeforeUpdate is called before the component is updated.
// It is used to capture some information from the DOM before the update.

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }
// componentDidUpdate is called after the component is updated.
// It is used to perform any side effect after the component is updated.

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
// componentWillUnmount is called before the component is removed from the DOM.
// It is used to perform any cleanup in the component such as invalidating timers, canceling network requests, or cleaning up subscriptions.

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('Render');
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;