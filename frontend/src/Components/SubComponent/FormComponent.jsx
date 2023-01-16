import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Typography } from '@material-tailwind/react';
import * as Yup from 'yup';
import axios from 'axios';

const FormComponent = ({
  data,
  setDisplay,
  setData,
  edit,
  setEdit,
  editData,
  setEditData,
  fetch,
  setFetch,
}) => {
  const initialValues = {
    name: '',
    price: '',
    img: '',
  };

  const onSubmit = (submitData) => {
    setDisplay(true);

    if (edit) {
      axios
        .patch(`http://localhost:5000/menu/${editData.id}`, submitData)
        .then((response) => {
          setData([response.data]);
        });
      setEdit(false);
      setFetch(!fetch);
      setEditData({});
    } else {
      axios.post(`http://localhost:5000/menu`, submitData).then((response) => {
        setData((data) => [...data, response.data]);
      });
      setFetch(!fetch);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('name field is required!'),
    price: Yup.number().required('price field is required!'),
    img: Yup.string().required("img's url is required"),
  });

  return (
    <div className="mx-auto text-center my-8 ">
      <Button
        color="blue"
        className="mx-auto px-5 py-4 bg-sky-400 rounded-3xl"
        onClick={() => {
          setEditData({});
          setDisplay(true);
          setEdit(false);
        }}
      >
        <Typography variant="h6">
          <p>Back to menu</p>{' '}
        </Typography>
      </Button>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="mx-auto mt-10 flex w-full max-w-xl flex-col p-10 shadow-2xl">
          <ErrorMessage
            className="text-bold mb-5 text-red-600"
            name="name"
            component="span"
          />
          <label>Product Name :</label>
          <Field
            id="inputName"
            name="name"
            placeholder={editData.name ? editData.name : 'product name...'}
            autoComplete="on"
            className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
          />

          <ErrorMessage
            className="text-bold mb-5 text-red-600"
            name="price"
            component="span"
          />
          <label>Product Price : </label>
          <Field
            id="inputPrice"
            name="price"
            placeholder={editData.name ? editData.price : 'product price...'}
            autoComplete="on"
            className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
          />

          <ErrorMessage
            className="text-bold mb-5 text-red-600"
            name="img"
            component="span"
          />
          <label>Product Url : </label>
          <Field
            id="inputPrice"
            name="img"
            placeholder={editData.name ? editData.img : 'product img url...'}
            autoComplete="on"
            className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
          />

          <hr className="mx-auto my-5 w-4/5 bg-black" />

          <Button
            className="m-1 mx-auto mb-5 mt-5 w-4/5 rounded-2xl border-[1px] bg-blue-400 px-2 py-3 text-black"
            type="submit"
          >
            {edit ? 'Edit Product' : 'Add Product'}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
