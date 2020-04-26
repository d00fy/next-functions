import React, { useState, useContext, createContext, useCallback } from "react";
import ReactDOM from "react-dom";
import Slider from "../indexParts/Slider";
import Radar from "../commonParts/Radar";
import { GraphContext } from "../commonParts/store";
import styled from 'styled-components'

const RedLink = styled.a`
color: red;
`

import Link from 'next/link'
//状態管理用のContextを生成する。
//useStateに対して、Contextはどの子孫コンポーネントからもアクセスできる。

// const GraphContext = createContext();

export default function Graph() {
    const [eye, eyeCount] = useState(40);
    const [hand, handCount] = useState(40);
    const [head, headCount] = useState(60);
    const [mouse, mouseCount] = useState(60);
    const [leg, legCount] = useState(60);
    const [heart, heartCount] = useState(80);
    const [score, getScore] = useState(70);

    return (
        <>
            <div>Graph</div>
            {/* タイポグラフィの部分とid?をここで変更する */}
            <GraphContext.Provider
                value={{
                    eye, eyeCount,
                    hand, handCount,
                    head, headCount,
                    mouse, mouseCount,
                    leg, legCount,
                    heart, heartCount,
                    score, getScore
                }}
            >
                <Slider />
                <Radar />
                <Link href="/[score]" passHref>
                    <RedLink>passHref意味わからん/graphコンポに記述</RedLink>
                </Link>
            </GraphContext.Provider>
        </>
    )
}