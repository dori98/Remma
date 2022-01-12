import * as React from "react"
import {navigate} from "gatsby"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModalImage from "./ModalImage";

const Layout = ({children, isIndex, lang}) => {
    function setLang() {
        if (window.location.pathname === "/") {
            navigate("/en" + window.location.hash)
        } else if (window.location.pathname === "/en") {
            navigate("/" + window.location.hash)

        }else if (window.location.pathname === "/en/contacts") {
            navigate("/contacts" + window.location.hash)

        }else if (window.location.pathname === "/contacts") {
            navigate("/en/contacts" + window.location.hash)

        }else if (window.location.pathname === "/en/galery") {
            navigate("/galery" + window.location.hash)

        }else if (window.location.pathname === "/galery") {
            navigate("/en/galery" + window.location.hash)

        }else if (window.location.pathname === "/lunchmenu") {
            navigate("/en/lunchmenu" + window.location.hash)

        }else if (window.location.pathname === "/en/lunchmenu") {
            navigate("/lunchmenu" + window.location.hash)

        }else if (window.location.pathname === "/en/menu") {
            navigate("/menu" + window.location.hash)

        }else if (window.location.pathname === "/menu") {
            navigate("/en/menu" + window.location.hash)

        }
    }
    return (
        <>
            <Navbar isIndex={isIndex} lang={lang} setLang={() => setLang()}/>
            {children}
            <ModalImage/>
            <Footer/>
        </>
    )
}
export default Layout
