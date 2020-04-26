import React from 'react';

class Result extends React.Component {
    //非同期で静的な関数[getInitialProps] = ページロード時にデータ取得 : それをpropsに反映させる。
    static async getInitialProps({ query }) {
        //プロパティ :query(URLのクエリ文字)
        const { score } = query
        return { score }
    }

    constructor(props) {
        super(props);
        this.state = {
            score: props.score
        }
    }

    render() {
        //これはgetInitialとかでもとばせそうだな。最初のページでfirestoreでgetしといて、、みたいな
        const imgPath = "https://firebasestorage.googleapis.com/v0/b/release-react.appspot.com/o/original%20copy.png?alt=media&token=69ae2407-b019-455a-a197-73b4943bf4a1";
        return (
            <>
                <div>
                    URLのPathからScoreの取得: {this.state.score}
                </div>
                {/* <img src={imgPath} /> */}
            </>
        )
    }
}

export default Result