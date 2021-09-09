import React, {useState} from 'react';
import Menu from './components/Menu';
import Learn from './components/Learn';
import Try from './components/Try';
import './App.css'
import About from "./components/About";

const options = [
    {
        value: 'About',
    },
    {
        value: 'Try',
    },
    {
        value: 'Learn',
    },
];

function rendering( selected ) {
    switch (selected.value) {
        case 'About':
            return <About />
        case 'Try':
            return <Try />;
        case 'Learn':
            return <Learn />
        default:
            return <div>No view selected to render</div>
    }
};

const App = () => {
    const [selected, setSelected] = useState(options[1])

    return (
        <div className="page">
            <h1 className="ui center aligned icon header">
                <i className={`bug massive icon orange`} />
                <p className="title" >Seesaw</p>
            </h1>
            <Menu
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
            {rendering(selected)}
        </div>
    )
};

export default App;