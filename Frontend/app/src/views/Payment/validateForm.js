export default function validateForm(values) {
  let errors = {};

  if (!values.id.trim()) {
    errors.id = "ID is required";
  }

  if (!values.firstName.trim()) {
    errors.firstName = "First Name is required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }

  // if (!values.email) {
  //     errors.email = 'Email required';
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = 'Email address is invalid';
  //   }

  if (!values.age.trim()) {
    errors.age = "age is required";
  }

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  // Phone Payment Errors

  if (!values.nameOfCustomer.trim()) {
    errors.nameOfCustomer = "Customer Name is required";
  }

  if (!values.phone) {
    errors.phone = "Phone required";
  } else if (/^[0-9\b]+$/.test(values.phone)) {
    errors.phone = "Phone number is invalid";
  }

  if (!values.rePassword) {
    errors.rePassword = "Password is required";
  } else if (values.rePassword !== values.password) {
    errors.rePassword = "Passwords do not match";
  }

  //Delivery Details Errors

  if (!values.fullName.trim) {
    errors.fullName = "Full Name is required";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.address.trim) {
    errors.address = "Address is required";
  }

  if (!values.city.trim) {
    errors.city = "City is required";
  }

  if (!values.state.trim) {
    errors.state = "State is required";
  }

  if (!values.zip.trim) {
    errors.zip = "Zip is required";
  }

  //Payment Details Errors

  if (!values.nameOnCard.trim) {
    errors.nameOnCard = "Name is required";
  }

  if (!values.cardNum.trim) {
    errors.cardNum = "Card Number is required";
  }

  if (!values.expDate.trim) {
    errors.expDate = "Expire date is required";
  }

  if (!values.cvv.trim) {
    errors.cvv = "CVV is required";
  }

  return errors;
}
