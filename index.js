import React from 'react';


const PureFunction = (functionComponent) => {
  return class NewComponent extends React.PureComponent {
    render() {
      return functionComponent(this.props);
    }
  }
};

export default PureFunction;
