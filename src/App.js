import React, { useState } from 'react';
import './style.css';
import Card from './components/Card';

const data = [
  {
    value: '$0/month',
    a0: 'Free',
    a1: '✔ Single user',
    a2: '✔ 5GB storage',
    a3: '✔ Unlimited Public Projects',
    a4: '✔ Community Access',
    a5: '❌ Unlimited Private Projects',
    a6: '❌ Dedicated Phone Support',
    a7: '❌ Free Subdomain',
    a8: '❌ Monthly Status Reports',
  },
  {
    value: '$9/month',
    a0: 'PLUS',
    a1: '✔ 5 User',
    a2: '✔ 50GB Storage',
    a3: '✔ Unlimited Public Projects',
    a4: '✔ Community Access',
    a5: '❌ Unlimited Private Projects',
    a6: '❌ Dedicated Phone Support',
    a7: '❌ Free Subdomain',
    a8: '❌ Monthly Status Reports',
  },
  {
    value: '$49/month',
    a0: 'PRO',
    a1: '✔ Unlimited Users',
    a2: '✔ 150GB Storage',
    a3: '✔ Unlimited Public Projects',
    a4: '✔ Community Access',
    a5: '❌ Unlimited Private Projects',
    a6: '❌ Dedicated Phone Support',
    a7: '❌ Unlimited Free Subdomain',
    a8: '❌ Monthly Status Reports',
  },
];

export default function App() {
  return (
    <div class="container">
      {data.map(
        (
          {
            id,
            value,
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
            a7,
            a8,
            imgUrl,
            name,
            title,
          },
          index
        ) => {
          return (
            <Card
              id={id}
              value={value}
              a0={a0}
              a1={a1}
              a2={a2}
              a3={a3}
              a4={a4}
              a5={a5}
              a6={a6}
              a7={a7}
              a8={a8}
              imgUrl={imgUrl}
              name={name}
              title={title}
            />
          );
        }
      )}
    </div>
  );
}
