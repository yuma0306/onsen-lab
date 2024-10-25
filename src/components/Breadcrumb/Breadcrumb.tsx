/**
 * React Next
 */
import Link from 'next/link';
/**
 * Style
 */
import styles from '@/components/Breadcrumb/Breadcrumb.module.scss';

type Props = {
  item: Array<string>;
}

export default function Breadcrumb({ item }: Props) {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__list}>
        {item.map((i, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            {index === item.length - 1 ? (
              <span className={styles.breadcrumb__text}>{i}</span>
            ) : (
              <Link className={styles.breadcrumb__link} href="/">{i}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
