/**
 * Next React
 */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Style
 */
import styles from '@/components/GalleryCard/GalleryCard.module.scss';

interface Props {
  src: string;
  width: number;
  height: number;
  text: string;
  href: string;
}

export default function GalleryCard({ src, width, height, text, href }: Props ) {
  const [modal, setModal] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setModal(true);
  }
  const handleMouseLeave = () => {
    setModal(false);
  }
  return (
    <Link href={href} className={`${styles.galleryCard}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${styles.galleryCard__modal} ${modal ? styles['galleryCard__modal--active'] : ''}`}>
        {text}
      </div>
      <Image src={src} alt={text} width={width} height={height} loading="lazy" />
    </Link>
  )
}
