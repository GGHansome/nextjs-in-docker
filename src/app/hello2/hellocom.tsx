
'use client'
import React, { useEffect } from "react";

type Props = {};

const HelloCom = (props: Props) => {
  const [hello, setHello] = React.useState<{ name: string; age: number }>();
  const fetchHello = async () => {
    const res = await fetch("/api/hello");
    return await res.json();
  };
  useEffect(() => {
    fetchHello().then(setHello);
  }, []);
  
  return (
    <>
      {hello && (
        <div>
          <div>Name: 张三</div>
          <div>Age: 18</div>
        </div>
      )}
    </>
  );
};

export default HelloCom;
