import * as express from "express";
import * as http from "http";
import * as jwtConfig from "@/config/middleware/jwtAuth";
import * as swaggerUi from "swagger-ui-express";
import AuthRouter from "./AuthRouter";
import swaggerJsdoc = require("swagger-jsdoc");
import FileRouter from "./FileRouter";
import fileUpload = require("express-fileupload");
import ProvincedirectoryRouter from "./ProvincedirectoryRouter";
import UsersRouter from "./UsersRouter";
import SubcontinentdirectoryRouter from "./SubcontinentdirectoryRouter";
import ParishdirectoryRouter from "./ParishdirectoryRouter";
import RolesRouter from "./RolesRouter";
import RegiondirectoryRouter from "./RegiondirectoryRouter";
import PermissionsRouter from "./PermissionsRouter";
import ContinentdirectoryRouter from "./ContinentdirectoryRouter";

type NextFunction = express.NextFunction;
type Request = express.Request;
type Response = express.Response;

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
  const router: express.Router = express.Router();

  app.use(fileUpload());
  app.use(
    "/v1/provinceDirectory",
    jwtConfig.isAuthenticated,
    ProvincedirectoryRouter
  );
  app.use("/v1/users", jwtConfig.isAuthenticated, UsersRouter);
  app.use(
    "/v1/subContinentDirectory",
    jwtConfig.isAuthenticated,
    SubcontinentdirectoryRouter
  );
  app.use(
    "/v1/parishDirectory",
    jwtConfig.isAuthenticated,
    ParishdirectoryRouter
  );
  app.use("/v1/roles", jwtConfig.isAuthenticated, RolesRouter);
  app.use(
    "/v1/regionDirectory",
    jwtConfig.isAuthenticated,
    RegiondirectoryRouter
  );
  app.use("/v1/permissions", jwtConfig.isAuthenticated, PermissionsRouter);
  app.use(
    "/v1/continentDirectory",
    jwtConfig.isAuthenticated,
    ContinentdirectoryRouter
  );

  app.use("/v1/file", jwtConfig.isAuthenticated, FileRouter);
  /**
   * @description Forwards any requests to the /auth URI to our AuthRouter
   * @constructs
   */
  app.use("/auth", AuthRouter);

  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "rccgRemitance API",
        version: "1.0.0",
        description: "RCCG Remitance Auth and Directory API",
        license: {
          name: "www.rccg.org",
          url: "https://www.rccg.org",
        },
      },
      servers: [
        {
          url: "http://svr4242ww2.rccgportal.org:8484",
        },
        {
          url: "http://localhost:8484",
        },
      ],
    },
    apis: ["./**/*.ts"],
  };
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

  /**
   * @description No results returned mean the object is not found
   * @constructs
   */
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });

  /**
   * @constructs all routes
   */
  app.use(router);
}
