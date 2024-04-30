"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HospitalSearch() {
  const router = useRouter();
  const [inputTxt, setInputTxt] = useState("");
  const today = moment().format("MM.DD");

  const [recentResearchData, setRecentResearchData] = useState([
    { hospitalNm: "삼성마음친구정신건강의학과의원", date: "04.10" },
    { hospitalNm: "연세소담정신건강의학과의원", date: "04.12" },
    { hospitalNm: "이준호정신건강의학과의원", date: "04.14" },
    { hospitalNm: "소민정신건강의학과의원", date: "04.19" },
    { hospitalNm: "삼성마음친구정신건강의학과의원", date: "04.20" },
  ]);

  function SearchHospital() {
    const newItem: { hospitalNm: string; date: string } = {
      hospitalNm: inputTxt,
      date: today,
    };
    setRecentResearchData([newItem, ...recentResearchData]);

    console.log("recentResearchData", recentResearchData);
  }

  function DeleteHospital(idx?: string) {
    console.log("idx", idx);
    if (idx !== "") {
      console.log("idx", idx);
      const newItem = recentResearchData.filter((r, i) => i !== Number(idx));
      console.log("newItem", newItem);
      console.log("recentResearchData", recentResearchData);
      setRecentResearchData([...newItem]);
    } else {
      setRecentResearchData([]);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <button className={styles.backButton} onClick={() => router.back()}>
          <Image
            src="/images/icon-arrow-left.png"
            width={25}
            height={25}
            alt="뒤로가기 버튼"
          ></Image>
        </button>
        <div className={styles.searchTab}>
          <input
            value={inputTxt}
            placeholder="병원이름을 입력해보세요."
            onChange={(e) => setInputTxt(e.target.value)}
          ></input>
          <button onClick={SearchHospital}>
            <Image
              src="/images/icon-search.png"
              width={20}
              height={20}
              alt="검색 버튼"
              priority
            ></Image>
          </button>
        </div>
      </div>
      <div className={styles.searchResult}>
        {recentResearchData.length > 0 ? (
          <>
            <div className={styles.searchResult_header}>
              <p>최근 검색어</p>
              {recentResearchData.length > 0 ? (
                <button onClick={() => DeleteHospital("")}>전체삭제</button>
              ) : (
                false
              )}
            </div>
            {recentResearchData.map((hospital, index) => (
              <div className={styles.recentSearch} key={index}>
                <div className={styles.textArea}>
                  <p>{hospital.hospitalNm}</p>
                  <p>{hospital.date}</p>
                </div>
                <button
                  className={styles.searchButton}
                  onClick={() => DeleteHospital(String(index))}
                >
                  <Image
                    src="/images/icon-x.png"
                    width={10}
                    height={10}
                    alt="삭제 버튼"
                  ></Image>
                </button>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.noData}>
            <Image
              src="/images/no-hospital.png"
              width={291}
              height={202}
              alt="병원 정보 없음"
            ></Image>
            <h3>찾으시는 병원 정보가 없나요?</h3>
            <span>정보를 알려주시면 에이닥이 빠르게 개선할게요</span>
            <button
              onClick={() => window.open("https://forms.gle/e4rVnJ4zbkang23P6")}
            >
              정보 요청하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
