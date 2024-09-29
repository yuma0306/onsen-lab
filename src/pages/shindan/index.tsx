/**
 * Next React
 */
import Head from "next/head";
import { useState } from "react";
/**
 * Data
 */
import questionJson from '@/data/question.json';
import resultData from '@/data/result.json';
/**
 * Components
 */
import Wrapper from "@/components/Wrapper/Wrapper";
import Sc from "@/components/Sc/Sc";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header';
import Box from '@/components/Box/Box';
import Btn from '@/components/Btn/Btn';
import Col from '@/components/Col/Col';
/**
 * Types
 */
interface Question {
  id: number;
  text: string;
  yes: {
    next: number | null;
    result: number | null;
  };
  no: {
    next: number | null;
    result: number | null;
  };
}

export default function Shindan() {
  // データ
  const questionData: Question[] = questionJson;
  const [question, setQuestion] = useState<number | null>(0);
  const [answer, setAnswer] = useState<number | null>(null);
  console.log(question, answer);
  const handleClick = (next: number | null, result: number | null, type: 'yes' | 'no') => {
    console.log(question, answer);
    /// nextがnullでない場合、次の質問を実行する
    if(next !== null) {
      setAnswer(null);
      setQuestion(next);
    }
    // nextがnull・resultがnullでない・Yesの場合、結果を表示する
    if(next === null && result !== null && type === 'yes') {
      setQuestion(null);
      setAnswer(result);
    }
    // nextがnull・resultがnullでない・Noの場合、結果を表示する
    if(result !== null && result !== null && type === 'no') {
      setQuestion(null);
      setAnswer(result);
    }
  }
  const handleReset = () => {
    setQuestion(0);
    setAnswer(null);
  }
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
        <Sc bgColor="primary02" addClass="u-pt0">
          <Inner>
            <Box>
              {question !== null && answer === null && (
                <>
                  <p>{questionData[question].text}</p>
                  <Col>
                    <Btn
                      type="yes"
                      onClick={() => handleClick(questionData[question].yes.next, questionData[question].yes.result, 'yes')}
                    >
                      Yes
                    </Btn>
                    <Btn
                      type="no"
                      onClick={() => handleClick(questionData[question].no.next, questionData[question].no.result, 'no')}
                    >
                      No
                    </Btn>
                  </Col>
                </>
              )}
              {question === null && answer !== null && (
                <>
                  <p>{resultData[answer].title}</p>
                  <button onClick={handleReset}>もう一度診断する</button>
                </>
              )}
            </Box>
          </Inner>
        </Sc>
      </Wrapper>
    </>
  );
}
