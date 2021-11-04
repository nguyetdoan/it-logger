import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CURRENT, GET_TECHS } from "../../types";
import { updateLog } from "../../actions/logAction";
import { getTechs } from "../../actions/techAction";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const current = useSelector((state) => state.log.current);
  const techs = useSelector((state) => state.tech.techs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current != null) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.attention);
    }
  }, [current]);

  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      dispatch(
        updateLog({
          message,
          attention,
          tech,
          date: new Date().toISOString(),
          id: current.id,
        })
      );
      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
      dispatch({ type: CLEAR_CURRENT });
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="brower-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>

              {techs &&
                techs.map((tech) => (
                  <option value={tech.firstName + tech.lastName}>
                    {tech.firstName + tech.lastName}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EditLogModal;
