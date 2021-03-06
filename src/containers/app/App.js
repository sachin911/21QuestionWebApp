import React, { Component, PropTypes } from 'react';
import '../../styles/style.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
