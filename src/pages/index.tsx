/**
 * Next React
 */
import Head from "next/head";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
/**
 * Components
 */
import Area from "@/components/Area/Area";
import Wrapper from "@/components/Wrapper/Wrapper";
import Kv from "@/components/Kv/Kv";
import Sc from "@/components/Sc/Sc";
import ScBlock from "@/components/ScBlock/ScBlock";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header'
import HeadingLv2 from '@/components/HeadingLv2/HeadingLv2'
import Bnr from "@/components/Bnr/Bnr";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import AccList from "@/components/AccList/AccList";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (hasShownPopup) {
        return;
      }
      if (targetRef.current) {
        const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
        // const scrollPosition = window.scrollY + window.innerHeight; // 画面下に要素が入ったら
        const scrollPosition = window.scrollY; // 画面上に要素が来たら
        if (scrollPosition >= elementPosition) {
          setShowPopup(true);
          setHasShownPopup(true);
        }
      }
    };
    // スクロールイベントのリスナーを設定
    window.addEventListener('scroll', handleScroll);
    // クリーンアップ関数でリスナーを削除
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownPopup]);
  // ポップアップを閉じる
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Head>
        <title>温泉ラボ</title>
        <meta name="description" content="あなたにピッタリの温泉が見つかる | 温泉ラボ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="none" />
      </Head>
      <Wrapper>
        <Header />
        <Kv />
        <Sc bgColor="primary02" bottomLarge>
          <Inner>
            <HeadingLv2>Yes・No 温泉診断</HeadingLv2>
            <Bnr />
          </Inner>
        </Sc>
        <div ref={targetRef}>
          <Sc bgColor="primary" addClass="u-pt0" bottomSmall>
            <Inner>
              <ScBlock>
                <HeadingLv2>温泉ギャラリー</HeadingLv2>
                <Gallery />
              </ScBlock>
            </Inner>
          </Sc>
        </div>
        <Sc bgColor="primary02">
          <Inner>
            <HeadingLv2>都道府県から温泉を探す</HeadingLv2>
            <Area />
          </Inner>
        </Sc>
        <Sc>
          <Inner>
            <HeadingLv2>温泉豆知識</HeadingLv2>
            <AccList
              list = {[
                {heading: '質問1', body: '回答1'},
                {heading: '質問2', body: '回答2'},
                {heading: '質問3', body: '回答3'},
              ]}
            />
          </Inner>
        </Sc>
        <Footer />
        {showPopup && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}>
            <div onClick={closePopup}>閉じる</div>
            <Link href="/shindan/">
              <Image
                src="/img/bnr-shindan.png"
                alt="あなたにピッタリの温泉は？Yes・No温泉診断"
                width={300}
                height={250}
              />
            </Link>
          </div>
        )}
      </Wrapper>
    </>
  );
}
