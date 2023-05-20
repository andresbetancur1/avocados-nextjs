const fetchData = async () => {
  const response = await fetch("https://avocados-nextjs-eight.vercel.app/api/avo/token", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ user: "hola", password: "password" }), // body data type must match "Content-Type" header
  });

  if (response.status == 200) {
    const data = await response.json();
  }

  return "hola";
};

export default async function Product() {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <h1>Product </h1>
    </div>
  );
}
