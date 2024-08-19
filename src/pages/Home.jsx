import { useState, useEffect } from "react";

function Store() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/devjob/smartphones")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(Array.isArray(data) ? data : Object.values(data)[0]);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-3xl font-bold">Store</h1>
      <div className="grid mx-auto w-[900px] grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card card-compact bg-base-100 w-96 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title font-bold">Brand: {item.brand}</h2>
                <figure>
                  <img
                    src={item.image}
                    alt={item.model}
                  />
                </figure>
                <p className="text-lg font-bold">{item.model}</p>
                <p className="text-lg font-bold">{item.price}$</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
