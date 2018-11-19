import React, { Component } from "react";

class App1 extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);

    const result = data.map((val, index) => {
      return <li key={index}>{val}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default App1;
