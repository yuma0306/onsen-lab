/**
 * styles
 */
import styles from '@/components/Btn/Btn.module.scss';

interface Props {
  children: React.ReactNode;
  type?: 'yes' | 'no';
  onClick?: () => void;
}

export default function Btn({ children, type, onClick }: Props) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${type === 'yes' ? styles['btn--yes'] : styles['btn--no']}`}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
