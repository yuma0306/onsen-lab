/**
 * Next React
 */
import Head from "next/head";
/**
 * Components
 */
import Wrapper from "@/components/Wrapper/Wrapper";
import Sc from "@/components/Sc/Sc";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header';

export default function GalleryDetail() {
  return (
    <>
      <Head>
        <title>温泉一覧 | 温泉ラボ</title>
        <meta name="description" content="温泉一覧 | あなたにピッタリの温泉が見つかる。温泉ラボ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="none" />
      </Head>
      <Wrapper>
        <Header />
        <Sc>
          <Inner>
            詳細ページ
          </Inner>
        </Sc>
      </Wrapper>
    </>
  );
}
