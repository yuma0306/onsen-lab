/**
 * Style
 */
import styles from '@/components/HeadingLv1/HeadingLv1.module.scss';
/**
 * Component
 */
import Inner from "@/components/Inner/Inner";

type Props = {
  children: React.ReactNode;
}

export default function HeadingLv1({ children }: Props) {
  return (
    <h1 className={`${styles.headingLv1}`}>
      <Inner>
        <span className={`${styles.headingLv1__text}`}>
          { children }
        </span>
      </Inner>
    </h1>
  )
}
