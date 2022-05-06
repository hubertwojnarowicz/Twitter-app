import React, { useState } from 'react';
import styledComponents from 'styled-components/macro';
import { COLORS } from '../../constants';
import { Twitter } from 'react-feather';
import EmailAndPasswordRegister from './EmailAndPasswordRegister';
import GoogleRegister from './GoogleRegister';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openRegisterForm = () => {
    setIsOpen(true);
    navigate(ROUTES.SIGNUP);
  };

  const closeRegisterForm = () => {
    setIsOpen(false);
    navigate(ROUTES.DASHBOARD);
  };
  return (
    <Main>
      <LeftSide>
        <LogoWrapper>
          <Twitter color={COLORS.white.primary} size="320" />
        </LogoWrapper>
      </LeftSide>
      <RightSide>
        <RightSideWrapper>
          <SmallLogoWrapper>
            <Twitter size="44" />
          </SmallLogoWrapper>
          <TwitterTitle>The latest news from the world</TwitterTitle>
          <FormTitle>Join Twitter.</FormTitle>
          <GoogleRegister />
          <RegisterButton onClick={openRegisterForm}>
            <RegisterButtonText>
              Register using your email and password
            </RegisterButtonText>
            <EmailAndPasswordRegister
              isOpen={isOpen}
              onDismiss={closeRegisterForm}
            />
          </RegisterButton>
          <TermPolicyText>
            By registering, you agree to the{' '}
            <TermsLink to={ROUTES.DASHBOARD}>Terms of Use </TermsLink>
            and<TermsLink to={ROUTES.DASHBOARD}> Privacy Policy</TermsLink>,
            including{' '}
            <TermsLink to={ROUTES.DASHBOARD}>the Cookie Policy</TermsLink>.
          </TermPolicyText>
          <LoginText>Already have an account?</LoginText>
          <LoginButton>
            <LoginButtonContent>Log in</LoginButtonContent>
          </LoginButton>
          <ThemeSwitcher />
        </RightSideWrapper>
      </RightSide>
    </Main>
  );
}

const Main = styledComponents.main`
  height: 100%;
  display: flex;
`;

const LeftSide = styledComponents.div`
  flex: 1;
  position: relative;
  background-image: url('images/background.png') 
`;

const LogoWrapper = styledComponents.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;

const RightSide = styledComponents.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RightSideWrapper = styledComponents.div`
  max-width: 60ch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 48px
`;

const SmallLogoWrapper = styledComponents.div``;

const TwitterTitle = styledComponents.h1`
  font-size: 4rem;
`;

const FormTitle = styledComponents.h4`
  font-size: 2rem;
`;

const RegisterButton = styledComponents.button`
  background-color: ${COLORS.blue.primary};
  color: inherit;
  padding: 0 24px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  outline: none;
  border: none;
  border-radius: 32px;
  cursor: pointer;
`;

const RegisterButtonText = styledComponents.span`
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
`;

const TermPolicyText = styledComponents.span`
  font-size: 0.725rem;
  max-width: 60%;
  margin-top: -4px;
`;

const TermsLink = styledComponents(Link)`
    text-decoration: none;
    color: #1d9bf0;

    &:hover {
      text-decoration: underline
    }
`;

const LoginText = styledComponents.h5`
    font-size: 1.25rem;
    margin-top: 24px
`;

const LoginButton = styledComponents.button`
    width: 60%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 32px;
    cursor: pointer
`;

const LoginButtonContent = styledComponents.span`
    color: #1d9bf0;
    font-weight: 700;
    font-size: 1rem
`;
