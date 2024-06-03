// src/validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().max(30, "Name must be less than 20 characters").min(3, "Name must be More Than 2 Characters").required('Name is required'),
    mobile: Yup.string()
        .matches(/^[0-9]+$/, 'must be only digits')
        .min(10, 'must be exactly 10 digits')
        .max(10, 'must be exactly 10 digits')
        .required('Contact number is required'),
    house: Yup.string().max(20, "Field must be less than 20 characters").min(3, "Field must be More Than 2 Characters").required('Field is required'),
    road: Yup.string().max(20, "Field must be less than 20 characters").min(3, "Field must be More Than 2 Characters").required('Field is required'),
    pincode: Yup.string()
        .matches(/^[0-9]+$/, 'must be only digits')
        .min(6, 'must be exactly 6 digits')
        .max(6, 'must be exactly 6 digits')
        .required('Pincode is required'),
    city: Yup.string().max(20, "City must be less than 20 characters").min(3, "City must be More Than 2 Characters").required('City is required'),
    state: Yup.string().max(20, "State must be less than 20 characters").min(3, "State must be More Than 2 Characters").required('State is required'),
});

export default validationSchema;
