import React, { useEffect } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import styles from './Keen.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Component: React.FC<{ type: number, space: number, count: number }> = ({
  type,
  space,
  count
}) => {
  const router = useRouter()
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: false,
      slides: {
        perView: 3,
        spacing: space,
      },
      slideChanged() {
        console.log('slide changed')
      },
      optionsChanged(instance) {
        instance.update()
      },
      created() {
        console.log('created')
      },
      updated() {
        console.log('updated')
      },
      // detailsChanged(instance) {
      //   console.log('details changed');
      // }
    },
    [
      // add plugins here
    ]
  )

  useEffect(() => {
    instanceRef.current?.update()
  }, [router.asPath])

  const link = type === 2 ? '/keen2' : '/keen'

  return (
    <div className={styles.sliderContainer}>
      <button onClick={() => instanceRef.current?.prev()} className={styles.arrowLeft}>←</button>
      <div ref={sliderRef} className={`keen-slider ${styles.keen}`}>
        {/* countの数だけLinkをループ */}
        {[...Array(count)].map((item, index) => (
          <Link
            key={index}
            href={link}
            className={`keen-slider__slide ${styles.keen__item}`}
          >
            {item}
            {index + 1}
          </Link>
        ))}
      </div>
      <button onClick={() => instanceRef.current?.next()} className={styles.arrowRight}>→</button>
    </div>
  )
}

export default Component;
