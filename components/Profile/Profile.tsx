import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;
    font-family: sans-serif;
    background-color: #242424;
    width: 100%;
    padding-bottom: 20px;
    h2, h3 {
      margin: 5px;
      font-weight: 400;
    }
    h2{
      margin-top: 10px;
    }

`;
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;
export default function Profile() {
  return (
    <ProfileContainer>
        <AvatarContainer>
            <Avatar alt="Isabel Souza" src="https://avatars.githubusercontent.com/u/85114441?v=4" sx={{ width: 180, height: 180 }} />
            <h2>Isabel Souza</h2>
            <h3>FullStack Dev.</h3>
        </AvatarContainer>
    </ProfileContainer>
  )
}