import './App.css';
import {useState} from "react";
import "milligram"

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [emailStyleMessage, setEmailStyleMessage] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [wrongAddress, setWrongAddress] = useState(false);

    function handleChange(event) {
        if (email.length < 10){
            setEmailStyleMessage("Ale masz krótki adres");
        } else if (email.length >= 10 & event.target.value.length < 20){
            setEmailStyleMessage("Twój adres e-mail jest w sam raz!");
        } else {
            setEmailStyleMessage("Twój adres e-mail stanowczo za długi!");
        }
        setEmail(event.target.value);
    }

    function alertButton(event) {
        alert(email);
    }

    function loginButton(event) {
        event.preventDefault();
        if (/^[a-z0-9]{1,}@[a-z0-9]{1,}\.[a-z]{1,}/.test(email)){
            setWrongAddress(false);
            setLoggedIn(true);
        } else {
            setWrongAddress(true)
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
            <h2>Witaj {email}</h2>
            <button onClick={logoutButton}>Wyloguj</button>
        </div>)
    } else {
        return(
        <div>
            <h1>Witaj w systemia do zapisów na zajęcia</h1>
            { wrongAddress ? <p className="wrongMailstatus">Niewłaściwy adres email</p> : ""}
            <form onSubmit={loginButton}>
                <label>Zaloguj się e-mailem</label>
                <input type="text" id="email" value={email} onChange={handleChange}/>
                <button type={"submit"}>Wchodzę</button>
            </form>
        </div>)
    }
}

export default App;
