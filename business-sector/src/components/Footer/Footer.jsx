import React from "react";
import style from "./Footer.module.css";

const Navbar = (props) => {
  return (
    <div className={style.foot}>
      <div className={style.back}>Назад</div>
      <div className={style.pages}>
        <div className={style.pagesActive}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={style.next}>Далее</div>
    </div>
  );
};

export default Navbar;
