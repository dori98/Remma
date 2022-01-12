import React, {useState} from 'react'
import {AiOutlineMenu, FaTimes} from "react-icons/all";
import {Link} from "gatsby";

import * as style from "../css/style.module.css"

import logo from "../images/logo,icon/logo.png"

const Navbar = ({isIndex, lang, setLang}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    const toLink = () => {
        setIsOpen(false)
    }


    return (
        <nav>
            <div className={isIndex ? `${style.navbarWrapper} ${style.gridNavbar}` : `${style.navbarWrapperLunch} `}>
                <div
                    className={isIndex ? `${style.col2}  ` : ` ${style.navbarTitleWrapperLunch}`}>
                    <img src={logo} alt={"logo"} className={isIndex ? `${style.logo} ` : `${style.logoLunch}`}/>
                    <h1 className={isIndex ? `${style.navbarTitle} ` : `${style.navbarTitleLunch}`}>Remma's Bistro</h1>
                </div>
                <div
                    className={isIndex ? `${style.col10} ${style.navbarLinkWrapper} ${style.navbarLinkWrapperMargin}` : `${style.navbarLinkWrapper}`}>
                    <Link to={lang === "HU" ? '/' : '/en'}
                          className={` ${style.navbarLink}`}
                          activeClassName={style.active}>{lang === "HU" ? "Kezdőlap" : "Home"}
                    </Link>
                    <Link to={lang === "HU" ? '/menu' : '/en/menu'}
                          className={` ${style.navbarLink}`}
                          activeClassName={style.active}>{lang === "HU" ? "Étlap" : "Menu"}
                    </Link>
                    <Link to={lang === "HU" ? '/lunchmenu' : '/en/lunchmenu'}
                          className={` ${style.navbarLink}`}
                          activeClassName={style.active}>{lang === "HU" ? "Ebédmenü" : "Lunch Menu"}
                    </Link>
                    <Link to={lang === "HU" ? '/galery' : '/en/galery'}
                          className={` ${style.navbarLink}`}
                          activeClassName={style.active}>{lang === "HU" ? "Galéria" : "Galery"}
                    </Link>
                    <Link to={lang === "HU" ? '/contacts' : '/en/contacts'}
                          className={` ${style.navbarLink}`}
                          activeClassName={style.active}>{lang === "HU" ? "Kapcsolat" : "Contacts"}
                    </Link>
                    <button onClick={() => setLang()} disabled={lang === "HU"}
                            className={`${style.navbarLink} ${style.menuButton}`}>HU |
                    </button>
                    <button onClick={() => setLang()} disabled={lang === "EN"}
                            className={`${style.navbarLink} ${style.menuButton}`}>EN
                    </button>

                </div>
                <div className={isIndex ? `${style.navbarMenu} ${style.col10}` : ` ${style.navbarMenu} `}>
                    <button className={`${style.navbarMenuButton}`} onClick={() => toggleSidebar()}>
                        <AiOutlineMenu/>
                    </button>
                    <div
                        className={!isOpen ? `${style.dropdownContent}` : `${style.dropdownContent} ${style.openMenu}`}>

                        <div className={style.openMenuPosition}>
                            <button onClick={() => toggleSidebar()} className={style.closeButton}>
                                <FaTimes/>
                            </button>
                            <Link to={lang === "HU" ? '/' : '/en'}
                                  onClick={() => toLink()}
                                  className={style.menuLink}>
                                <h2>{lang === "HU" ? "Kezdőlap" : "Home"}</h2>
                            </Link>
                            <Link to={lang === "HU" ? '/menu' : '/en/menu'}
                                  onClick={() => toLink()}
                                  className={style.menuLink}>
                                <h2>{lang === "HU" ? "Étlap" : "Menu"}</h2>
                            </Link>
                            <Link to={lang === "HU" ? '/lunchmenu' : '/en/lunchmenu'}
                                  onClick={() => toLink()}
                                  className={style.menuLink}>
                                <h2>{lang === "HU" ? "Ebédmenü" : "Lunch Menu"}</h2>
                            </Link>
                            <Link to={lang === "HU" ? '/galery' : '/en/galery'}
                                  onClick={() => toLink()}
                                  className={style.menuLink}>
                                <h2>{lang === "HU" ? "Galéria" : "Galery"}</h2>
                            </Link>
                            <Link to={lang === "HU" ? '/contacts' : '/en/contacts'}
                                  onClick={() => toLink()}
                                  className={style.menuLink}>
                                <h2>{lang === "HU" ? "Kapcsolat" : "Contacts"}</h2>
                            </Link>
                            <div className={`${style.menuButtonWrapper} `}>
                                <button onClick={() => setLang()} disabled={lang === "HU"}
                                        className={`${style.menuButtonPhone} ${style.menuButton}`}>HU
                                </button>
                                |
                                <button onClick={() => setLang()} disabled={lang === "EN"}
                                        className={`${style.menuButtonPhone} ${style.menuButton}`}>EN
                                </button>
                            </div>
                        </div>
                        <img src={logo} alt={"logo"} className={isIndex ? `${style.logo} ` : `${style.logoLunch}`}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
