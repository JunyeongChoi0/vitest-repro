import { service } from "#utils/service";
import React, { useEffect, useState } from "react";

export default function Component() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  console.log("state", data, data2, import.meta.env);

  useEffect(() => {
    service.apiOne().then((response) => {
      setData(response);
      console.log(response);
    });
    service.apiTwo().then((response) => {
      setData2(response);
    });
  });

  return (
    <div>
      <div>this is data one: {data}</div>
      <div>this is data two: {data2}</div>
    </div>
  );
}
