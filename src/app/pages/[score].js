import React, { useEffect } from 'react';

import Helmet from '../components/commonParts/Helmet'
import firebase from '../../../firebase-config';

// const ref = firebase.storage().ref().child(`50.0.png`);
// const url = ref.getDownloadURL().then((url) => {
//     console.log(url)
//     return url
// });
//これで一応URLはとれる <- getinitialできん

function Result(props) {
    // let url;
    // useEffect(() => {
    //     console.log("rend");
    //     const ref = firebase.storage().ref().child(`50.0.png`);
    //     url = ref.getDownloadURL().then((url) => {
    //         console.log(url)
    //         return url
    //     });
    // });
    // console.log(url);

    return (
        <>
            <Helmet
                title={"デザイナーステータス" + props.score}
                description={"UIUXデザイナー"}
                keyword={"keywordです"}
                image={"https://firebasestorage.googleapis.com/v0/b/design-chart.appspot.com/o/test.png?alt=media&token=2484b7ba-e23c-4d38-9c9a-3da4e633b76d"}
                url={"https://next-functions-69f3c.firebaseapp.com/" + props.score}
            />
            <div>
                URLのPathからScoreの取得: {props.score}
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/design-chart.appspot.com/o/test.png?alt=media&token=2484b7ba-e23c-4d38-9c9a-3da4e633b76d" />
        </>
    )
}

Result.getInitialProps = async ({ query }) => {
    const { score } = query
    return { score }
}

export default Result




//------------

// class Result extends React.Component {
//     //非同期で静的な関数[getInitialProps] = ページロード時にデータ取得 : それをpropsに反映させる。
//     //getServerPropsじゃないとnext linkだとクライアントレンダリングになる。,<- version的に無理
//     static async getInitialProps({ query }) {
//         //プロパティ :query(URLのクエリ文字)
//         const { score } = query
//         return { score }
//     }
//     //ここはただのstate管理で関係ない。
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         score: props.score
//     //     }
//     // }

//     render() {
//         //これはgetInitialとかでもとばせそうだな。最初のページでfirestoreでgetしといて、、みたいな
//         const imgPath = "https://firebasestorage.googleapis.com/v0/b/release-react.appspot.com/o/original%20copy.png?alt=media&token=69ae2407-b019-455a-a197-73b4943bf4a1";
//         return (
//             <>
//                 <Helmet
//                     title={"デザイナーステータス" + this.props.score}
//                     description={"UIUXデザイナー"}
//                     keyword={"keywordです"}
//                     image={imgPath}
//                     url={"https://next-functions-69f3c.firebaseapp.com/" + this.props.score}
//                 />
//                 <div>
//                     URLのPathからScoreの取得: {this.props.score}
//                 </div>
//                 {/* <img src={imgPath} /> */}
//             </>
//         )
//     }
// }

// export default Result