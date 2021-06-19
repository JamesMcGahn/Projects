class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Ringo" from="Paul" num={3} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));