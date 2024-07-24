export default function FuncyText({ title, text }) {
  return title ? (
    <h1 className="custom-title fancy">{text}</h1>
  ) : (
    <h1 className="cursive fancy">{text}</h1>
  );
}
