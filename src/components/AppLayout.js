import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h2>카운트</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>계산기</h2>
        </a>
      </Link>
      <Link href="/bmi">
        <a>
          <h2>BMI 측정</h2>
        </a>
      </Link>
      <Link href="/grade">
        <a>
          <h2>성적표</h2>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <h2>로그인</h2>
        </a>
      </Link>
      
    </>
  );
};

export default AppLayout;