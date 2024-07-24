const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function RenderingListWithMap() {
  return (
    <>
      <h1>Rendering List With Map</h1>
      <ul>
        {people.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </>
  );
}
