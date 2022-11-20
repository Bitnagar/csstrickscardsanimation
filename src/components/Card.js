import React from 'react';

export default function Card(props) {
  function handleMouseEnter(e) {
    e.preventDefault();
    if (e.target.className === 'card') {
      let cardHolderChildrens = e.target.parentElement.children;
      for (let i = props.pos + 1; i < cardHolderChildrens.length; i++) {
        cardHolderChildrens.item(i).style.transform = 'translateX(10rem)';
      }
    }
  }
  function handleMouseLeave(e) {
    e.preventDefault();
    if (e.target.className === 'card') {
      let cardHolderChildrens = e.target.parentElement.children;
      for (let i = props.pos; i < cardHolderChildrens.length; i++) {
        cardHolderChildrens.item(i).style.transform = '';
      }
    }
  }
  return (
    <div
      className="card"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-upper">
        <p>
          <b>Article</b> <span>on {props.data.date}</span>
        </p>
        <h1>{props.data.heading}</h1>
        <p className="tag">
          {props.data.tags.map((tag) => {
            return `${tag.toUpperCase()} `;
          })}
        </p>
      </div>
      <div className="card-lower">
        <img src={props.data.picture} alt="Profile pic" width="40" />
        <p>{props.data.name}</p>
      </div>
    </div>
  );
}
