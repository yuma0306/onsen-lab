/**
 * Style
 */
import styles from '@/components/Header/Header.module.scss';
/**
 * Component
 */
import Inner from "@/components/Inner/Inner";
import Logo from "@/components/Logo/Logo";
/**
 * Type
 */
interface Props {
  addClass?: string;
}

export default function Header({ addClass = '' }: Props) {
  return (
    <>
      <header className={`${styles.header} ${addClass}`}>
        <Inner>
          <Logo />
        </Inner>
      </header>
    </>
  )
}
