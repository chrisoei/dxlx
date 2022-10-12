import React, { useState } from 'react';
import './App.css';

const dxlx = (x: string): JSX.Element => {
    let y = parseFloat(x);
    let j1 = document.getElementById("j1");
    if (j1) {
        j1.style.backgroundColor = "black";
    }
    return (<span>{y.toExponential(3)}, or 10<sup>{Math.log10(y).toFixed(2)}</sup></span>);
}

const joplin_clipboard = (y: number): void => {
    let s = y.toExponential(3) + ", or 10<sup><b>" + Math.log10(y).toFixed(2) + "</b></sup>"
    navigator.clipboard.writeText(s);
    let j1 = document.getElementById("j1");
    if (j1) {
        j1.style.backgroundColor = "green";
    }
}

const joplin_dxlx = (x: string): JSX.Element => {
    let y = parseFloat(x);
    return (<span id="j1" onClick={() => joplin_clipboard(y)}>{y.toExponential(3)}, or 10&lt;sup&gt;&lt;b&gt;{Math.log10(y).toFixed(2)}&lt;/b&gt;&lt;/sup&gt;</span>);
}

const App: React.FC = () => {
    const [x, setX] = useState("1.0");
    return (
        <div className="main">
            <div className="input">Input value: <input id="x" type="text" value="1.0" onChange={(e: React.FormEvent<HTMLInputElement>) => setX(e.currentTarget.value) }></input></div>
            <div className="display">Display value: {dxlx(x)}</div>
            <div className="joplin">Joplin: {joplin_dxlx(x)}</div>
        </div>
    )
}

export default App