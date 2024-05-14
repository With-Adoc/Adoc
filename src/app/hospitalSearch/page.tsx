"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import HospitalList from "@/app/hospital-list/page";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { setSearchData } from "../reducers/hospitalSearch";
import LocalStorage from "../reducers/localstorage";

export default function HospitalSearch() {
  const router = useRouter();
  useEffect(() => {});
  const searchData = useSelector(
    (state: RootState) => state.hospitalSearch.hospitalSearchData
  );
  console.log("searchData", searchData);
  const dispatch = useDispatch();
  const [inputTxt, setInputTxt] = useState("");
  const today = moment().format("MM.DD");
  const [deleteAll, setDeleteAll] = useState(false);
  const [searchYn, setSearchYn] = useState(false);

  useEffect(() => {
    if (searchYn) {
      document.getElementsByTagName("header")[0].style.display = "none";
      document.getElementsByTagName("footer")[0].style.display = "none";
    }
  });

  const [recentResearchData, setRecentResearchData] = useState([]);

  useEffect(() => {
    setRecentResearchData(searchData);
  }, [searchData]);

  function SearchHospital() {
    if (inputTxt === "") return;
    const newItem: { hospitalNm: string; date: string } = {
      hospitalNm: inputTxt,
      date: today,
    };

    if (searchData !== null) {
      LocalStorage.setItem(
        "adocSearchData",
        JSON.stringify([newItem, ...searchData])
      );
    } else {
      LocalStorage.setItem("adocSearchData", JSON.stringify([newItem]));
    }
    setRecentResearchData([newItem, ...recentResearchData]);
    dispatch(setSearchData([newItem, ...recentResearchData]));
    setInputTxt("");
    setSearchYn(true);

    console.log("recentResearchData", recentResearchData);
  }

  const handleKeyDown = (e) => {
    if (e.target.value === "") return;
    if (e.key === "Enter") {
      setInputTxt(e.target.value);
      SearchHospital();
    }
  };

  function DeleteHospital(idx?: string) {
    console.log("idx", idx);
    if (idx !== "") {
      console.log("idx", idx);
      const newItem = recentResearchData.filter((r, i) => i !== Number(idx));
      console.log("newItem", newItem);
      console.log("recentResearchData", recentResearchData);
      setRecentResearchData([...newItem]);
      LocalStorage.setItem("adocSearchData", JSON.stringify([...newItem]));
      dispatch(setSearchData([...newItem]));
    } else {
      setRecentResearchData([]);
      dispatch(setSearchData([]));
      setDeleteAll(false);
      LocalStorage.removeItem("adocSearchData");
    }
  }

  return (
    <div className={styles.wrap}>
      {deleteAll && (
        <>
          {" "}
          <div className={styles.dim}></div>
          <div className={styles.confirm}>
            <p>최근 검색어를 모두 삭제 하시겠어요?</p>
            <div className={styles.confirm_btnWrap}>
              <button onClick={() => setDeleteAll(false)}>취소</button>
              <button onClick={() => DeleteHospital("")}>확인</button>
            </div>
          </div>
        </>
      )}

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
            onKeyDown={handleKeyDown}
          ></input>
          <button onClick={SearchHospital}>
            <Image
              src="/images/icon-input-search.png"
              width={20}
              height={20}
              alt="검색 버튼"
              priority
            ></Image>
          </button>
        </div>
      </div>
      <div className={styles.searchResult}>
        {!searchYn && recentResearchData.length > 0 ? (
          <>
            <div className={styles.searchResult_header}>
              <p>최근 검색어</p>
              {recentResearchData.length > 0 ? (
                <button onClick={() => setDeleteAll(true)}>전체삭제</button>
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
        ) : !searchYn && recentResearchData.length === 0 ? (
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
        ) : (
          searchYn && (
            <>
              <HospitalList />
              <div className={`${styles.noData} ${styles.listbottom}`}>
                <h3>찾으시는 병원 정보가 없나요?</h3>
                <span>정보를 알려주시면 에이닥이 빠르게 개선할게요</span>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/e4rVnJ4zbkang23P6")
                  }
                >
                  정보 요청하기
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}
