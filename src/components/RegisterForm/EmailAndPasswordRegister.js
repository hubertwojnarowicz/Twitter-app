import React, { useState } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styledComponents from 'styled-components';
import { Twitter, X } from 'react-feather';

export default function EmailAndPasswordRegister({ isOpen, onDismiss }) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    month: 'January',
    day: '1',
    year: '2022',
  });
  const { name, email, password, month, day, year } = state;

  const disabledButton =
    name === '' ||
    email === '' ||
    password === '' ||
    month === '' ||
    day === '' ||
    year === '';

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Register Form">
        <ContentHeader>
          <CloseButton onClick={onDismiss}>
            <X />
          </CloseButton>
          <LogoWrapper>
            <Twitter size="32" />
          </LogoWrapper>
        </ContentHeader>
        <ContentTitle>Create an account</ContentTitle>
        <Form>
          <NameInput
            aria-label="Enter Your First Name"
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })} // add rest operator to fix the bug
          />
          <EmailInput
            aria-label="Enter Your Email"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <PasswordInput
            aria-label="Enter Your Password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <ContentInfoWrapper>
            <BornDate>Date of birth</BornDate>
            <BornDateInfo>
              This information will not be visible to other users. Enter your
              age, even if it's an account that represents a business, pet, or
              any other person or thing.
            </BornDateInfo>
          </ContentInfoWrapper>
          <SelectesWrapper>
            <MonthSelect
              onChange={(e) => setState({ ...state, month: e.target.value })}
            >
              <SelectOptions value="January">January</SelectOptions>
              <SelectOptions value="February">February</SelectOptions>
              <SelectOptions value="March">March</SelectOptions>
              <SelectOptions value="April">April</SelectOptions>
              <SelectOptions value="May">May</SelectOptions>
              <SelectOptions value="June">June</SelectOptions>
              <SelectOptions value="July">July</SelectOptions>
              <SelectOptions value="August">August</SelectOptions>
              <SelectOptions value="Semptember">Semptember</SelectOptions>
              <SelectOptions value="October">October</SelectOptions>
              <SelectOptions value="November">November</SelectOptions>
              <SelectOptions value="December">December</SelectOptions>
            </MonthSelect>
            <DaySelect
              onChange={(e) => setState({ ...state, day: e.target.value })}
            >
              <SelectOptions value="1">1</SelectOptions>
              <SelectOptions value="2">2</SelectOptions>
              <SelectOptions value="3">3</SelectOptions>
              <SelectOptions value="4">4</SelectOptions>
              <SelectOptions value="5">5</SelectOptions>
              <SelectOptions value="5">5</SelectOptions>
              <SelectOptions value="6">6</SelectOptions>
              <SelectOptions value="7">7</SelectOptions>
              <SelectOptions value="8">8</SelectOptions>
              <SelectOptions value="9">9</SelectOptions>
              <SelectOptions value="10">10</SelectOptions>
              <SelectOptions value="11">11</SelectOptions>
              <SelectOptions value="12">12</SelectOptions>
              <SelectOptions value="13">13</SelectOptions>
              <SelectOptions value="14">14</SelectOptions>
              <SelectOptions value="15">15</SelectOptions>
              <SelectOptions value="16">16</SelectOptions>
              <SelectOptions value="17">17</SelectOptions>
              <SelectOptions value="18">18</SelectOptions>
              <SelectOptions value="19">19</SelectOptions>
              <SelectOptions value="20">20</SelectOptions>
              <SelectOptions value="21">21</SelectOptions>
              <SelectOptions value="22">22</SelectOptions>
              <SelectOptions value="23">23</SelectOptions>
              <SelectOptions value="24">24</SelectOptions>
              <SelectOptions value="25">25</SelectOptions>
              <SelectOptions value="26">26</SelectOptions>
              <SelectOptions value="27">27</SelectOptions>
              <SelectOptions value="28">28</SelectOptions>
              <SelectOptions value="29">29</SelectOptions>
              <SelectOptions value="30">30</SelectOptions>
              <SelectOptions value="31">31</SelectOptions>
            </DaySelect>
            <YearSelect
              onChange={(e) => setState({ ...state, year: e.target.value })}
            >
              <SelectOptions value="2022">2022</SelectOptions>
              <SelectOptions value="2021">2021</SelectOptions>
              <SelectOptions value="2020">2020</SelectOptions>
              <SelectOptions value="2019">2019</SelectOptions>
              <SelectOptions value="2018">2018</SelectOptions>
              <SelectOptions value="2017">2017</SelectOptions>
              <SelectOptions value="2016">2016</SelectOptions>
              <SelectOptions value="2015">2015</SelectOptions>
              <SelectOptions value="2014">2014</SelectOptions>
              <SelectOptions value="2013">2013</SelectOptions>
              <SelectOptions value="2012">2012</SelectOptions>
              <SelectOptions value="2011">2011</SelectOptions>
              <SelectOptions value="2010">2010</SelectOptions>
              <SelectOptions value="2009">2009</SelectOptions>
              <SelectOptions value="2008">2008</SelectOptions>
              <SelectOptions value="2007">2007</SelectOptions>
              <SelectOptions value="2006">2006</SelectOptions>
              <SelectOptions value="2005">2005</SelectOptions>
              <SelectOptions value="2004">2004</SelectOptions>
              <SelectOptions value="2003">2003</SelectOptions>
              <SelectOptions value="2002">2002</SelectOptions>
              <SelectOptions value="2001">2001</SelectOptions>
              <SelectOptions value="2000">2000</SelectOptions>
              <SelectOptions value="1999">1999</SelectOptions>
              <SelectOptions value="1998">1998</SelectOptions>
              <SelectOptions value="1997">1997</SelectOptions>
              <SelectOptions value="1996">1996</SelectOptions>
              <SelectOptions value="1995">1995</SelectOptions>
              <SelectOptions value="1994">1994</SelectOptions>
              <SelectOptions value="1993">1993</SelectOptions>
              <SelectOptions value="1992">1992</SelectOptions>
              <SelectOptions value="1991">1991</SelectOptions>
            </YearSelect>
          </SelectesWrapper>
          <SubmitButton type="submit" disabled={disabledButton}>
            <SubmitBottonContent>Next</SubmitBottonContent>
          </SubmitButton>
        </Form>
      </Content>
    </Overlay>
  );
}

