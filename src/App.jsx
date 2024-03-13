import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // console.log(products);

  const handleBtn = (product) => {
    setCardItem([...cardItem, product]);
  };
  console.log(cardItem);

  return (
    <>
      <h1>Vite + React</h1>
      <section className="container flex justify-between gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => {
            // console.log(product);
            const { image, price, discount_price, rating, title } = product;
            return (
              <div key={name} className="card container bg-white shadow-xl">
                <figure>
                  <img src={image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-black">Name: {title}</h2>
                  <p className="card-title text-black">Price: ${price}</p>
                  <p className="card-title text-black">
                    Discount Price: ${discount_price}
                  </p>
                  <p className="card-title text-black">Rating: {rating}</p>
                  <div className="card-actions">
                    <button
                      onClick={() => handleBtn(product)}
                      className="btn btn-primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="">
          <table
            className="table  bg-white text-sm font-semibold text-black flex-1
          "
          >
            <thead>
              <tr className="text-sm text-black">
                <th>Name</th>

                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {cardItem.map((card) => {
                return (
                  <tr>
                    <td>{card.title}</td>

                    <td>${card.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default App;
