import React, { Component } from 'react';
import H1 from '../components/commonParts/title';
import Graph from '../components/indexParts/Graph';

import Link from 'next/link'


class App extends Component {

  render() {
    return (
      //returnの中にJSXを記載
      <div className="container">
        <H1 />
        <Graph />
        <style jsx>{`
        .container {
          margin: 50px;
        }
      `}</style>
      </div>
    );
  }
}

export default App;
