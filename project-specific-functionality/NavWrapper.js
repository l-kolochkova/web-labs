import React from "react";
import Navigation from "./Navigation";
import { useLocation, useParams } from "react-router-dom";

export default function NavWrapper() {
  const location = useLocation();

  return <Navigation key={location.pathname} />;
}