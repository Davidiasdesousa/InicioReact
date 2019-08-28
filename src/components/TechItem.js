import React from "react";
import PropTypes from "prop-types";
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        X
      </button>
    </li>
  );
}
TechItem.defaulProps = {
  tech: "oculto"
};
TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
export default TechItem;
