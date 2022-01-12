import React from "react"
import {graphql} from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Image from "gatsby-image"

import * as style from "../css/style.module.css";
import "../css/carousel.css"

const GaleryTemplate = ({data,}) => {
    const {
        contentfulGaleria,
        nyelv,
    } = data
    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Galéria"}
                description={"Remma's Bistro képei."}
                keywords={"bistro, remma's bistro, remmma, remmas, elérhetőség, étterem, Rumbach "}
                url={nyelv.lang === "HU" ? "/galery" : "/en/galery"}
            />
            <Layout isIndex lang={nyelv.lang}>
                <div className={style.gridLunch}>
                    <h1 className={`${style.akcioH1} ${style.fullwidth}`}>{nyelv.lang === "HU" ? "Galéria" : "Galery"}</h1>

                    <div   className={`${style.galeryPage} ${style.fullwidth}`}>
                        {
                            contentfulGaleria.fenykepek.map(x=>{
                                return(
                                    <div key={x.id} >
                                        <Image fluid={x.fluid} className={`${style.galeryPhotosize} ${"image-for-modal"}`}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
query GetSingleGalery($lang: String) 
  {
    nyelv:contentfulLevesek(lang: {eq: $lang}){      
        lang        
    }, 
     contentfulGaleria {
      fenykepek {
        fluid {
             ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default GaleryTemplate
