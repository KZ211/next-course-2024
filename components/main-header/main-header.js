'use client';

import Link from "next/link";
import Image from "next/image";
import { FaGripLines } from "react-icons/fa";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader(){
  
  function openBackdropHandler(){
    console.log('Hello world')
  }
  
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImg.src} alt='A plate with food on it' width="1024" height="1024" priority/>
        NextLevel Food
      </Link>
      
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Browser Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
        <div className={classes.backdrop} onClick={openBackdropHandler}>
          <FaGripLines/>         
        </div>
    </header>
    </>
    );
}