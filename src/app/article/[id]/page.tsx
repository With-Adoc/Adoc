"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// import Button from "@/components/Button";
import styles from "./page.module.scss";
import { articles } from "@/app/article/articles";
import Header from "@/components/header";

export default function Article({ params }: { params: { id: number } }) {
  const router = useRouter();
  const article = articles.find((a) => a.idx === Number(params.id));
  if (!article) return null;
  console.log(params.id);
  // console.log("article", article);

  return (
    <div className={styles.wrap}>
      <section
        className={styles.header}
        style={{ backgroundColor: article.colorCd }}
      >
        <Header />
        {/* <header className={styles.headerIcon}>
          <Image
            src="/images/icon-arrow-left.png"
            alt="뒤로가기 화살표"
            width={23}
            height={23}
            priority
          />
        </header> */}
        <Image
          className={styles.headerImg}
          src={article.img}
          alt="정신건강의학과 진료에 대한 오해와 진실"
          width={0}
          height={0}
          sizes="100vw"
        />
        <h1>{article.title}</h1>
        <p>{article.subTitle}</p>
      </section>
      <section className={styles.main}>
        <div className={styles.summary}>{article.summary}</div>
        <div className={styles.section01}>
          <h1>{article.section01.title}</h1>
          {article.section01.contents.map((c: string, idx: number) => {
            return <p key={idx}>{c}</p>;
          })}
        </div>
        <div className={styles.section02}>
          <h1>{article.section02.title}</h1>
          {article.section02.contents.map((c: string, idx: number) => {
            return <p key={idx}>{c}</p>;
          })}
        </div>
        <div className={styles.section03}>
          <h1>{article.section03.title}</h1>
          {article.section03.contents.map((c: string, idx: number) => {
            return <p key={idx}>{c}</p>;
          })}
        </div>
      </section>
      <section className={styles.reference}>
        <p>{article.reference}</p>
      </section>
      <div className={styles.search}>
        <button onClick={() => router.push("/hospital-list")}>
          <span>지금 바로 병원 찾아보기</span>
          <Image
            src="/images/icon-arrow-right.png"
            alt="바로가기 화살표"
            width={23}
            height={23}
            priority
          />
        </button>
      </div>
    </div>
  );
}
