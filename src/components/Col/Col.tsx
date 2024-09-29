/**
 * styles
 */
import styles from '@/components/Col/Col.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Col({ children }: Props) {
  return (
    <div className={styles.col}>
      { children }
    </div>
  )
}
