import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IProvincedirectoryRequest
 */
export interface IProvincedirectoryRequest {
  sn: String;
  provinceName: String;
  provinceAlias: String;
  provinceCode: String;
  regionName: String;
  regionCode: String;
  subContinentName: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  hierachy: String;
  hierachyCode: Number;
  rhq: Number;
  schq: Number;
  chq: Number;
  status: Number;
  startZoneCode: String;
  startAreaCode: String;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  provincePhoneNumner: String;
  provinceEmail: String;
  currency: String;
  language: String;
  isYouthProvince: Number;
  picName: String;
  picPhone: String;
  picEmail: String;
  apicpAdminName: String;
  apicpAdminPhone: String;
  apicpAdminEmail: String;
  apicpCsrName: String;
  apicpCsrPhone: String;
  apicpCsrEmail: String;
  provinceAdminOfficerName: String;
  provinceAdminOfficerPhone: String;
  provinceAdminOfficerEmail: String;
  provinceAssistantAdminOfficerName: String;
  provinceAssistantAdminOfficerPhone: String;
  provinceAssistantAdminOfficerEmail: String;
  provinceAccountantName: String;
  provinceAccountantPhone: String;
  provinceAccountantEmail: String;
  provinceAssistantAccountantName: String;
  provinceAssistantAccountantPhone: String;
  provinceAssistantAccountantEmail: String;
  provinceBankName: String;
  provinceAccountNo: Number;
  provinceAccountName: String;
  deletedAt: String;
}

/**
 * @export
 * @interface IProvincedirectoryModel
 * @extends {Document}
 */
export interface IProvincedirectoryModel extends Document {
  sn: String;
  provinceName: String;
  provinceAlias: String;
  provinceCode: String;
  regionName: String;
  regionCode: String;
  subContinentName: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  hierachy: String;
  hierachyCode: Number;
  rhq: Number;
  schq: Number;
  chq: Number;
  status: Number;
  startZoneCode: String;
  startAreaCode: String;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  provincePhoneNumner: String;
  provinceEmail: String;
  currency: String;
  language: String;
  isYouthProvince: Number;
  picName: String;
  picPhone: String;
  picEmail: String;
  apicpAdminName: String;
  apicpAdminPhone: String;
  apicpAdminEmail: String;
  apicpCsrName: String;
  apicpCsrPhone: String;
  apicpCsrEmail: String;
  provinceAdminOfficerName: String;
  provinceAdminOfficerPhone: String;
  provinceAdminOfficerEmail: String;
  provinceAssistantAdminOfficerName: String;
  provinceAssistantAdminOfficerPhone: String;
  provinceAssistantAdminOfficerEmail: String;
  provinceAccountantName: String;
  provinceAccountantPhone: String;
  provinceAccountantEmail: String;
  provinceAssistantAccountantName: String;
  provinceAssistantAccountantPhone: String;
  provinceAssistantAccountantEmail: String;
  provinceBankName: String;
  provinceAccountNo: Number;
  provinceAccountName: String;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -provinceName
*        -provinceAlias
*        -provinceCode
*        -regionName
*        -regionCode
*        -subContinentName
*        -subContinentCode
*        -continentName
*        -continentCode
*        -hierachy
*        -hierachyCode
*        -rhq
*        -schq
*        -chq
*        -status
*        -startZoneCode
*        -startAreaCode
*        -address
*        -city
*        -state
*        -country
*        -postalCode
*        -stateCounty
*        -landmark
*        -provincePhoneNumner
*        -provinceEmail
*        -currency
*        -language
*        -isYouthProvince
*        -picName
*        -picPhone
*        -picEmail
*        -apicpAdminName
*        -apicpAdminPhone
*        -apicpAdminEmail
*        -apicpCsrName
*        -apicpCsrPhone
*        -apicpCsrEmail
*        -provinceAdminOfficerName
*        -provinceAdminOfficerPhone
*        -provinceAdminOfficerEmail
*        -provinceAssistantAdminOfficerName
*        -provinceAssistantAdminOfficerPhone
*        -provinceAssistantAdminOfficerEmail
*        -provinceAccountantName
*        -provinceAccountantPhone
*        -provinceAccountantEmail
*        -provinceAssistantAccountantName
*        -provinceAssistantAccountantPhone
*        -provinceAssistantAccountantEmail
*        -provinceBankName
*        -provinceAccountNo
*        -provinceAccountName
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        provinceName:
*          type: String
*        provinceAlias:
*          type: String
*        provinceCode:
*          type: String
*        regionName:
*          type: String
*        regionCode:
*          type: String
*        subContinentName:
*          type: String
*        subContinentCode:
*          type: String
*        continentName:
*          type: String
*        continentCode:
*          type: String
*        hierachy:
*          type: String
*        hierachyCode:
*          type: Number
*        rhq:
*          type: Number
*        schq:
*          type: Number
*        chq:
*          type: Number
*        status:
*          type: Number
*        startZoneCode:
*          type: String
*        startAreaCode:
*          type: String
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
*        provincePhoneNumner:
*          type: String
*        provinceEmail:
*          type: String
*        currency:
*          type: String
*        language:
*          type: String
*        isYouthProvince:
*          type: Number
*        picName:
*          type: String
*        picPhone:
*          type: String
*        picEmail:
*          type: String
*        apicpAdminName:
*          type: String
*        apicpAdminPhone:
*          type: String
*        apicpAdminEmail:
*          type: String
*        apicpCsrName:
*          type: String
*        apicpCsrPhone:
*          type: String
*        apicpCsrEmail:
*          type: String
*        provinceAdminOfficerName:
*          type: String
*        provinceAdminOfficerPhone:
*          type: String
*        provinceAdminOfficerEmail:
*          type: String
*        provinceAssistantAdminOfficerName:
*          type: String
*        provinceAssistantAdminOfficerPhone:
*          type: String
*        provinceAssistantAdminOfficerEmail:
*          type: String
*        provinceAccountantName:
*          type: String
*        provinceAccountantPhone:
*          type: String
*        provinceAccountantEmail:
*          type: String
*        provinceAssistantAccountantName:
*          type: String
*        provinceAssistantAccountantPhone:
*          type: String
*        provinceAssistantAccountantEmail:
*          type: String
*        provinceBankName:
*          type: String
*        provinceAccountNo:
*          type: Number
*        provinceAccountName:
*          type: String
*        deletedAt:
*          type: String

