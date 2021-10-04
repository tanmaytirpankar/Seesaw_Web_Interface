import React, {useState} from 'react';
import axios from 'axios';
import './Try.css'
import Options from './Options';
import { examples } from '../benchmarks/examples'
const API_URL = 'https://satire.tanmaytirpankar.com'

const seesaw_api = axios.create({
    baseURL: API_URL,
})

function onNextClicked(e, setCurrentIndex, currentIndex, setInput) {
    setCurrentIndex(Math.min(examples.length-1, currentIndex+1));
    // console.log(currentIndex)
    setInput(examples[currentIndex].ex)
    // console.log("Clicked on Next")
}

function onPrevClicked(e, setCurrentIndex, currentIndex, setInput) {
    setCurrentIndex(Math.max(0, currentIndex-1));
    // console.log(currentIndex)
    setInput(examples[currentIndex].ex)
    // console.log("Clicked on Prev")
}

const onStartClicked = async (e,
                              input,
                              setOutput,
                              abstractionActive,
                              abstractionLowerBound,
                              abstractionUpperBound,
                              parallelEnabled,
                              reportInstability,
                              enableConstraints) => {
    const response = await seesaw_api.get('/seesaw', {
        params : {
            program: input,
            abstraction : abstractionActive,
            abstraction_lower_bound : abstractionLowerBound,
            abstraction_upper_bound : abstractionUpperBound,
            parallel : parallelEnabled,
            report_instability : reportInstability,
            enable_constraints : enableConstraints,
        },
    }, { timeout: 120000});

    // console.log(response);
    setOutput(response.data);
}

const Try = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [input, setInput] = useState(examples[currentIndex].ex);
    const [output, setOutput] = useState("");
    const [abstractionActive, setAbstractionActive] = useState(false);
    const [abstractionLowerBound, setAbstractionLowerBound] = useState(10);
    const [abstractionUpperBound, setAbstractionUpperBound] = useState(20);
    const [parallelEnabled, setParallelEnabled] = useState(false)
    const [reportInstability, setReportInstability] = useState(false);
    const [enableConstraints, setEnableConstraints] = useState(false);

    // console.log(abstractionActive);
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
                            value={output}
                            onChange={(e) => setOutput(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="ui three column grid">
                    <div className="column">
                        <button
                            className="ui large button"
                            onClick={(e) => onStartClicked(e,
                                input,
                                setOutput,
                                abstractionActive,
                                abstractionLowerBound,
                                abstractionUpperBound,
                                parallelEnabled,
                                reportInstability,
                                enableConstraints)}
                        >
                            Start
                        </button>
                    </div>
                    <div className="center aligned column">
                        <div className="ui large buttons">
                            <button
                                className="ui button"
                                onClick={(e)=>onPrevClicked(e, setCurrentIndex, currentIndex, setInput)}
                            >
                                Prev
                            </button>
                            <div className="or"></div>
                            <button
                                className="ui button"
                                onClick={(e)=>onNextClicked(e, setCurrentIndex, currentIndex, setInput)}
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
                <Options
                    abstractionActive={abstractionActive}
                    onAbstractionChange={setAbstractionActive}
                    onAbstractionLowerBoundChange={setAbstractionLowerBound}
                    onAbstractionUpperBoundChange={setAbstractionUpperBound}
                    onParallelEnableChange={setParallelEnabled}
                    onReportInstabilityChange={setReportInstability}
                    onEnableConstraintsChange={setEnableConstraints}
                />
            </div>
        </div>
    );
};

export default Try;