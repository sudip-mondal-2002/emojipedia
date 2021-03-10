import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEntry(emojipedia) {
  return <Entry
    key={emojipedia.id}
    emoji={emojipedia.emoji}
    title={emojipedia.name}
    desc={emojipedia.meaning} />
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}

      </dl>
    </div>
  );
}

export default App;
