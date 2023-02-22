import React, { Component } from 'react';
import { Card, Typography } from '@mui/material';

export class ProfileCard extends Component {
  render() {
    return (
      <>
        {this.props.listProfileData.map((profile, index) => {
          return (
            <Card
              key={index}
              sx={{ width: '100%', maxWidth: '400px', mt: 5, p: 3 }}
            >
              <Typography sx={{ fontSize: 24, lineHeight: 1 }}>
                {profile.name}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {profile.tellMeAboutYourself}
              </Typography>
              <Typography sx={{ mt: 2 }}>{profile.dateOfBirth}</Typography>
              <Typography>{profile.email}</Typography>
              <Typography>{profile.contact}</Typography>
            </Card>
          );
        })}
      </>
    );
  }
}
