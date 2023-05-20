"use client";

import { useEffect, useState } from "react";
import Navbar from "@components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("api/avo/token", { method: "POST", body: JSON.stringify({ user: "hola", password: "password" }) }).then((response) => response.json());
    // .then(({ data, lenght }) => {
    //   setProductList(data);
    // });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hola Platzi!</h1>
      <div>
        {productList.map((product, key) => (
          <div key={key}>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
