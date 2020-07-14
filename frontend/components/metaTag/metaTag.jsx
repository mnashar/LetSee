import React from "react";
import MetaTags from "react-meta-tags";


const MetaTag = () => {
    
    return (
      <MetaTags>
        <title>Letsy</title>

        <meta property="og:image" content="<%= thumb %>" />
        <meta property="og:title" content="Letsy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Letsy is a clone of Etsy. It allows users to sell and buy handmade and vintage products."
        />
      </MetaTags>
    );
}

export default MetaTag;
