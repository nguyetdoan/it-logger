import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTech } from "../../actions/techAction";

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTech(tech.id));
  };

  return (
    <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text" onClick={deleteHandler}>
          delete
        </i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
