import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IRolesRequest
 */
export interface IRolesRequest {
  sn: String;
  name: String;
  slug: String;
  description: String;
  level: Number;
  permissions: String;
  weight: Number;
  removable: Number;
  deletedAt: String;
}

/**
 * @export
 * @interface IRolesModel
 * @extends {Document}
 */
export interface IRolesModel extends Document {
  sn: String;
  name: String;
  slug: String;
  description: String;
  level: Number;
  permissions: String;
  weight: Number;
  removable: Number;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -name
*        -slug
*        -description
*        -level
*        -permissions
*        -weight
*        -removable
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        name:
*          type: String
*        slug:
*          type: String
*        description:
*          type: String
*        level:
*          type: Number
*        permissions:
*          type: String
*        weight:
*          type: Number
*        removable:
*          type: Number
*        deletedAt:
*          type: String

 *    Roles:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/RolesSchema'
 */
const RolesSchema: Schema = new Schema(
  {
    sn: String,
    name: { type: String, unique: "Duplicate Role Name ({VALUE})" },
    slug: { type: String, unique: "Duplicate Role Slug ({VALUE})" },
    description: String,
    level: Number,
    permissions: String,
    weight: Number,
    removable: Number,
    deletedAt: String,
  },
  {
    collection: "roles",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const roles: any = this; // tslint:disable-line
  //do any customization of request on roles here like encrypting password before saving
});

RolesSchema.plugin(beautifyUnique);

export default connections.db.model<IRolesModel>("RolesModel", RolesSchema);
