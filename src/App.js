import './App.css';
import {useState} from "react";
import "milligram"
import {LoginForm} from "./LoginForm";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    function login(email) {
        if (/^[a-z0-9]{1,}@[a-z0-9]{1,}\.[a-z]{1,}/.test(email)){
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    function logoutButton(event) {
        setLoggedIn(false);
    }

    if (loggedIn) {
        return(
            <div>
            <h1>Witaj w systemia do zapisów na zajęcia</h1>
            <h2>Witaj</h2>
            <button onClick={logoutButton}>Wyloguj</button>
        </div>)
    } else {
        return(
        <div>
            <h1>Witaj w systemia do zapisów na zajęcia</h1>
            <LoginForm onLogin={login}/>
        </div>)
    }
}

export default App;
