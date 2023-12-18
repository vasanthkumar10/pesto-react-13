import "./App.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import CounterHooks from "./components/Counter";
import FocusInput from "./components/FocusInput";
import Product from "./components/Product";
import { productData } from "./data";

function App() {
  const [products, setProducts] = useState([]);
  const [age, setAge] = useState(0);
  const counterRef = useRef(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productData();
      // console.log("data", data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // useMemo -> when other state changes, I don't want to execute this fn
  // memoized fn -> will act like a variable
  const getProducts = useMemo(() => {
    // console.log("getProducts", products);
    return products.map(({ id, name }) => (
      <Product key={id} id={id} name={name} />
    ));
  }, [products, age]);

  return (
    <div className="App">
      <h1 ref={counterRef}>counter - </h1>
      {/* <h2>Age - {age}</h2>
      <button onClick={() => setAge((prev) => prev + 1)}>increment</button>
      <h1>App component</h1>
      {getProducts} */}
      {/* <FocusInput /> */}
      <CounterHooks counterRef={counterRef} />
    </div>
  );
}

export default App;
