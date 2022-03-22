import React from "react";
import App from "../components/app";
import Header from "../components/header";
import Footer from "../components/footer";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Logo from "../components/logo";
import Container from "../components/container";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Index({ data: { allPosts, site, global } }) {
  const posts = allPosts.nodes

  return (
    <App>
        <HelmetDatoCms seo={global.seo} favicon={site.favicon} />
        <Header aboutPhoto={global.aboutPhoto.small} ig={global.instagramUsername} tw={global.emailAddress} email={global.emailAddress} />
        <main>
          <Container className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-20 gap-x-8">
            <div className="lg:col-span-2 grid items-center">
              <Logo classes="w-2/3 mx-auto lg:mx-0" />
            </div>
            {posts.map(post => {
              const WL50 = post.imageWidth.width.includes("Left - 50%")
              const WL75 = post.imageWidth.width.includes("Left - 75%")
              const W100 = post.imageWidth.width.includes("Full Width - 100%")
              const WR50 = post.imageWidth.width.includes("Right - 50%")
              const WR75 = post.imageWidth.width.includes("Right - 75%")
              
              return(  
              <a href={post.slug} key={post.slug} className={`
              ${WL50 ? 'lg:col-span-2' : null}
              ${WL75 ? 'lg:col-span-3' : null}
              ${W100 ? 'lg:col-span-4' : null}
              ${WR50 ? 'lg:col-start-3 lg:col-end-5' : null}
              ${WR75 ? 'lg:col-start-3 lg:col-end-5' : null} 
              relative group overflow-hidden
              `}>
                <p className="absolute z-10 p-8 w-full text-right text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 delay-100 mix-blend-exclusion grayscale">
                  {post.title} - {post.date}
                </p>
                <GatsbyImage image={post.coverImage.large} alt={post.title} className="transform scale-100 group-hover:scale-125 transition-all duration-700 group-hover:blur-sm" />
              </a>
            )})}
          </Container>
        </main>
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
      emailAddress
      instagramUsername
      twitterUsername
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
