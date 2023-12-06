import React, { Suspense } from "react";
import Loader from "./Loader";

export const Supensing = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
