import React, { Component } from 'react';

//これもjsxかstcomで書き換える
const style = {
    border: '1px solid gray',
    backgroundColor: 'white',
};

class CanvasFusion extends Component {
    constructor() {
        super();
        this.state = { test: false };
    }

    componentDidMount = () => {
        const canvas = document.getElementById("fusion");
        canvas.getContext("2d");
    }

    render() {

        return (
            <>
                <canvas
                    id="fusion"
                    width="1200px"
                    height="630px"
                    style={style}
                />
            </>
        );
    }
}
export default CanvasFusion;

