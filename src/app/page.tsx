"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>
          <Image
            className={styles.logo}
            src="/images/adoc-logo.png"
            alt="에이닥 로고"
            width={74.19}
            height={20}
            priority
          />
        </h1>
        <Image
          src="/images/icon-search.png"
          alt="병원 찾기 아이콘"
          width={20}
          height={20}
          priority
          onClick={() => router.push("/hospitalSearch")}
        />
      </header>
      <section className={styles.main}>
        <div>
          <span>
            ADHD 진단자들의
            <br />
            솔직한 병원 리뷰
          </span>
        </div>
        <Image
          src="/images/img-main.png"
          alt="메인 이미지"
          width={440}
          height={410}
          priority
        />
      </section>
      <section className={styles.hospital}>
        <h2 className={styles.title}>리뷰가 많은 ADHD 병원</h2>
        <ul>
          <li onClick={() => router.push("/hospital-list")}>
            <div>
              <div>
                <span>소민정신건강의학과의원</span>
                <span>
                  <Image
                    src="/images/icon-score.png"
                    alt="병원 평점"
                    width={18}
                    height={18}
                    priority
                  />
                  <em>4.1</em>
                  <span>(20)</span>
                </span>
              </div>
              <div>
                <Image
                  src="/images/img-hospital.png"
                  alt="병원 이미지"
                  width={48}
                  height={48}
                  priority
                />
              </div>
            </div>
            <div>
              가까워서 아이 병원 옮겨볼까 하고 와봤는데 병원이 크고 깔끔해요.
              쓰는 약이야 비슷하겠지만 아이가 선생님을 좋아하네요. 선생님이
              친철하세...
            </div>
          </li>
          <li>
            <div>
              <div>
                <span>소민정신건강의학과의원</span>
                <span>
                  <Image
                    src="/images/icon-score.png"
                    alt="병원 평점"
                    width={18}
                    height={18}
                    priority
                  />
                  <span>4.1</span>
                  <span>(20)</span>
                </span>
              </div>
              <div>
                <Image
                  src="/images/img-hospital.png"
                  alt="병원 이미지"
                  width={48}
                  height={48}
                  priority
                />
              </div>
            </div>
            <div>
              가까워서 아이 병원 옮겨볼까 하고 와봤는데 병원이 크고 깔끔해요.
              쓰는 약이야 비슷하겠지만 아이가 선생님을 좋아하네요. 선생님이
              친철하세...
            </div>
          </li>
        </ul>
      </section>
      <section
        className={styles.banner}
        onClick={() => router.push("/customerFeedbackSurvey/1")}
      >
        <div>
          <div>
            <p>에이닥에게 의견을 보내주세요</p>
            <p>
              <em>1만원 상당의 기프티콘</em>을<br />
              추첨을 통해 드릴게요
            </p>
          </div>
          <Image
            src="/images/img-banner1.png"
            alt="에이닥에게 의견을 보내주세요."
            width={146}
            height={75}
            priority
          />
        </div>
      </section>
      <section className={styles.review}>
        <h2 className={styles.title}>최근 올라온 ADHD 병원 리뷰</h2>
        <ul>
          <li>
            <p>소민정신건강의학과의원</p>
            <span>
              가까워서 아이 병원 옮겨볼까 하고 와봤는데 병원이 크고 깔끔해요.
              쓰는 약이야 비슷하겠지만 아이가 선생님을 좋아하네요. 선생님이
              친철...
            </span>
            <button>리뷰 121개 더보기</button>
          </li>
          <li>
            <p>소민정신건강의학과의원</p>
            <span>
              가까워서 아이 병원 옮겨볼까 하고 와봤는데 병원이 크고 깔끔해요.
              쓰는 약이야 비슷하겠지만 아이가 선생님을 좋아하네요. 선생님이
              친철...
            </span>
            <button>리뷰 121개 더보기</button>
          </li>
        </ul>
      </section>
      <section
        className={styles.banner}
        onClick={() => router.push("/selfDiagnosis")}
      >
        <div style={{ background: "var(--banner-skyblue)" }}>
          <div>
            <p>ADHD를 의심 중인가요?</p>
            <p>
              세계보건기구 WHO에서 개발한
              <br />
              <em>자가테스트</em>를 진행해 보세요
            </p>
          </div>
          <Image
            src="/images/img-banner2.png"
            alt="에이닥에게 의견을 보내주세요."
            width={146}
            height={75}
            priority
          />
        </div>
      </section>
      <section className={styles.article}>
        <h2 className={styles.title}>아티클</h2>
        <ul>
          <li onClick={() => router.push("/article/1")}>
            <div>
              <Image
                src="/images/img-article1.png"
                alt="아티클 이미지"
                width={170}
                height={135.16}
                priority
              />
            </div>
            <p>정말 정신건강의학과 진료를 받으면 사회적 불이익을 받을까?</p>
          </li>
          <li onClick={() => router.push("/article/2")}>
            <div style={{ background: "var(--article-purple)" }}>
              <Image
                src="/images/img-article1.png"
                alt="아티클 이미지"
                width={170}
                height={135.16}
                priority
              />
            </div>
            <p>ADHD는 개인 의지를 통해 스스로 극복할 수 있을까?</p>
          </li>
        </ul>
      </section>
      <div className={styles.search}>
        <button>
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
