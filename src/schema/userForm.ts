import * as yup from "yup";

export const userSchema = yup.object({
   firstname: yup.string().required().min(5).max(20),
   lastname: yup.string().required().min(5).max(20),
   email: yup.string().email(),
   password: yup.string().required().min(5).max(20),
   re_password: yup.string().oneOf([yup.ref("password")]),
   gender: yup.string().oneOf(["male", "female", "others"]),
   subscribe: yup.boolean()
})