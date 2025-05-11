import './App.css';
import {useState} from "react";
import "milligram"
import {LoginForm} from "./LoginForm";
import {UserPanel} from "./UserPanel";

function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    function login(email) {
        if (/^[a-z0-9]{1,}@[a-z0-9]{1,}\.[a-z]{1,}/.test(email)){
            setLoggedIn(email);
        } else {
            setLoggedIn(null);
        }
    }

    function logout(event) {
        setLoggedIn(false);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel username={loggedIn} logout={logout}/>
                    : <LoginForm login={login}/>
            }
        </div>
    );

}

export default App;
