import React from "react";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={style.nav}>
      <div className={style.idElem}>
        ID <div className={style.span}>{">"}</div>
      </div>
      <div className={style.rightOne}>
        Заголовок <div className={style.span}>{">"}</div>
      </div>
      <div className={style.rightTwo}>
        Описание <div className={style.span}>{">"}</div>
      </div>
    </div>
  );
};

export default Navbar;
