import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div>
                Seesaw similar to its predecessor Satire is a first order error analysis tool for obtaining rigorous
                bounds on worst case floating point round-off errors. But unlike Satire, Seesaw works on floating-point
                programs WITH conditions. Seesaw, attains scalability, bound tightness and provides analysis on control
                flow divergence through a combination of incremental analysis, abstraction, SMT solving, and judicious
                use of concrete and symbolic evaluation.

                Seesaw is a python based framework. Currently, Seesaw does not have empirical analysis support like
                Satire but it will be added soon.
            </div>
        </div>
    );
};

export default About;