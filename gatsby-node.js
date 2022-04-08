const fs = require("fs");
const yaml = require("js-yaml");

exports.createPages = ({ actions }) => {
  const ymlDoc = yaml.load(
    fs.readFileSync("./src/content/features.yaml", "utf-8")
  );

  ymlDoc.forEach((element) => {
    actions.createPage({
      path: element.slug,
      component: require.resolve("./src/templates/featureTemplate.js"),
      context: {
        slug: element.slug,
        featureName: element.name,
        bullets: element.bullets,
      },
    });
  });
};
