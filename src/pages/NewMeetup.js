//import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-crash-course-6625c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/AllMeetups');
    }

    );
  }
  return (
    <section>
      <h1> Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
