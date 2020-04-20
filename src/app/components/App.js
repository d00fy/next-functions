//必須
import React, { Component } from 'react';

const style = {
  color: "red",
};

//Appクラス = Appコンポーネント(カスタムタグ)
class App extends Component {

  render() {
    return (
      //returnの中にJSXを記載
      <div>
        <h2 style={style}>appコンポはindex.js=/等の読み込み専門</h2>
      </div>
    );
  }
}

//他の場所で読み込んで使えるようにexport
export default App;
