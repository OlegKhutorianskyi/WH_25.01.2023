import React from 'react'

export default function Summ({box}) {

    const summPrice = box.reduce((ac, {count, price}) => ac + count * price, 0);
    const summCount = box.reduce((ac, {count}) => ac + count, 0);

  return (
    <div>
        <p>
            Summ-price: {summPrice}
        </p>
        <p>
            Summ-count: {summCount}
        </p>
    </div>
  )
}
