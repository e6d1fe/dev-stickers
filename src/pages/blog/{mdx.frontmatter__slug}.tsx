import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import React from "react";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  const image = getImage(data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!);
  return (
    <Layout title="Blog post">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title as string} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      children {
        id
      }
      frontmatter {
        author
        category
        date
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title as any} />
);
