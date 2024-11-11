/**
 * React Next
 */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ErrorPage from 'next/error';
/**
 * Data
 */
import resultJson from '@/data/result.json';
/**
 * Swiper
 * https://swiperjs.com/react
 */
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
/**
 * Types
 */
import { OnsenType } from '@/types/OnsenType';
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
 * Export
 * GetStaticPropsでパスに応じて、その温泉の画像を取得するようにする
 */
export default function Slider() {
  const resultData: OnsenType[] = resultJson;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const router = useRouter();
  const currentPath = router.asPath.split('/').filter(Boolean);
  const lastPath = currentPath[currentPath.length - 1];
  const data = resultData.find((d) => d.slug === lastPath);
  if (!data) {
    // 404ページを表示
    return <ErrorPage statusCode={404} />;
  }
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
        slidesPerView={data?.images.length}
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
