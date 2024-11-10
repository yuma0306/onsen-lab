/**
 * Style
 */
import styles from '@/components/Wrapper/Wrapper.module.scss';

interface Props {
  children: React.ReactNode;
  addClass?: string;
}

export default function Wrapper({ children, addClass = '' }: Props) {
  return (
    <>
      <div className={`${styles.wrapper} ${addClass}`}>
        { children }
      </div>
    </>
  )
}
