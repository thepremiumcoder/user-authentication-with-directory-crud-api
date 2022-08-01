import { Router } from "express";
import { RegiondirectoryComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/regionDirectory
 *
 * @swagger
 * /v1/regionDirectory:
 *   get:
 *     description: Get all stored regionDirectory in Database
 *     tags: ["regionDirectory"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of regionDirectory
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/RegiondirectorySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", RegiondirectoryComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/regionDirectory/search
 *
 * @swagger
 * /v1/regionDirectory/search:
 *   post:
 *      description: Search regionDirectory
 *      tags: ["regionDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: regionDirectory search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search regionDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RegiondirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", RegiondirectoryComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/regionDirectory
 *
 * @swagger
 * /v1/regionDirectory:
 *   post:
 *      description: Create new regionDirectory
 *      tags: ["regionDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: regionDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegiondirectorySchema'
 *      responses:
 *        201:
 *          description: return created regionDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RegiondirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", RegiondirectoryComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/regionDirectory
 *
 * @swagger
 * /v1/regionDirectory/{id}:
 *   post:
 *      description: Update regionDirectory
 *      tags: ["regionDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: regionDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegiondirectorySchema'
 *      responses:
 *        201:
 *          description: return updated regionDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RegiondirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", RegiondirectoryComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/regionDirectory/:id
 *
 * @swagger
 * /v1/regionDirectory/{id}:
 *  get:
 *    description: Get regionDirectory by id
 *    tags: ["regionDirectory"]
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
 *        description: return regionDirectory by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/RegiondirectorySchema'
 */
router.get("/:id", RegiondirectoryComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/regionDirectory/:id
 *
 * @swagger
 * /v1/regionDirectory/{id}:
 *  delete:
 *    description: Delete regionDirectory by id
 *    tags: ["regionDirectory"]
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
 *        description: return deleted regionDirectory
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/RegiondirectorySchema'
 */
router.delete("/:id", RegiondirectoryComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
