import styles from '@/components/Bubble/Bubble.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Bubble({ children }:Props ) {
  return (
    <div className={styles.bubble}>
      <p className={styles.bubble__text}>{ children }</p>
    </div>
  )
}
