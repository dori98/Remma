import React, {useState} from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Image from "gatsby-image"

import * as style from "../css/style.module.css"

import a from "../images/logo,icon/Névtelen.png"
import kv from "../images/kv.jpg"
import wine from "../images/wine.jpg"
import ital from "../images/koktel.jpg"

import {Carousel} from "react-responsive-carousel";


const MenuTemplate = ({data,}) => {
    const [name, setName] = useState(String)
    const [emptyContentful] = useState()
    const [contentful, setContentful] = useState()
    const [isMouse, setIsMouse] = useState(false)
    const toLink = (y, x, z) => {

        setContentful(z);
        if (y != null) {
            setName(x)
            setIsMouse(true)
        } else {
            setIsMouse(false)
        }
    }
    const toLeave = () => {
        setContentful(emptyContentful)
        setIsMouse(false)
    }
    const {
        nyelv,
        allContentfulEloetelek: {nodes: eloetel},
        allContentfulLevesek: {nodes: leves},
        allContentfulFoetelek: {nodes: foetel},
        allContentfulKoretek: {nodes: koret},
        allContentfulGrillezveVagyRantva: {nodes: grill},
        allContentfulDesszertek: {nodes: desszert},
        allContentfulSavanyusag: {nodes: savanyu},
        allContentfulBorlap: {nodes: borlap},
        allContentfulAlkoholosItalok: {nodes: alkohol},
        allContentfulUditok: {nodes: udito},
        allContentfulKavek: {nodes: kave},
        contentfulAlapKepek,
        contentfulDesszertek,
    } = data


    return (
        <>
            <Seo
                lang={nyelv.lang === "HU" ? "hu" : "en"}
                title={"Étlap"}
                description={"Remma's Bistro étlapja"}
                keywords={"éttrem,remma's bistro, etterem, remma, remmas, bistro, előétel, eloetel, leves, főétel, foetel, köret,koret, desszert, menü, menu , savanyúság, savanyusag"}
                url={nyelv.lang === "HU" ? "/menu" : "/en/menu"}
            />
            <Layout isIndex lang={nyelv.lang}>
                <div className={style.indexpage}>
                    <div className={style.gridIndexBig}>
                        <div className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful === eloetel && (
                                    <div>
                                        {eloetel.map((blog, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        blog.fenykep && blog.nev === name && (
                                                            <Image fluid={blog.fenykep.fluid}
                                                                   className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}

                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.eloetel.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful !== eloetel && (
                                    <Image fluid={contentfulAlapKepek.eloetel.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Előételek" : "Starters"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {eloetel.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={e.fenykep == null ? `${style.indexH3}` : `${style.indexH3Hover}`}
                                                onMouseEnter={() => toLink(e.fenykep, e.nev, eloetel)}
                                                onMouseLeave={() => toLeave()}
                                            > {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.gridIndexSmall}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Előételek" : "Starters"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {eloetel.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={e.fenykep == null ? `${style.indexH3}` : `${style.indexH3Hover}`}
                                                onMouseEnter={() => toLink(e.fenykep, e.nev, eloetel)}
                                                onMouseLeave={() => toLeave()}
                                            > {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful === eloetel && (
                                    <div>
                                        {eloetel.map((blog, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        blog.fenykep && blog.nev === name && (
                                                            <Image fluid={blog.fenykep.fluid}
                                                                   className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}

                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.eloetel.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful !== eloetel && (
                                    <Image fluid={contentfulAlapKepek.eloetel.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>

                    </div>

                    <div className={style.gridIndex}>

                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Levesek" : "Soups"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {leves.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={e.fenykep == null ? `${style.indexH3}` : `${style.indexH3Hover}`}
                                                onMouseEnter={() => toLink(e.fenykep, e.nev, leves)}
                                                onMouseLeave={() => toLeave()}
                                            > {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful === leves && (
                                    <div>
                                        {leves.map((blog, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        blog.fenykep && blog.nev === name && (
                                                            <Image fluid={blog.fenykep.fluid}
                                                                   className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.leves.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful !== leves && (
                                    <Image fluid={contentfulAlapKepek.leves.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                    </div>

                    <div className={style.gridIndexBig}>
                        <div className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful === grill && (
                                    <div>
                                        {grill.map((blog, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        blog.fenykep && blog.nev === name && (
                                                            <Image fluid={blog.fenykep.fluid}
                                                                   className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful !== grill && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Klasszikusok" : "Classics"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {grill.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={e.fenykep == null ? `${style.indexH3}` : `${style.indexH3Hover}`}
                                                onMouseEnter={() => toLink(e.fenykep, e.nev, grill)}
                                                onMouseLeave={() => toLeave()}
                                            > {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.gridIndexSmall}>

                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Klasszikusok" : "Classics"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {grill.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={e.fenykep == null ? `${style.indexH3}` : `${style.indexH3Hover}`}
                                                onMouseEnter={() => toLink(e.fenykep, e.nev, grill)}
                                                onMouseLeave={() => toLeave()}
                                            > {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful === grill && (
                                    <div>
                                        {grill.map((blog, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        blog.fenykep && blog.nev === name && (
                                                            <Image fluid={blog.fenykep.fluid}
                                                                   className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful !== grill && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                    </div>

                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Főételek" : "Main courses"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {foetel.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={e.fenykep == null ? `${style.indexH3}` : `${style.indexH3Hover}`}
                                                onMouseEnter={() => toLink(e.fenykep, e.nev, foetel)}
                                                onMouseLeave={() => toLeave()}
                                            > {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful === foetel && (
                                    <div>
                                        {foetel.map((blog, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        blog.fenykep && blog.nev === name && (
                                                            <Image fluid={blog.fenykep.fluid}
                                                                   className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.foetel.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful !== foetel && (
                                    <Image fluid={contentfulAlapKepek.foetel.fluid}
                                           className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>

                    </div>

                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Köretek" : "Garnishess"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {koret.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                            <p className={`${style.indexArak}`}>{e.arak} Ft</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Savanyúság" : "Salad"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {savanyu.map((e, index) => {
                                return (
                                    <div key={index}>
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
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Desszertek" : "Dessert"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {desszert.map((e, index) => {
                                return (
                                    <div key={index}>
                                        <div className={style.indexDessertWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.col6}>
                            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}
                                      className={`${style.col6} ${style.carausel2}`}>
                                {
                                    contentfulDesszertek.fenykepek.map(x => {
                                        return (
                                            <div key={x.id}>
                                                <Image fluid={x.fluid} className={style.indexEloetelImg}/>
                                            </div>
                                        )
                                    })
                                }

                            </Carousel>
                        </div>
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


                {/*Borlap-----------------------------------------------------------------------------------*/}
                <div className={style.indexpage}>
                    <h1 className={style.wineH1}>{nyelv.lang === "HU" ? "Borlap" : "Wines"}</h1>
                    <h1 className={style.mobilDrinkTitle}> Itallap</h1>
                    <div className={style.gridIndexDrink}>
                        <div className={`${style.col6}`}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Ház bora" : "House wines"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            {borlap.map((e, index) => e.fajta === "Ház bora" && (
                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`${style.col6} `}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Desszert borok " : "Dessert wines"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            {borlap.map((e, index) => e.fajta === "Desszertborok" && (
                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className={`${style.fullwidth} ${style.drinkDevider}`}/>
                        <div className={`${style.col6} `}>

                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Rozé" : "Rosé wines"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {borlap.map((e, index) => e.fajta === "Rozé" && (
                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`${style.col6} `}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Habzók/Pezsgők" : "Sparklink wines"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {borlap.map((e, index) => e.fajta === "Habzók/pezsgők" && (
                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.gridIndexDrink}>
                        <div className={`${style.col6} `}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Fehér Borok" : "White wines"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            <div className={style.content}>
                                {borlap.map((e, index) => e.fajta === "Fehérborok" && (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                            <p className={`${style.indexArak}`}>{e.ar} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${style.col6} `}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Vörösborok" : "Red wines"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            <div className={style.content}>
                                {borlap.map((e, index) => e.fajta === "Vörösborok" && (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                            <p className={`${style.indexArak}`}>{e.ar} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${style.fullwidth} ${style.drinkDevider}`}/>

                    </div>
                </div>
                {/*üdítők-----------------------------------------------------------------------------------*/}
                <div className={style.indexpage}>
                    <h1 className={style.drinkH1}>{nyelv.lang === "HU" ? "Üdítők" : "Soft drinks"}</h1>
                    <div className={style.gridIndexDrink}>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Limonádék-jeges teák" : "Lemonade-Ice tea"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                {udito.map((e, index) => e.fajta === "Limonádék-jeges teák-szörpök" && (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                            <p className={`${style.indexArak}`}>{e.ar} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Szénsavas üdítők" : "Sparkling drink"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                {udito.map((e, index) => e.fajta === "Szénsavas üdítők" && (
                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                            <p className={`${style.indexArak}`}>{e.ar} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${style.fullwidth} ${style.drinkDevider}`}/>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Víz" : "Water"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            {udito.map((e, index) => e.fajta === "Víz" && (
                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Gyümölcslevek" : "Juice"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            {udito.map((e, index) => e.fajta === "Gyümölcslevek" && (
                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*kávék-----------------------------------------------------------------------------------*/}
                <div className={style.indexpage}>
                    <h1 className={style.drinkH1}>Kávék</h1>

                    <div className={style.gridIndexDrink}>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Kávék" : "Coffees"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                <p className={style.indexPAllergen}>Kérheted növényi alapú tejjel! +100Ft</p>

                                {kave.map((e, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={style.indexFoodWrapper}>
                                                <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                                <p className={`${style.indexArak}`}>{e.ar} </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className={`${style.col6} ${style.drinkImageDiv}`}>

                            <img src={kv} className={`${style.drinkImage}`}/>
                        </div>
                    </div>

                </div>
                {/*alkohol-----------------------------------------------------------------------------------*/}
                <div className={style.indexpage}>
                    <h1 className={style.drinkH1}>{nyelv.lang === "HU" ? "Alkoholos italok" : "Alcoholic drinks"}</h1>

                    <div className={style.gridIndexDrink}>
                        <div className={style.col6}>

                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Csapolt Sörök-Ciderek-" : "Draft beers-Ciders"}</h1>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Kézműves sörök" : "Craft beers"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {alkohol.map((e, index) => e.fajta === "csapolt Sörök-ciderek-kézműves sörök" && (

                                <div key={index}>
                                    <div className={style.indexFoodWrapper}>
                                        <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                        <p className={`${style.indexArak}`}>{e.ar} </p>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Üveges Sörök-Ciderek-" : "Bottle beers-ciders"}</h1>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Kézműves sörök" : "craft beers"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                {alkohol.map((e, index) => e.fajta === "üveges Sörök-ciderek-kézműves sörök" && (

                                    <div key={index}>
                                        <div className={style.indexFoodWrapper}>
                                            <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                            <p className={`${style.indexArak}`}>{e.ar} </p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.gridIndexDrink}>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Koktélok-Spritzerek" : "Coctails"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                {alkohol.map((e, index) => e.fajta === "Koktélok-spritzerek" &&
                                    (
                                        <div key={index}>
                                            <div className={style.indexFoodWrapper}>
                                                <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                                <p className={`${style.indexArak}`}>{e.ar} </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                        </div>
                        <div className={`${style.col6} ${style.drinkImageDiv}`}>

                            <img src={ital} className={`${style.drinkImage}`}/>
                        </div>
                        <div className={`${style.fullwidth} ${style.drinkDevider}`}></div>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Pálinkák" : "Pálinka"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                {alkohol.map((e, index) => e.fajta === "Páliknák" &&
                                    (
                                        <div key={index}>
                                            <div className={style.indexFoodWrapper}>
                                                <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                                <p className={`${style.indexArak}`}>{e.ar} </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.drinkTitle}`}>{nyelv.lang === "HU" ? "Párlatok-Likőrök" : "Spirits"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>
                            <div className={style.content}>
                                {alkohol.map((e, index) => e.fajta === "Párlatok-Likőrök" &&
                                    (
                                        <div key={index}>
                                            <div className={style.indexFoodWrapper}>
                                                <h3 className={style.indexH3}> {nyelv.lang === "HU" ? e.nev : e.angolnev}</h3>
                                                <p className={`${style.indexArak}`}>{e.ar} </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                        </div>
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
        fenykep {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
        lang
        id
      }
    },
  
  contentfulAlapKepek {
      eloetel {
        fluid {
          src
        }
      }
      foetel {
        fluid {
          src
        }
      }
      klasszikus {
        fluid {
          src
        }
      }
      leves {
        fluid {
          src
        }
      }
    },
    
    allContentfulLevesek( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}) {
      nodes {
        nev
        arak
        lang
        id
         fenykep {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
      }
    },
  contentfulDesszertek {
        id
      fenykepek {
        fluid {
              ...GatsbyContentfulFluid
        }
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
         fenykep {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
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
        fenykep {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
         
      }
    },
    allContentfulDesszertek( sort: {fields: updatedAt, order: ASC} filter: {lang: {eq: $lang}}) {
      nodes {
        
        nev
        id
        lang
         fenykepek {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
      }
    },
     allContentfulBorlap {
      nodes {
        ar
        fajta
        angolnev
        nev
      }
    },
     allContentfulAlkoholosItalok {
      nodes {
        nev
        fajta
        angolnev
        ar
      }
    },
    allContentfulUditok {
      nodes {
        angolnev
        ar
        fajta
        nev
      }
    },
    allContentfulKavek {
      nodes {
        angolnev
        ar
        nev
      }
    }   
}  
`

export default MenuTemplate
