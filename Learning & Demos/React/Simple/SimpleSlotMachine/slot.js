class Slot extends React.Component {
    render() {
        const choice1 = this.props.choices[Math.floor(Math.random() * 3)];
        const choice2 = this.props.choices[Math.floor(Math.random() * 3)];
        const choice3 = this.props.choices[Math.floor(Math.random() * 3)];
        return (
            <div>
                <p>{choice1} {choice2} {choice3}</p>
                <p>{choice1 === choice2 && choice2 === choice3 ? "Congrats You Win" : "Sorry, You Lose"}</p>
            </div>
        )
    }
}