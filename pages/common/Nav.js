import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='/basic/Nav'>Basic</Link> </li>
        <li className={styles.li}> <Link href='/board/board-list'>BoardList</Link> </li>
        <li className={styles.li}> <Link href='/board/board-form'>BoardForm</Link> </li>
        <li className={styles.li}> <Link href='/game/game-list'>GameList</Link> </li>
        <li className={styles.li}> <Link href='/game/team-list'>TeamList</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo-list'>TodoList</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-in'>Sign in</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-up'>Sign Up</Link> </li>
      </ul>
    </nav>
  );
};


