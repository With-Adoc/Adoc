"use client";

import Header from "@/components/header";
import styles from "./page.module.scss";
import Image from "next/image";
import { results } from "@/app/selfDiagnosis/result/results";
import { useRouter } from "next/navigation";

export default function Result({ params }: { params: { type: string } }) {
  const router = useRouter();
  console.log(params.type);
  const result = results.find((r) => r.type === params.type.toUpperCase());
  console.log(result);
  return (
    <div className={styles.wrap}>
      <Header headerTitle="해설" />
      <section className={styles.result}>
        <Image
          className={styles.result_img}
          src={result.img}
          width={0}
          height={0}
          sizes="100vw"
          alt="결과 이미지"
        />
      </section>
      <section className={styles.main}>
        <h1>{result.title}</h1>
        <div className={styles.section01}>
          <h3>{result.section01.title}</h3>
          {result.section01.contents.map((c: string, idx: number) => {
            return <p key={idx}>{c}</p>;
          })}
        </div>
        <div className={styles.section02}>
          <h3>{result.section02.title}</h3>
          {result.section02.contents.map((c: string, idx: number) => {
            return <p key={idx}>{c}</p>;
          })}
        </div>
        {result.section03 && (
          <div className={styles.section03}>
            <h3>{result.section03.title}</h3>
            {result.section03.contents.map((c: string, idx: number) => {
              return <p key={idx}>{c}</p>;
            })}
          </div>
        )}
      </section>
      <section className={styles.reference}>
        <p>{result.reference}</p>
      </section>
      <div className={styles.search}>
        <button onClick={() => router.push("/hospital-list")}>
          <span>병원 찾으러 가기</span>
        </button>
      </div>
    </div>
  );
}
