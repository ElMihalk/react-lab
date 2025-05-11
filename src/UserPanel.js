import NewMeetingForm from "./meetings/NewMeetingForm";
import MeetingsList from "./meetings/MeetingsList";
import MeetingsPage from "./meetings/MeetingPage";

export function UserPanel(props) {
    return (
        <div>
            <h2>Witaj {props.username}!</h2>
            <button onClick={() => props.logout()}>Wyloguj</button>
            <MeetingsPage/>
        </div>
    )
}