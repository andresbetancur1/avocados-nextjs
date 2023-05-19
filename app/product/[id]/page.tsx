"use client";

import { useEffect, useState } from "react";

export default function ProductItem({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<TProduct>();

  const id = params.id;

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <h1>{product?.name}</h1>
      <h1>{product?.price}</h1>
    </div>
  );
}
