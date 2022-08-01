import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { IRolesModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class RolesValidation
 * @extends Validation
 */
class RolesValidation extends Validation {
  /**
   * Creates an instance of RolesValidation.
   * @memberof RolesValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IRolesModel} params
   * @returns {Joi.ValidationResult<IRolesModel >}
   * @memberof RolesValidation
   */
  createRoles(params: IRolesModel): Joi.ValidationResult<IRolesModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      name: Joi.string(),
      slug: Joi.string(),
      description: Joi.string(),
      level: Joi.number(),
      permissions: Joi.string(),
      weight: Joi.number(),
      removable: Joi.number(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IRolesModel} params
   * @returns {Joi.ValidationResult<IRolesModel >}
   * @memberof RolesValidation
   */
  updateRoles(params: IRolesModel): Joi.ValidationResult<IRolesModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      name: Joi.string(),
      slug: Joi.string(),
      description: Joi.string(),
      level: Joi.number(),
      permissions: Joi.string(),
      weight: Joi.number(),
      removable: Joi.number(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof RolesValidation
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
   * @memberof RolesValidation
   */
  getRoles(body: { id: string }): Joi.ValidationResult<{
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
   * @memberof RolesValidation
   */
  removeRoles(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new RolesValidation();
