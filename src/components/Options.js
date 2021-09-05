import React, {useState} from 'react'

function toggle(checked) {
    return !checked;
}

function renderAbstractionBounds(abstractionActive) {
    if (!abstractionActive) {
        return
    } else {
        return (
            <div className="three wide column">
                <div className="ui right corner labeled input">
                    <input type="text" placeholder="Lower window"/>
                    <div className="ui right corner label">
                        <i className="angle down icon"></i>
                    </div>
                </div>
                <div className="ui right corner labeled input">
                    <input type="text" placeholder="Upper window"/>
                    <div className="ui right corner label">
                        <i className="angle up icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default () => {
    const [abstractionActive, setAbstractionActive] = useState(false);


    return (
        <div className="ui form">
            <h2 className="ui header">
                <i className="settings icon"></i>
                <div className="content">
                    Options:
                </div>
            </h2>
            <div className="grouped fields">
                Enable additional options below:
                <div className="ui grid">
                    <div className="two wide column">
                        <div className="field">
                            <div className="ui toggle checkbox">
                                <input
                                    type="checkbox"
                                    tabIndex="0"
                                    onChange={() => setAbstractionActive(toggle)}
                                />
                                <label>Abstraction</label>
                            </div>
                        </div>
                    </div>
                    {renderAbstractionBounds(abstractionActive)}

                </div>
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input type="checkbox" tabIndex="1"/>
                        <label>Parallel</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input type="checkbox" tabIndex="2"/>
                        <label>Analysis</label>
                    </div>
                </div>

            </div>
        </div>
    );
}