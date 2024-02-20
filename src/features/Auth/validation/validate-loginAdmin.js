import Joi from "joi";
import validate from "../../../utility/validate";

const loginSchema = Joi.object({
  userName: Joi.string().required().messages({
    "string.empty": "user is required",
    "any.required": "user is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "any.required": "password is required",
  }),
});

const validateLoginAdmin = (input) => validate(loginSchema)(input);

export default validateLoginAdmin;
