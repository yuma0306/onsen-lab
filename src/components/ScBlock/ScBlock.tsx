/**
 * style
 */
import styles from '@/components/ScBlock/ScBlock.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Sc({ children} : Props) {
  return (
    <>
      <div className={`${styles.scBlock}`}>
        { children }
      </div>
    </>
  )
}
