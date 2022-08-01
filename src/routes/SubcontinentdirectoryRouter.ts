import { Router } from "express";
import { SubcontinentdirectoryComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/subContinentDirectory
 *
 * @swagger
 * /v1/subContinentDirectory:
 *   get:
 *     description: Get all stored subContinentDirectory in Database
 *     tags: ["subContinentDirectory"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of subContinentDirectory
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/SubcontinentdirectorySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", SubcontinentdirectoryComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/subContinentDirectory/search
 *
 * @swagger
 * /v1/subContinentDirectory/search:
 *   post:
 *      description: Search subContinentDirectory
 *      tags: ["subContinentDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: subContinentDirectory search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search subContinentDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SubcontinentdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", SubcontinentdirectoryComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/subContinentDirectory
 *
 * @swagger
 * /v1/subContinentDirectory:
 *   post:
 *      description: Create new subContinentDirectory
 *      tags: ["subContinentDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: subContinentDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SubcontinentdirectorySchema'
 *      responses:
 *        201:
 *          description: return created subContinentDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SubcontinentdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", SubcontinentdirectoryComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/subContinentDirectory
 *
 * @swagger
 * /v1/subContinentDirectory/{id}:
 *   post:
 *      description: Update subContinentDirectory
 *      tags: ["subContinentDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: subContinentDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SubcontinentdirectorySchema'
 *      responses:
 *        201:
 *          description: return updated subContinentDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/SubcontinentdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", SubcontinentdirectoryComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/subContinentDirectory/:id
 *
 * @swagger
 * /v1/subContinentDirectory/{id}:
 *  get:
 *    description: Get subContinentDirectory by id
 *    tags: ["subContinentDirectory"]
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
 *        description: return subContinentDirectory by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/SubcontinentdirectorySchema'
 */
router.get("/:id", SubcontinentdirectoryComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/subContinentDirectory/:id
 *
 * @swagger
 * /v1/subContinentDirectory/{id}:
 *  delete:
 *    description: Delete subContinentDirectory by id
 *    tags: ["subContinentDirectory"]
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
 *        description: return deleted subContinentDirectory
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/SubcontinentdirectorySchema'
 */
router.delete("/:id", SubcontinentdirectoryComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
