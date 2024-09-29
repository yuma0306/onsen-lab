/**
 * style
 */
import styles from '@/components/Sc/Sc.module.scss';

interface Props {
  children: React.ReactNode;
  bgColor?: 'primary' | 'primary02' | 'gray';
  addClass?: string;
}

export default function Sc({ children, addClass = '', bgColor} : Props) {
  if(bgColor) {
    addClass += ' ' + styles[`sc--${bgColor}`];
  }
  return (
    <>
      <section className={`${styles.sc} ${addClass}`}>
        { children }
      </section>
    </>
  )
}
