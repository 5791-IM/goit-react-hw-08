import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be 50 characters or less")
      .required("Number is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Number
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
          <button type="submit" className={css.button} disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// const ContactForm = ({ onAddContact }) => {
//   const initialValues = {
//     name: "",
//     number: "",
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, "Name must be at least 3 characters")
//       .max(50, "Name must be 50 characters or less")
//       .required("Name is required"),
//     number: Yup.string()
//       .min(3, "Number must be at least 3 characters")
//       .max(50, "Number must be 50 characters or less")
//       .required("Number is required"),
//   });

//   const handleSubmit = (values, { reserForm }) => {
//     const newContact = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };

//     onAddContact(newContact);
//     reserForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form className={css.form}>
//           <label className={css.label}>
//             Name
//             <Field type="text" name="name" className={css.input} />
//             <ErrorMessage name="name" component="div" className={css.error} />
//           </label>
//           <label className={css.label}>
//             Number
//             <Field type="text" name="number" className={css.input} />
//             <ErrorMessage name="number" component="div" className={css.error} />
//           </label>
//           <button type="submit" className={css.button} disabled={isSubmitting}>
//             Add Contact
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ContactForm;
