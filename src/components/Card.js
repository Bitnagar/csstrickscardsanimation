/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import $ from 'jquery';

export default function Card(props) {
  function handleMouseEnter(e) {
    let md = 746;
    let vw = window.innerWidth;
    const allCards = $('.card-holder').children();
    e.preventDefault();
    $(allCards[props.pos])
      .nextAll()
      .each(function () {
        if (vw > md) {
          $(this).css('transform', 'translateX(10rem)');
        } else {
          $(this).css('transform', 'translateX(2rem)');
        }
      });
  }
  function handleMouseLeave(e) {
    const allCards = $('.card-holder').children();
    e.preventDefault();
    $(allCards[props.pos])
      .nextAll()
      .each(function () {
        $(this).css('transform', '');
      });
  }

  return (
    <article
      className="card"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      <div className="card-upper">
        <p>
          <b>Article</b> <span>on {props.data.date}</span>
        </p>
        <a href="#">{props.data.heading}</a>
        <div className="tags">
          {props.data.tags.map((tag, key) => {
            return (
              <a key={key} href="#" id="tag">
                {tag.toUpperCase()}
              </a>
            );
          })}
        </div>
      </div>
      <div className="card-lower">
        <img src={props.data.picture} alt="Profile pic" width="40" />
        <a href="https://twitter.com/bitnagar" target="_blank" rel="noreferrer">
          {props.data.name}
        </a>
      </div>
    </article>
  );
}
