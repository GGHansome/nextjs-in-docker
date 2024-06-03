import Link from "next/link";
import React from "react";
import Loading from "./loading";
import Hecom from './hellocom'

type Props = {
  searchParams: {
    city?: string; // 你可以根据你的实际查询参数来定义类型
  };
};

const Hello = async (props: any) => {
  
  console.log(props);
  
  return (
    <div>
      <div>Hello2</div>
      <div>
        <Link href={"/hello2?a=2"}>点击跳转自己</Link>
      </div>
      <div>
        <Link href={"/hello"}>跳转至hello</Link>
      </div>
      <React.Suspense fallback={<Loading/>}>
        <Hecom />
      </React.Suspense>
    </div>
  );
};

export default Hello;
