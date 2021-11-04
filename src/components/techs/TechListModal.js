import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechs } from "../../actions/techAction";
import TechItem from "./TechItem";

const TechListModal = () => {
  const techs = useSelector((state) => state.tech.techs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {techs !== null &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
