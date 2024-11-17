/**
 * React Next
 */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
/**
 * Style
 */
import styles from '@/components/Header/Header.module.scss';
/**
 * Component
 */
import Inner from "@/components/Inner/Inner";
import Logo from "@/components/Logo/Logo";
/**
 * Constants
 */
import { media } from '@/constants/media';

const menus: { [key: string]: string } = {
  'register': '新規登録',
  'login': 'ログイン',
  'shindan': '温泉診断',
}

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick: () => void = () => {
    setIsOpen(!isOpen);
  }
  // useEffectとuseStateでPC・SPで切り替え
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= media) {
        setIsOpen(false);
      } else {
        const headerHeight = document.querySelector('header')?.clientHeight;
        document.querySelector(`.${styles.header__block}`)?.setAttribute('style', `top: ${headerHeight}px`);
      }
    };
    window.addEventListener('resize', handleResize);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // useEffect関数にクリーンアップ関数をreturn
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
    }
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <Inner>
          <div className={styles.header__inner}>
            <Logo />
            <div className={isOpen ? `${styles.header__block} ${styles['header__block--active']}` : `${styles.header__block}`}>
              <ul className={styles.header__menus}>
                {Object.keys(menus).map((key, index) => (
                  <li key={index} className={styles.header__menu}>
                    <Link className={styles.header__link} href={`${key}`}>{menus[key]}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <button type='button' onClick={handleClick} className={styles.burgerBtn}>
              <Image
                src={isOpen ? '/img/icon-close.svg' : '/img/icon-menu.svg'}
                width={40}
                height={40}
                alt='メニュー'
              />
            </button>
          </div>
        </Inner>
      </header>
    </>
  )
}
