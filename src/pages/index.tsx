/**
 * Next React
 */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
/**
 * Components
 */
import Wrapper from "@/components/Wrapper/Wrapper";
import Sc from "@/components/Sc/Sc";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header'
import HeadingLv2 from '@/components/HeadingLv2/HeadingLv2'
import Bnr from "@/components/Bnr/Bnr";

export default function Home() {
  return (
    <>
      <Head>
        <title>温泉ラボ</title>
        <meta name="description" content="あなたにピッタリの温泉が見つかる | 温泉ラボ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <Sc bgColor="primary02">
          <Inner>
            <HeadingLv2>Yes・No 温泉診断</HeadingLv2>
            <Bnr />
          </Inner>
        </Sc>
      </Wrapper>
    </>
  );
}