const Overlay = styledComponents(DialogOverlay)`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(208.5deg 18% 43.5% / 0.3)
`;

const Content = styledComponents(DialogContent)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  padding: 42px 80px;
  border-radius: 16px;
  width: 20%;
  gap: 16px;
`;

const ContentHeader = styledComponents.div`
  display: flex;

`;

const CloseButton = styledComponents.button`
  outline: none;
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: -65px;
  margin-top: -32px;
`;

const LogoWrapper = styledComponents.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -32px;
`;
const ContentTitle = styledComponents.h2`
  font-size: 2rem
`;

const Form = styledComponents.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

const NameInput = styledComponents.input`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 0 8px;
height: 40px;
border-radius: 6px;

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

const EmailInput = styledComponents.input`
background-color: transparent;
border: 1px solid ${({ theme }) => theme.border};
color: ${({ theme }) => theme.text};
padding: 0 8px;
height: 40px;
border-radius: 6px;

::placeholder {
  color: ${({ theme }) => theme.placeholder};
}
`;

const PasswordInput = styledComponents.input`
background-color: inherit;
border: 1px solid ${({ theme }) => theme.border};
color: ${({ theme }) => theme.text};
padding: 0 8px;
height: 40px;
border-radius: 6px;

::placeholder {
  color: ${({ theme }) => theme.placeholder};
}
`;

const ContentInfoWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 4px
`;

const BornDate = styledComponents.span`
  font-weight: 700
`;

const BornDateInfo = styledComponents.p`
  color: #536471;
  font-size: 0.95rem
`;

const SelectesWrapper = styledComponents.div`
  display: flex;
  gap: 12px
  
`;

const MonthSelect = styledComponents.select`
  width: 50%;
  padding: 16px 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px
`;

const DaySelect = styledComponents.select`
  width: 15%;
  padding: 16px 8px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px
  `;

const YearSelect = styledComponents.select`
  width:35%;
  padding: 16px 8px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px
`;

const SelectOptions = styledComponents.option`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

`;

const SubmitButton = styledComponents.button`
  background-color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  border-radius: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  height: 52px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }
`;

const SubmitBottonContent = styledComponents.span`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.body}

`;
