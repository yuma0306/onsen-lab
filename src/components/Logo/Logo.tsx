/**
 * Next React
 */
import Image from "next/image";
import Link from "next/link";
/**
 * Style
 */
import styles from '@/components/Logo/Logo.module.scss';

interface Props {
  addClass?: string;
}

export default function Logo({addClass = '' }: Props) {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/img/logo.png"
        alt="温泉ラボ"
        width={140}
        height={36}
      />
    </Link>
  )
}
