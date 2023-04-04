import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeActions";

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
