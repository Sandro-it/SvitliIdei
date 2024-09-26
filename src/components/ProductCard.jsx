// // src/components/ProductCard.jsx
// import { Link } from "react-router-dom";
// import styles from "../styles/ProductCard.module.css";

// const ProductCard = ({ product }) => {
//   console.log("Product data received in ProductCard:", product);

//   // Оновлений шлях до зображення з використанням кращої якості
//   const imageUrl = product?.mainImage?.formats?.large?.url
//     ? `http://localhost:1337${product.mainImage.formats.large.url}`
//     : product?.mainImage?.formats?.medium?.url
//     ? `http://localhost:1337${product.mainImage.formats.medium.url}`
//     : product?.mainImage?.url
//     ? `http://localhost:1337${product.mainImage.url}`
//     : "/placeholder.jpg";

//   return (
//     <Link to={`/products/${product.id}`} className={styles.productLink}>
//       <div className={styles.productCard}>
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={product.name || "Невідомий продукт"}
//             className={styles.productImage}
//           />
//         ) : (
//           <div className={styles.productImagePlaceholder}>
//             Зображення відсутнє
//           </div>
//         )}
//         <h3>{product.name || "Без назви"}</h3>
//         <p>{product.price ? `${product.price} грн` : "Ціна не вказана"}</p>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

//=================однакова висота карток=============================//

// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  console.log("Product data received in ProductCard:", product);

  // Оновлений шлях до зображення з використанням кращої якості
  const imageUrl = product?.mainImage?.formats?.large?.url
    ? `http://localhost:1337${product.mainImage.formats.large.url}`
    : product?.mainImage?.formats?.medium?.url
    ? `http://localhost:1337${product.mainImage.formats.medium.url}`
    : product?.mainImage?.url
    ? `http://localhost:1337${product.mainImage.url}`
    : "/placeholder.jpg";

  return (
    <Link to={`/products/${product.id}`} className={styles.productLink}>
      <div className={styles.productCard}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.name || "Невідомий продукт"}
            className={styles.productImage}
          />
        ) : (
          <div className={styles.productImagePlaceholder}>
            Зображення відсутнє
          </div>
        )}
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{product.name || "Без назви"}</h3>
          <p className={styles.productPrice}>
            {product.price ? `${product.price} грн` : "Ціна не вказана"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
