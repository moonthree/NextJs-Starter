'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductsInput = () => {
  const [text, setText] = useState('');

  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };
  return (
    <div>
      {' '}
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
    </div>
  );
};

export default ProductsInput;
