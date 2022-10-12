import React, { useState } from 'react';
import './App.css';

const dxlx = (x: string): JSX.Element => {
    let y = parseFloat(x);
    return (<span>{y.toExponential(3)}, or 10<sup>{Math.log10(y).toFixed(2)}</sup></span>);
}

const joplin_dxlx = (x: string): JSX.Element => {
    let y = parseFloat(x);
    return (<span className="joplin">{y.toExponential(3)}, or 10&lt;sup&gt;&lt;b&gt;{Math.log10(y).toFixed(2)}&lt;/b&gt;&lt;/sup&gt;</span>);
}

const App: React.FC = () => {
    const [x, setX] = useState("0.0");
    return (
        <div>
            <div>Input value: <input id="x" type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => setX(e.currentTarget.value) }></input></div>
            <div>Display value: {dxlx(x)}</div>
            <div>Joplin: {joplin_dxlx(x)}</div>
        </div>
    )
}

export default App