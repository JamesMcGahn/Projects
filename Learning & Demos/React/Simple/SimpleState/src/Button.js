import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={() => alert('clicked')}>
                Click Me
            </button>
        );
    }
}

export default Button;