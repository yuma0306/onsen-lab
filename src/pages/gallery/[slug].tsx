/**
 * Next React
 */
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
/**
 * Data
 */
import resultJson from '@/data/result.json';
/**
 * Types
 */
import { OnsenType } from '@/types/OnsenType';
/**
 * Constants
 */
import { metaTitle, metaDesc } from '@/constants/meta';
/**
 * Components
 */
import Wrapper from '@/components/Wrapper/Wrapper';
import Sc from '@/components/Sc/Sc';
import Inner from '@/components/Inner/Inner';
import Header from '@/components/Header/Header';
import Slider from '@/components/Slider/Slider';
/**
 * 【getStaticPaths】
 * getStaticPathsでsonのキーを取得し、それぞれのキーをパスとして生成・定義
 * return 文が指定するデータは、Next.js が静的に生成するページのパスリスト
 * このリストに基づいて、Next.js は各パスに対応するページを事前に生成する
 * fallback: false は、getStaticPaths で定義されていないパスにアクセスした場合、404 ページを返す
 */
export async function getStaticPaths() {
  const data: OnsenType[] = resultJson;
  const paths = data.map((value) => (
    { params: { slug: value.slug } }
  ));
  return {
    paths,
    fallback: false
  };
}
/**
 * 【getStaticProps】
 * TypeScriptの場合は、GetStaticPropsContextを使って型を指定するのが一般的
 * context（next.jsが用意）には、getStaticPathsで指定したパスが含まれている
 * contextとは、Next.js が getStaticProps関数に渡すオブジェクト
 * ▼contextの中身。console（ターミナル）で確認可能
 * {
    params: { slug: 'ikaho' },
    locales: undefined,
    locale: undefined,
    defaultLocale: undefined,
    revalidateReason: 'stale'
  }
 */
export async function getStaticProps(context: GetStaticPropsContext) {
  // console.log(context);
  // 【オブジェクトの分割代入】contextオブジェクトからparamsプロパティだけを取り出して、新しい定数に割り当て
  const { params } = context;
  console.log(params);
  const targetSlug = params?.slug as string;
  const onsenData: OnsenType[] = resultJson;
  const targetData = onsenData.find((d) => d.slug === targetSlug);
  return {
    props: { targetData }
  };
}
/**
 * Export
 */
export default function GalleryDetail({ targetData }: { targetData: OnsenType }) {
  return (
    <>
      <Head>
        <title>{`詳細ページタイトル${metaTitle}`}</title>
        <meta name="description" content={`詳細ページディスクリプション${metaDesc}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="none" />
      </Head>
      <Wrapper>
        <Header />
        <Sc>
          <Inner>
            <Slider
              data={targetData}
            />
          </Inner>
        </Sc>
      </Wrapper>
    </>
  );
}
