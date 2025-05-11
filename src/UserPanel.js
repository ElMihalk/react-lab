export function UserPanel(props) {
    return (
        <div>
            <h2>Witaj {props.username}!</h2>
            <button onClick={() => props.logout()}>Wyloguj</button>
        </div>
    )
}