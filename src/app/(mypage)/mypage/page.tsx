import React from 'react';

const page = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="h1">여긴 마이페이지</h1>
        <div className="info">
          <div>그룹화를 시험해보았다.</div>
          <div>폴더 생성시 괄호로 묶으면 된다.</div>
          <div>
            괄호로 묶은 폴더는 아무 역할을 하지 않고 그룹화 역할만 해준다.
          </div>
          <div>
            그룹화 역할은 별 게 아니고 너무 폴더가 많아지면 드러우니 보기 좋게
            만드는 역할밖에 없다. ⇒ 아무 기능도 없음
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
