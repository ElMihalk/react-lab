import {useState} from "react";

export function LoginForm(props){
    const [email, setEmail] = useState('fracz@agh.edu.pl');


    function handleChange(event) {
        setEmail(event.target.value);
    }

    return(
        <form onSubmit={() => props.login(email)}>
            <label>Zaloguj się e-mailem</label>
            <input type="text" id="email" value={email} onChange={handleChange}/>
            <button type={"submit"}>Wchodzę</button>
        </form>
    )
}