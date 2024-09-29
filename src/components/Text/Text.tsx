/**
 * Style
 */
import styles from '@/components/Text/Text.module.scss';

interface Props {
  children: React.ReactNode;
  addClass?: string;
}

export default function Text({ children, addClass = '' }: Props) {
  return (
    <>
      <p className={`${styles.text} ${addClass}`}>
        { children }
      </p>
    </>
  )
}
