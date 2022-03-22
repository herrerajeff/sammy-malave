import React from "react";
import App from "../components/app";
import Header from "../components/header";
import Footer from "../components/footer";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index({ data: { allPosts, site, global } }) {

  return (
    <App>
      <HelmetDatoCms seo={global.seo} favicon={site.favicon} />
      <Header aboutPhoto={global.aboutPhoto.small} />
      <main></main>
      <Footer />
    </App>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    global: datoCmsGlobal {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      aboutPhoto {
        large: gatsbyImageData(width: 1500)
        small: gatsbyImageData(width: 800)
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 10) {
      nodes {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        imageWidth {
          width
        }
      }
    }
  }
`;