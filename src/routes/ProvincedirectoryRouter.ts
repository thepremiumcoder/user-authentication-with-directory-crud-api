import { Router } from "express";
import { ProvincedirectoryComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/provinceDirectory
 *
 * @swagger
 * /v1/provinceDirectory:
 *   get:
 *     description: Get all stored provinceDirectory in Database
 *     tags: ["provinceDirectory"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of provinceDirectory
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/ProvincedirectorySchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", ProvincedirectoryComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/provinceDirectory/search
 *
 * @swagger
 * /v1/provinceDirectory/search:
 *   post:
 *      description: Search provinceDirectory
 *      tags: ["provinceDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: provinceDirectory search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search provinceDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ProvincedirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", ProvincedirectoryComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/provinceDirectory
 *
 * @swagger
 * /v1/provinceDirectory:
 *   post:
 *      description: Create new provinceDirectory
 *      tags: ["provinceDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: provinceDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProvincedirectorySchema'
 *      responses:
 *        201:
 *          description: return created provinceDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ProvincedirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", ProvincedirectoryComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/provinceDirectory
 *
 * @swagger
 * /v1/provinceDirectory/{id}:
 *   post:
 *      description: Update provinceDirectory
 *      tags: ["provinceDirectory"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: provinceDirectory creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProvincedirectorySchema'
 *      responses:
 *        201:
 *          description: return updated provinceDirectory
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ProvincedirectorySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", ProvincedirectoryComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/provinceDirectory/:id
 *
 * @swagger
 * /v1/provinceDirectory/{id}:
 *  get:
 *    description: Get provinceDirectory by id
 *    tags: ["provinceDirectory"]
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
 *        description: return provinceDirectory by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ProvincedirectorySchema'
 */
router.get("/:id", ProvincedirectoryComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/provinceDirectory/:id
 *
 * @swagger
 * /v1/provinceDirectory/{id}:
 *  delete:
 *    description: Delete provinceDirectory by id
 *    tags: ["provinceDirectory"]
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
 *        description: return deleted provinceDirectory
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ProvincedirectorySchema'
 */
router.delete("/:id", ProvincedirectoryComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
