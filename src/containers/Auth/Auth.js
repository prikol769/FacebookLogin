import React, { useState } from 'react';

import gubkabobImage from '../..//assets/images/Gubka_Bob.jpg';
import kittenImage from '../..//assets/images/kitten.jpg';
import minecraftImage from '../..//assets/images/minecraft.png';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import User from '../../components/User/User';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import styles from './Auth.css';

const Auth = () => {
  const [error, setError] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [dataBaselogPass] = useState([
    {
      log: 'gubkabob123',
      password: '123456',
      img: gubkabobImage,
      name: 'Gubkabob Inanovi4',
    },
    {
      log: 'kitten123',
      password: '25a4321',
      img: kittenImage,
      name: 'Kitten astronaut',
    },
    {
      log: 'minecraft123',
      password: '356ds52',
      img: minecraftImage,
      name: 'Steve Minecraftovi4',
    },
  ]);

  const [inputForm, setInputForm] = useState({
    log: {
      value: '',
    },
    password: {
      value: '',
    },
  });

  const [userEntryInfo, setUserEntryInfo] = useState({
    imgUserEntry: '',
    nameUserEntry: '',
  });

  const inputChangedHandler = (event, inputIdentifier) => {
    event.preventDefault();
    const updatedInputForm = {
      ...inputForm,
    };
    const updatedElement = {
      ...updatedInputForm[inputIdentifier],
    };

    updatedElement.value = event.target.value;
    updatedInputForm[inputIdentifier] = updatedElement;
    setInputForm(updatedInputForm);
  };

  const entryHandler = () => {
    dataBaselogPass.map((logs) => {
      if (
        logs.log === inputForm.log.value &&
        logs.password === inputForm.password.value
      ) {
        setOpenUser(true);
        setUserEntryInfo({
          imgUserEntry: logs.img,
          nameUserEntry: logs.name,
        });
      }
      return setError(true);
    });
  };

  let Content = (
    <Aux>
      <Input
        placeholderInput="Электронный адрес или номер телефона"
        changed={(event) => inputChangedHandler(event, 'log')}
      />
      <Input
        placeholderInput="Пароль"
        changed={(event) => inputChangedHandler(event, 'password')}
      />
      {error ? (
        <label className={styles.Lable}>Введен неверный логин или пароль</label>
      ) : null}
      <Button
        btnType="Entry"
        clicked={entryHandler}
        disabled={!inputForm.log.value || !inputForm.password.value}
      >
        Вход
      </Button>
      <a href="# ">Забыли пароль?</a>
      <hr />
      <Button btnType="CreateAcc">Создать аккаунт</Button>
    </Aux>
  );

  if (openUser) {
    Content = (
      <User
        image={userEntryInfo.imgUserEntry}
        nameUser={userEntryInfo.nameUserEntry}
      />
    );
  }

  return (
    <div className={styles.Auth}>
      <div className={styles.Content}>{Content}</div>
    </div>
  );
};

export default Auth;
