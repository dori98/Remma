import React from "react";
import {graphql} from "gatsby";
import {Carousel} from "react-responsive-carousel";
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as style from "../css/style.module.css";
import "../css/carousel.css";

const LunchTemplate = ({data}) => {
    const {
        nyelv,
        contentfulEbedmenuArak: arak,
        allContentfulEbedmenuDesszert: {nodes: desszert},
        allContentfulEbedmenuFoetelek: {nodes: foetelek},
        contentfulEbedmenuIdotartam: ido,
        allContentfulEbedmenuLevesek: {nodes: levesek},
    } = data

    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Ebédmenü"}
                description={"Remma's Bistro heti ebédmenüje"}
                keywords={"éttrem, bistro, előétel, leves, főétel, köret, desszert, menü, menu "}
                url={nyelv.lang === "HU" ? "/lunchmenu" : "/en/lunchmenu"}
            />

            <Layout isIndex lang={nyelv.lang}>

                <div className={style.gridLunch}>
                    <div className={style.col8Lunch}>
                        <h1 className={` ${style.lunchTitle} `}>{nyelv.lang === "HU" ? "Ebédmenü" : "Lunch Menu"} </h1>
                        <div className={style.line}/>
                    </div>
                    <div className={`${style.col4Lunch} ${style.lunchDateWrapper}`}>
                        <h2 className={` ${style.lunchH2}`}>{ido.datum}</h2>
                        <h2 className={` ${style.lunchH2}`}>11:30-15:00</h2>
                        <h3 className={` ${style.lunchH2}`}>
                            1 {nyelv.lang === "HU" ? "fogás" : "course"} {arak.egyFogas}Ft<br/>
                            2 {nyelv.lang === "HU" ? "fogás" : "course"} {arak.ketFogas}Ft <br/>
                            3 {nyelv.lang === "HU" ? "fogás" : "course"} {arak.haromFogas}Ft</h3>
                    </div>
                </div>

                <div className={style.gridFood}>
                    <StaticImage src={"../images/slideshow/12.jpg"} alt={"kep"}
                                 className={`${style.col6} ${style.foodImgLeft}`}/>
                    <StaticImage src={"../images/lunchmenu/levesKeskeny.jpg"} alt={"kep"}
                                 className={`${style.col6} ${style.foodImgLeftPhone}`}/>


                    <div className={`${style.foodWrapper} ${style.col6}`}>
                        <h2 className={style.foodTitle}>{nyelv.lang === "HU" ? "Levesek-Előételek" : "Soup and Starters"}</h2>

                        {levesek.map(e => {
                            return (
                                <div key={e.id}>
                                    <p className={style.foodP}> -{e.nev}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={style.gridFood}>
                    <div className={`${style.foodWrapper} ${style.col6}`}>

                        <h2 className={style.foodTitle}>{nyelv.lang === "HU" ? "Főételek" : "Main courses"}</h2>
                        {foetelek.map(e => {
                            return (
                                <div key={e.id}>
                                    <p className={style.foodP}> -{e.nev}</p>
                                </div>
                            )
                        })}
                    </div>
                    <StaticImage src={"../images/lunchmenu/főételKeskeny.jpg"} alt={"kep"}
                                 className={`${style.col6} ${style.foodImgLeftPhone}`}/>

                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className={`${style.col6} ${style.carausel}`}>
                        <div>
                            <StaticImage src={"../images/slideshow/1.jpg"} alt={"kep"}/>
                        </div>
                        <div>
                            <StaticImage src={"../images/slideshow/4.jpg"} alt={"kep"}/>
                        </div>

                        <div>
                            <StaticImage src={"../images/slideshow/7.jpg"} alt={"kep"}/>
                        </div>

                    </Carousel></div>

                <div className={style.gridFood}>
                    <StaticImage src={"../images/lunchmenu/desszert.jpg"} alt={"kep"}
                                 className={`${style.col6} ${style.foodImgLeft}`}/>
                    <div className={`${style.foodWrapper} ${style.col6}`}>
                        <h2 className={style.foodTitle}>{nyelv.lang === "HU" ? "Desszertek" : "Desserts"}</h2>
                        {desszert.map(e => {
                            return (
                                <div key={e.id}>
                                    <p className={style.foodP}> -{e.nev}</p>
                                </div>)
                        })}
                    </div>
                </div>


            </Layout>
        </>
    )
}
/*<div>
                    <p className={` ${style.lunchFooter}`}>{nyelv.lang === "HU" ? "Rendeld meg személyesen vagy telefonon és ha magad jössz ért, akkor 20% kedvezményt adunk a végöszegből!" : "Order in person or by phone and if you come for it, we will give you a 20% discount on the final amount!"}
                    </p>
                </div>*/
export const query = graphql`
query GetSingleLunch($lang: String) 
  {
    nyelv: contentfulLevesek(lang: {eq: $lang}) {
      
        
        lang
        
    },
    contentfulEbedmenuArak {
        id
        egyFogas
        haromFogas
        ketFogas
    },
    allContentfulEbedmenuDesszert( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}){
      nodes {
        id
        nev
        lang
      }
    },
    allContentfulEbedmenuFoetelek(sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}){
      nodes {
        nev
        id
        lang
      }
    },
     contentfulEbedmenuIdotartam {
      id
      datum
      
    },
     allContentfulEbedmenuLevesek(sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}){
      nodes {
        nev
        id
        lang
      }
    },

  }
`
export default LunchTemplate
