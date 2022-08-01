import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IParishdirectoryRequest
 */
export interface IParishdirectoryRequest {
  sn: String;
  parishName: String;
  parishType: String;
  parishCode: String;
  areaName: String;
  areaCode: String;
  zoneName: String;
  zoneCode: String;
  provinceName: String;
  provinceCode: String;
  regionName: String;
  regionCode: String;
  subContinentName: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  status: Number;
  ahq: Number;
  zhq: Number;
  phq: Number;
  rhq: Number;
  schq: Number;
  chq: Number;
  hierachy: String;
  hierachyCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  parishPhoneNumner: String;
  parishEmail: String;
  currency: String;
  language: String;
  longitude: String;
  latitude: String;
  isYouthParish: Number;
  propertyStatus: String;
  dateEstablished: String;
  parishPastorName: String;
  parishPastorPhone: String;
  parishPastorEmail: String;
  assistantParishPastorName: String;
  assistantParishPastorPhone: String;
  assistantParishPastorEmail: String;
  parishAdminOfficerName: String;
  parishAdminOfficerPhone: String;
  parishAdminOfficerEmail: String;
  parishAccountantName: String;
  parishAccountantPhone: String;
  parishAccountantEmail: String;
  parishBankName: String;
  parishAccountNo: Number;
  parishAccountName: String;
  deletedAt: String;
}

/**
 * @export
 * @interface IParishdirectoryModel
 * @extends {Document}
 */
export interface IParishdirectoryModel extends Document {
  sn: String;
  parishName: String;
  parishType: String;
  parishCode: String;
  areaName: String;
  areaCode: String;
  zoneName: String;
  zoneCode: String;
  provinceName: String;
  provinceCode: String;
  regionName: String;
  regionCode: String;
  subContinentName: String;
  subContinentCode: String;
  continentName: String;
  continentCode: String;
  status: Number;
  ahq: Number;
  zhq: Number;
  phq: Number;
  rhq: Number;
  schq: Number;
  chq: Number;
  hierachy: String;
  hierachyCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  landmark: String;
  parishPhoneNumner: String;
  parishEmail: String;
  currency: String;
  language: String;
  longitude: String;
  latitude: String;
  isYouthParish: Number;
  propertyStatus: String;
  dateEstablished: String;
  parishPastorName: String;
  parishPastorPhone: String;
  parishPastorEmail: String;
  assistantParishPastorName: String;
  assistantParishPastorPhone: String;
  assistantParishPastorEmail: String;
  parishAdminOfficerName: String;
  parishAdminOfficerPhone: String;
  parishAdminOfficerEmail: String;
  parishAccountantName: String;
  parishAccountantPhone: String;
  parishAccountantEmail: String;
  parishBankName: String;
  parishAccountNo: Number;
  parishAccountName: String;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -parishName
*        -parishType
*        -parishCode
*        -areaName
*        -areaCode
*        -zoneName
*        -zoneCode
*        -provinceName
*        -provinceCode
*        -regionName
*        -regionCode
*        -subContinentName
*        -subContinentCode
*        -continentName
*        -continentCode
*        -status
*        -ahq
*        -zhq
*        -phq
*        -rhq
*        -schq
*        -chq
*        -hierachy
*        -hierachyCode
*        -address
*        -city
*        -state
*        -country
*        -postalCode
*        -stateCounty
*        -landmark
*        -parishPhoneNumner
*        -parishEmail
*        -currency
*        -language
*        -longitude
*        -latitude
*        -isYouthParish
*        -propertyStatus
*        -dateEstablished
*        -parishPastorName
*        -parishPastorPhone
*        -parishPastorEmail
*        -assistantParishPastorName
*        -assistantParishPastorPhone
*        -assistantParishPastorEmail
*        -parishAdminOfficerName
*        -parishAdminOfficerPhone
*        -parishAdminOfficerEmail
*        -parishAccountantName
*        -parishAccountantPhone
*        -parishAccountantEmail
*        -parishBankName
*        -parishAccountNo
*        -parishAccountName
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        parishName:
*          type: String
*        parishType:
*          type: String
*        parishCode:
*          type: String
*        areaName:
*          type: String
*        areaCode:
*          type: String
*        zoneName:
*          type: String
*        zoneCode:
*          type: String
*        provinceName:
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
*        status:
*          type: Number
*        ahq:
*          type: Number
*        zhq:
*          type: Number
*        phq:
*          type: Number
*        rhq:
*          type: Number
*        schq:
*          type: Number
*        chq:
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
*        parishPhoneNumner:
*          type: String
*        parishEmail:
*          type: String
*        currency:
*          type: String
*        language:
*          type: String
*        longitude:
*          type: String
*        latitude:
*          type: String
*        isYouthParish:
*          type: Number
*        propertyStatus:
*          type: String
*        dateEstablished:
*          type: String
*        parishPastorName:
*          type: String
*        parishPastorPhone:
*          type: String
*        parishPastorEmail:
*          type: String
*        assistantParishPastorName:
*          type: String
*        assistantParishPastorPhone:
*          type: String
*        assistantParishPastorEmail:
*          type: String
*        parishAdminOfficerName:
*          type: String
*        parishAdminOfficerPhone:
*          type: String
*        parishAdminOfficerEmail:
*          type: String
*        parishAccountantName:
*          type: String
*        parishAccountantPhone:
*          type: String
*        parishAccountantEmail:
*          type: String
*        parishBankName:
*          type: String
*        parishAccountNo:
*          type: Number
*        parishAccountName:
*          type: String
*        deletedAt:
*          type: String

 *    Parishdirectory:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ParishdirectorySchema'
 */
const ParishdirectorySchema: Schema = new Schema(
  {
    sn: String,
    parishName: String,
    parishType: String,
    parishCode: { type: String, unique: "Duplicate Parish Code ({VALUE})" },
    areaName: String,
    areaCode: String,
    zoneName: String,
    zoneCode: String,
    provinceName: String,
    provinceCode: String,
    regionName: String,
    regionCode: String,
    subContinentName: String,
    subContinentCode: String,
    continentName: String,
    continentCode: String,
    status: Number,
    ahq: Number,
    zhq: Number,
    phq: Number,
    rhq: Number,
    schq: Number,
    chq: Number,
    hierachy: String,
    hierachyCode: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    stateCounty: String,
    landmark: String,
    parishPhoneNumner: String,
    parishEmail: String,
    currency: String,
    language: String,
    longitude: String,
    latitude: String,
    isYouthParish: Number,
    propertyStatus: String,
    dateEstablished: String,
    parishPastorName: String,
    parishPastorPhone: String,
    parishPastorEmail: String,
    assistantParishPastorName: String,
    assistantParishPastorPhone: String,
    assistantParishPastorEmail: String,
    parishAdminOfficerName: String,
    parishAdminOfficerPhone: String,
    parishAdminOfficerEmail: String,
    parishAccountantName: String,
    parishAccountantPhone: String,
    parishAccountantEmail: String,
    parishBankName: String,
    parishAccountNo: Number,
    parishAccountName: String,
    deletedAt: String,
  },
  {
    collection: "parishDirectory",
    versionKey: false,
    timestamps: true,
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const parishDirectory: any = this; // tslint:disable-line
  //do any customization of request on parishDirectory here like encrypting password before saving
});

ParishdirectorySchema.plugin(beautifyUnique);

export default connections.db.model<IParishdirectoryModel>(
  "ParishdirectoryModel",
  ParishdirectorySchema
);
