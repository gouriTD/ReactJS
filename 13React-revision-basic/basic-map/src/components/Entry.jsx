import React from "react";

const Entry = ({emoji,title,definition})=>{
    return (
      <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="emoji-avatar">
                {emoji}
              </span>
              <span>{title}</span>
            </dt>
            <dd>
              {definition}
            </dd>
          </div>
    )
  }

  export default Entry