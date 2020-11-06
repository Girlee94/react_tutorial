import React from 'react';


class tick extends React.Component {


    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
            
        );
    }
    
}


export default tick;