import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
//あとは、このチャートを値に応じて変更(スコアもstate管理)、そしてcanvasで合成して画像へ
//まずは、この環境でcanvas要素を使えるようにするところから。。/一旦試す

//--------------------data config-------------------------
const data = {
    labels: ['Eye', 'Hand', 'Head', 'Mouth', 'Leg', 'Heart'],
    datasets: [
        {
            label: 'My Second dataset',
            borderWidth: 5,
            pointRadius: 0,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27]
        }
    ]
};

const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scale: {
        gridLines: {
            color: ['#f5eec1']
        },
        pointLabels: {
            fontSize: 16
        },
        ticks: {
            beginAtZero: true,
            stepSize: 20,
            max: 100,
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


class RadarExample extends Component {
    render() {

        return (<div>
            <h2>Radar Example</h2>
            <Radar data={data} options={options} />
        </div>)
    }
}

export default RadarExample;
