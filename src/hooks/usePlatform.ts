import React from "react";
import usePlatforms from "./usePlatforms";
import { GameQuery } from "../App";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
