//正直このApp.jsいらんけどね...index.jsで読んでるだけだから。
//必須
import React, { Component } from 'react';
import H1 from '../components/commonParts/title';
import Radar from '../components/commonParts/Radar';

//Appクラス = Appコンポーネント(カスタムタグ)
class App extends Component {

  render() {
    return (
      //returnの中にJSXを記載
      <div className="container">
        <H1 />
        <h2>appコンポネントはindex.js=/等の読み込み専門</h2>
        <Radar />
        <style jsx>{`
        .container {
          margin: 50px;
        }
      `}</style>
      </div>
    );
  }
}

//他の場所で読み込んで使えるようにexport
export default App;
