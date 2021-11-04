import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteLog } from "../../actions/logAction";
import { SET_CURRENT } from "../../types";

const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteLog(log.id));
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => dispatch({ type: SET_CURRENT, payload: log })}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last update by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={handleDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
