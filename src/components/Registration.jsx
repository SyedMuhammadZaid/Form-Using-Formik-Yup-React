import React from "react";
import { useFormik } from "formik";
import { userSchema } from "../schemas";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      number: "",
      textarea: "",
    },

    validationSchema: userSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    //   console.log(formik.errors)
    },
  });

  return (
    <div className="container">
      <form action="" onSubmit={formik.handleSubmit}>
        <h3>GET IN TOUCH</h3>

        <input
          type="text"
          name="fullname"
          id="forname"
          placeholder="Your Full Name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.fullname && formik.errors.fullname ? (
          <p>{formik.errors.fullname}</p>
        ) : null}

        <input
          type="email"
          name="email"
          id="foremail"
          placeholder="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}

        <input
          type="number"
          name="number"
          id="fornumber"
          placeholder="Your Contact Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.number && formik.errors.number ? (
          <p>{formik.errors.number}</p>
        ) : null}

        <textarea
          name="textarea"
          id=""
          cols="20"
          rows="7"
          placeholder="How We Can Help You?"
          value={formik.values.textarea}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.textarea && formik.errors.textarea ? (
          <p>{formik.errors.textarea}</p>
        ) : null}

        <input type="submit" value="Send" className="button" />
      </form>
    </div>
  );
};

export default Registration;
