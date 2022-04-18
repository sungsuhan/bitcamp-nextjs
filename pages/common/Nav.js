import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>메인</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>대쉬보드</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>계산기</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>카운터</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/board/addArticle'>게시글 등록</Link> </li>
        <li className={styles.li}> <Link href='/board/getArticle'>게시글 목록</Link> </li>
        <li className={styles.li}> <Link href='/board/modifyArticle'>게시글 수정</Link> </li>
        <li className={styles.li}> <Link href='/board/removeArticle'>게시글 삭제</Link> </li>
        <li className={styles.li}> <Link href='/team/addTeam'>팀 등록</Link> </li>
        <li className={styles.li}> <Link href='/team/getTeam'>팀 목록</Link> </li>
        <li className={styles.li}> <Link href='/team/modifyTeam'>팀 수정</Link> </li>
        <li className={styles.li}> <Link href='/team/removeTeam'>팀 삭제</Link> </li>
        <li className={styles.li}> <Link href='/game/addGame'>게임 등록</Link> </li>
        <li className={styles.li}> <Link href='/game/getGame'>게임 목록</Link> </li>
        <li className={styles.li}> <Link href='/game/modifyGame'>게임 수정</Link> </li>
        <li className={styles.li}> <Link href='/game/removeGame'>게임 삭제</Link> </li>
        <li className={styles.li}> <Link href='/todo/addTodo'>스케줄 등록</Link> </li>
        <li className={styles.li}> <Link href='/todo/getTodo'>스케줄 목록</Link> </li>
        <li className={styles.li}> <Link href='/todo/modifyTodo'>스케줄 수정</Link> </li>
        <li className={styles.li}> <Link href='/todo/removeTodo'>스케줄 삭제</Link> </li>
        <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>
        <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
        <li className={styles.li}> <Link href='/user/getUser'>사용자 목록</Link> </li>
        <li className={styles.li}> <Link href='/user/updateUser'>사용자 수정</Link> </li>
        <li className={styles.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link> </li>
        
      </ul>
    </nav>
  );
}