 *    Provincedirectory:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ProvincedirectorySchema'
 */
const ProvincedirectorySchema: Schema = new Schema(
  {
    sn: String,
    provinceName: { type: String, unique: "Duplicate Province Name ({VALUE})" },
    provinceAlias: {
      type: String,
      unique: "Duplicate Province Alias ({VALUE})",
    },
    provinceCode: { type: String, unique: "Duplicate Province Code ({VALUE})" },
    regionName: String,
    regionCode: String,
    subContinentName: String,
    subContinentCode: String,
    continentName: String,
    continentCode: String,
    hierachy: String,
    hierachyCode: Number,
    rhq: Number,
    schq: Number,
    chq: Number,
    status: Number,
    startZoneCode: String,
    startAreaCode: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    stateCounty: String,
    landmark: String,
    provincePhoneNumner: String,
    provinceEmail: String,
    currency: String,
    language: String,
    isYouthProvince: Number,
    picName: String,
    picPhone: String,
    picEmail: String,
    apicpAdminName: String,
    apicpAdminPhone: String,
    apicpAdminEmail: String,
    apicpCsrName: String,
    apicpCsrPhone: String,
    apicpCsrEmail: String,
    provinceAdminOfficerName: String,
    provinceAdminOfficerPhone: String,
    provinceAdminOfficerEmail: String,
    provinceAssistantAdminOfficerName: String,
    provinceAssistantAdminOfficerPhone: String,
    provinceAssistantAdminOfficerEmail: String,
    provinceAccountantName: String,
    provinceAccountantPhone: String,
    provinceAccountantEmail: String,
    provinceAssistantAccountantName: String,
    provinceAssistantAccountantPhone: String,
    provinceAssistantAccountantEmail: String,
    provinceBankName: String,
    provinceAccountNo: Number,
    provinceAccountName: String,
    deletedAt: String,
  },
  {
    collection: "provinceDirectory",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const provinceDirectory: any = this; // tslint:disable-line
  //do any customization of request on provinceDirectory here like encrypting password before saving
});

ProvincedirectorySchema.plugin(beautifyUnique);

export default connections.db.model<IProvincedirectoryModel>(
  "ProvincedirectoryModel",
  ProvincedirectorySchema
);
