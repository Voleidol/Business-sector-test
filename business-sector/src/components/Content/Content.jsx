import React from "react"
import style from './Content.module.css';

const Content = (props) => {
    return (
        <div className={style.cont}>
                <div className={style.flexRow}>
                    <div className={style.number}>1</div>

                    <div className={style.heading}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem voluptates, commodi
                        quis accusamus dolor magnam minus, reprehenderit excepturi dolorum unde cumque dolores
                        aspernatur! Alias odit dignissimos expedita iusto fugit.
                    </div>

                    <div className={style.description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequatur animi, distinctio
                        asperiores aspernatur deserunt reprehenderit natus nisi eum expedita! Voluptas quis similique
                        corrupti minima amet perspiciatis? Repellat, voluptate sunt!
                    </div>
                    
                </div>
        </div>
    )
}

export default Content