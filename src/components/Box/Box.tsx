/**
 * style
 */
import styles from '@/components/Box/Box.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Box({ children }: Props) {
  return (
    <div className={styles.box}>
      { children }
    </div>
  )
}
