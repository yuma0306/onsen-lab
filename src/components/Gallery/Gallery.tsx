/**
 * Style
 */
import styles from '@/components/Gallery/Gallery.module.scss';

/**
 * Components
 */
import GalleryCard from '@/components/GalleryCard/GalleryCard';

export default function Gallery() {

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__col}>
        <GalleryCard
          src="/img/img-gero.jpg"
          width={288}
          height={188}
          text="下呂温泉"
          href="/gallery/gero/"
        />
        <GalleryCard
          src="/img/img-ginzan.jpg"
          width={288}
          height={396}
          text="銀山温泉"
          href="/gallery/ginzan/"
        />
      </div>
      <div className={styles.gallery__col}>
        <GalleryCard
          src="/img/img-kusatsu.jpg"
          width={288}
          height={188}
          text="草津温泉"
          href="/gallery/kusatsu/"
        />
        <GalleryCard
          src="/img/img-kinosaki.jpg"
          width={288}
          height={188}
          text="城崎温泉"
          href="/gallery/kinosaki/"
        />
        <GalleryCard
          src="/img/img-arima.jpg"
          width={288}
          height={188}
          text="有馬温泉"
          href="/gallery/arima/"
        />
      </div>
      <div className={styles.gallery__col}>
        <GalleryCard
          src="/img/img-ikaho.jpg"
          width={288}
          height={396}
          text="伊香保温泉"
          href="/gallery/ikaho/"
        />
        <GalleryCard
          src="/img/img-kurokawa.jpg"
          width={288}
          height={396}
          text="黒川温泉"
          href="/gallery/kurokawa/"
        />
      </div>
    </div>
  )
}
