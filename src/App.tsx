import React, { useState } from 'react';
import './App.css';

const dxlx = (x: string): JSX.Element => {
    let y = parseFloat(x);
    return (<span>{y.toExponential(3)}, or 10<sup>{Math.log10(y).toFixed(2)}</sup></span>);
}

const joplin_dxlx = (x: string): JSX.Element => {
    let y = parseFloat(x);
    return (<span>{y.toExponential(3)}, or 10&lt;sup&gt;&lt;b&gt;{Math.log10(y).toFixed(2)}&lt;/b&gt;&lt;/sup&gt;</span>);
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