import React, {useState} from 'react';
import Menu from './components/Menu';
import Options from './components/Options';
import Learn from './components/Learn';
import Try from './components/Try';
import './App.css'

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
            return <div>About</div>;
        case 'Try':
            return <Try />;
        case 'Learn':
            return <div>Learn</div>;
    }
};

export default () => {
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