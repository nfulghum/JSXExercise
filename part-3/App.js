const App = () => {
    return (
        <div>
            <Person
                name="Nick"
                age={30}
                hobbies={["running", "gaming", "coding"]}
            />
            <Person
                name="Misha"
                age={3}
                hobbies={["running", "sleeping", "jumping"]}
            />
            <Person
                name="Rex"
                age={1}
                hobbies={["sleeping", "napping", "relaxing"]}
            />
        </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let element = <App />
root.render(element);