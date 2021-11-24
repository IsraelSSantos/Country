import React from "react";
import {} from "../DarkModeFlag/darkModeFlag.scss";
import Lua from "../../assets/lua.png";
import Sol from "../../assets/sol.png";

export default function DarkModeFlag(props) {
  const isDark = props.isDark;
  if (isDark) {
    return (
      <>
        <img src={Lua} />
        <h3>Dark Mode</h3>
      </>
    );
  } else {
    return (
      <>
        <img src={Sol} />
        <h3>Light Mode</h3>
      </>
    );
  }
}
