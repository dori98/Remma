import React from "react"
import {graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as style from "../css/style.module.css"

const MenuTemplate = ({data,}) => {
    const {
        nyelv,
        allContentfulEloetelek: {nodes: eloetel},
        allContentfulLevesek: {nodes: leves},
        allContentfulFoetelek: {nodes: foetel},
        allContentfulKoretek: {nodes: koret},
        allContentfulGrillezveVagyRantva: {nodes: grill},
        allContentfulDesszertek: {nodes: desszert},
        allContentfulSavanyusag: {nodes: savanyu},

    } = data
    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Étlap"}
                description={"Remma's Bistro étlapja"}
                keywords={"éttrem, bistro, előétel, leves, főétel, köret, desszert "}
                url={nyelv.lang === "HU" ? "/menu" : "/en/menu"}
            />


            <Layout isIndex lang={nyelv.lang}>

                <div className={style.indexpage}>

                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Levesek-Előételek" : "Soups-Starters"}</h1>
                            <StaticImage  src={"../images/logo,icon/Névtelen.png"} alt={"devider"} className={`${style.indexDevider}`}/>
                        </div>
                        <div className={style.col6}/>
                        <div className={`${style.col6} ${style.indexEloetelPosition}`}>
                            {leves.map(e => {
                                return (
                                    <div key={e.id} className={style.indexFoodWrapper}>
                                        <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                        <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                    </div>
                                )
                            })}
                            {eloetel.map(e => {
                                return (
                                    <div key={e.id}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <StaticImage  src={"../images/lunchmenu/előétel.jpg"} alt={"kep"} className={`${style.indexEloetelImg} ${style.col6}`}/>

                    </div>

                    <div className={style.gridIndex}>

                        <div className={`${style.col6} ${style.indexLevesGrillPosition}`}>
                            <div>
                                <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Grillezve vagy rántva" : "Grilled or deep fried"}</h1>
                                <StaticImage  src={"../images/logo,icon/Névtelen.png"} alt={"kep"} className={`${style.indexDevider}`}/>
                            </div>
                            {grill.map(e => {
                                return (
                                    <div key={e.id} className={style.indexFoodWrapper}>
                                        <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                        <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                    </div>
                                )
                            })}

                        </div>

                        <div className={`${style.col6} ${style.indexLevesGrillPosition}`}>
                            <div>
                                <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Savanyúság" : "Salad"}</h1>
                                <StaticImage  src={"../images/logo,icon/Névtelen.png"} alt={"devider"} className={`${style.indexDevider}`}/>
                            </div>
                            {savanyu.map(e => {
                                return (
                                    <div key={e.id} className={style.indexFoodWrapper}>
                                        <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                        <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className={style.gridIndex}>
                        <StaticImage  src={"../images/étlap/főétel1.jpg"} alt={"kep"} className={`${style.indexFoetelImg} ${style.fullwidth}`}/>
                        <div className={`${style.col6} ${style.indexEloetelPosition}`}>
                            <div>
                                <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Főételek" : "Main courses"}</h1>
                                <StaticImage  src={"../images/logo,icon/Névtelen.png"} alt={"devider"} className={`${style.indexDevider}`}/>
                            </div>
                            {foetel.map(e => {
                                return (
                                    <div key={e.id}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${style.col6} ${style.indexEloetelPosition}`}>
                            <div>
                                <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Köretek" : "Garnishes"}</h1>
                                <StaticImage  src={"../images/logo,icon/Névtelen.png"} alt={"devider"} className={`${style.indexDevider}`}/>
                            </div>
                            {koret.map(e => {
                                return (
                                    <div key={e.id}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Desszertek" : "Desserts"}</h1>
                            <StaticImage  src={"../images/logo,icon/Névtelen.png"} alt={"devider"} className={`${style.indexDevider}`}/>
                        </div>
                        <div className={style.col6}/>
                        <div className={`${style.col6} ${style.indexEloetelPosition}`}>
                            {desszert.map(e => {
                                return (
                                    <div key={e.id}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <StaticImage  src={"../images/étlap/desszert1.jpg"} alt={"kep"} className={`${style.indexEloetelImg} ${style.col6}`}/>

                    </div>
                    <div className={` ${style.indexAllergenPosition}`}>
                        <p className={` ${style.indexPAllergen}`}> A: {nyelv.lang === "HU" ? "GLUTÉN" : "GLUTEN"}</p>
                        <p className={` ${style.indexPAllergen}`}>B: {nyelv.lang === "HU" ? "LAKTÓZ" : "LACTOSE"} </p>
                        <p className={` ${style.indexPAllergen}`}> C: {nyelv.lang === "HU" ? "RÁK, HAL" : "CANCER, FISH"} </p>
                        <p className={` ${style.indexPAllergen}`}> D: {nyelv.lang === "HU" ? "DIÓ" : "WALNUT"}</p>
                        <p className={` ${style.indexPAllergen}`}> E: {nyelv.lang === "HU" ? "TOJÁS" : "EGG"}</p>
                        <p className={` ${style.indexPAllergen}`}> F: {nyelv.lang === "HU" ? "SZÓJA" : "SOY"} </p>
                        <p className={` ${style.indexPAllergen}`}> G: {nyelv.lang === "HU" ? "ERŐS" : "STRONG"}</p>

                    </div>


                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
query GetSingleMenu($lang: String) 
 
 {
    nyelv: contentfulLevesek(lang: {eq: $lang}) {      
        lang        
    },
    allContentfulEloetelek( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}) {
      nodes {
        arak
        nev
        
        lang
        id
      }
    },
    
    allContentfulLevesek( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}) {
      nodes {
        nev
        arak
        lang
        id
      }
    },
 
    allContentfulSavanyusag ( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}){
      nodes {
        id
        lang
        nev
        arak
      }
    }
    allContentfulFoetelek ( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}){
      nodes {
        arak
        nev
        lang
        id
      }
    },
     allContentfulKoretek( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}) {
      nodes {
        arak
        nev
        lang
        id
      }
    },
    allContentfulGrillezveVagyRantva( sort: {fields: updatedAt, order: DESC} filter: {lang: {eq: $lang}}) {
      nodes {
        arak
        nev
        lang
        id
      }
    },
    allContentfulDesszertek( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}) {
      nodes {
        arak
        nev
        id
        lang
      }
    }   
}  
`

export default MenuTemplate
