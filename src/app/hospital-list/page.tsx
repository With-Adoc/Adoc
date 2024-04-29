'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";

export default function HospitalList() {
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
        <h1>강남구</h1>
      </header>
      <section className={styles.filter}>
        <ul>
          <li>야간 진료</li>
          <li>토요일 진료</li>
          <li>비급여진료 공개</li>
        </ul>
      </section>
      <section className={styles.sort}>
        <span>총 N개</span>
        <select>
          <option>평점 높은 순</option>
          <option>리뷰 많은 순</option>
        </select>
      </section>
      <section className={styles.lists}>
        <ul>
          <li onClick={() => router.push('/hospital-detail')}>
            <div className={styles.info}>
              <p className={styles.chip}>
                <span className={styles.active}>야간진료</span>
                <span>토요일진료</span>
              </p>
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
            </div>
            <div className={styles.hospitalImg}>
              <Image
                src="/images/img-hospital2.png"
                alt="병원 사진"
                width={88}
                height={88}
                priority
              />
            </div>
          </li>
          <li>
            <div className={styles.info}>
              <p className={styles.chip}>
                <span className={styles.active}>야간진료</span>
                <span>토요일진료</span>
              </p>
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
            </div>
            <div className={styles.hospitalImg}>
              <Image
                src="/images/img-hospital2.png"
                alt="병원 사진"
                width={88}
                height={88}
                priority
              />
            </div>
          </li>
          <li>
            <div className={styles.info}>
              <p className={styles.chip}>
                <span className={styles.active}>야간진료</span>
                <span>토요일진료</span>
              </p>
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
            </div>
            <div className={styles.hospitalImg}>
              <Image
                src="/images/img-hospital2.png"
                alt="병원 사진"
                width={88}
                height={88}
                priority
              />
            </div>
          </li>
          <li>
            <div className={styles.info}>
              <p className={styles.chip}>
                <span className={styles.active}>야간진료</span>
                <span>토요일진료</span>
              </p>
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
            </div>
            <div className={styles.hospitalImg}>
              <Image
                src="/images/img-hospital2.png"
                alt="병원 사진"
                width={88}
                height={88}
                priority
              />
            </div>
          </li>
        </ul>
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
