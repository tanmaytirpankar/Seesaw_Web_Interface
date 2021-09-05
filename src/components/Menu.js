import React, {useState} from 'react';

export default ({ selected, onSelectedChange, options }) => {
    var converter = require('number-to-words');

    const renderedMenu = options.map((option) => {
        let activate = ""
        if(option.value === selected.value) {
            activate = "active"
        }

        return (
            <a
                key={option.value}
                className={activate+" item"}
                onClick={() => onSelectedChange(option)}
            >
                {option.value}
            </a>
        );
    });

    return (
        <div className={`ui ${converter.toWords(options.length)} item menu`}>
            {renderedMenu}
            {/*<a*/}
            {/*    className={`${selected==='About'? 'active' : ''} item`}*/}
            {/*>About</a>*/}
            {/*<a className={`${selected==='Try'? 'active' : ''} item`}>Try</a>*/}
            {/*<a className={`${selected==='Learn'? 'active' : ''} item`}>Learn</a>*/}
        </div>
    );
};