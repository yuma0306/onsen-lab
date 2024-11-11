/**
 * React Next
 */
import { useState } from 'react';
import Image from 'next/image';
/**
 * Swiper
 * https://swiperjs.com/react
 */
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
/**
 * Component
 */
import SlidePrevButton from '@/components/SlidePrevButton/SlidePrevButton';
import SlideNextButton from '@/components/SlideNextButton/SlideNextButton';
/**
 * Style
 */
import 'swiper/scss';
/**
 * Types
 */
import { OnsenType } from '@/types/OnsenType';
/**
 * Export
 */
export default function Slider({ data }: { data: OnsenType }) {
  // console.log(data);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.desc}</p>
      <Swiper
        modules={[Thumbs]}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} // Check if thumbsSwiper is not null
        loop
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        // centeredSlides={true}
        // slidesPerView={1.2}
        // spaceBetween={10}
      >
        {data.images.map((d, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/img/${d}`}
              alt="画像"
              width={300}
              height={300}
              style={{ width: '100%' }}
            />
          </SwiperSlide>
        ))}
        <div>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        slidesPerView={data.images.length}
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
      >
        {data.images.map((d, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/img/${d}`}
              alt="画像"
              width={300}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
