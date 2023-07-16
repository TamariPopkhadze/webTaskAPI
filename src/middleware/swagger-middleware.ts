import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";
[]
const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "scandi Web",
};

const swaggerDocument = YAML.load("./src/database/swagger.yaml");
export default [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];