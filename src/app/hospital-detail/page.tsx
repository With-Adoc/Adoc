'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";

export default function HospitalDetail() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <button onClick={() => router.back()}>
          <Image
            src="/images/icon-arrow-left.png"
            alt="뒤로가기"
            width={28}
            height={28}
            priority
          />
        </button>
        <h1>삼성마음친구정신건강의학과의원</h1>
      </header>
      <section className={styles.hospitalInfo}>
        <Image
          src="/images/img-hospital-detail.png"
          alt="병원 상세 이미지"
          className={styles.hospitalImg}
          width={408}
          height={248.75}
          priority
        />
        <p className={styles.title}>삼성마음친구정신건강의학과의원</p>
        <p className={styles.scoreArea}>
          <Image
            src="/images/icon-score.png"
            alt="병원 평점"
            width={18}
            height={18}
            priority
          />
          <span className={styles.score}>4.2</span>
          <span className={styles.reviewCnt}>(52)</span>
        </p>
        <p className={styles.address}>서울 강남구 광평로51길 8 로얄프라자 203호</p>
      </section>
      <section className={styles.btnArea}>
        
      </section>
      <footer className={styles.footer}>
        <Image
          src="/images/adoc-footer-logo.png"
          alt="에이닥 푸터 로고"
          className={styles.footerLogo}
          width={60}
          height={60}
          priority
        />
        <p>
          <Image
            src="/images/icon-chat.png"
            alt="채팅 아이콘"
            width={14}
            height={14}
            priority
          />
          <span>이메일 : withad99@gmail.com</span>
        </p>
        <p>
          <Image
            src="/images/icon-instagram.png"
            alt="인스타그램 아이콘"
            width={14}
            height={14}
            priority
          />
          <span>인스타그램 : a.doc_official</span>
        </p>
        <p>ⓒ 2024. A-doc. All rights reserved.</p>
      </footer>
    </div>
  );
}
