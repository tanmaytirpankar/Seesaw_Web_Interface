import React from 'react'

function toggle(checked) {
    return !checked;
}

function renderAbstractionBounds(abstractionActive,
                                 onAbstractionLowerBoundChange,
                                 onAbstractionUpperBoundChange, ) {
    if (!abstractionActive) {
        return
    } else {
        return (
            <div className="three wide column">
                <div className="ui right corner labeled input">
                    <input
                        type="text"
                        placeholder="Lower window"
                        onChange={(e) => onAbstractionLowerBoundChange(e.target.value)}
                    />
                    <div className="ui right corner label">
                        <i className="angle down icon"></i>
                    </div>
                </div>
                <div className="ui right corner labeled input">
                    <input
                        type="text"
                        placeholder="Upper window"
                        onChange={(e) => onAbstractionUpperBoundChange(e.target.value)}
                    />
                    <div className="ui right corner label">
                        <i className="angle up icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const Options = ({ abstractionActive,
                     onAbstractionChange,
                     onAbstractionLowerBoundChange,
                     onAbstractionUpperBoundChange,
                     onParallelEnableChange,
                     onReportInstabilityChange,
                     onEnableConstraintsChange }) => {


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
                    <div className="three wide column">
                        <div className="field">
                            <div className="ui toggle checkbox">
                                <input
                                    type="checkbox"
                                    tabIndex="0"
                                    onChange={() => onAbstractionChange(toggle)}
                                />
                                <label>Abstraction</label>
                            </div>
                        </div>
                    </div>
                    {renderAbstractionBounds(
                        abstractionActive,
                        onAbstractionLowerBoundChange,
                        onAbstractionUpperBoundChange, )}

                </div>
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input
                            type="checkbox"
                            tabIndex="1"
                            onChange={() => onParallelEnableChange(toggle)}
                        />
                        <label>Parallel</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input
                            type="checkbox"
                            tabIndex="2"
                            onChange={() => onReportInstabilityChange(toggle)}
                        />
                        <label>Report Instability</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input
                            type="checkbox"
                            tabIndex="3"
                            onChange={() => onEnableConstraintsChange(toggle)}
                        />
                        <label>Enable Constraints</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;