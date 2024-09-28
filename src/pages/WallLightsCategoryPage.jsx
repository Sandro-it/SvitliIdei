// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import styles from "../styles/WallLightsCategoryPage.module.css";

// const WallLightsCategoryPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:1337/api/products?filters[sub_category][name][$eq]=Настінні світильники&populate=*"
//         );
//         setProducts(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Помилка завантаження товарів:", error);
//         setError("Не вдалося завантажити товари");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Завантаження...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.wallLightsCategoryPage}>
//       <Link to="/lights-category" className={styles.backButton}>
//         Назад до Світильників
//       </Link>
//       <h2>Настінні світильники</h2>
//       <div className={styles.productGrid}>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WallLightsCategoryPage;

//==================змінні локальні та продакшн 28092024========================//

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import styles from "../styles/WallLightsCategoryPage.module.css";

const WallLightsCategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
        const response = await axios.get(
          `${backendUrl}/api/products?filters[sub_category][name][$eq]=Настінні світильники&populate=*`
        );
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Помилка завантаження товарів:", error);
        setError("Не вдалося завантажити товари");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.wallLightsCategoryPage}>
      <Link to="/lights-category" className={styles.backButton}>
        Назад до Світильників
      </Link>
      <h2>Настінні світильники</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WallLightsCategoryPage;
