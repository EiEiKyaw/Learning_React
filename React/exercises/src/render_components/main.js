import FancyText from "./FuncyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";

export default function Main() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
