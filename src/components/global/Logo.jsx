import React from "react";
import { JOREL0G0 } from "../../constants";

export default function Logo({ width, height }) {
  return (
    <div>
      <img src={JOREL0G0} alt="logo" className="h-13 w-13 md:h-25 md:w-25" />
    </div>
  );
}
