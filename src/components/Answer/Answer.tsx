/**
 * Next React
 */
import Link from "next/link";
import Image from "next/image";
/**
 * styles
 */
import styles from "@/components/Answer/Answer.module.scss"
/**
 * types
 */
interface Props {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  name: string;
}

export default function Answer({ href, src, alt, width, height, name }: Props) {
  return (
    <dl className={styles.answer}>
      <dt className={styles.answer__heading}>あなたにオススメの温泉は...</dt>
      <dd className={styles.answer__body}>
        <Link href={href} className={styles.answer__link}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={styles.answer__img}
          />
          <p className={styles.answer__name}>{name}</p>
        </Link>
      </dd>
    </dl>
  )
}
