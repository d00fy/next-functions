//これいるかな?? npm で組み込んだらボーンなのかな?? //それともコピペ？？/ボーンだとfコンポなの?
import React, { useState, useContext, createContext, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { GraphContext } from "../commonParts/store";

//なんかこれが効かなくなった。 あとレンダリングのタイミングも。..._document.jsくさいな。。
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}


//関数コンポーネント！
export default function DiscreteSlider() {
    const classes = useStyles();
    const { eyeCount, handCount, headCount, mouseCount, legCount, heartCount } = useContext(GraphContext)

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                目 : 美しいものがわかる
            </Typography>
            <Slider
                defaultValue={4}
                getAriaValueText={value => {
                    eyeCount(value);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={10}
            />
            <Typography id="discrete-slider" gutterBottom>
                手 : 思い通りに表現できる
            </Typography>
            <Slider
                defaultValue={4}
                getAriaValueText={value => {
                    handCount(value);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={10}
            />
            <Typography id="discrete-slider" gutterBottom>
                頭 : 思い通りに表現できる
            </Typography>
            <Slider
                defaultValue={4}
                getAriaValueText={value => {
                    headCount(value);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={10}
            />
            <Typography id="discrete-slider" gutterBottom>
                口 : 考えを伝えられる
            </Typography>
            <Slider
                defaultValue={4}
                getAriaValueText={value => {
                    mouseCount(value);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={10}
            />
            <Typography id="discrete-slider" gutterBottom>
                足 : ものごとを実行できる
            </Typography>
            <Slider
                defaultValue={4}
                getAriaValueText={value => {
                    legCount(value);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={10}
            />
            <Typography id="discrete-slider" gutterBottom>
                心 : 人に共感ができる
            </Typography>
            <Slider
                defaultValue={4}
                getAriaValueText={value => {
                    heartCount(value);
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={0}
                max={10}
            />
        </div>
    );
}
