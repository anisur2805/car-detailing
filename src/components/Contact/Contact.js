import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './Contact.scss';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Name is Required'),
   phone: Yup.string()
     .min(11, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Phone number Required'),
   email: Yup.string().email('Invalid email').required('Email is Required'),
})
const Contact = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          message: '',
        }}
        validationSchema={ContactSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
      >
      {({ isSubmitting }) => (
        <Form className="cd__form">
          <div className="row">
            <div className="col-md-6">
              <Field id="name" name="name" placeholder="Name" />
              <ErrorMessage className="isRequired" name="name" component="div" />
            </div>
            <div className="col-md-6">
              <Field id="phone" name="phone" placeholder="+1234567890" />
              <ErrorMessage className="isRequired" name="phone" component="div" />
            </div>
            <div className="col-md-12">
              <Field id="email" name="email" placeholder="Email" type="email" />
              <ErrorMessage className="isRequired" name="email" component="div" />
            </div>
            <div className="col-md-12">
              <Field id="message" rows="5" name="message" placeholder="Message" component="textarea" />
            </div>
            <div className="col-md-12">
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    </>
  );
}

export default Contact;