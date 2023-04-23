type Props = {
  params: {
    slug: string;
  };
};
// pruducts 페이지 하위에 동적 라우팅 페이지를 만들었다.
// [] 대괄호를 이용하여 생성하면 되며 대괄호 내부는 자유롭게 지정할 수 있지만, slug이 관습상 쓰인다.
// 이렇게 생성된 페이지는 동적 라우팅 페이지로, 라우팅 경로에 따라 페이지가 생성된다.
// 예를 들어, products/1, products/2, products/3 등의 경로로 접속하면 각각의 페이지가 생성된다.
// 그리고 props로 동적 라우팅 url을 전달받는다.
const page = ({ params }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="info">
        <h1>products/ 동적 라우팅 페이지</h1>
        <p>
          pruducts 페이지 하위에 동적 라우팅 페이지를 만들었다. <br />
          [] 대괄호를 이용하여 생성하면 되며 대괄호 내부는 자유롭게 지정할 수
          있지만, [slug]이 관습상 쓰인다. <br />
          이렇게 생성된 페이지는 동적 라우팅 페이지로, 라우팅 경로에 따라
          페이지가 생성된다. <br />
          예를 들어, products/1, products/2, products/3 등의 경로로 접속하면
          각각의 페이지가 생성된다. <br />
          그리고 props로 동적 라우팅 url을 전달받는다.
        </p>
        <hr className="my-3" />
        <div className="info">
          <h1>slug</h1>
          <div>
            products 폴더 하위에 동적 라우팅 페이지를 만들고 싶다면 대괄호[] 를
            사용하면 된다.
          </div>
          <div>
            대괄호 내부는 자유롭게 지정할 수 있지만, [slug]이 관습상 쓰인다.
          </div>
          <div>경로를 연속적으로 받고 싶다면 `[…slug]`을 사용하면 된다.</div>
          <div>`[[…slug]]`을 사용하면 중첩 경로를 선택적으로 사용</div>
        </div>
        <hr className="my-3" />
        <div className="info">
          <h1 className="h1">페이지 미리 생성 : SSG</h1>
          <div>SSR은 요청마다 서버에서 HTML을 렌더링한다는 단점이 있다.</div>
          <div>그런데 동적 라우팅 페이지는 SSR로 렌더링 된다.</div>
          <div>
            이런 약점을 감추고 SSG를 동적 라우팅에 적용하는 방법이 있다.
          </div>
          <div>
            바로 Generating Static Params 를 이용하는 것이다.
            <a href="https://beta.nextjs.org/docs/data-fetching/generating-static-params">
              공식문서 링크
            </a>
          </div>
        </div>
      </div>
      <p>params : {params.slug}</p>
    </div>
  );
};

export default page;

export const generateStaticParams = () => {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    params: {
      slug: product,
    },
  }));
};
