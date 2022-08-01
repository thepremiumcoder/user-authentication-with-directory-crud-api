import * as connections from "@/config/connection/connection";
import { Document, Schema } from "mongoose";
import { NextFunction } from "express";
const beautifyUnique = require("mongoose-beautiful-unique-validation");

/**
 * @export
 * @interface IUsersRequest
 */
export interface IUsersRequest {
  sn: String;
  username: String;
  email: String;
  password: String;
  lastName: String;
  firstName: String;
  otherNames: String;
  gender: String;
  phone: String;
  whatsAppLine: String;
  parish: String;
  area: String;
  zone: String;
  province: String;
  region: String;
  subContinent: String;
  continent: String;
  roles: String;
  permissions: String;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  language: String;
  dob: String;
  anniversary: String;
  bio: String;
  marital_status: String;
  designation: String;
  signature: String;
  avatarUrl: String;
  avatar: String;
  preferences: String;
  level: String;
  token: String;
  mfa: String;
  otp: String;
  verified: Number;
  verifiedAt: String;
  status: Number;
  lastLogin: String;
  loginIP: String;
  deletedAt: String;
}

/**
 * @export
 * @interface IUsersModel
 * @extends {Document}
 */
export interface IUsersModel extends Document {
  sn: String;
  username: String;
  email: String;
  password: String;
  lastName: String;
  firstName: String;
  otherNames: String;
  gender: String;
  phoneCode: String;
  phone: String;
  WaPhoneCode: String;
  whatsAppLine: String;
  parish: String;
  area: String;
  zone: String;
  province: String;
  region: String;
  subContinent: String;
  continent: String;
  roles: String;
  permissions: String;
  address: String;
  city: String;
  state: String;
  country: String;
  postalCode: String;
  stateCounty: String;
  language: String;
  dob: String;
  anniversary: String;
  bio: String;
  marital_status: String;
  designation: String;
  signature: String;
  avatarUrl: String;
  avatar: String;
  preferences: String;
  level: String;
  token: String;
  mfa: String;
  otp: String;
  verified: Number;
  verifiedAt: String;
  status: Number;
  lastLogin: String;
  loginIP: String;
  deletedAt: String;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -sn
*        -username
*        -email
*        -password
*        -lastName
*        -firstName
*        -otherNames
*        -gender
*        -phoneCode
*        -phone
*        -WaPhoneCode
*        -whatsAppLine
*        -parish
*        -area
*        -zone
*        -province
*        -region
*        -subContinent
*        -continent
*        -roles
*        -permissions
*        -address
*        -city
*        -state
*        -country
*        -postalCode
*        -stateCounty
*        -language
*        -dob
*        -anniversary
*        -bio
*        -marital_status
*        -designation
*        -signature
*        -avatarUrl
*        -avatar
*        -preferences
*        -level
*        -token
*        -mfa
*        -otp
*        -verified
*        -verifiedAt
*        -status
*        -lastLogin
*        -loginIP
*        -deletedAt

 *      properties:
*        sn:
*          type: String
*        username:
*          type: String
*        email:
*          type: String
*        password:
*          type: String
*        lastName:
*          type: String
*        firstName:
*          type: String
*        otherNames:
*          type: String
*        gender:
*          type: String
*        phoneCode:
*          type: String
*        phone:
*          type: String
*        WaPhoneCode:
*          type: String
*        whatsAppLine:
*          type: String
*        parish:
*          type: String
*        area:
*          type: String
*        zone:
*          type: String
*        province:
*          type: String
*        region:
*          type: String
*        subContinent:
*          type: String
*        continent:
*          type: String
*        roles:
*          type: String
*        permissions:
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
*        language:
*          type: String
*        dob:
*          type: String
*        anniversary:
*          type: String
*        bio:
*          type: String
*        marital_status:
*          type: String
*        designation:
*          type: String
*        signature:
*          type: String
*        avatarUrl:
*          type: String
*        avatar:
*          type: String
*        preferences:
*          type: String
*        level:
*          type: String
*        token:
*          type: String
*        mfa:
*          type: String
*        otp:
*          type: String
*        verified:
*          type: Number
*        verifiedAt:
*          type: String
*        status:
*          type: Number
*        lastLogin:
*          type: String
*        loginIP:
*          type: String
*        deletedAt:
*          type: String

 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UsersSchema'
 */
const UsersSchema: Schema = new Schema(
  {
    sn: String,
    username: {
      type: String,
      unique: "Two users cannot share the same username ({VALUE})",
    },
    email: {
      type: String,
      unique: "Two users cannot share the same email ({VALUE})",
    },
    password: String,
    lastName: String,
    firstName: String,
    otherNames: String,
    gender: String,
    phoneCode: String,
    phone: String,
    WaPhoneCode: String,
    whatsAppLine: String,
    parish: String,
    area: String,
    zone: String,
    province: String,
    region: String,
    subContinent: String,
    continent: String,
    roles: String,
    permissions: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    stateCounty: String,
    language: String,
    dob: String,
    anniversary: String,
    bio: String,
    marital_status: String,
    designation: String,
    signature: String,
    avatarUrl: String,
    avatar: String,
    preferences: String,
    level: String,
    token: String,
    mfa: String,
    otp: String,
    verified: Number,
    verifiedAt: String,
    status: Number,
    lastLogin: String,
    loginIP: String,
    deletedAt: String,
  },
  {
    collection: "users",
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        ret.role = ret.roles;
        // ret.name = ret.lastName + " " + ret.firstName + " " + ret.otherNames;
        ret.name = ret.firstName + " " + ret.lastName;
        delete ret._id;
        delete ret.sn;
        delete ret.password;
        delete ret.deletedAt;
        delete ret.updatedAt;
      },
    },
  }
).pre("save", async function (next: NextFunction): Promise<void> {
  //const users: any = this; // tslint:disable-line
  //do any customization of request on users here like encrypting password before saving
});

UsersSchema.plugin(beautifyUnique);

export default connections.db.model<IUsersModel>("UsersModel", UsersSchema);
