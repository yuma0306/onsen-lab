import { weatherType } from '@/types/weather';
import { endpoint } from '@/constants/weather';
import prefJson from '@/data/pref.json';
import { GetStaticPropsContext } from 'next';
/**
 * getStaticPathsでprefJsonのキーを取得し、それぞれのキーをパスとして生成・定義
 * return 文が指定するデータは、Next.js が静的に生成するページのパスリスト
 * このリストに基づいて、Next.js は各パスに対応するページを事前に生成する
 * fallback: false は、getStaticPaths で定義されていないパスにアクセスした場合、404 ページを返す
 */
export async function getStaticPaths() {
  const paths = Object.keys(prefJson).map(slug => ({
    params: { slug }  // パラメータ名をファイル名に合わせる
  }));
  return {
    paths,
    fallback: false
  };
}
/**
 * getStaticPropsでページごとの気象データを取得
 * context（next.jsが用意）には、getStaticPathsで指定したパスが含まれており、params.slugにアクセスすることで都道府県の識別子を取得
 * default functionに、props（気象情報のデータ）を返す
 * TypeScriptの場合は、GetStaticPropsContextを使って型を指定するのが一般的
 * ※そもそもcontextとは、Next.js が getStaticProps 関数に渡すオブジェクト。ページの生成に必要な情報を保持している（consoleで確認可能）
 */
export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context);
  // 【オブジェクトの分割代入】contextオブジェクトからparamsプロパティだけを取り出して、新しい定数に割り当て
  const { params } = context;
  // 【オプショナルチェイニング】paramsがnullまたはundefined でなければ、params.slug にアクセスし、それ以外の場合は、undefinedを返す
  // 【型アサーション】params?.slug が、string 型であることをTypeScript に断言
  const slug = params?.slug as string;
  const apiUrl = `${endpoint}?q=${slug}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&lang=ja&units=metric`;
  const res = await fetch(apiUrl);
  const weatherData = await res.json();
  return {
    props: { weatherData }
  };
}

export default function WeatherPage({ weatherData }: { weatherData: weatherType }) {
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
