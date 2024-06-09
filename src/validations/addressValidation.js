// Importing Yup for validation
import * as Yup from 'yup';

// Defining the validation schema using Yup
const validationSchema = Yup.object({
    // Validation for name field
    name: Yup.string()
        .max(30, "Name must be less than 30 characters")
        .min(3, "Name must be more than 2 characters")
        .required('Name is required'),

    // Validation for mobile number
    mobile: Yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
        .min(10, 'Mobile number must be exactly 10 digits')
        .max(10, 'Mobile number must be exactly 10 digits')
        .required('Contact number is required'),

    // Validation for house address field
    house: Yup.string()
        .max(20, "Field must be less than 20 characters")
        .min(3, "Field must be more than 2 characters")
        .required('Field is required'),

    // Validation for road address field
    road: Yup.string()
        .max(20, "Field must be less than 20 characters")
        .min(3, "Field must be more than 2 characters")
        .required('Field is required'),

    // Validation for pincode
    pincode: Yup.string()
        .matches(/^[0-9]+$/, 'Pincode must contain only digits')
        .min(6, 'Pincode must be exactly 6 digits')
        .max(6, 'Pincode must be exactly 6 digits')
        .required('Pincode is required'),

    // Validation for city field
    city: Yup.string()
        .max(20, "City must be less than 20 characters")
        .min(3, "City must be more than 2 characters")
        .required('City is required'),

    // Validation for state field
    state: Yup.string()
        .max(20, "State must be less than 20 characters")
        .min(3, "State must be more than 2 characters")
        .required('State is required'),
});

// Exporting the validation schema for use in other files
export default validationSchema;
