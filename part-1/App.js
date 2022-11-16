const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name={"Nick"} />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
let element = <App />
root.render(element);