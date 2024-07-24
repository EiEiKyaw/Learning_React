import { getImageUrl } from "./util";

function Section({ name, url, size }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(url)}
        alt={name}
        width={size.width}
        height={size.height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          physicist and chemist
        </li>
        <li>
          <b>Awards: 4 </b>
          (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
          Matteucci Medal)
        </li>
        <li>
          <b>Discovered: </b>
          polonium (chemical element)
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Section name="Maria Skłodowska-Curie" url="szV5sdG" size={(70, 70)} />
      <Section name="Katsuko Saruhashi" url="YfeOqp2" size={(70, 70)} />
    </div>
  );
}
