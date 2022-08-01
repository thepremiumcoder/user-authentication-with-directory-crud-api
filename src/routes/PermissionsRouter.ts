import { Router } from "express";
import { PermissionsComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/permissions
 *
 * @swagger
 * /v1/permissions:
 *   get:
 *     description: Get all stored permissions in Database
 *     tags: ["permissions"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of permissions
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/PermissionsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", PermissionsComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/permissions/search
 *
 * @swagger
 * /v1/permissions/search:
 *   post:
 *      description: Search permissions
 *      tags: ["permissions"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: permissions search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search permissions
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/PermissionsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/search", PermissionsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/permissions
 *
 * @swagger
 * /v1/permissions:
 *   post:
 *      description: Create new permissions
 *      tags: ["permissions"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: permissions creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PermissionsSchema'
 *      responses:
 *        201:
 *          description: return created permissions
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/PermissionsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/", PermissionsComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/permissions
 *
 * @swagger
 * /v1/permissions/{id}:
 *   post:
 *      description: Update permissions
 *      tags: ["permissions"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: permissions creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PermissionsSchema'
 *      responses:
 *        201:
 *          description: return updated permissions
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/PermissionsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/:id", PermissionsComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/permissions/:id
 *
 * @swagger
 * /v1/permissions/{id}:
 *  get:
 *    description: Get permissions by id
 *    tags: ["permissions"]
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
 *        description: return permissions by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/PermissionsSchema'
 */
router.get("/:id", PermissionsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/permissions/:id
 *
 * @swagger
 * /v1/permissions/{id}:
 *  delete:
 *    description: Delete permissions by id
 *    tags: ["permissions"]
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
 *        description: return deleted permissions
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/PermissionsSchema'
 */
router.delete("/:id", PermissionsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
