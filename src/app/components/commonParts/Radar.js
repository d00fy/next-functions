// import React, { Component } from 'react';
import React, { Component, useEffect, useState, useContext, createContext, useCallback } from "react";
import { Radar } from 'react-chartjs-2';
//あとは、このチャートを値に応じて変更(スコアもstate管理)、そしてcanvasで合成して画像へ
//まずは、この環境でcanvas要素を使えるようにするところから。。/一旦試す
import CanvasOrigin from '../indexParts/CanvasOrigin';
import CanvasFusion from '../indexParts/CanvasFusion';
import { GraphContext } from '../commonParts/store';

import Link from 'next/link'


//--------------------data options-------------------------
const options = {
    // maintainAspectRatio: false,
    legend: {
        display: false
    },
    scale: {
        gridLines: {
            color: ['#f5eec1']
        },
        pointLabels: {
            //pc版(16)と帰る必要あり(iphone10標準)
            fontSize: 8
        },
        ticks: {
            beginAtZero: true,
            stepSize: 2,
            max: 10,
            display: false
        },
        gridLines: {         // 補助線（目盛の線）
            display: true,
            color: "#E6E6E7"
        }
    },
    plugins: {
        datalabels: {
            display: false
        }
    }

};
//--------------------data config-------------------------
//これもjsxかstcomで書き換える
const style = {
    border: '1px solid gray',
    backgroundColor: 'white',
};

export default function Chart() {
    const { eye, hand, head, mouse, leg, heart, score, getScore } = useContext(GraphContext);
    const labelValues = [eye, hand, head, mouse, leg, heart];
    const data = {
        labels: ['Eye', 'Hand', 'Head', 'Mouth', 'Leg', 'Heart'],
        datasets: [
            {
                label: 'My Second dataset',
                //pc版(5)と帰る必要あり(iphone10標準)
                borderWidth: 2,
                pointRadius: 0,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [eye, hand, head, mouse, leg, heart]
            }
        ]
    };
    //------Canvas合成
    //{string} base 合成結果を描画するcanvas(id)//{array} asset 合成する素材canvas(id)//@return {void}
    async function concatCanvas(base, asset) {
        const canvas = document.getElementById(base);
        const ctx = canvas.getContext("2d");
        ctx.font = "bold 36px Hiragino Kaku Gothic ProN";
        ctx.fillStyle = "#636363";

        const result = colscore(labelValues)
        ctx.fillText(result, 936, 82)

        let dx = -200
        for (let i = 0; i < asset.length; i++) {
            const image1 = await getImagefromCanvas(asset[i]);
            ctx.drawImage(image1, dx, 0, canvas.width, canvas.height);
            dx = dx + 200;
        }
    }

    //--------Canvasを画像として取得(合成結果を描画するfixcanvasに対して行う。)
    function getImagefromCanvas(id) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            const ctx = document.getElementById(id).getContext("2d");
            image.onload = () => resolve(image);
            image.onerror = (e) => reject(e);
            //ポイントはPromiseを利用することです。image.srcでcanvasのデータを画像として登録する際に非同期処理となるため、うまく後続処理が行われません
            image.src = ctx.canvas.toDataURL();
            // console.log(image.src)
        });
    }


    //-------項目の値
    function colscore(array) {
        let sum = array.reduce(function (accumulator, currentValue, ) {
            return accumulator + currentValue
        })
        sum = sum * 10 / 6
        const result = sum.toFixed(1);
        getScore(result);
        return result;
    }

    return (<div>
        <CanvasOrigin />
        <h2>{score}</h2>
        <Radar id="radar" data={data} options={options} />
        <CanvasFusion />
        <button onClick={() => { concatCanvas('fusion', ['radar', 'origin']) }}>
            Canvasの合成 / cloudStorageへ / ページ遷移。。(いけっか?)
            </button>
        <Link href="/[score]" as={`/${score}`}>
            <a onClick={() => { concatCanvas('fusion', ['radar', 'origin']) }}>診断する(Radarコンポに記述)</a>
        </Link>
    </div>);
}
