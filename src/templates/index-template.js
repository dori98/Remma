import * as React from "react"
import * as style from "../css/style.module.css"
import {graphql} from "gatsby"

import Layout from "../components/Layout";
import ital from "../images/ital.png";
import ital2 from "../images/ital2.png";
import ital3 from "../images/ital4.jpg";

import Seo from "../components/Seo";

const IndexTemplate = ({data,}) => {
    const {
        nyelv,
        contentfulAkcio: akcio,

    } = data
    console.log(akcio.akciok)
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
                        <h1 className={`${style.akcioH1} ${style.fullwidth}`}>Állandó akcióink</h1>

                        <div className={`${style.col8Ital} ${style.akciokWrapper}`}>
                            {akcio.akciok.map(e => {
                                return (
                                    <div key={e.id}>
                                        <p className={style.akciokP}> {e}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <img src={ital} className={`${style.col4Ital} ${style.akcioImgLeft}`}/>

                    </div>
                    <img src={ital3} className={style.akciokImgPhone}/>
                    <div className={` ${style.gridAkcio} `}>
                        <h2 className={`${style.fullwidth} ${style.akcioH2}`}>Heti akciók amik folyamatosan élnek </h2>
                        <img src={ital2} className={`${style.col4Ital} ${style.akcioImgRight}`}/>

                        <div className={`${style.col8Ital} ${style.akciokWrapper}`}>
                            {akcio.hetiAkciok.map(e => {
                                return (
                                    <div key={e.id}>
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
/*                    <img src={ital3} className={style.akciokImgPhone}/>
*/
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
    }
}  
`

export default IndexTemplate
