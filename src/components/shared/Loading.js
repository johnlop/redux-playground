import React from "react";
import { useSelector } from "react-redux";

const Loading = ({ label }) => {
  const loading = useSelector(state => state.ui.loading);
  if (!loading) return null;
  return <h3>loading...</h3>;
};

export default Loading;
