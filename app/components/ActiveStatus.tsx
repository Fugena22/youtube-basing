"use client";

import useActiveChannel from "../hooks/useActiveChannel";

interface ActiveStatusProps {}

const ActiveStatus = () => {
  useActiveChannel();
  return null;
};

export default ActiveStatus;
