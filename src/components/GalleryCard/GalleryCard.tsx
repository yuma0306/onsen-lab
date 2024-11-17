/**
 * Next React
 */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
/**
 * Style
 */
import styles from './GalleryCard.module.scss';
/**
 * Props
 */
interface Props {
  src: string;
  width: number;
  height: number;
  text: string;
  href: string;
  colSpan?: number;
  rowSpan?: number;
}

export default function GalleryCard({ src, width, height, text, href, colSpan = 1, rowSpan = 1, }: Props ) {
  const [modal, setModal] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setModal(true);
  }
  const handleMouseLeave = () => {
    setModal(false);
  }
  return (
    <Link href={href} className={`${styles.galleryCard} ${styles[`galleryCard--colSpan-${colSpan}`]} ${styles[`galleryCard--rowSpan-${rowSpan}`]}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={modal ? `${styles.galleryCard__modal} ${styles['galleryCard__modal--active']}` : styles.galleryCard__modal} data-testid="gallery-card">
        {text}
      </div>
      <Image src={src} alt={text} width={width} height={height} loading="lazy" />
    </Link>
  )
}
