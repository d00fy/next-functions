//キャンバス周りの処理コンポーネント
//https://qiita.com/ebkn/items/af3b53f560eb023a200f
// import React, { Component } from "react";
// import React, { Component } from "react";

// //---------処理
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext("2D");

// const background = new Image();

// background.src = "../../../img/original.png";

// const canvas_width = 300;
// const canvas_hegiht = 400;

// background.onload = function () {
//     //canvas_widthを height / width倍する.
//     ctx.drawImage(background, 0, 0, canvas_width, background.height * canvas_width / background.width);
// }
// //-----------



import React, { Component } from 'react';

//これもjsxかstcomで書き換える
const style = {
    border: '1px solid gray',
    backgroundColor: 'white',
};

// const background = new Image();
// background.src = "../../../img/original.png";

// background.onload = function () {
//     //canvas_widthを height / width倍する.
//     ctx.drawImage(background, 0, 0, canvas_width, background.height * canvas_width / background.width);
// }

const imgPath = "https://firebasestorage.googleapis.com/v0/b/release-react.appspot.com/o/03_Ghibli_2880x1800_7.jpg?alt=media&token=1d240ee7-dc78-402f-8793-3c5f98c2ad3c";
class Canvas extends Component {
    constructor() {
        super();
        this.state = { test: false };
    }

    componentDidMount = () => {
        const canvas = document.getElementById("canvas");
        const getContext = () => {
            return canvas.getContext("2d");
        };

        const generator = () => {
            const ctx = getContext();
            const image = new Image();
            image.src = imgPath;

            image.onload = () => {
                // SVGデータをPNG形式に変換する
                // ctx.textBaseline = "hanging";
                ctx.drawImage(image, 0, 0, image.width, image.height);
                // ctx.font = "18px serif";
                // ctx.textAlign = "center";
                // ctx.fillText(this.props.name, 150, 32);

                // var canvas = document.getElementById("canvas");
                // var url = canvas.toDataURL();
                // this.props.val(url);
                // this.setState({ drawing: url });


                // const storage = firebase.storage();
                // url = url.substring(22);
                // // var a = Math.floor(Math.random() * 101);
                // const storageRef = storage.ref().child(`test/${10}`);
                // const handleTwitter = this.props.handleTwitter;
                // storageRef.putString(url, "base64").then(function (snapshot) {
                //     storageRef.getDownloadURL().then(function (url) {
                //         console.log(url);
                //         handleTwitter(url);
                //         console.log("ok");
                //     });
                // });
            };
            console.log(22)
        }
        generator();
    }




    render() {

        return (
            <>
                <canvas
                    id="canvas"
                    width="200px"
                    height="200px"
                    style={style}
                />
            </>
        );
    }
}
export default Canvas;

