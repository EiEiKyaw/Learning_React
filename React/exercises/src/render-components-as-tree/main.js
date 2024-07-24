import Copyright from "./Copyright";
import FuncyText from "./FuncyText";
import InspirationGenerator from "./InspirationGenerator";

export default function Main() {
  return (
    <>
      <FuncyText title text="Testing" />
      <InspirationGenerator>
        <Copyright year="2024" />
      </InspirationGenerator>
    </>
  );
}
