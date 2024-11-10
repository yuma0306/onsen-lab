import { weatherType } from '@/types/weather';
import { endpoint } from '@/constants/weather';
import { GetServerSidePropsContext } from 'next';

interface PageProps {
  weatherData: weatherType;
}

/**
 * getServerSidePropsで、ページリクエストごとに気象データを取得
 * contextオブジェクトにはリクエスト情報が含まれており、params.slugにアクセスすることで都道府県の識別子を取得
 * default functionに、props（気象情報のデータ）を返す
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context);
  // contextオブジェクトからparamsプロパティだけを取り出して、新しい定数に割り当て
  const { params } = context;
  const slug = params?.slug as string;
  const apiUrl = `${endpoint}?q=${slug}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&lang=ja&units=metric`;
  const res = await fetch(apiUrl);
  const weatherData = await res.json();

  return {
    props: { weatherData }
  };
}

export default function WeatherPage({ weatherData }: PageProps) {
  return (
    <>
      {weatherData && weatherData.cod !== 401 ? (
        <dl>
          <dt>{`現在の${weatherData.name}`}</dt>
          <dd>天気：{weatherData.weather[0].description}</dd>
          <dd>気温：{weatherData.main.temp}度</dd>
        </dl>
      ) : (
        <p>天気情報が取得できませんでした。</p>
      )}
    </>
  );
}
