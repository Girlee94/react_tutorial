import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <h1>
                {this.props.title}
            </h1>
        );
    }
}

class Sub extends React.Component {
    render() {
        return (
            <h2>
                {this.props.title}
            </h2>
        );
    }
}

class Full extends React.Component {
    render() {
        return (
            <div className = "Any">
                <div className="Title">
                    <Title title="Now trying"></Title>
                </div>
                <div className="sub">
                    <Sub title="Is it done?"></Sub>
                    <Sub title="WoW!"></Sub>
                </div>
            </div>
        );
    }
}

export default Full;