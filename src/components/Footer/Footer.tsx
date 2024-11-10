/**
 * React Next.js
 */
import Link from 'next/link';

/**
 * Styles
 */
import styles from '@/components/Footer/Footer.module.scss';

/**
 * component
 */
import Inner from '@/components/Inner/Inner';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Inner>
        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link} href="/shindan/">温泉診断</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link} href="/gallery/">温泉一覧</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link} href="/gsp/tokyo/">東京gsp（SSG）</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link} href="/gsp/kanagawa/">神奈川gsp（SSG）</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link} href="/gssp/tokyo/">東京gssp（SSR）</Link>
          </li>
          <li className={styles.footer__item}>
            <Link className={styles.footer__link} href="/gssp/kanagawa/">神奈川gssp（SSR）</Link>
          </li>
        </ul>
        <p className={styles.footer__copy}>&copy;&nbsp;温泉ラボ</p>
      </Inner>
    </footer>
  )
}
