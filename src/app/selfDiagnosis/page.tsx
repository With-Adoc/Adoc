"use client";

import Header from "@/components/header";
import Image from "next/image";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <Header headerTitle="자가테스트" />
      <section className={styles.introImage}>
        <Image
          src="/images/selfDiagnosis/intro.png"
          width={350}
          height={272}
          alt="자가테스트 인트로"
        />
      </section>
      <section className={styles.summary}>
        <div className={styles.summary_box}>
          <div className={styles.summary_box__title}>
            <span>성인 ADHD 자가보고 척도</span>
            <p>Adult ADHD Self-Report Scale / ASRS</p>
          </div>
          <div className={styles.summary_box__subTitle}>
            <div>
              <p>검사시간</p>
              <p>약 5-7분</p>
            </div>
            <div>
              <p>주의사항</p>
              <p>최근 6개월 기준으로 체크</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.information}>
        <h1>ASRS 검사는 이런 검사에요</h1>
        <p>
          ASRS 검사는 성인 ADHD 증상을 판별하기 위한 일종의 자가테스트에요.
          세계보건기구(WHO)와 해외 전문가 3명이 공동 개발한 검사에요.
        </p>
        <h1>검사를 통해 이런 걸 알 수 있어요</h1>
        <p>
          ASRS 검사는 주의력 결핍 뿐 아니라 충동성 등의 다양한 증상을 종합적으로
          평가하여 ADHD 가능성을 예상해 볼 수 있어요. 이를 통해 본인의 현 상황을
          이해하는 첫 걸음으로 본인을 더욱 잘 이해하고 필요한 지원과 조치를 취할
          수 있도록 도와줘요.
        </p>
      </section>
      <div className={styles.search}>
        <button onClick={() => router.push("/selfDiagnosis/question/1")}>
          <span>자가테스트 시작하기</span>
        </button>
      </div>
    </div>
  );
}
