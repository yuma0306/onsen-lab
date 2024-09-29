/**
 * Style
 */
import styles from '@/components/HeadingLv2/HeadingLv2.module.scss';

type Props = {
  children: React.ReactNode;
}

export default function HeadingLv2({ children }: Props) {
  return (
    <>
      <h2 className={`${styles.headingLv2}`}>
        { children }
      </h2>
    </>
  )
}
