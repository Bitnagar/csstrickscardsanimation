import React from 'react';
import $ from 'jquery';

export default function Card(props) {
  const allCards = $('.card-holder').children();

  function handleMouseEnter(e) {
    $(allCards[props.pos])
      .nextAll()
      .each(function () {
        $(this).css('transform', 'translateX(10rem)');
      });
  }
  function handleMouseLeave(e) {
    $(allCards[props.pos])
      .nextAll()
      .each(function () {
        $(this).css('transform', '');
      });
  }

  return (
    <div
      className="card"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
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
