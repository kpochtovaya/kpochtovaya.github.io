import React from 'react';
import { Link } from 'react-router-dom';
import setErrorNotNull from '../../untils/setErrorNotNull';
import removeErrorNotNull from '../../untils/removeErrorNotNull';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';
import postLoginForgetPassword from '../../api/post/postLoginForgetPasswordRequest';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: 'emailInput',
      emailSymbol: 'errorSymbol',
    };
  }

  render() {
    const {
      onEnter, onLogin, onEnterEmail, pages, history,
    } = this.props;
    const { emailInput, emailSymbol } = this.state;

    async function handleButtonClick() {
      const userNotFound = document.getElementById('userNotFoundChangePassword');
      const result = await postLoginForgetPassword(pages.loginPersonalAccountReducer.clientEmail);
      if (result === true) {
        onEnter(true, false) && onLogin(false, false, false) && history.push('/change-password');
      } if (result === 'incorrectUserOrPassword') {
        userNotFound.setAttribute('class', 'userNotFoundBlock');
      }
    }
    return (
      <form className="form">
        <p id="userNotFoundChangePassword" className="userNotFoundBlock -disabled">Пользователя с таким email не существует</p>
        <div className="login">
          <p className="loginString -required">Email:</p>
          <input
            className={emailInput}
            type="email"
            name="EMAIL"
            value={pages.loginPersonalAccountReducer.clientEmail}
            onChange={((event) => {
              onEnterEmail(event.target.value);
              removeErrorNotNull(emailInput, emailSymbol);
            })}
          />
          <ErrorSymbol Class={`${emailSymbol} -disabled`} />
        </div>
        <div
          type="button"
          className=""
        >
          {pages.loginPersonalAccountReducer.clientEmail ? (
            <button
              type="button"
              className="entranceButton"
              onClick={() => {
                handleButtonClick();
              }}
            >
              Отправить
            </button>
          ) : (
            <button
              type="button"
              className="entranceButton"
              onClick={() => {
                if (!pages.loginPersonalAccountReducer.clientEmail) {
                  setErrorNotNull(emailInput, emailSymbol);
                }
              }}
            >
              Отправить
            </button>
          )}
        </div>

        <button
          type="button"
          className="forgotPasswordButton"
          onClick={() => {
            onEnter(true, false);
            onLogin(true, true, false);
          }}
        >
          Войти
        </button>
        <Link to="/registration">
          <button
            type="button"
            className="registrationButton"
            onClick={() => onLogin(false, false, false)}
          >
            Регистрация
          </button>
        </Link>
      </form>
    );
  }
}

export default ForgetPassword;
