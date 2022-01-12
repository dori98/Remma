import React, {useState} from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Image from "gatsby-image"

import * as style from "../css/style.module.css"

import a from "../images/logo,icon/Névtelen.png"
import b from "../images/lunchmenu/előétel.jpg"


const MenuTemplate = ({data,}) => {
    const [name, setName] = useState(String)
    const [emptyContentful]=useState()
    const [contentful, setContentful] =useState()
    const [isMouse, setIsMouse] = useState(false)
    const toLink = (y, x,z) => {

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
        contentfulAlapKepek,
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
                        <div  className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful===eloetel && (
                                    <div>
                                        {eloetel.map(blog => {
                                            return (
                                                <div key={blog.id}>
                                                    {
                                                        blog.fenykep && blog.nev === name &&  (
                                                            <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}

                             {
                                !isMouse && (
                                <Image fluid={contentfulAlapKepek.eloetel.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful!==eloetel && (
                                <Image fluid={contentfulAlapKepek.eloetel.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Előételek" : "Starters"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {eloetel.map(e => {
                                return (
                                    <div key={e.id}>
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

                            {eloetel.map(e => {
                                return (
                                    <div key={e.id}>
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
                        <div  className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful===eloetel && (
                                    <div>
                                        {eloetel.map(blog => {
                                            return (
                                                <div key={blog.id}>
                                                    {
                                                        blog.fenykep && blog.nev === name &&  (
                                                            <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}

                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.eloetel.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful!==eloetel && (
                                    <Image fluid={contentfulAlapKepek.eloetel.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>

                    </div>

                    <div className={style.gridIndex}>

                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Levesek" : "Soups"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {leves.map(e => {
                                return (
                                    <div key={e.id}>
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
                        <div  className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful===leves && (
                                    <div>
                                        {leves.map(blog => {
                                            return (
                                                <div key={blog.id}>
                                                    {
                                                        blog.fenykep && blog.nev === name &&  (
                                                            <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.leves.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>
                                    )
                            }
                            {
                                isMouse && contentful!==leves && (
                                    <Image fluid={contentfulAlapKepek.leves.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                    </div>

                    <div className={style.gridIndexBig}>
                        <div  className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful===grill && (
                                    <div>
                                        {grill.map(blog => {
                                            return (
                                                <div key={blog.id}>
                                                    {
                                                        blog.fenykep && blog.nev === name &&  (
                                                            <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful!==grill && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Klasszikusok" : "Classics"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {grill.map(e => {
                                return (
                                    <div key={e.id}>
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

                            {grill.map(e => {
                                return (
                                    <div key={e.id}>
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
                        <div  className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful===grill && (
                                    <div>
                                        {grill.map(blog => {
                                            return (
                                                <div key={blog.id}>
                                                    {
                                                        blog.fenykep && blog.nev === name &&  (
                                                            <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful!==grill && (
                                    <Image fluid={contentfulAlapKepek.klasszikus.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>
                    </div>

                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Főételek" : "Main courses"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {foetel.map(e => {
                                return (
                                    <div key={e.id}>
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
                        <div  className={`${style.indexEloetelImg} ${style.col6}`}>
                            {
                                isMouse && contentful===foetel&& (
                                    <div>
                                        {foetel.map(blog => {
                                            return (
                                                <div key={blog.id}>
                                                    {
                                                        blog.fenykep && blog.nev === name &&  (
                                                            <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            {
                                !isMouse && (
                                    <Image fluid={contentfulAlapKepek.foetel.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>
                                )
                            }
                            {
                                isMouse && contentful!==foetel && (
                                    <Image fluid={contentfulAlapKepek.foetel.fluid}  className={`${style.indexEloetelImg} ${style.col6}`}/>

                                )}
                        </div>

                    </div>

                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Köretek" : "Garnishess"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

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
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Savanyúság" : "Salad"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {savanyu.map(e => {
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
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Desszertek" : "Dessert"}</h1>
                            <img src={a} alt={"devider"} className={`${style.indexDevider}`}/>

                            {desszert.map(e => {
                                return (
                                    <div key={e.id}>
                                        <div className={style.indexDessertWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.col6}>
                            {desszert.map(blog => {
                                return (
                                    <div key={blog.id}>
                                        {
                                            blog.fenykep && (
                                                <Image fluid={blog.fenykep.fluid} className={style.indexEloetelImg}/>
                                            )
                                        }
                                        {
                                            !blog.fenykep && (
                                                <img src={b} alt={"kep"}
                                                     className={`${style.indexEloetelImg} ${style.col6}`}/>
                                            )
                                        }

                                    </div>
                                )
                            })}
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
         fenykep {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
      }
    }   
}  
`

export default MenuTemplate
/*
 <Layout isIndex lang={nyelv.lang}>

                <div className={style.indexpage}>

                    <div className={style.gridIndex}>
                        <div className={style.col6}>
                            <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Levesek-Előételek" : "Soups-Starters"}</h1>
                            <img  src={a} alt={"devider"} className={`${style.indexDevider}`}/>
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
                        <img  src={b} alt={"kep"} className={`${style.indexEloetelImg} ${style.col6}`}/>

                    </div>

                    <div className={style.gridIndex}>

                        <div className={`${style.col6} ${style.indexLevesGrillPosition}`}>
                            <div>
                                <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Klasszikusok" : "Classics"}</h1>
                                <img  src={c} alt={"kep"} className={`${style.indexDevider}`}/>
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
                                <img  src={d} alt={"devider"} className={`${style.indexDevider}`}/>
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
                        <img  src={e} alt={"kep"} className={`${style.indexFoetelImg} ${style.fullwidth}`}/>
                        <div className={`${style.col6} ${style.indexEloetelPosition}`}>
                            <div>
                                <h1 className={`${style.indexTitle}`}>{nyelv.lang === "HU" ? "Főételek" : "Main courses"}</h1>
                                <img  src={f} alt={"devider"} className={`${style.indexDevider}`}/>
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
                                <img  src={g } alt={"devider"} className={`${style.indexDevider}`}/>
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
                            <img  src={h} alt={"devider"} className={`${style.indexDevider}`}/>
                        </div>
                        <div className={style.col6}/>
                        <div className={`${style.col6} ${style.indexEloetelPosition}`}>
                            {desszert.map(e => {
                                return (
                                    <div key={e.id}>
                                        <div className={style.indexDessertWrapper}>
                                            <h3 className={`${style.indexH3}`}> {e.nev}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <img  src={x} alt={"kep"} className={`${style.indexEloetelImg} ${style.col6}`}/>

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
 */