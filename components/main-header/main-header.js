'use client';

import Link from "next/link";
import Image from "next/image";
import { FaGripLines } from "react-icons/fa";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import 'animate.css';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import Backdrop from "../backdrop/backdrop";
import { useState } from "react";

export default function MainHeader(){
  
  const[currentActivate, setActivate] = useState(false);

  function openBackdropHandler(event){
    {currentActivate == true ? setActivate(false): setActivate(true)}
  }
  
  return (
    <>
    <MainHeaderBackground/>
    {currentActivate == true ? <Backdrop closeBackdrop={openBackdropHandler} isActivate={currentActivate}/> : ''}
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImg.src} alt='A plate with food on it' width="1024" height="1024" priority/>
        NextLevel Food
      </Link>
      
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals' className="text-center">Browser Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
        <div className={`${classes.backdrop} ${currentActivate == true? 'animate__animated animate__fadeOut' : ''}`} onClick={openBackdropHandler}>
          <FaGripLines/>         
        </div>
    </header>
    </>
    );
}