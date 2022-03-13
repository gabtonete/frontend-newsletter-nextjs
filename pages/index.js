import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import triforce from '../public/images/triforce.svg';
import { Input } from '../components/input';
import mail from '../public/images/mail.svg';
import user from '../public/images/user.svg';
import { Button } from '../components/button';
import { useState } from 'react';
import { emailValidation } from '../utils/validation';
import { apiRequest } from '../services/api';
import Link from 'next/link';
import { Social } from '../components/social';
import github from '../public/images/github.svg';


export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msgErro, setMsgErro] = useState('');
  const [msgSuccess, setMsgSuccess] = useState('');

  const submitForm = async (e) => {
    
    e?.preventDefault();

    setMsgSuccess('');
    setMsgErro('');


    const body = { name, email }

    if (name.length < 1 || !emailValidation(email)) {
      setMsgErro('Nome ou e-mail inválido. ¯\\_(ツ)_/¯')

    } else {
      try {
        await apiRequest('users', 'POST', body);
        console.log(body)
        setMsgSuccess('Usuário cadastrado com sucesso. Cheque sua caixa de spam! (｡◕‿◕｡)')
      } catch (e) {
        if(e?.response?.data?.message){
          setMsgErro('E-mail já cadastrado na plataforma. ¯\\_(ツ)_/¯')
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Newsletter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.div}>
          <Image
            className={styles.image}
            src={triforce}
            alt="Logo"
            width={60}
            height={50}
          />
          <div className={styles.title}>
            Inscreva-se na minha Newsletter e encontre meus códigos.
          </div>
          <p className={styles.description}>
            Venha fazer parte deste projeto:
          </p>
          <div className={styles.inputcontainer}>
            <form onSubmit={submitForm}>
              <Input
                image={user}
                alt="name field"
                classN={styles.input}
                type='text'
                placeholder='Nome'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Input
                image={mail}
                alt="mail field"
                classN={styles.input}
                type='email'
                placeholder='Seu e-mail principal'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
                {msgErro && <p className='erroMsg'>{msgErro}</p>}
                {msgSuccess && <p className='successMsg'>{msgSuccess}</p>}
              <Button
                type="submit"
                text="Inscrever-se"
              />
            </form>
          </div>
          <div className={styles.social}>
          <Social
            socialSrc={github}
            socialAlt="My github"
          />
          </div>
        </div>
      </main>
    </div>
  )
}
