import React from 'react';


class tick extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
        };
    }

    componentDidMount() {
        this.tick();
    }

    count = () => {
        this.setState({
            time: this.state.time + 1,
        });
    }

    tick = () => {
        setInterval(this.count, 1000);
    }

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