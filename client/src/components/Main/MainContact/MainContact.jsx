import React, {useState} from 'react';
import styles from './MainContact.module.scss';
import {Button} from "../../globalComponents/Button";
import {MainContactCopyright} from "./MainContactCopyright";

export const MainContact = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.contacts}>
      <form
        onSubmit={event => event.preventDefault()}
        className={styles.form}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          id="email"
          className={styles.input}
        />
        <Button text={"Subscribe"}/>
      </form>
      <div className="container">
        <MainContactCopyright />
      </div>
    </div>
  )
}
