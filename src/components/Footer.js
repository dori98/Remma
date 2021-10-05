import * as React from "react"
import * as style from "../css/style.module.css";
import a from "../images/slideshow/1.jpg";
import facebook from "../images/logo,icon/facebook.png";
import instagram from "../images/logo,icon/insta.png";

const Footer = () => {
    return (
        <footer className={style.footerPage}>
                <div className={style.footerIconWrapper}>
                    <a href={"https://www.facebook.com/remmasbistro"} target={"_blank"} rel={"noreferrer"} className={style.col1}><img src={facebook}  alt={"icon"} className={style.contactIcon}/></a>
                    <a href={"https://www.instagram.com/remmasbistro/?hl=hu"} target={"_blank"} rel={"noreferrer"} className={style.col1}><img src={instagram} alt={"icon"} className={style.contactIcon}/></a>
                </div>
            <h2 className={`${style.col8 } ${style.footerCopyR} ${style.footerOpen}`}>Nyitvatartás: Hétfő-Péntek 11:30-22:00</h2>

            <p className={`${style.col8 } ${style.footerCopyR}`}> Copyright 2021 © Remma's Bistro</p>
        </footer>
    )
}
export default Footer
