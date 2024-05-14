import Image from "next/image";
import styles from "@/styles/header.module.scss";
import { useRouter } from "next/navigation";

export default function Header(props: {
  onClick?: () => void;
  headerTitle?: string;
}) {
  const router = useRouter();

  return (
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
      <h1 style={{ display: "inline" }}>{props.headerTitle}</h1>
    </header>
  );
}
