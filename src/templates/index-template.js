import React from "react";
import {graphql} from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";

import * as style from "../css/style.module.css";

import ital from "../images/ital.png"
import ital2 from "../images/ital2.png"
import ital3 from "../images/ital4.jpg"
const IndexTemplate = ({data,}) => {
    const {
        nyelv,
        contentfulAkcio: akcio,

    } = data
    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Kezdőlap"}
                description={"Remma's Bistro kezdőlapja"}
                keywords={"éttrem, bistro, előétel, leves, főétel, köret, desszert "}
                url={nyelv.lang === "HU" ? "/" : "/en"}
            />


            <Layout isIndex lang={nyelv.lang}>
                <div className={style.akcioPage}>
                    <div className={` ${style.gridAkcio} `}>
                        <h1 className={`${style.akcioH1} ${style.fullwidth}`}>{nyelv.lang === "HU" ? "Állandó akcióink" : "Our constant promotions"}</h1>

                        <div className={`${style.col8Ital} ${style.akciokWrapper}`}>
                            {akcio.akciok.map((e, key) => {
                                return (
                                    <div key={key}>
                                        <p className={style.akciokP}> {e}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <img src={ital} alt="kép" className={`${style.col4Ital} ${style.akcioImgLeft}`}/>

                    </div>
                    <img src={ital3} alt="kép" className={style.akciokImgPhone}/>
                    <div className={` ${style.gridAkcio} `}>
                        <h2 className={`${style.fullwidth} ${style.akcioH2}`}> {nyelv.lang === "HU" ? "Heti akciók amik folyamatosan élnek" : "Weekly promotions "} </h2>
                        <img src={ital2} alt="kép" className={`${style.col4Ital} ${style.akcioImgRight}`}/>

                        <div className={`${style.col8Ital} ${style.akciokWrapper}`}>
                            {akcio.hetiAkciok.map((e,key) => {
                                return (
                                    <div key={key}>
                                        <p className={style.akciokPHeti}> {e}</p>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}

export const query = graphql`
query GetSingleIndex($lang: String) 
 
 {
    nyelv: contentfulLevesek(lang: {eq: $lang}) {      
        lang        
    },
     contentfulAkcio (lang: {eq: $lang}){      
        lang
        akciok
        hetiAkciok      
        id
    }
}  
`

export default IndexTemplate
