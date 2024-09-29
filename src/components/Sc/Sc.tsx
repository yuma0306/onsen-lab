/**
 * style
 */
import styles from '@/components/Sc/Sc.module.scss';

interface Props {
  children: React.ReactNode;
  bgColor?: 'primary' | 'primary02' | 'gray';
}

export default function Sc({ children, bgColor } : Props) {
  let bgClass = styles[`sc--${bgColor}`];
  return (
    <>
      <section className={`${styles.sc} ${bgColor ? bgClass : ''}`}>
        { children }
      </section>
    </>
  )
}
