import Image from "next/image";
import styles from "@/styles/header.module.scss";
import { useRouter } from "next/navigation";

export default function Header(props: {
  onClick?: () => void;
  headerTitle?: string;
}) {
  const router = useRouter();
  console.log(props);
  return (
    <header
      className={styles.header}
      // style={{
      //   width: "100%",
      //   height: "5%",
      //   backgroundColor: "white",
      //   position: "fixed",
      // }}
    >
      <button onClick={() => props.onClick ?? router.back()}>
        <Image
          src="/images/icon-arrow-left.png"
          alt="뒤로가기"
          width={28}
          height={28}
          priority
        />
        {/* <Image
          src="/images/icon-arrow-left.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="뒤로가기"
          style={{ width: "100%", height: "100%" }}
        /> */}
      </button>
      <h1 style={{ display: "inline" }}>{props.headerTitle}</h1>
    </header>
  );
}
