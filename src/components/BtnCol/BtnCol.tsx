/**
 * styles
 */
import styles from '@/components/BtnCol/BtnCol.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function BtnCol({ children }: Props) {
  return (
    <div className={styles.btnCol}>
      { children }
    </div>
  )
}
