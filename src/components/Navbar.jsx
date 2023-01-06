import { useState } from "react";

import {close, logo, menu } from "../assets";
// import { navlinks } from "../constants"



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div>Navbar</div>
  )
}

export default Navbar