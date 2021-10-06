import React from "react";
import {graphql} from "gatsby";
import {Carousel} from "react-responsive-carousel";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as style from "../css/style.module.css";
import "../css/carousel.css";

import a from "../images/slideshow/12.jpg"
import b from "../images/lunchmenu/levesKeskeny.jpg"
import c from "../images/lunchmenu/főételKeskeny.jpg"
import d from "../images/slideshow/1.jpg"
import e from "../images/slideshow/4.jpg"
import f from "../images/slideshow/7.jpg"
import g from "../images/lunchmenu/desszert.jpg"

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
                keywords={"éttrem, remma's bistro, bistro, előétel, eloetel, leves, főétel, foetel, köret,koret, desszert, menü, menu , savanyúság, savanyusag"}
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
                    <img src={a} alt={"kep"}
                         className={`${style.col6} ${style.foodImgLeft}`}/>
                    <img src={b} alt={"kep"}
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
                    <img src={c} alt={"kep"}
                         className={`${style.col6} ${style.foodImgLeftPhone}`}/>

                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}
                              className={`${style.col6} ${style.carausel}`}>
                        <div>
                            <img src={d} alt={"kep"}/>
                        </div>
                        <div>
                            <img src={e} alt={"kep"}/>
                        </div>

                        <div>
                            <img src={f} alt={"kep"}/>
                        </div>

                    </Carousel></div>

                <div className={style.gridFood}>
                    <img src={g} alt={"kep"}
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
