class App extends React.Component {
    render() {
        return (
            <div>
                <Slot choices={[1, 2, 3]} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));