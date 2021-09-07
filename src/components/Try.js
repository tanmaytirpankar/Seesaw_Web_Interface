import React, {useState} from 'react';
import './Try.css'
import Options from './Options';
import { examples } from '../benchmarks/examples'

function onNextClicked(e, setCurrentIndex, currentIndex) {
    setCurrentIndex(Math.min(examples.length-1, currentIndex+1));
    e.target.value(examples[currentIndex].ex);
}

function onPrevClicked(e, setCurrentIndex, currentIndex) {
    setCurrentIndex(Math.max(0, currentIndex-1));
    e.target.value(examples[currentIndex].ex);
}

export default () => {
    const [input, setInput] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);
    return (
        <div className="ui form">
            <div className="field">
                <div className="ui grid">
                    <div className="eight wide column">
                        <h2 className="ui header">
                            <i className="keyboard icon"></i>
                            <div className="content">
                                Input:
                            </div>
                        </h2>
                        <textarea
                            spellCheck="false"
                            placeholder="Seesaw program"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <div className="eight wide column">
                        <h2 className="ui header">
                            <i className="clipboard outline icon"></i>
                            <div className="content">
                                Output:
                            </div>
                        </h2>
                        <textarea
                            spellCheck="false"
                            placeholder="Output"
                        >
                        </textarea>
                    </div>
                </div>
                <div className="ui three column grid">
                    <div className="column">
                        <button className="ui large button">Start</button>
                    </div>
                    <div className="center aligned column">
                        <div className="ui large buttons">
                            <button
                                className="ui button"
                                onClick={(e, setCurrentIndex, currentIndex)=>onPrevClicked()}
                            >
                                Prev
                            </button>
                            <div className="or"></div>
                            <button
                                className="ui button"
                                onClick={(e, setCurrentIndex, currentIndex)=>onNextClicked()}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="column">
                        <button className="ui large right floated button">Clear</button>
                    </div>
                </div>
            </div>
            <div className="field">
                <Options/>
            </div>
        </div>
    );
};