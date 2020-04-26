import React, { Component } from 'react';

//これもjsxかstcomで書き換える
const style = {
    border: '1px solid gray',
    backgroundColor: 'white',
};

const imgPath = "https://firebasestorage.googleapis.com/v0/b/release-react.appspot.com/o/original.png?alt=media&token=426e5790-cd4d-479f-83a2-f610b7f938cd";

class CanvasOrigin extends Component {
    constructor() {
        super();
        this.state = { test: false };
    }

    componentDidMount = () => {
        const canvas = document.getElementById("origin");
        const getContext = () => {
            return canvas.getContext("2d");
        };

        const generator = () => {
            const ctx = getContext();
            const image = new Image();
            image.src = imgPath;
            image.crossOrigin = 'anonymous';
            image.onload = () => {
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                // ctx.drawImage(image, 0, 0, image.width, image.height);
            };
            console.log(22)
        }
        generator();
    }




    render() {

        return (
            <>
                <canvas
                    id="origin"
                    width="1200px"
                    height="630px"
                    style={style}
                />
            </>
        );
    }
}
export default CanvasOrigin;

