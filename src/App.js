import {  Outlet } from "react-router-dom";

//import AllMeetupsPage from "./pages/AllMeetups";
//import NewMeetupPage from "./pages/NewMeetup";
//import FavoritesPage from "./pages/Favorites";
//import MainNavigation from "./Components/layout/MainNavigation";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;

//<Link to="/AllMeetups"> AllMeetups</Link> |{" "}
//<Link to="/Favorites"> Favorites</Link> |{" "}
//<Link to="/NewMeetup"> NewMeetups</Link>
