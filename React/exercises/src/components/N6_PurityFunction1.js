export default function Clock({ time }) {
  let hours = time.getHours();
  let className = hours >= 13 && hours <= 24 ? "night" : "day";
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
