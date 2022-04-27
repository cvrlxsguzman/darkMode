import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "../SignIn/styles.scss";
// Logo
import Logo from "../../assets/ecommerceWebsiteLogo.png";
// Components
import Button from '../Components/Button';
import FormInput from '../Components/FormInput';
import FormWrapper from '../Components/FormWrapper';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <div className="container">
      {/*Logo links to home*/}
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="signInForm">
        {/*Sign In tabs*/}
        <table border="0" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <th className="active">
                <h3>
                  <Link to="/register">Join</Link>
                </h3>
              </th>
              <th>
                <h3>
                  <Link to="/login">Sign In</Link>
                </h3>
              </th>
            </tr>
          </tbody>
        </table>

        {/*Use for wrapper for form styling*/}
        <FormWrapper>
          <form>
            <FormInput label='EMAIL ADDRESS:' />
          </form>
        </FormWrapper>
      </div>
    </div>
  );
};

export default SignUp;
