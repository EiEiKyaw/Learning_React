import { useState } from "react";

export default function CopyingWithSpread() {
  const [person, setPerson] = useState({
    firstName: "Ei Ei",
    lastName: "Kyaw",
    email: "eek@gmail.com",
  });

  function handleFirstnameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastnameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstnameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input value={person.lastName} onChange={handleLastnameChange} />
      </label>
      <br />
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
