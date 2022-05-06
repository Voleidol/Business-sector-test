import React from "react"
import style from './Search.module.css';
import magnifier from "../../assets/images/magnifier.svg"

const Search = (props) => {
    return(
        <div className={style.head}>
            <div className={style.search}>
                <input className={style.searchField} type="search" placeholder="Поиск"></input>
                <img className={style.searchIcon} src={magnifier} alt=""></img>
            </div>
        </div>
        
    )
}

export default Search