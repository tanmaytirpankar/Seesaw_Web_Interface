import React, {useState} from 'react';
import './Try.css'
import Options from "./Options";

export default () => {
    const [input, setInput] = useState("");

    return (
        <div className="ui form">
            <div className="field">
                <h2 className="ui header">
                    <i className="keyboard icon"></i>
                    <div className="content">
                        Input:
                    </div>
                </h2>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <textarea
                            spellCheck="false"
                            placeholder="Seesaw program"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
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
                            <button className="ui button">Prev</button>
                            <div className="or"></div>
                            <button className="ui button">Next</button>
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