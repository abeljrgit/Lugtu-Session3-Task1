import React, { Component } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';

export class ProfileForm extends Component {
  state = {
    name: '',
    dateOfBirth: '',
    email: '',
    contact: '',
    tellMeAboutYourself: '',
    error: {
      nameError: '',
      dateOfBirthError: '',
      emailError: '',
      contactError: '',
      tellMeAboutYourselfError: '',
    },
    isFormValid: false,
  };

  onChangeHandler = (stateProperty, stateValue) => {
    if (stateProperty == 'name') {
      this.validateName(stateValue);
    }
    if (stateProperty == 'dateOfBirth') {
      this.validateDOB(stateValue);
    }
    if (stateProperty == 'email') {
      this.validateEmail(stateValue);
    }
    if (stateProperty == 'contact') {
      this.validateContact(stateValue);
    }
    if (stateProperty == 'tellMeAboutYourself') {
      this.validateTMAY(stateValue);
    }

    this.setState({
      [stateProperty]: stateValue,
    });
  };

  validateName = (nameValue) => {
    let isNameValid = false;
    let nameError = this.state.error.nameError;
    const alphabetsOnlyPattern = /^[A-Za-z. \'-]+(?: [A-Za-z. \'-]+)*$/;

    if (nameValue == '') {
      isNameValid = false;
      nameError = 'Please input your name.';
    } else if (!alphabetsOnlyPattern.test(nameValue)) {
      isNameValid = false;
      nameError = 'It should contain alphabets only';
    } else {
      isNameValid = true;
      nameError = '';
    }

    this.setState({
      name: nameValue,
      isFormValid: isNameValid,
      error: { ...this.state.error, nameError },
    });

    return isNameValid;
  };

  validateDOB = (dobValue) => {
    let isDOBValid = false;
    let dateOfBirthError = this.state.error.dateOfBirthError;
    let today = new Date(Date.now());
    let inputDate = new Date(dobValue);

    if (dobValue == '') {
      isDOBValid = false;
      dateOfBirthError = 'Please input your birthday.';
    } else if (today < inputDate) {
      isDOBValid = false;
      dateOfBirthError = 'Your birthday should not be greater than today.';
    } else {
      isDOBValid = true;
      dateOfBirthError = '';
    }

    this.setState({
      dateOfBirth: dobValue,
      isFormValid: isDOBValid,
      error: { ...this.state.error, dateOfBirthError },
    });

    return isDOBValid;
  };

  validateEmail = (emailValue) => {
    let isEmailValid = false;
    let emailError = this.state.error.emailError;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue == '') {
      isEmailValid = false;
      emailError = 'Please input your email.';
    } else if (!emailPattern.test(emailValue)) {
      isEmailValid = false;
      emailError = "Please check email's format";
    } else {
      isEmailValid = true;
      emailError = '';
    }

    this.setState({
      email: emailValue,
      isFormValid: isEmailValid,
      error: { ...this.state.error, emailError },
    });

    return isEmailValid;
  };

  validateContact = (contactValue) => {
    let isContactValid = false;
    let contactError = this.state.error.contactError;
    const lengthTenOnlyDigitsPattern = /^[0-9]{10}$/;

    if (contactValue == '') {
      isContactValid = false;
      contactError = 'Please input your contact.';
    } else if (!lengthTenOnlyDigitsPattern.test(contactValue)) {
      isContactValid = false;
      contactError = 'Length should be 10, should only include digits';
    } else {
      isContactValid = true;
      contactError = '';
    }

    this.setState({
      contact: contactValue,
      isFormValid: isContactValid,
      error: { ...this.state.error, contactError },
    });

    return isContactValid;
  };

  validateTMAY = (tmayValue) => {
    let isTMAYValid = false;
    let tellMeAboutYourselfError = this.state.error.contactError;

    if (tmayValue == '') {
      isTMAYValid = false;
      tellMeAboutYourselfError = 'Please tell us about yourself.';
    } else {
      isTMAYValid = true;
      tellMeAboutYourselfError = '';
    }

    this.setState({
      tellMeAboutYourself: tellMeAboutYourselfError,
      isFormValid: isTMAYValid,
      error: { ...this.state.error, tellMeAboutYourselfError },
    });

    return isTMAYValid;
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateDOB(this.state.dateOfBirth) &&
      this.validateEmail(this.state.email) &&
      this.validateContact(this.state.contact) &&
      this.validateTMAY(this.state.tellMeAboutYourself)
    ) {
      alert('Form is submitted');
      // this.props.addData(this.state);

      console.log(this.state);
      this.props.addProfileHandler(
        this.state.name,
        this.state.dateOfBirth,
        this.state.email,
        this.state.contact,
        this.state.tellMeAboutYourself
      );
      this.setState({
        name: '',
        age: '',
        email: '',
        contact: '',
        formValid: false,
      });
    }
  };

  render() {
    return (
      <Card sx={{ width: '100%', maxWidth: '400px' }}>
        <form className="form" onSubmit={this.onSubmitHandler}>
          <TextField
            label="Name"
            variant="outlined"
            onChange={(e) => {
              this.onChangeHandler('name', e.target.value);
            }}
          />
          <Typography sx={{ color: 'red', fontSize: 14 }}>
            {this.state.error.nameError}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="dateOfBirth"
              renderInput={(props) => <TextField {...props} sx={{ mt: 4 }} />}
              label="Date of birth"
              value={this.state.dateOfBirth}
              onChange={(value) => {
                let fullDate = new Date(Date.now());
                let formattedFullDate = '';
                if (value == null || value.$d == null) {
                  fullDate = '';
                  formattedFullDate = '';
                } else {
                  fullDate = new Date(value.$d);
                  formattedFullDate = `${
                    fullDate.getMonth() + 1
                  }/${fullDate.getDate()}/${fullDate.getFullYear()}`;
                }

                this.onChangeHandler('dateOfBirth', formattedFullDate);
              }}
            />
          </LocalizationProvider>
          <Typography sx={{ color: 'red', fontSize: 14 }}>
            {this.state.error.dateOfBirthError}
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            onChange={(e) => {
              this.onChangeHandler('email', e.target.value);
            }}
            sx={{ mt: 4 }}
          />
          <Typography sx={{ color: 'red', fontSize: 14 }}>
            {this.state.error.emailError}
          </Typography>
          <TextField
            label="Contact Number"
            variant="outlined"
            onChange={(e) => {
              this.onChangeHandler('contact', e.target.value);
            }}
            sx={{ mt: 4 }}
          />
          <Typography sx={{ color: 'red', fontSize: 14 }}>
            {this.state.error.contactError}
          </Typography>
          <TextField
            maxRows={5}
            minRows={5}
            multiline
            size="md"
            label="Tell me about yourself"
            onChange={(e) => {
              this.onChangeHandler('tellMeAboutYourself', e.target.value);
            }}
            sx={{ mt: 4 }}
          />
          <Typography sx={{ color: 'red', fontSize: 14 }}>
            {this.state.error.tellMeAboutYourselfError}
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }} type="submit">
            Submit
          </Button>
        </form>
      </Card>
    );
  }
}
