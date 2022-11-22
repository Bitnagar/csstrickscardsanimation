import React from 'react';
import Card from './Card';

export default function SectionRight() {
  const data = [
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Oct 20, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
  ];
  const Cards = data.map((item, key) => {
    return <Card key={key} pos={key} data={item} />;
  });

  return (
    <section id="section-right">
      <div className="card-holder">{Cards}</div>
    </section>
  );
}
