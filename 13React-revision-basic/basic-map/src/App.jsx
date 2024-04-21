import React from "react";
import emojiContent from "./emojipedia"
import Entry from "./components/Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {
        emojiContent.map((item)=>{
          return(
            <Entry 
            key={item.id} 
            emoji={item.emoji}
            title={item.name}
            definition={item.meaning}
          />
          )
        })
      }
      </dl>
    </div>
  );
}

export default App;
