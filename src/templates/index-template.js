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
        allContentfulProgramok: {nodes: program}
    } = data
    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Kezdőlap"}
                description={"Remma's Bistro kezdőlapja"}
                keywords={"éttrem, remma's bistro, bistro, előétel, leves, főétel, köret, desszert , akció, heti akció"}
                url={nyelv.lang === "HU" ? "/" : "/en"}
            />


            <Layout isIndex lang={nyelv.lang}>
                <div className={style.akcioPage}>
                    <div className={` ${style.gridAkcio} `}>
                        <h1 className={`${style.akcioH1} ${style.fullwidth}`}> {nyelv.lang === "HU" ? "Programok" : "Programs"} </h1>
                        <p className={`${style.programSubtitle} ${style.fullwidth}`}>{nyelv.lang === "HU" ? "Kezdés 19:00" : "Start at 19:00"}</p>
                        <div className={style.fullwidth}>
                            {program.map((e, index) => {
                                    return (
                                        <div key={index}>
                                            <div >
                                                <h3 className={style.programH3}> {e.datum}- {e.fellepo} </h3>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
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
        id
    },
    allContentfulProgramok(sort: {fields: datum, order: ASC}) {
      nodes {
        fellepo
        datum(formatString: "YYYY MM. D.")
      }
    }
}  
`

export default IndexTemplate
