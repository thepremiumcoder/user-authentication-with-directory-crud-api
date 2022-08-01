import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IPermissionsRequest
 */
export interface IPermissionsRequest {
  sn: String;
  name: String;
  slug: String;
  guard_name: String;
  role: String;
  removable: Number;
  deletedAt: String;
}

/**
 * @export
 * @interface IPermissionsModel
 * @extends {Document}
 */
export interface IPermissionsModel extends Document {
  sn: String;
  name: String;
  slug: String;
  guard_name: String;
  role: String;
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
*        -guard_name
*        -role
*        -removable
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        name:
*          type: String
*        slug:
*          type: String
*        guard_name:
*          type: String
*        role:
*          type: String
*        removable:
*          type: Number
*        deletedAt:
*          type: String

 *    Permissions:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/PermissionsSchema'
 */
const PermissionsSchema: Schema = new Schema(
  {
    sn: String,
    name: { type: String, unique: "Duplicate Permission Name ({VALUE})" },
    slug: { type: String, unique: "Duplicate Permission Slug ({VALUE})" },
    guard_name: String,
    role: String,
    removable: Number,
    deletedAt: String,
  },
  {
    collection: "permissions",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const permissions: any = this; // tslint:disable-line
  //do any customization of request on permissions here like encrypting password before saving
});

PermissionsSchema.plugin(beautifyUnique);

export default connections.db.model<IPermissionsModel>(
  "PermissionsModel",
  PermissionsSchema
);
