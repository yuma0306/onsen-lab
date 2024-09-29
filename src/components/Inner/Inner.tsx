/**
 * Style
 */
import styles from '@/components/Inner/Inner.module.scss';

type Props = {
  children: React.ReactNode;
  addClass?: string;
}

export default function Inner({ children, addClass = '' }: Props) {
  return (
    <>
      <div className={`${styles.inner} ${addClass}`}>
        { children }
      </div>
    </>
  )
}
