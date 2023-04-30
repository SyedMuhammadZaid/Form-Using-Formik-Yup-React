import React from "react";
import { useFormik } from "formik";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      number: "",
      textarea: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
        />
        <input
          type="email"
          name="email"
          id="foremail"
          placeholder="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <input
          type="number"
          name="number"
          id="fornumber"
          placeholder="Your Contact Number"
          value={formik.values.number}
          onChange={formik.handleChange}
        />
        <textarea
          name="textarea"
          id=""
          cols="20"
          rows="7"
          placeholder="How We Can Help You?"
          value={formik.values.textarea}
          onChange={formik.handleChange}
        ></textarea>

        <input type="submit" value="Send" className="button" />
      </form>
    </div>
  );
};

export default Registration;
