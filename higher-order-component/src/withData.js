import React from "react";

function withData(Comp, url) {
  return class EnhancedComponent extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
    }
    render() {
      return <Comp data={this.state.data}></Comp>;
    }
  };
}

export default withData;
