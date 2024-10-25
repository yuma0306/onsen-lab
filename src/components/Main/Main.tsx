import styles from '@/components/Main/Main.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Main( { children }: Props) {
  return (
    <div className={styles.main}>
      { children }
    </div>
  )
}
