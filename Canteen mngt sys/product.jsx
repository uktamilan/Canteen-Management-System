import { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Idli",
    description: "Soft idlis served with flavorful sambar.",
    price: 40,
    category: "breakfast",
    image: "idli.png"
  },
  // Add more menu items here
];

export default function CanteenMenu() {
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );
  const [filter, setFilter] = useState("all");

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };

  const filterMenu = (category) => {
    setFilter(category);
  };

  return (
    <div>
      <nav className="navbar">
        <img src="food logo.png" alt="Logo" className="logo" />
        <ul>
          <li><a href="loginpg.html" className="login">LOGIN</a></li>
          <li><a href="instruct.html" className="instruction">INSTRUCTIONS</a></li>
          <li><a href="help.html" className="help">HELP🤝</a></li>
        </ul>
      </nav>

      <header>
        <h1>🍽️ Canteen Menu</h1>
        <div className="filter-buttons">
          {['all', 'breakfast', 'lunch', 'snacks', 'drinks'].map((category) => (
            <button key={category} onClick={() => filterMenu(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </header>

      <section className="menu">
        {menuItems
          .filter(item => filter === "all" || item.category === filter)
          .map((item) => (
            <div className="menu-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>₹{item.price}</span>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(item.id)}>−</button>
                <span className="quantity">{quantities[item.id]}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <h2>Canteen Management System</h2>
            <p>"Warning: Our food may cause extreme cravings!" 🍟💥</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png" alt="Facebook" className="footer-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter.png" alt="Twitter" className="footer-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram.png" alt="Instagram" className="footer-icon" />
            </a>
          </div>
        </div>
        <center>
          <p className="footer-bottom">&copy; Sathyabama University @2025 | All Rights Reserved.</p>
        </center>
      </footer>
    </div>
  );
}
