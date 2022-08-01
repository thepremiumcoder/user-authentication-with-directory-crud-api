import * as Joi from "@hapi/joi";
//import * as Date from '@hapi/joi-date';
import Validation from "@/components/validation";
import { IUsersModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
const joiDate = Joi.extend(require("@joi/date"));
/**
 * @export
 * @class UsersValidation
 * @extends Validation
 */
class UsersValidation extends Validation {
  /**
   * Creates an instance of UsersValidation.
   * @memberof UsersValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IUsersModel} params
   * @returns {Joi.ValidationResult<IUsersModel >}
   * @memberof UsersValidation
   */
  createUsers(params: IUsersModel): Joi.ValidationResult<IUsersModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string().allow(null),
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
      lastName: Joi.string(),
      firstName: Joi.string(),
      otherNames: Joi.string(),
      gender: Joi.string(),
      phoneCode: Joi.string(),
      phone: Joi.string(),
      WaPhoneCode: Joi.string(),
      whatsAppLine: Joi.string(),
      parish: Joi.string(),
      area: Joi.string(),
      zone: Joi.string(),
      province: Joi.string(),
      region: Joi.string(),
      subContinent: Joi.string(),
      continent: Joi.string(),
      roles: Joi.string(),
      permissions: Joi.string(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string().allow(null),
      stateCounty: Joi.string().allow(null),
      language: Joi.string().allow(null),
      dob: joiDate.date().format("YYYY-MM-DD"),
      anniversary: joiDate.date().format("YYYY-MM-DD").allow(null),
      bio: Joi.string().allow(null),
      marital_status: Joi.string(),
      designation: Joi.string().allow(null),
      signature: Joi.string().allow(null),
      avatarUrl: Joi.string().allow(null),
      avatar: Joi.string().allow(null),
      preferences: Joi.string().allow(null),
      level: Joi.string().allow(null),
      token: Joi.string().allow(null),
      mfa: Joi.string().allow(null),
      otp: Joi.string().allow(null),
      verified: Joi.number().allow(null),
      verifiedAt: Joi.string().allow(null),
      status: Joi.number(),
      lastLogin: Joi.string().allow(null),
      loginIP: Joi.string().allow(null),
      deletedAt: Joi.string().allow(null),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IUsersModel} params
   * @returns {Joi.ValidationResult<IUsersModel >}
   * @memberof UsersValidation
   */
  updateUsers(params: IUsersModel): Joi.ValidationResult<IUsersModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string().allow(null),
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
      lastName: Joi.string(),
      firstName: Joi.string(),
      otherNames: Joi.string(),
      gender: Joi.string(),
      phoneCode: Joi.string(),
      phone: Joi.string(),
      WaPhoneCode: Joi.string(),
      whatsAppLine: Joi.string(),
      parish: Joi.string(),
      area: Joi.string(),
      zone: Joi.string(),
      province: Joi.string(),
      region: Joi.string(),
      subContinent: Joi.string(),
      continent: Joi.string(),
      roles: Joi.string(),
      permissions: Joi.string(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string().allow(null),
      stateCounty: Joi.string().allow(null),
      language: Joi.string().allow(null),
      dob: joiDate.date().format("YYYY-MM-DD"),
      anniversary: joiDate.date().format("YYYY-MM-DD").allow(null),
      bio: Joi.string().allow(null),
      marital_status: Joi.string(),
      designation: Joi.string().allow(null),
      signature: Joi.string().allow(null),
      avatarUrl: Joi.string().allow(null),
      avatar: Joi.string().allow(null),
      preferences: Joi.string().allow(null),
      level: Joi.string().allow(null),
      token: Joi.string().allow(null),
      mfa: Joi.string().allow(null),
      otp: Joi.string().allow(null),
      verified: Joi.number().allow(null),
      verifiedAt: Joi.string().allow(null),
      status: Joi.number(),
      lastLogin: Joi.string().allow(null),
      loginIP: Joi.string().allow(null),
      deletedAt: Joi.string().allow(null),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof UsersValidation
   */
  searchParams(
    params: ISearchParamRequest
  ): Joi.ValidationResult<ISearchParamRequest> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      orAnd: Joi.string().required(),
      params: Joi.array().required(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof UsersValidation
   */
  getUsers(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof UsersValidation
   */
  removeUsers(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new UsersValidation();
