import { Router } from "express";
import { ContinentdirectoryComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/continentDirectory
 *
 * @swagger
 * /v1/continentDirectory:
 *   get:
 *     description: Get all stored continentDirectory in Database
 *     tags: ["continentDirectory"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of continentDirectory
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/ContinentdirectorySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", ContinentdirectoryComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/continentDirectory/search
 *
 * @swagger
 * /v1/continentDirectory/search:
 *   post:
 *      description: Search continentDirectory
 *      tags: ["continentDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: continentDirectory search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search continentDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ContinentdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", ContinentdirectoryComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/continentDirectory
 *
 * @swagger
 * /v1/continentDirectory:
 *   post:
 *      description: Create new continentDirectory
 *      tags: ["continentDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: continentDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ContinentdirectorySchema'
 *      responses:
 *        201:
 *          description: return created continentDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ContinentdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", ContinentdirectoryComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/continentDirectory
 *
 * @swagger
 * /v1/continentDirectory/{id}:
 *   post:
 *      description: Update continentDirectory
 *      tags: ["continentDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: continentDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ContinentdirectorySchema'
 *      responses:
 *        201:
 *          description: return updated continentDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ContinentdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", ContinentdirectoryComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/continentDirectory/:id
 *
 * @swagger
 * /v1/continentDirectory/{id}:
 *  get:
 *    description: Get continentDirectory by id
 *    tags: ["continentDirectory"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return continentDirectory by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ContinentdirectorySchema'
 */
router.get("/:id", ContinentdirectoryComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/continentDirectory/:id
 *
 * @swagger
 * /v1/continentDirectory/{id}:
 *  delete:
 *    description: Delete continentDirectory by id
 *    tags: ["continentDirectory"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted continentDirectory
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ContinentdirectorySchema'
 */
router.delete("/:id", ContinentdirectoryComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
