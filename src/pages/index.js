import * as React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  heroDescriptionText,
  heroImg,
  heroMain,
  featureListContainer,
  featureList,
  feature,
  featureHeader,
  featureHeaderHover,
  featureText,
  featureImgContainer,
  featureImg,
  waitListBtnContainer,
  waitListBtn,
} from "./index.module.css";
import { graphql, useStaticQuery, Link } from "gatsby";
import YAMLData from "../content/features.yaml";

import Layout from "../components/Layout";

const WaitListButton = () => {
  return (
    <Link to="/contact">
      <button className={waitListBtn}>Join the Waitlist</button>
    </Link>
  );
};

const Hero = () => {
  return (
    <header className={heroMain}>
      <p className={heroDescriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris
        vitae ultricies leo. Scelerisque mauris pellentesque pulvinar
        pellentesque habitant morbi tristique senectus et.
      </p>
      <StaticImage
        className={heroImg}
        alt="Apollo Headphones main product image"
        src="../static/images/hero-main.jpg"
        layout="fixed"
        width={750}
        height={900}
      />
    </header>
  );
};

const Feature = ({ header, text, slug }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(!isHovering);
  };

  const data = useStaticQuery(query);

  const details = data.allFeaturesYaml.nodes.find(
    (node) => node.name === header
  );

  return (
    <div className={feature}>
      <h3 className={isHovering ? featureHeaderHover : featureHeader}>
        {header}
      </h3>
      <div className={featureImgContainer}>
        <Link to={`/${details.slug}`}>
          <GatsbyImage
            className={featureImg}
            image={getImage(details.imagePreviewPath.childImageSharp)}
            width="100%"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
          />
        </Link>
      </div>
      <p className={featureText}>{details.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className={featureListContainer}>
      <div className={featureList}>
        {YAMLData.map((data, index) => {
          return (
            <Feature
              key={index}
              header={data.name}
              text={data.description}
              slug={data.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <div className={waitListBtnContainer}>
        <WaitListButton />
      </div>
    </Layout>
  );
};

export default IndexPage;

const query = graphql`
  query MyQuery {
    allFeaturesYaml {
      nodes {
        name
        slug
        description
        imagePreviewPath {
          childImageSharp {
            gatsbyImageData(width: 300, height: 300)
          }
        }
      }
    }
  }
`;
