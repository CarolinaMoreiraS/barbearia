'use client'

import styles from "./page.module.css";
import Image from "next/image";
import Banner from "../../public/banner.jpg";
import Logo from '../../public/barbearia.png';

import { useState } from 'react';
import {FiSun, FiMoon} from 'react-icons/fi';

export default function Home() {

   const [ ehTemaEscuro , setEhTemaEscuro] = useState(false);
   const alterarTema=()=> { 
    setEhTemaEscuro(!ehTemaEscuro);
   }
  return (
    <>
    <div className={ehTemaEscuro ? styles.modo_escuro : styles.modo_claro}>
      <header className={styles.header_container}>
        <div>
          <Image src={Logo} alt='logo'/>
          <button onClick={alterarTema}>
            {ehTemaEscuro ? <FiSun /> : <FiMoon/>}
          </button>
        </div>
      </header>

      <main className={styles.main_container}>
        <section className={styles.secao_banner}>
          <Image src={Banner} alt='banner'/>
        </section>
        <section className={styles.secao_texto}>
          <div> 
            <h1> Bem-vindo a Barber Shop </h1>
            <p> Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</p>
            <p> Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos um equipe premiada que demonstrou o talento de mestres
              barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className={styles.assinatura}> S. Kelly</p>
          </div>
        </section>
      </main>
    </div>
    
    
    </>
  )
}
