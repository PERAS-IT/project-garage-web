import Joi from "joi";
import validate from "../../../../utility/validate";

export const searchSchema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().min(Joi.ref("startDate")).required(),
});

const validateDate = (input) => validate(searchSchema)(input);

export default validateDate;
