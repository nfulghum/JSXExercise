const App = () => {
    return (
        <div>
            <Tweet
                username="jackieboy"
                name="Jack"
                date={new Date().toDateString()}
                message="Im jack" />
            <Tweet
                username="BurgerKing"
                name="Ronald"
                date={new Date().toDateString()}
                message="Im the burger king" />
            <Tweet
                username="Saint Nick"
                name="Nick"
                date={new Date().toDateString()}
                message="Im Santa" />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
let element = <App />
root.render(element);