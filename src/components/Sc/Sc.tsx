/**
 * style
 */
import styles from '@/components/Sc/Sc.module.scss';

interface Props {
  children: React.ReactNode;
  bgColor?: 'primary' | 'primary02' | 'gray';
  bottomLarge?: boolean;
  bottomSmall?: boolean;
  addClass?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export default function Sc({ children, addClass = '', bgColor, bottomLarge, bottomSmall} : Props) {
  if(bgColor) {
    addClass += ' ' + styles[`sc--${bgColor}`];
  }
  if(bottomLarge) {
    addClass += ' ' + styles[`sc--bottomLarge`];
  }
  if(bottomSmall) {
    addClass += ' ' + styles[`sc--bottomSmall`];
  }
  return (
    <>
      <section className={`${styles.sc} ${addClass}`}>
        { children }
      </section>
    </>
  )
}
