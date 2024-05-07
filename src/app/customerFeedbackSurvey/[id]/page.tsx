"use client";

import Header from "@/components/header";
import styles from "./page.module.scss";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function CustomerFeedbackSurvey({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const questions = useMemo(
    () => [
      {
        questionId: "1",
        questionType: "1",
        questionTitl: "에이닥을 쓰면서<br />얼마나 만족하시나요?",
        questionSubTitl: "",
        answerList: [
          { titl: "매우 만족", scr: 5 },
          { titl: "만족", scr: 4 },
          { titl: "보통", scr: 3 },
          { titl: "불만족", scr: 2 },
          { titl: "매우 불만족", scr: 1 },
        ],
      },
      {
        questionId: "2",
        questionType: "2",
        questionTitl: "에이닥에게<br />전하고 싶은 의견이 있나요?",
        questionSubTitl: "적어주신 의견을 꼼꼼하게 살피고 검토할게요.",
        answerList: [],
        answerPlaceholder: "입력하기",
      },
      {
        questionId: "3",
        questionType: "2",
        questionTitl:
          "주변 사람들에게 에이닥을<br />추천하고 싶은 정도는 얼마일까요?",
        questionSubTitl: "",
        answerList: [],
        answerPlaceholder: "1-10점 사이로 추천 정도를 적어주세요\nex) 10점",
      },
      {
        questionId: "4",
        questionType: "2",
        questionTitl: "에이닥 사용성 평가<br />참가자를 모집해요",
        questionSubTitl:
          "에이닥에 대한 의견을 공유해가며<br />저희 서비스를 같이 완성해보세요",
        answerList: [],
        answerPlaceholder: "이메일을 입력해 주세요.",
      },
    ],
    []
  );
  console.log("id", params.id);
  const [qst, setQst] = useState(null);
  const [current, setCurrent] = useState(+params.id);
  const qstInfo = questions.find((q) => q.questionId === params.id);

  useEffect(() => {
    setQst(qstInfo);
  }, [qstInfo]);

  console.log("qstInfo", qstInfo);
  console.log("qst", qst);

  const progressPercent = (+params.id / questions.length) * 100;

  function clickAnswer(e) {
    console.log(">>>>>>>>>>>>");
    console.log(e.target.value);
    console.log(e.target.checked);
    console.log(">>>>>>>>>>>>");

    if (!isNaN(e.target.value)) {
      router.push(`/customerFeedbackSurvey/${current + 1}`);
    }
  }

  return (
    <div className={styles.wrap}>
      <Header headerTitle="사용자 만족도 조사" />
      {params.id === String(questions.length + 1) ? (
        <>
          <div className={styles.complete}>
            <div className={styles.complete_text}>
              <p>
                답변 제출 완료!
                <br />
                소중한 의견 감사해요
              </p>
            </div>
            <div className={styles.complete_img}>
              {/* <Image
                src="/images/icon-feedback.png"
                alt="피드백 완료 이미지"
                width={100}
                height={110}
                priority
              /> */}
            </div>
          </div>
          <button
            className={styles.complete_btn}
            onClick={() => router.push("/")}
          >
            완료
          </button>
        </>
      ) : (
        <>
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
                  <div className={styles.questions_answer}>
                    {qst?.questionType === "1" ? (
                      qst?.answerList.map((answ) => (
                        <label
                          key={answ.scr}
                          htmlFor={`answ_` + answ.scr}
                          onClick={() => clickAnswer(event)}
                        >
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
                      ))
                    ) : (
                      <div className={styles.questions_answer}>
                        <textarea
                          placeholder={qst?.answerPlaceholder}
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          {(qst !== null && qst?.questionType) !== "1" ? (
            <button
              onClick={() => clickAnswer(event)}
              className={styles.survey_btn}
            >
              다음
            </button>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
