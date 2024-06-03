"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const fetchHello = async () => {
  const res = await fetch("/api/hello");
  return await res.json();
};

const Hello = (props: any) => {
  const [hello, setHello] = React.useState<{ name: string; age: number }>();
  const { replace } = useRouter();
  return (
    <div>
      Hello
      <div>
        <div>
          <button onClick={()=>replace("/hello2?a=1")}>跳转至hello2带参数</button>
        </div>
        <button
          onClick={() => {
            fetchHello().then(setHello);
          }}
        >
          点击hello请求接口
        </button>       
      </div>
      {hello && (
        <div>
          <div>Name: {hello.name}</div>
          <div>Age: {hello.age}</div>
        </div>
      )}
    </div>
  );
};

export default Hello;
