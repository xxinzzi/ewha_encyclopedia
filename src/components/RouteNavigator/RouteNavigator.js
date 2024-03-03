import PropTypes from "prop-types";
import styles from "./RouteNavigator.module.css";

function RouteNavigator({ departure, destination, route, img }) {
  return (
    <div>
      <div class="button-form">
        <button className={styles.button}>추천경로</button>
        <button className={styles.button}>최소보도</button>
      </div>
      <div>
        <p class="route-explain">{route}</p>
      </div>
    </div>
  );
}

/*
Route.propTypes = {
  departure: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  //img: PropTypes.,
};
*/
export default RouteNavigator;
