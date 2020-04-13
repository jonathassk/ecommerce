import React from "react";

const Collection = ({title, items}) => (
  <div>
    <p>{title}</p>
    {items.map((item, key) => (<div key={key}><p>{item.model}</p></div>))}
  </div>
)

export default Collection;