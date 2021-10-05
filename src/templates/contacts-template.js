import * as React from "react"
import Layout from "../components/Layout";
import * as style from "../css/style.module.css";
import "../css/carousel.css"
import a from "../images/slideshow/1.jpg"
import facebook from "../images/logo,icon/facebook.png"
import c from "../images/slideshow/3.jpg"
import instagram from "../images/logo,icon/insta.png"
import Seo from "../components/Seo";
import {graphql} from "gatsby";


const ContactsTemplate = ({data,}) => {
    const {
        nyelv,
    } = data
    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Elérhetőség"}
                description={"Remma's Bistro elérhetőségei."}
                keywords={"bistro, remmma, remmas, elérhetőség, étterem"}
                url={nyelv.lang === "HU" ? "/contacts" : "/en/contacts"}
            />

            <Layout isIndex lang={nyelv.lang}>

                <div className={` ${style.gridContact}`}>
                    <div className={`${style.foodWrapper} ${style.col6}`}>
                        <div className={style.contactIconWrapper}>
                            <h2 className={style.contactsTitle}>{nyelv.lang === "HU" ? "Elérhetőség" : "Contacts"}</h2>

                            <a href={"https://www.facebook.com/remmasbistro"} target={"_blank"} rel={"noreferrer"}><img
                                src={facebook} className={style.contactIcon}/></a>
                            <a href={"https://www.instagram.com/remmasbistro/?hl=hu"} target={"_blank"}
                               rel={"noreferrer"}><img src={instagram} className={style.contactIcon}/></a>
                        </div>
                        <div className={style.line}/>
                        <p className={style.contactsP}>{nyelv.lang === "HU" ? "Cím" : "Address"}: Budapest, Rumbach
                            Sebestyén u. 7, 1075</p>
                        <p className={style.contactsP}>Email: info@remmas.hu</p>
                        <p className={style.contactsP}>{nyelv.lang === "HU" ? "Telefon" : "Phone"}: +36 1 426 1928</p>
                        <h2 className={style.contactsP}>Nyitvatartás: Hétfő-Péntek 11:30-22:00</h2>

                    </div>

                    <img src={c} alt={"etterem"} className={`${style.col6} ${style.contactImg}`}/>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.6141158185!2d19.05709231515502!3d47.49743027917756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddd272a4343b%3A0x20ed7c2db7f0bb1d!2sRemma&#39;s%20Bistro!5e0!3m2!1shu!2shu!4v1631213976792!5m2!1shu!2shu"
                        allowFullScreen=""
                        height="400px"
                        loading="lazy"

                        className={`${style.map} ${style.fullwidth}`}
                    />
                </div>
            </Layout>
        </>
    )
}
export const query = graphql`
query GetSingleContact($lang: String) 
  {
    nyelv: contentfulLevesek(lang: {eq: $lang}){
      
        lang
        
    }, 

  }
`
export default ContactsTemplate