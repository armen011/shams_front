import * as Yup from 'yup';

const phoneRegExp =
  /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

export const contactFormSchem = Yup.object().shape({
  first_name: Yup.string()
    .required('First Name is required.')
    .min(3, 'First Name must be minmum 3 symbols.')
    .max(20, 'First Name must be maximum 20 symbols.'),
  last_name: Yup.string()
    .required('Last Name is required.')
    .min(3, 'Last Name must be minmum 3 symbols.')
    .max(20, 'Last Name must be maximum 20 symbols.'),
  phone: Yup.string()
    .required('Phone number is required.')
    .matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string()
    .email('Email is not valid.')
    .required('Email is required.'),
  message: Yup.string()
    .required('Message is required.')
    .min(10, 'Message must be minmum 3 symbols.')
    .max(500, 'Message must be maximum 500 symbols.'),
});
