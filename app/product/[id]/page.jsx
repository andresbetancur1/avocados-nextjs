export default function ProductItem({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>ProductItem {id}</h1>
    </div>
  );
}
