import * as Yup from "yup";

export const userSchema = Yup.object({
  fullname: Yup.string().min(7).max(25).required("enter your name"),
  email: Yup.string().email().required("enter your email"),
  password: Yup.string().min(4).max(10).required("Mandatory to fill"),
  number: Yup.number()
    .test("len","numbers should be 11 in length", (val) => {
        return  val && val.toString().length === 10;
    }).required("number is required"),
  textarea: Yup.string().required("Kindly add the subject"),
});
