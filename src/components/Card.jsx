import PropTypes from "prop-types";
import "../styles/Card.scss";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
