const Tweet = (props) => {
    return (
        <ul className="tweet">
            <li>Username: {props.username}</li>
            <li>Name: {props.name}</li>
            <li>Date: {props.date}</li>
            <li>Message: {props.message}</li>
        </ul>
    )
}