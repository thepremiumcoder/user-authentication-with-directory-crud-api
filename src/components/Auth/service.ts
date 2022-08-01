import * as Joi from "@hapi/joi";
import AuthValidation from "./validation";
import { IAuthService } from "./interface";
import { ITokenRequest } from "./model";
import UsersModel, { IUsersModel } from "../Users/model";
const bcrypt = require("bcrypt");

/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {
  /**
   * @param {ITokenRequest} body
   * @returns {Promise <any>}
   * @memberof AuthService
   */
  async generateToken(body: ITokenRequest): Promise<any> {
    try {
      const validate: Joi.ValidationResult<ITokenRequest> =
        AuthValidation.validteTokenInput(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      //Fetch from collection based on username password
      const user: IUsersModel = await UsersModel.findOne({
        username: body.username,
        //password: body.password //do encryption check like md5(body.password)
      });

      if (user != null) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(
          body.password,
          user.password
        );
        if (validPassword) {
          return user;
        } else {
          throw new Error("Invalid Username or Password");
        }
      }

      throw new Error("Invalid Login Credentials");
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default AuthService;
