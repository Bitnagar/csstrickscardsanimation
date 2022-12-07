import React from 'react';
import Card from './Card';

export default function SectionRight() {
  const data = [
    {
      date: 'Nov 01, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 05, 2022',
      heading: 'How to Center a Div 101',
      tags: ['css mastery', 'expert', 'html', 'no js'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 12, 2022',
      heading: 'How to Build for the Mobile Web',
      tags: [
        'mobile web dev',
        'canvas',
        'flip',
        'react native',
        'svg animation',
      ],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 18, 2022',
      heading: 'Increase Developer Productivity with these Steps!',
      tags: ['productivity', 'hack', 'work', 'code', 'developer tools'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 25, 2022',
      heading: 'Must know JS Tricks 2022 Edition',
      tags: ['JavaScript', 'JS Mastery', 'animation', 'DOM'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 01, 2022',
      heading: 'Responsive Animations for Every Screen Size and Device',
      tags: ['animation', 'canvas', 'flip', 'gsap', 'svg animation'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 05, 2022',
      heading: 'How to Center a Div 101',
      tags: ['css mastery', 'expert', 'html', 'no js'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 12, 2022',
      heading: 'How to Build for the Mobile Web',
      tags: [
        'mobile web dev',
        'canvas',
        'flip',
        'react native',
        'svg animation',
      ],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 18, 2022',
      heading: 'Increase Developer Productivity with these Steps!',
      tags: ['productivity', 'hack', 'work', 'code', 'developer tools'],
      picture: './pngegg.png',
      name: 'bitnagar',
    },
    {
      date: 'Nov 25, 2022',
      heading: 'Must know JS Tricks 2022 Edition',
      tags: ['JavaScript', 'JS Mastery', 'animation', 'DOM'],
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
