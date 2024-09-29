/**
 * Next React
 */
import Link from "next/link";
import Image from "next/image";

/**
 * Style
 */
import styles from '@/components/Bnr/Bnr.module.scss';

export default function Bnr() {
  return (
    <>
      <Link href="/shindan/" className={styles.bnr}>
        <Image
          src="/img/bnr-shindan.png"
          alt="あなたにピッタリの温泉は？Yes・No温泉診断"
          width={300}
          height={250}
        />
      </Link>
    </>
  )
}
