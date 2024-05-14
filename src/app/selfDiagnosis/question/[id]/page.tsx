"use client";

import Header from "@/components/header";
import styles from "./page.module.scss";
import { useState, useEffect, useMemo, useReducer } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers";
import { setAnswers } from "../../../reducers/selfDiagnosis";

export default function SelfDiagnosisQuestion({
  params,
}: {
  params: { id: string };
}) {
  const userAnswer = useSelector(
    (state: RootState) => state.selfDiagnosisSlice.userAnswer
  );
  const dispatch = useDispatch();

  const pathname = usePathname();
  const router = useRouter();
  // console.log("pathname", pathname);
  // console.log("router", router);
  const questions = useMemo(
    () => [
      {
        questionId: "1",
        questionType: "1",
        questionTitl:
          "어떤 일의 어려운 부분은 끝내 놓고<br />그 일을 마무리를 짓지 못해서<br />곤란을 겪은 적이 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "2",
        questionType: "1",
        questionTitl:
          "체계가 필요한 일을 해야 할 때<br />순서대로 진행하기 어려운 경우가<br />있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "3",
        questionType: "1",
        questionTitl:
          "약속이나 해야 할 일을 잊어버려<br />곤란을 겪은 적이 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "4",
        questionType: "1",
        questionTitl: "골치 아픈 일은 피하거나 미루는<br />경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "5",
        questionType: "1",
        questionTitl:
          "오래 앉아 있을 때, 손을 만지작거리거나<br />발을 꼼지락거리는 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "6",
        questionType: "1",
        questionTitl:
          "마치 모터가 달린 것처럼, 과도하게<br />혹은 멈출 수 없이 활동을 하는<br />경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "7",
        questionType: "1",
        questionTitl:
          "반복되는 일을 할 때,<br />부주의해서 실수를 하는 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "8",
        questionType: "1",
        questionTitl:
          "지루한 일을 할 때,<br />주의 집중이 힘든 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "9",
        questionType: "1",
        questionTitl:
          "대화 중, 특히 상대방이 당신에게<br />직접적으로 말하고 있을 때에도,<br />집중하기 힘든 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "10",
        questionType: "1",
        questionTitl:
          "집이나 직장에서 물건을 엉뚱한 곳에<br />두거나 어디에 두었는지 찾기 어려운<br />경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "11",
        questionType: "1",
        questionTitl:
          "주변에서 벌어지는 일이나 소음 때문에<br />주의가 산만해 지는 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "12",
        questionType: "1",
        questionTitl:
          "회의나 다른 사회적 상황에서 계속 앉아<br />있어야 함에도 잠깐씩 자리를 뜨는<br />경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "13",
        questionType: "1",
        questionTitl: "안절부절 못하거나 조바심이 드는 경우가<br />있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "14",
        questionType: "1",
        questionTitl:
          "혼자 쉬고 있을 때, 긴장을 풀거나 마음을<br />편하게 갖기 어려운 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "15",
        questionType: "1",
        questionTitl:
          "사회적 상황에서 나 혼자 말을 너무 많이<br />한다고 느끼는 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "16",
        questionType: "1",
        questionTitl:
          "대화 도중 상대방이 말을 끝내기 전에<br />끼어들어 상대방의 말을 끊는 경우가<br />있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "17",
        questionType: "1",
        questionTitl:
          "차례를 지켜야 하는 상황에서 자신의<br />차례를 기다리는 것이 어려운 경우가<br />있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
      {
        questionId: "18",
        questionType: "1",
        questionTitl:
          "다른 사람이 바쁘게 일할 때, 방해되는<br />행동을 하는 경우가 있습니까?",
        answerList: [
          { titl: "전혀 그렇지 않다", scr: 1 },
          { titl: "거의 그렇지 않다", scr: 2 },
          { titl: "가끔 그렇다", scr: 3 },
          { titl: "자주 그렇다", scr: 4 },
          { titl: "매우 그렇다", scr: 5 },
        ],
      },
    ],
    []
  );
  //   console.log("id", params.id);
  const [current, setCurrent] = useState(+params.id);
  const [sum, setSum] = useState(0);
  const [qst, setQst] = useState(null);
  const qstInfo = questions.find((q) => q.questionId === params.id);
  useEffect(() => {
    setQst(qstInfo);
  }, [qstInfo]);
  //   console.log("qstInfo", qstInfo);
  //   console.log("qst", qst);
  const progressPercent = (+params.id / questions.length) * 100;

  function clickAnswer(e) {
    // console.log(">>>>>>>>>>>>");
    // console.log(e.target.value);
    // console.log(e.target.checked);
    // console.log(">>>>>>>>>>>>");

    if (!isNaN(e.target.value)) {
      let answers;
      if (userAnswer.filter((answer) => answer.qstId === current).length > 0) {
        answers = [
          ...userAnswer.filter((answer) => answer.qstId !== current),
          { qstId: current, answer: e.target.value },
        ];
      } else {
        answers = [...userAnswer, { qstId: current, answer: e.target.value }];
      }
      dispatch(setAnswers(answers));
      const num = sum + +e.target.value;
      setSum(num);
      // console.log("sum", sum);
      // console.log("+e.target.value", +e.target.value);
      // console.log("num", num);

      const qstInfo = questions.find(
        (q) => q.questionId === String(current + 1)
      );
      setQst(qstInfo);

      if (current === questions.length) {
        const answersForCal = answers.filter((answer) => answer.qstId < 7);
        let resultType = "a";
        answersForCal.forEach((answer) => {
          if (answer.qstId < 4) {
            if (answer.answer < 3) {
              resultType = "b";
            }
          } else {
            if (answer.answer < 4) {
              resultType = "b";
            }
          }
        });
        console.log("current === questions.length::userAnswer", answers);
        router.push(`/selfDiagnosis/result/${resultType}`, { scroll: true });
      } else {
        router.push(`/selfDiagnosis/question/${current + 1}`, { scroll: true });
      }
    }
  }

  return (
    <div className={styles.wrap}>
      <Header headerTitle="자가테스트" />
      <div className={styles.survey}>
        <div className={styles.progressbar}>
          <div className={styles.progressbar_num}>
            <span>{params.id}</span>/{questions.length}
          </div>
          <div className={styles.progressbar_indicator}>
            <span
              className={styles.progressbar_indicator__bar}
              style={{ width: progressPercent + "%" }}
            ></span>
          </div>
        </div>
        {qst !== null ? (
          <>
            <div className={styles.questions}>
              <div className={styles.questions_question}>
                <p
                  className={styles.questions_question__titl}
                  dangerouslySetInnerHTML={{ __html: qst?.questionTitl }}
                ></p>
                {qst?.questionSubTitl !== "" ? (
                  <p
                    className={styles.questions_question__subTitl}
                    dangerouslySetInnerHTML={{
                      __html: qst?.questionSubTitl,
                    }}
                  ></p>
                ) : (
                  ""
                )}
              </div>
              <div
                className={styles.questions_answer}
                onClick={() => clickAnswer(event)}
              >
                {qst?.answerList.map((answ) => (
                  <label key={answ.scr} htmlFor={`answ_` + answ.scr}>
                    <input
                      className={styles.questions_answer__input}
                      type="radio"
                      value={answ.scr}
                      id={`answ_` + answ.scr}
                    ></input>
                    <span className={styles.questions_answer__span}>
                      {answ.titl}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
