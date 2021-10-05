import * as React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {navigate} from "gatsby"

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
            <Footer/>
        </>
    )
}
export default Layout
