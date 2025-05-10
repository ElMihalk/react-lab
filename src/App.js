import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl')
    const [emailStyleMessage, setEmailStyleMessage] = useState()

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

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <p>{emailStyleMessage}</p>
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
