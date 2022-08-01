import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { IProvincedirectoryModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class ProvincedirectoryValidation
 * @extends Validation
 */
class ProvincedirectoryValidation extends Validation {
  /**
   * Creates an instance of ProvincedirectoryValidation.
   * @memberof ProvincedirectoryValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IProvincedirectoryModel} params
   * @returns {Joi.ValidationResult<IProvincedirectoryModel >}
   * @memberof ProvincedirectoryValidation
   */
  createProvincedirectory(
    params: IProvincedirectoryModel
  ): Joi.ValidationResult<IProvincedirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      provinceName: Joi.string(),
      provinceAlias: Joi.string(),
      provinceCode: Joi.string(),
      regionName: Joi.string(),
      regionCode: Joi.string(),
      subContinentName: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      rhq: Joi.number(),
      schq: Joi.number(),
      chq: Joi.number(),
      status: Joi.number(),
      startZoneCode: Joi.string(),
      startAreaCode: Joi.string(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      provincePhoneNumner: Joi.string(),
      provinceEmail: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      isYouthProvince: Joi.number(),
      picName: Joi.string(),
      picPhone: Joi.string(),
      picEmail: Joi.string(),
      apicpAdminName: Joi.string(),
      apicpAdminPhone: Joi.string(),
      apicpAdminEmail: Joi.string(),
      apicpCsrName: Joi.string(),
      apicpCsrPhone: Joi.string(),
      apicpCsrEmail: Joi.string(),
      provinceAdminOfficerName: Joi.string(),
      provinceAdminOfficerPhone: Joi.string(),
      provinceAdminOfficerEmail: Joi.string(),
      provinceAssistantAdminOfficerName: Joi.string(),
      provinceAssistantAdminOfficerPhone: Joi.string(),
      provinceAssistantAdminOfficerEmail: Joi.string(),
      provinceAccountantName: Joi.string(),
      provinceAccountantPhone: Joi.string(),
      provinceAccountantEmail: Joi.string(),
      provinceAssistantAccountantName: Joi.string(),
      provinceAssistantAccountantPhone: Joi.string(),
      provinceAssistantAccountantEmail: Joi.string(),
      provinceBankName: Joi.string(),
      provinceAccountNo: Joi.number(),
      provinceAccountName: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IProvincedirectoryModel} params
   * @returns {Joi.ValidationResult<IProvincedirectoryModel >}
   * @memberof ProvincedirectoryValidation
   */
  updateProvincedirectory(
    params: IProvincedirectoryModel
  ): Joi.ValidationResult<IProvincedirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      provinceName: Joi.string(),
      provinceAlias: Joi.string(),
      provinceCode: Joi.string(),
      regionName: Joi.string(),
      regionCode: Joi.string(),
      subContinentName: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      rhq: Joi.number(),
      schq: Joi.number(),
      chq: Joi.number(),
      status: Joi.number(),
      startZoneCode: Joi.string(),
      startAreaCode: Joi.string(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      provincePhoneNumner: Joi.string(),
      provinceEmail: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      isYouthProvince: Joi.number(),
      picName: Joi.string(),
      picPhone: Joi.string(),
      picEmail: Joi.string(),
      apicpAdminName: Joi.string(),
      apicpAdminPhone: Joi.string(),
      apicpAdminEmail: Joi.string(),
      apicpCsrName: Joi.string(),
      apicpCsrPhone: Joi.string(),
      apicpCsrEmail: Joi.string(),
      provinceAdminOfficerName: Joi.string(),
      provinceAdminOfficerPhone: Joi.string(),
      provinceAdminOfficerEmail: Joi.string(),
      provinceAssistantAdminOfficerName: Joi.string(),
      provinceAssistantAdminOfficerPhone: Joi.string(),
      provinceAssistantAdminOfficerEmail: Joi.string(),
      provinceAccountantName: Joi.string(),
      provinceAccountantPhone: Joi.string(),
      provinceAccountantEmail: Joi.string(),
      provinceAssistantAccountantName: Joi.string(),
      provinceAssistantAccountantPhone: Joi.string(),
      provinceAssistantAccountantEmail: Joi.string(),
      provinceBankName: Joi.string(),
      provinceAccountNo: Joi.number(),
      provinceAccountName: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof ProvincedirectoryValidation
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
   * @memberof ProvincedirectoryValidation
   */
  getProvincedirectory(body: { id: string }): Joi.ValidationResult<{
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
   * @memberof ProvincedirectoryValidation
   */
  removeProvincedirectory(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new ProvincedirectoryValidation();
