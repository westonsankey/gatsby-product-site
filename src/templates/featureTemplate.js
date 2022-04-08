import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import {
  header,
  featureBody,
  featureImgContainer,
  featureImg,
  featureBullets,
} from "./featureTemplate.module.css";

const FeatureTemplate = (props) => {
  const { featureName, bullets } = props.pageContext;
  const image = getImage(props.data.featuresYaml.imageMainPath);

  return (
    <Layout>
      <h1 className={header}>{featureName}</h1>

      <main className={featureBody}>
        <div className={featureImgContainer}>
          <GatsbyImage
            alt="feature image"
            className={featureImg}
            image={image}
          />
        </div>
        <div className={featureBullets}>
          {bullets.map((data, i) => (
            <p key={i}>{data}</p>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default FeatureTemplate;

export const query = graphql`
  query ($slug: String!) {
    featuresYaml(slug: { eq: $slug }) {
      name
      imageMainPath {
        childImageSharp {
          gatsbyImageData(width: 450, height: 700)
        }
      }
    }
  }
`;
