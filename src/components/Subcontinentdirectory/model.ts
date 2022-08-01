import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface ISubcontinentdirectoryRequest
 */
export interface ISubcontinentdirectoryRequest {
  sn: String;
  subContinentName: String;
  subContinentAlias: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  chq: Number;
  status: Number;
  hierachy: String;
  hierachyCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  currency: String;
  language: String;
  subContinentOverseer: String;
  subContinentOverseerEmail: String;
  subContinentOverseerPhone: String;
  regional_pastor: String;
  rgEmail: String;
  rgPhone: String;
  assistantSubContinentOverseer: String;
  ascoEmail: String;
  ascoPhone: String;
  deputySubContinentOverseer: String;
  dscoPhone: String;
  dscoEmail: String;
  specialAsstAsco: String;
  specialAsstAscoEmail: String;
  specialAsstAscoPhone: String;
  deletedAt: String;
}

/**
 * @export
 * @interface ISubcontinentdirectoryModel
 * @extends {Document}
 */
export interface ISubcontinentdirectoryModel extends Document {
  sn: String;
  subContinentName: String;
  subContinentAlias: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  chq: Number;
  status: Number;
  hierachy: String;
  hierachyCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  currency: String;
  language: String;
  subContinentOverseer: String;
  subContinentOverseerEmail: String;
  subContinentOverseerPhone: String;
  regional_pastor: String;
  rgEmail: String;
  rgPhone: String;
  assistantSubContinentOverseer: String;
  ascoEmail: String;
  ascoPhone: String;
  deputySubContinentOverseer: String;
  dscoPhone: String;
  dscoEmail: String;
  specialAsstAsco: String;
  specialAsstAscoEmail: String;
  specialAsstAscoPhone: String;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -subContinentName
*        -subContinentAlias
*        -subContinentCode
*        -continentName
*        -continentCode
*        -chq
*        -status
*        -hierachy
*        -hierachyCode
*        -address
*        -city
*        -state
*        -country
*        -postalCode
*        -stateCounty
*        -landmark
*        -currency
*        -language
*        -subContinentOverseer
*        -subContinentOverseerEmail
*        -subContinentOverseerPhone
*        -regional_pastor
*        -rgEmail
*        -rgPhone
*        -assistantSubContinentOverseer
*        -ascoEmail
*        -ascoPhone
*        -deputySubContinentOverseer
*        -dscoPhone
*        -dscoEmail
*        -specialAsstAsco
*        -specialAsstAscoEmail
*        -specialAsstAscoPhone
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        subContinentName:
*          type: String
*        subContinentAlias:
*          type: String
*        subContinentCode:
*          type: String
*        continentName:
*          type: String
*        continentCode:
*          type: String
*        chq:
*          type: Number
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
*        landmark:
*          type: String
*        currency:
*          type: String
*        language:
*          type: String
*        subContinentOverseer:
*          type: String
*        subContinentOverseerEmail:
*          type: String
*        subContinentOverseerPhone:
*          type: String
*        regional_pastor:
*          type: String
*        rgEmail:
*          type: String
*        rgPhone:
*          type: String
*        assistantSubContinentOverseer:
*          type: String
*        ascoEmail:
*          type: String
*        ascoPhone:
*          type: String
*        deputySubContinentOverseer:
*          type: String
*        dscoPhone:
*          type: String
*        dscoEmail:
*          type: String
*        specialAsstAsco:
*          type: String
*        specialAsstAscoEmail:
*          type: String
*        specialAsstAscoPhone:
*          type: String
*        deletedAt:
*          type: String

 *    Subcontinentdirectory:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/SubcontinentdirectorySchema'
 */
const SubcontinentdirectorySchema: Schema = new Schema(
  {
    sn: String,
    subContinentName: {
      type: String,
      unique: "Duplicate Sub-Continent Name ({VALUE})",
    },
    subContinentAlias: {
      type: String,
      unique: "Duplicate Sub-Continent Alias ({VALUE})",
    },
    subContinentCode: {
      type: String,
      unique: "Duplicate Sub-Continent Code ({VALUE})",
    },
    continentName: String,
    continentCode: String,
    chq: Number,
    status: Number,
    hierachy: String,
    hierachyCode: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    stateCounty: String,
    landmark: String,
    currency: String,
    language: String,
    subContinentOverseer: String,
    subContinentOverseerEmail: String,
    subContinentOverseerPhone: String,
    regional_pastor: String,
    rgEmail: String,
    rgPhone: String,
    assistantSubContinentOverseer: String,
    ascoEmail: String,
    ascoPhone: String,
    deputySubContinentOverseer: String,
    dscoPhone: String,
    dscoEmail: String,
    specialAsstAsco: String,
    specialAsstAscoEmail: String,
    specialAsstAscoPhone: String,
    deletedAt: String,
  },
  {
    collection: "subContinentDirectory",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const subContinentDirectory: any = this; // tslint:disable-line
  //do any customization of request on subContinentDirectory here like encrypting password before saving
});

SubcontinentdirectorySchema.plugin(beautifyUnique);

export default connections.db.model<ISubcontinentdirectoryModel>(
  "SubcontinentdirectoryModel",
  SubcontinentdirectorySchema
);
