'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const products = ['pants', 'shirts', 'shoes'];

const page = () => {
  const [text, setText] = useState('');

  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <p className="text-3xl font-bold">products페이지</p>
      <div>
        <input
          type="text"
          className="border-2 p-3 w-[1000px]"
          placeholder='여기서 입력한 값이 "products/" 동적 라우팅 됩니다.'
          value={text}
          onChange={handleInput}
        />
      </div>
      <button className="p-3 border-2">
        <Link href={`products/${text}`}>동적 상세페이지</Link>
      </button>
      <div className="border-2">
        {products.map((product) => (
          <div key={product} className="border-2 p-3 m-3">
            <Link href={`products/${product}`}>{product}페이지</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
