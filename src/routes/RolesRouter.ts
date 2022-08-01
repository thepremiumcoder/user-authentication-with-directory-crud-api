import { Router } from "express";
import { RolesComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/roles
 *
 * @swagger
 * /v1/roles:
 *   get:
 *     description: Get all stored roles in Database
 *     tags: ["roles"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of roles
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/RolesSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", RolesComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/roles/search
 *
 * @swagger
 * /v1/roles/search:
 *   post:
 *      description: Search roles
 *      tags: ["roles"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: roles search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search roles
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RolesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", RolesComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/roles
 *
 * @swagger
 * /v1/roles:
 *   post:
 *      description: Create new roles
 *      tags: ["roles"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: roles creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RolesSchema'
 *      responses:
 *        201:
 *          description: return created roles
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RolesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", RolesComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/roles
 *
 * @swagger
 * /v1/roles/{id}:
 *   post:
 *      description: Update roles
 *      tags: ["roles"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: roles creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RolesSchema'
 *      responses:
 *        201:
 *          description: return updated roles
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/RolesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", RolesComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/roles/:id
 *
 * @swagger
 * /v1/roles/{id}:
 *  get:
 *    description: Get roles by id
 *    tags: ["roles"]
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
 *        description: return roles by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/RolesSchema'
 */
router.get("/:id", RolesComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/roles/:id
 *
 * @swagger
 * /v1/roles/{id}:
 *  delete:
 *    description: Delete roles by id
 *    tags: ["roles"]
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
 *        description: return deleted roles
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/RolesSchema'
 */
router.delete("/:id", RolesComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
