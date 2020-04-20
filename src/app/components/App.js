//必須
import React, { Component } from 'react';

//Appクラス = Appコンポーネント(カスタムタグ)
class App extends Component {

  render() {
    return (
      //returnの中にJSXを記載
      <div className="container">
        <h2>appコンポはindex.js=/等の読み込み専門</h2>
        <style jsx>{`
        .container {
          margin: 50px;
        }
        h2 {
          color: salmon;
        }
      `}</style>
      </div>
    );
  }
}

//他の場所で読み込んで使えるようにexport
export default App;
