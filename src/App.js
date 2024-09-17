import { useState } from "react";

const initialList = [
  {
    id: 0,
    name: "Zanna Bukar",
    price: 22000,
    image: "/img/zanna.jpeg",
  },
  {
    id: 1,
    name: "Jallabiya",
    price: 19500,
    image: "/img/jallabiya.jpeg",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    price: 1600000,
    image: "/img/i16.jpeg",
  },
];

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export default function App() {
  // NOTE Managing Array of Objects
  const [items, setItems] = useState(initialList);

  return (
    <div className="app">
      <ShoppingItems items={items} />
      <Button>Add Item</Button>
    </div>
  );
}

function ShoppingItems({ items }) {
  return (
    <>
      <ul className="list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <div className="item">
          <img src={item.image} alt={item.name} />
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(Math.abs(item.price))}
            </p>
            <div>
              <span className="btn-qtt">-</span>
              <input type="text" />
              <span className="btn-qtt">+</span>
            </div>
          </div>
          <span className="price">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(Math.abs(item.price))}
          </span>
        </div>
      </li>
    </>
  );
}

function AddItemForm() {}

function PaymentForm() {}
