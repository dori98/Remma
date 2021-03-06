import React from "react";
import {Helmet} from "react-helmet";
import favicon from "/src/images/logo,icon/R.png";
import seoImage from "/src/assets/seo-image.png";

const Seo = ({lang, title, description, keywords, url}) => {

    const defaultUrl = "https://remmas.netlify.app";

    return (
        <Helmet htmlAttributes={{lang: lang}}>
            {/* General tagek, az alap seóhoz */}
            <title>{title}</title>
            {description && <meta name="description" content={description}/>}
            {keywords && <meta name="keywords" content={keywords}/>}
            <link rel="canonical" href={defaultUrl + url}/>
            <link rel="icon" href={favicon} sizes="any" type="image/svg+xml"/>
            {/* OpenGraph tagek, a social mediához */}
            <meta property="og:title" content={title}/>
            <meta property="og:url" content={defaultUrl + url}/>
            <meta property="og:image" content={defaultUrl + seoImage}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            {description && <meta property="og:description" content={description}/>}
            <meta property="og:locale" content={lang}/>
        </Helmet>
    )
}
export default Seo