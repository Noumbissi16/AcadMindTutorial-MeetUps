import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/AllMeetups"> All Meetups</Link>
          </li>
          <li>
            <Link to="/NewMeetup"> Add New Meetups</Link>
          </li>
          <li>
            <Link to="/Favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
