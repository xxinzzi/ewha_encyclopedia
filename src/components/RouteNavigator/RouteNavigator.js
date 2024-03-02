import PropTypes from "prop-types";

function RouteNavigator({ departure, destination, route, img }) {
  return (
    <div>
      <div class="button-form">
        <button class="recommand">추천경로</button>
        <button class="least">최소보도</button>
      </div>
      <div>
        <p class="route-explain">{route}</p>
        <img src={img} />
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
