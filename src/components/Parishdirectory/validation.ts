import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { IParishdirectoryModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class ParishdirectoryValidation
 * @extends Validation
 */
class ParishdirectoryValidation extends Validation {
  /**
   * Creates an instance of ParishdirectoryValidation.
   * @memberof ParishdirectoryValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IParishdirectoryModel} params
   * @returns {Joi.ValidationResult<IParishdirectoryModel >}
   * @memberof ParishdirectoryValidation
   */
  createParishdirectory(
    params: IParishdirectoryModel
  ): Joi.ValidationResult<IParishdirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      parishName: Joi.string(),
      parishType: Joi.string(),
      parishCode: Joi.string(),
      areaName: Joi.string(),
      areaCode: Joi.string(),
      zoneName: Joi.string(),
      zoneCode: Joi.string(),
      provinceName: Joi.string(),
      provinceCode: Joi.string(),
      regionName: Joi.string(),
      regionCode: Joi.string(),
      subContinentName: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      status: Joi.number(),
      ahq: Joi.number(),
      zhq: Joi.number(),
      phq: Joi.number(),
      rhq: Joi.number(),
      schq: Joi.number(),
      chq: Joi.number(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      parishPhoneNumner: Joi.string(),
      parishEmail: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      longitude: Joi.string(),
      latitude: Joi.string(),
      isYouthParish: Joi.number(),
      propertyStatus: Joi.string(),
      dateEstablished: Joi.string(),
      parishPastorName: Joi.string(),
      parishPastorPhone: Joi.string(),
      parishPastorEmail: Joi.string(),
      assistantParishPastorName: Joi.string(),
      assistantParishPastorPhone: Joi.string(),
      assistantParishPastorEmail: Joi.string(),
      parishAdminOfficerName: Joi.string(),
      parishAdminOfficerPhone: Joi.string(),
      parishAdminOfficerEmail: Joi.string(),
      parishAccountantName: Joi.string(),
      parishAccountantPhone: Joi.string(),
      parishAccountantEmail: Joi.string(),
      parishBankName: Joi.string(),
      parishAccountNo: Joi.number(),
      parishAccountName: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IParishdirectoryModel} params
   * @returns {Joi.ValidationResult<IParishdirectoryModel >}
   * @memberof ParishdirectoryValidation
   */
  updateParishdirectory(
    params: IParishdirectoryModel
  ): Joi.ValidationResult<IParishdirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      parishName: Joi.string(),
      parishType: Joi.string(),
      parishCode: Joi.string(),
      areaName: Joi.string(),
      areaCode: Joi.string(),
      zoneName: Joi.string(),
      zoneCode: Joi.string(),
      provinceName: Joi.string(),
      provinceCode: Joi.string(),
      regionName: Joi.string(),
      regionCode: Joi.string(),
      subContinentName: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      status: Joi.number(),
      ahq: Joi.number(),
      zhq: Joi.number(),
      phq: Joi.number(),
      rhq: Joi.number(),
      schq: Joi.number(),
      chq: Joi.number(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      parishPhoneNumner: Joi.string(),
      parishEmail: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      longitude: Joi.string(),
      latitude: Joi.string(),
      isYouthParish: Joi.number(),
      propertyStatus: Joi.string(),
      dateEstablished: Joi.string(),
      parishPastorName: Joi.string(),
      parishPastorPhone: Joi.string(),
      parishPastorEmail: Joi.string(),
      assistantParishPastorName: Joi.string(),
      assistantParishPastorPhone: Joi.string(),
      assistantParishPastorEmail: Joi.string(),
      parishAdminOfficerName: Joi.string(),
      parishAdminOfficerPhone: Joi.string(),
      parishAdminOfficerEmail: Joi.string(),
      parishAccountantName: Joi.string(),
      parishAccountantPhone: Joi.string(),
      parishAccountantEmail: Joi.string(),
      parishBankName: Joi.string(),
      parishAccountNo: Joi.number(),
      parishAccountName: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof ParishdirectoryValidation
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
   * @memberof ParishdirectoryValidation
   */
  getParishdirectory(body: { id: string }): Joi.ValidationResult<{
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
   * @memberof ParishdirectoryValidation
   */
  removeParishdirectory(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new ParishdirectoryValidation();
