import React, { useState } from "react";
import Queratocono from "./Queratocono";

function Controls() {
  const [showTitle, setShowTitle] = useState(false);

  const handleClick = () => {
    setShowTitle(true);
    setTimeout(() => {
      setShowTitle(false);
    }, 10000);
  };

  return <Queratocono showTitle={showTitle} onAnnoyingLightClick={handleClick} />;
}

export default Controls;



