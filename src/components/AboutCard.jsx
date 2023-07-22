import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TruncarTexto = ({ text, maxLines }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ overflow: "hidden", WebkitLineClamp: isExpanded ? "unset" : maxLines, display: "-webkit-box", WebkitBoxOrient: "vertical" }}>
      <p>{text}</p>
      {!isExpanded && (
        <Button variant="link" onClick={toggleExpand}>
          Leer más
        </Button>
      )}
      {isExpanded && (
        <Button variant="link" onClick={toggleExpand}>
          Leer menos
        </Button>
      )}
    </div>
  );
};

export default TruncarTexto;