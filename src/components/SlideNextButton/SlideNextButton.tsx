import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>次へ</button>
  );
}
