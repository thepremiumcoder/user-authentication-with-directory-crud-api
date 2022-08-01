import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IRegiondirectoryRequest
 */
export interface IRegiondirectoryRequest {
  sn: String;
  regionName: String;
  regionAlias: String;
  regionCode: String;
  subContinentName: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  hierachy: String;
  hierachyCode: Number;
  schq: Number;
  chq: Number;
  status: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  regionPhoneNumner: String;
  regionEmail: String;
  currency: String;
  language: String;
  isYouthRegion: Number;
  picRegionName: String;
  picRegionPhone: String;
  picRegionEmail: String;
  apicrAdminName: String;
  apicrAdminPhone: String;
  apicrAdminEmail: String;
  apicrCsrName: String;
  apicrCsrPhone: String;
  apicrCsrEmail: String;
  regionAdminOfficerName: String;
  regionAdminOfficerPhone: String;
  regionAdminOfficerEmail: String;
  regionAssistantAdminOfficerName: String;
  regionAssistantAdminOfficerPhone: String;
  regionAssistantAdminOfficerEmail: String;
  regionAccountantName: String;
  regionAccountantPhone: String;
  regionAccountantEmail: String;
  regionAssistantAccountantName: String;
  regionAssistantAccountantPhone: String;
  regionAssistantAccountantEmail: String;
  regionBankName: String;
  regionAccountNo: Number;
  regionAccountName: String;
  deletedAt: String;
}

/**
 * @export
 * @interface IRegiondirectoryModel
 * @extends {Document}
 */
export interface IRegiondirectoryModel extends Document {
  sn: String;
  regionName: String;
  regionAlias: String;
  regionCode: String;
  subContinentName: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  hierachy: String;
  hierachyCode: Number;
  schq: Number;
  chq: Number;
  status: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  regionPhoneNumner: String;
  regionEmail: String;
  currency: String;
  language: String;
  isYouthRegion: Number;
  picRegionName: String;
  picRegionPhone: String;
  picRegionEmail: String;
  apicrAdminName: String;
  apicrAdminPhone: String;
  apicrAdminEmail: String;
  apicrCsrName: String;
  apicrCsrPhone: String;
  apicrCsrEmail: String;
  regionAdminOfficerName: String;
  regionAdminOfficerPhone: String;
  regionAdminOfficerEmail: String;
  regionAssistantAdminOfficerName: String;
  regionAssistantAdminOfficerPhone: String;
  regionAssistantAdminOfficerEmail: String;
  regionAccountantName: String;
  regionAccountantPhone: String;
  regionAccountantEmail: String;
  regionAssistantAccountantName: String;
  regionAssistantAccountantPhone: String;
  regionAssistantAccountantEmail: String;
  regionBankName: String;
  regionAccountNo: Number;
  regionAccountName: String;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -regionName
*        -regionAlias
*        -regionCode
*        -subContinentName
*        -subContinentCode
*        -continentName
*        -continentCode
*        -hierachy
*        -hierachyCode
*        -schq
*        -chq
*        -status
*        -address
*        -city
*        -state
*        -country
*        -postalCode
*        -stateCounty
*        -landmark
*        -regionPhoneNumner
*        -regionEmail
*        -currency
*        -language
*        -isYouthRegion
*        -picRegionName
*        -picRegionPhone
*        -picRegionEmail
*        -apicrAdminName
*        -apicrAdminPhone
*        -apicrAdminEmail
*        -apicrCsrName
*        -apicrCsrPhone
*        -apicrCsrEmail
*        -regionAdminOfficerName
*        -regionAdminOfficerPhone
*        -regionAdminOfficerEmail
*        -regionAssistantAdminOfficerName
*        -regionAssistantAdminOfficerPhone
*        -regionAssistantAdminOfficerEmail
*        -regionAccountantName
*        -regionAccountantPhone
*        -regionAccountantEmail
*        -regionAssistantAccountantName
*        -regionAssistantAccountantPhone
*        -regionAssistantAccountantEmail
*        -regionBankName
*        -regionAccountNo
*        -regionAccountName
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        regionName:
*          type: String
*        regionAlias:
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
*        schq:
*          type: Number
*        chq:
*          type: Number
*        status:
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
*        regionPhoneNumner:
*          type: String
*        regionEmail:
*          type: String
*        currency:
*          type: String
*        language:
*          type: String
*        isYouthRegion:
*          type: Number
*        picRegionName:
*          type: String
*        picRegionPhone:
*          type: String
*        picRegionEmail:
*          type: String
*        apicrAdminName:
*          type: String
*        apicrAdminPhone:
*          type: String
*        apicrAdminEmail:
*          type: String
*        apicrCsrName:
*          type: String
*        apicrCsrPhone:
*          type: String
*        apicrCsrEmail:
*          type: String
*        regionAdminOfficerName:
*          type: String
*        regionAdminOfficerPhone:
*          type: String
*        regionAdminOfficerEmail:
*          type: String
*        regionAssistantAdminOfficerName:
*          type: String
*        regionAssistantAdminOfficerPhone:
*          type: String
*        regionAssistantAdminOfficerEmail:
*          type: String
*        regionAccountantName:
*          type: String
*        regionAccountantPhone:
*          type: String
*        regionAccountantEmail:
*          type: String
*        regionAssistantAccountantName:
*          type: String
*        regionAssistantAccountantPhone:
*          type: String
*        regionAssistantAccountantEmail:
*          type: String
*        regionBankName:
*          type: String
*        regionAccountNo:
*          type: Number
*        regionAccountName:
*          type: String
*        deletedAt:
*          type: String

 *    Regiondirectory:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/RegiondirectorySchema'
 */
const RegiondirectorySchema: Schema = new Schema(
  {
    sn: String,
    regionName: { type: String, unique: "Duplicate Region Name ({VALUE})" },
    regionAlias: { type: String, unique: "Duplicate Region Alias ({VALUE})" },
    regionCode: { type: String, unique: "Duplicate Region Code ({VALUE})" },
    subContinentName: String,
    subContinentCode: String,
    continentName: String,
    continentCode: String,
    hierachy: String,
    hierachyCode: Number,
    schq: Number,
    chq: Number,
    status: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    stateCounty: String,
    landmark: String,
    regionPhoneNumner: String,
    regionEmail: String,
    currency: String,
    language: String,
    isYouthRegion: Number,
    picRegionName: String,
    picRegionPhone: String,
    picRegionEmail: String,
    apicrAdminName: String,
    apicrAdminPhone: String,
    apicrAdminEmail: String,
    apicrCsrName: String,
    apicrCsrPhone: String,
    apicrCsrEmail: String,
    regionAdminOfficerName: String,
    regionAdminOfficerPhone: String,
    regionAdminOfficerEmail: String,
    regionAssistantAdminOfficerName: String,
    regionAssistantAdminOfficerPhone: String,
    regionAssistantAdminOfficerEmail: String,
    regionAccountantName: String,
    regionAccountantPhone: String,
    regionAccountantEmail: String,
    regionAssistantAccountantName: String,
    regionAssistantAccountantPhone: String,
    regionAssistantAccountantEmail: String,
    regionBankName: String,
    regionAccountNo: Number,
    regionAccountName: String,
    deletedAt: String,
  },
  {
    collection: "regionDirectory",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const regionDirectory: any = this; // tslint:disable-line
  //do any customization of request on regionDirectory here like encrypting password before saving
});

RegiondirectorySchema.plugin(beautifyUnique);

export default connections.db.model<IRegiondirectoryModel>(
  "RegiondirectoryModel",
  RegiondirectorySchema
);
