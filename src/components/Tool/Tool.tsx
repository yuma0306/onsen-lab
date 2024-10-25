/**
 * Next React
 */
import { useState } from "react";
/**
 * Type
 */
import { QuestionType } from '@/types/question';
/**
 * Data
 */
import questionJson from '@/data/question.json';
import resultData from '@/data/result.json';
/**
 * Component
 */
import Btn from '@/components/Btn/Btn';
import BtnCol from '@/components/BtnCol/BtnCol';
import Answer from '@/components/Answer/Answer'
import BtnReturn from '@/components/BtnReturn/BtnReturn'
import Bubble from '@/components/Bubble/Bubble';

export default function Tool() {
  // データ
  const questionData: QuestionType[] = questionJson;
  const [question, setQuestion] = useState<number | null>(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const handleClick = (next: number | null, result: number | null, type: 'yes' | 'no') => {
    /// nextがnullでない場合、次の質問を実行
    if(next !== null) {
      setAnswer(null);
      setQuestion(next);
    }
    // nextがnull・resultがnullでない・Yesの場合、結果表示
    if(next === null && result !== null && type === 'yes') {
      setQuestion(null);
      setAnswer(result);
    }
    // nextがnull・resultがnullでない・Noの場合、結果表示
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
      {question !== null && answer === null && (
        <>
          <Bubble>
            {questionData[question].text}
          </Bubble>
          <BtnCol>
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
          </BtnCol>
        </>
      )}
      {question === null && answer !== null && (
        <>
          <Answer
            href={`/gallery/${resultData[answer].slug}/`}
            src={`/img/img-${resultData[answer].slug}.jpg`}
            alt={resultData[answer].name}
            width={300}
            height={200}
            name ={resultData[answer].name}
          />
          <BtnReturn
            onClick={() => handleReset() }
          >
            もう一度診断する
          </BtnReturn>
        </>
      )}
    </>
  )
}
