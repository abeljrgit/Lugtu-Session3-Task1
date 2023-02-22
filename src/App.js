import './App.css';
import React, { Component } from 'react';
import { Images } from './assets';
import { Navbar, ProfileCard, ProfileForm } from './components';

export default class App extends Component {
  state = {
    listProfileData: [],
  };

  addProfile = (name, dateOfBirth, email, contact, tellMeAboutYourself) => {
    this.setState({
      listProfileData: [
        ...this.state.listProfileData,
        {
          name: name,
          dateOfBirth: dateOfBirth,
          email: email,
          contact: contact,
          tellMeAboutYourself: tellMeAboutYourself,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <section className="home-section__form">
          <ProfileForm addProfileHandler={this.addProfile} />
          <ProfileCard listProfileData={this.state.listProfileData} />
        </section>
      </>
    );
  }
}
