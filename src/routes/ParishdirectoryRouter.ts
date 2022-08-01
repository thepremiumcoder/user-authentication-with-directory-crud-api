import { Router } from "express";
import { ParishdirectoryComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/parishDirectory
 *
 * @swagger
 * /v1/parishDirectory:
 *   get:
 *     description: Get all stored parishDirectory in Database
 *     tags: ["parishDirectory"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of parishDirectory
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/ParishdirectorySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", ParishdirectoryComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/parishDirectory/search
 *
 * @swagger
 * /v1/parishDirectory/search:
 *   post:
 *      description: Search parishDirectory
 *      tags: ["parishDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: parishDirectory search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search parishDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ParishdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", ParishdirectoryComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/parishDirectory
 *
 * @swagger
 * /v1/parishDirectory:
 *   post:
 *      description: Create new parishDirectory
 *      tags: ["parishDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: parishDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ParishdirectorySchema'
 *      responses:
 *        201:
 *          description: return created parishDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ParishdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", ParishdirectoryComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/parishDirectory
 *
 * @swagger
 * /v1/parishDirectory/{id}:
 *   post:
 *      description: Update parishDirectory
 *      tags: ["parishDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: parishDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ParishdirectorySchema'
 *      responses:
 *        201:
 *          description: return updated parishDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ParishdirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", ParishdirectoryComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/parishDirectory/:id
 *
 * @swagger
 * /v1/parishDirectory/{id}:
 *  get:
 *    description: Get parishDirectory by id
 *    tags: ["parishDirectory"]
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
 *        description: return parishDirectory by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ParishdirectorySchema'
 */
router.get("/:id", ParishdirectoryComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/parishDirectory/:id
 *
 * @swagger
 * /v1/parishDirectory/{id}:
 *  delete:
 *    description: Delete parishDirectory by id
 *    tags: ["parishDirectory"]
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
 *        description: return deleted parishDirectory
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ParishdirectorySchema'
 */
router.delete("/:id", ParishdirectoryComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
