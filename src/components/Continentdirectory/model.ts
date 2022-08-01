import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IContinentdirectoryRequest
 */
export interface IContinentdirectoryRequest {
  sn: String;
  continentName: String;
  continentAlias: String;
  continentCode: String;
  status: Number;
  hierachy: String;
  hierachyCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  currency: String;
  language: String;
  continentOverseer: String;
  continentOverseerEmail: String;
  continentOverseerPhone: String;
  regional_pastor: String;
  rgEmail: String;
  rgPhone: String;
  assistantContinentOverseer: String;
  acoEmail: String;
  acoPhone: String;
  deputyContinentOverseer: String;
  dcoPhone: String;
  dcoEmail: String;
  specialAsstAco: String;
  specialAsstAcoEmail: String;
  specialAsstAcoPhone: String;
  deletedAt: String;
}

/**
 * @export
 * @interface IContinentdirectoryModel
 * @extends {Document}
 */
export interface IContinentdirectoryModel extends Document {
  sn: String;
  continentName: String;
  continentAlias: String;
  continentCode: String;
  status: Number;
  hierachy: String;
  hierachyCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  currency: String;
  language: String;
  continentOverseer: String;
  continentOverseerEmail: String;
  continentOverseerPhone: String;
  regional_pastor: String;
  rgEmail: String;
  rgPhone: String;
  assistantContinentOverseer: String;
  acoEmail: String;
  acoPhone: String;
  deputyContinentOverseer: String;
  dcoPhone: String;
  dcoEmail: String;
  specialAsstAco: String;
  specialAsstAcoEmail: String;
  specialAsstAcoPhone: String;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -continentName
*        -continentAlias
*        -continentCode
*        -status
*        -hierachy
*        -hierachyCode
*        -address
*        -city
*        -state
*        -country
*        -postalCode
*        -stateCounty
*        -currency
*        -language
*        -continentOverseer
*        -continentOverseerEmail
*        -continentOverseerPhone
*        -regional_pastor
*        -rgEmail
*        -rgPhone
*        -assistantContinentOverseer
*        -acoEmail
*        -acoPhone
*        -deputyContinentOverseer
*        -dcoPhone
*        -dcoEmail
*        -specialAsstAco
*        -specialAsstAcoEmail
*        -specialAsstAcoPhone
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        continentName:
*          type: String
*        continentAlias:
*          type: String
*        continentCode:
*          type: String
*        status:
*          type: Number
*        hierachy:
*          type: String
*        hierachyCode:
*          type: Number
*        address:
*          type: String
*        city:
*          type: String
*        state:
*          type: String
*        country:
*          type: String
*        postalCode:
*          type: String
*        stateCounty:
*          type: String
*        currency:
*          type: String
*        language:
*          type: String
*        continentOverseer:
*          type: String
*        continentOverseerEmail:
*          type: String
*        continentOverseerPhone:
*          type: String
*        regional_pastor:
*          type: String
*        rgEmail:
*          type: String
*        rgPhone:
*          type: String
*        assistantContinentOverseer:
*          type: String
*        acoEmail:
*          type: String
*        acoPhone:
*          type: String
*        deputyContinentOverseer:
*          type: String
*        dcoPhone:
*          type: String
*        dcoEmail:
*          type: String
*        specialAsstAco:
*          type: String
*        specialAsstAcoEmail:
*          type: String
*        specialAsstAcoPhone:
*          type: String
*        deletedAt:
*          type: String

 *    Continentdirectory:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ContinentdirectorySchema'
 */
const ContinentdirectorySchema: Schema = new Schema(
  {
    sn: String,
    continentName: {
      type: String,
      unique: "Duplicate Continent Name ({VALUE})",
    },
    continentAlias: {
      type: String,
      unique: "Duplicate Continent Alias ({VALUE})",
    },
    continentCode: {
      type: String,
      unique: "Duplicate Continent Code ({VALUE})",
    },
    status: Number,
    hierachy: String,
    hierachyCode: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    stateCounty: String,
    currency: String,
    language: String,
    continentOverseer: String,
    continentOverseerEmail: String,
    continentOverseerPhone: String,
    regional_pastor: String,
    rgEmail: String,
    rgPhone: String,
    assistantContinentOverseer: String,
    acoEmail: String,
    acoPhone: String,
    deputyContinentOverseer: String,
    dcoPhone: String,
    dcoEmail: String,
    specialAsstAco: String,
    specialAsstAcoEmail: String,
    specialAsstAcoPhone: String,
    deletedAt: String,
  },
  {
    collection: "continentDirectory",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const continentDirectory: any = this; // tslint:disable-line
  //do any customization of request on continentDirectory here like encrypting password before saving
});

ContinentdirectorySchema.plugin(beautifyUnique);

export default connections.db.model<IContinentdirectoryModel>(
  "ContinentdirectoryModel",
  ContinentdirectorySchema
);
