function getMood() {
    return 'happy';
}

function getNum() { return Math.floor(Math.random() * 10) + 1 }


class JSXDEMO extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>ham
                <h1>My Mood is: {getMood()} </h1>
                <img src="" />
                <p>Your num is {num} and it is {num === 7 ? 'Lucky' : 'Unlucky'} </p>
            </div>
        )
    }
}

ReactDOM.render(<JSXDEMO />, document.getElementById('root'));