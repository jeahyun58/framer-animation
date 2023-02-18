import React, { useState } from "react";

function State() {
  const [value, setValue] = useState("");
  const [texts, setTexts] = useState("");
  const onPotato = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const tete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTexts(value);
  };
  return (
    <div>
      <form onSubmit={tete}>
        <span>{texts}</span>
        <input
          value={value}
          onChange={onPotato}
          type="text"
          placeholder="Username"
        />
        <button>Log</button>
      </form>
    </div>
  );
}

export default State;
