import Panel from "./N7_Panel";
import { getImageUrl } from "./util";

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Avatar({ name, imageId }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={50}
      height={50}
    />
  );
}

export default function Profile({ person }) {
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar name={person.name} imageId={person.imageId} />
    </Panel>
  );
}
