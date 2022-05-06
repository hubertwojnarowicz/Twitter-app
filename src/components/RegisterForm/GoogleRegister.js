import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import styledComponents from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';

export default function GoogleRegister() {
  const { auth } = useContext(FirebaseContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  provider.setCustomParameters({
    prompt: 'select_account',
  });

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        window.localStorage.setItem('displayName', user.displayName);
        window.localStorage.setItem('email', user.email);
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <GoogleButton onClick={signInWithGoogle}>
        <GoogleButtonImg src="/images/icons8-google-48.png" />
        <GoogleButtonText>Sign up with Google</GoogleButtonText>
      </GoogleButton>
      <LinesWrapper>
        <Line />
        <LinesContent>or</LinesContent>
        <Line />
      </LinesWrapper>
    </>
  );
}

const GoogleButton = styledComponents.button`
    background-color: #fefefe;
    padding: 0 24px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    gap: 8px;
    border-radius: 32px;
    outline: none;
    border: 1px solid #cfd9de;
    cursor: pointer;

`;

const GoogleButtonText = styledComponents.span`
    font-weight: 700;
    font-size: 1rem;
   `;

const GoogleButtonImg = styledComponents.img`
    width: 24px
`;

const LinesWrapper = styledComponents.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 12px
`;

const Line = styledComponents.div`
  height: 1px;
  background-color: #2f3336;
  width: 45%
`;

const LinesContent = styledComponents.span`
  
`;
