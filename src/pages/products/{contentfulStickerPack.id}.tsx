import React from "react";
import Layout from "../../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

export default function ProductDetail({ data }: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulStickerPack?.name as string}>
      <GatsbyImage image={image!} alt="" />
      <h2>${data.contentfulStickerPack?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;
