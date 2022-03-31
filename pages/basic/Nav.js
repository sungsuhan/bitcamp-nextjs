import Link from "next/link";

export default function Nav(){
  return (
    <nav>
      <ul>
      <li> <Link href='bmi'>BMI</Link> </li><br/>
      <li> <Link href='calc'>Calculator</Link> </li><br/>
      <li> <Link href='counter'>Counter</Link> </li><br/>
      <li> <Link href='grade'>Grade</Link> </li>
      </ul>
    </nav>
  );
};