import React from 'react';
import ReactDOM from 'react-dom';

class hello extends React.Component {

    render() {
        const pop = 'Hello';

        return (
            <div>
                {[pop]}
            </div>
        );
    }
    
}

ReactDOM.render (
     <hello />, 
    document.getElementById('root')
);

export default hello;