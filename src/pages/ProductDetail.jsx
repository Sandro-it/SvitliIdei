// // src/pages/ProductDetail.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import styles from "../styles/ProductDetail.module.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [specsOpen, setSpecsOpen] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/products?filters[id][$eq]=${id}&populate=*`
//         );
//         const productData = response.data.data[0];
//         if (productData) {
//           setProduct(productData);
//           setSelectedImage(productData?.mainImage?.url);
//         } else {
//           setError("Продукт не знайдено");
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Помилка завантаження деталей товару:", error);
//         setError("Помилка завантаження деталей товару");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Завантаження...</p>;
//   if (error) return <p>{error}</p>;

//   const {
//     name,
//     description,
//     price,
//     available,
//     article,
//     category,
//     subCategory,
//     specifications,
//     mainImage,
//     additionalImages,
//   } = product;

//   const categoryName = category?.name || "Категорія не вказана";
//   const subCategoryName =
//     product?.sub_category?.name || "Підкатегорія не вказана";

//   const handleThumbnailClick = (url) => {
//     setSelectedImage(url);
//   };

//   const toggleSpecifications = () => {
//     setSpecsOpen(!specsOpen);
//   };

//   return (
//     <div className={styles.productDetail}>
//       {/* Ліва колонка */}
//       <div className={styles.leftColumn}>
//         <h4>
//           {categoryName} > {subCategoryName}
//         </h4>
//         <img
//           src={
//             selectedImage
//               ? `http://localhost:1337${selectedImage}`
//               : "/placeholder.jpg"
//           }
//           alt={name || "Назва відсутня"}
//           className={styles.mainImage}
//         />
//         <div className={styles.thumbnailContainer}>
//           {additionalImages?.map((image, index) => (
//             <img
//               key={index}
//               src={`http://localhost:1337${image.url}`}
//               alt={`Зображення ${index + 1}`}
//               className={`${styles.thumbnail} ${
//                 selectedImage === image.url ? styles.selectedThumbnail : ""
//               }`}
//               onClick={() => handleThumbnailClick(image.url)}
//             />
//           ))}
//         </div>
//         <p className={styles.description}>{description || "Опис відсутній"}</p>
//       </div>

//       {/* Права колонка */}
//       <div className={styles.rightColumn}>
//         <div className={styles.productInfo}>
//           <h2>{name || "Назва відсутня"}</h2>
//           <p>Артикул: {article || "Не вказано"}</p>
//           <p className={styles.price}>
//             {price ? `${price} грн` : "Ціна не вказана"}
//           </p>
//           <p className={styles.status}>{available}</p>
//         </div>

//         {/* Секція вибору кількості та додавання в кошик */}
//         <div className={styles.addToCartSection}>
//           <input
//             type="number"
//             min="1"
//             defaultValue="1"
//             className={styles.quantitySelector}
//           />
//           <button className={styles.addToCartButton}>Додати до кошика</button>
//         </div>

//         {/* Характеристики товару */}
//         <div
//           className={`${styles.specifications} ${specsOpen ? styles.open : ""}`}
//           onClick={toggleSpecifications}
//         >
//           <h3>Характеристики</h3>
//           {specsOpen && (
//             <div className={styles.specificationList}>
//               {specifications &&
//                 Object.entries(specifications).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}: </strong> {value}
//                   </p>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

//==================категорії-посилання======================//

// // src/pages/ProductDetail.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, Link, useNavigate } from "react-router-dom"; // Додаємо useNavigate
// import styles from "../styles/ProductDetail.module.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [specsOpen, setSpecsOpen] = useState(false);
//   const navigate = useNavigate(); // Ініціалізуємо useNavigate

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/products?filters[id][$eq]=${id}&populate=*`
//         );
//         const productData = response.data.data[0];
//         if (productData) {
//           setProduct(productData);
//           setSelectedImage(productData?.mainImage?.url);
//         } else {
//           setError("Продукт не знайдено");
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Помилка завантаження деталей товару:", error);
//         setError("Помилка завантаження деталей товару");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Завантаження...</p>;
//   if (error) return <p>{error}</p>;

//   const {
//     name,
//     description,
//     price,
//     available,
//     article,
//     category,
//     sub_category,
//     specifications,
//     mainImage,
//     additionalImages,
//   } = product;

//   const categoryName = category?.name || "Категорія не вказана";
//   const subCategoryName = sub_category?.name || "Підкатегорія не вказана";

//   const handleThumbnailClick = (url) => {
//     setSelectedImage(url);
//   };

//   const toggleSpecifications = () => {
//     setSpecsOpen(!specsOpen);
//   };

//   return (
//     <div className={styles.productDetail}>
//       {/* Додаємо контейнер для кнопки "Назад" */}
//       <div className={styles.backButtonContainer}>
//         <button onClick={() => navigate(-1)} className={styles.backButton}>
//           Назад
//         </button>
//       </div>

//       {/* Ліва колонка */}
//       <div className={styles.leftColumn}>
//         <h4>
//           {/* Додаємо посилання на категорію та підкатегорію */}
//           <Link
//             to={
//               categoryName
//                 ? `/${categoryName.toLowerCase().replace(/\s+/g, "-")}`
//                 : "#"
//             }
//             className={styles.link}
//           >
//             {categoryName || "Категорія не вказана"}
//           </Link>
//           <Link
//             to={
//               subCategoryName
//                 ? `/${subCategoryName.toLowerCase().replace(/\s+/g, "-")}`
//                 : "#"
//             }
//             className={styles.link}
//           >
//             {subCategoryName || "Підкатегорія не вказана"}
//           </Link>
//         </h4>
//         <img
//           src={
//             selectedImage
//               ? `http://localhost:1337${selectedImage}`
//               : "/placeholder.jpg"
//           }
//           alt={name || "Назва відсутня"}
//           className={styles.mainImage}
//         />
//         <div className={styles.thumbnailContainer}>
//           {additionalImages?.map((image, index) => (
//             <img
//               key={index}
//               src={`http://localhost:1337${image.url}`}
//               alt={`Зображення ${index + 1}`}
//               className={`${styles.thumbnail} ${
//                 selectedImage === image.url ? styles.selectedThumbnail : ""
//               }`}
//               onClick={() => handleThumbnailClick(image.url)}
//             />
//           ))}
//         </div>
//         <p className={styles.description}>{description || "Опис відсутній"}</p>
//       </div>

//       {/* Права колонка */}
//       <div className={styles.rightColumn}>
//         <div className={styles.productInfo}>
//           <h2>{name || "Назва відсутня"}</h2>
//           <p>Артикул: {article || "Не вказано"}</p>
//           <p className={styles.price}>
//             {price ? `${price} грн` : "Ціна не вказана"}
//           </p>
//           <p className={styles.status}>{available}</p>
//         </div>

//         {/* Секція вибору кількості та додавання в кошик */}
//         <div className={styles.addToCartSection}>
//           <input
//             type="number"
//             min="1"
//             defaultValue="1"
//             className={styles.quantitySelector}
//           />
//           <button className={styles.addToCartButton}>Додати до кошика</button>
//         </div>

//         {/* Характеристики товару */}
//         <div
//           className={`${styles.specifications} ${specsOpen ? styles.open : ""}`}
//           onClick={toggleSpecifications}
//         >
//           <h3>Характеристики</h3>
//           {specsOpen && (
//             <div className={styles.specificationList}>
//               {specifications &&
//                 Object.entries(specifications).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}: </strong> {value}
//                   </p>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

//===================================посилання категорій та субкатегорій========================//

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [specsOpen, setSpecsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/products?filters[id][$eq]=${id}&populate=*`
        );
        const productData = response.data.data[0];
        if (productData) {
          setProduct(productData);
          setSelectedImage(productData?.mainImage?.url);
        } else {
          setError("Продукт не знайдено");
        }
        setLoading(false);
      } catch (error) {
        console.error("Помилка завантаження деталей товару:", error);
        setError("Помилка завантаження деталей товару");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  const {
    name,
    description,
    price,
    available,
    article,
    category,
    sub_category,
    specifications,
    mainImage,
    additionalImages,
  } = product;

  const categoryName = category?.name || "Категорія не вказана";
  const subCategoryName = sub_category?.name || "Підкатегорія не вказана";

  const generateCategoryPath = (category) => {
    switch (category.toLowerCase()) {
      case "світильники":
        return "/lights-category";
      case "бра":
        return "/bra";
      case "настінні світильники":
        return "/wall-lights";
      case "світильник підвісний":
        return "/pendant-lights";
      case 'світильники "стімпанк"':
        return "/steampunk-lights";
      case "свічки":
        return "/candles-category";
      case "меблі":
        return "/furniture-category";
      default:
        return "#";
    }
  };

  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
  };

  const toggleSpecifications = () => {
    setSpecsOpen(!specsOpen);
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.backButtonContainer}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Назад
        </button>
      </div>

      <div className={styles.leftColumn}>
        <h4>
          <Link to={generateCategoryPath(categoryName)} className={styles.link}>
            {categoryName}
          </Link>{" "}
          /{" "}
          <Link
            to={generateCategoryPath(subCategoryName)}
            className={styles.link}
          >
            {subCategoryName}
          </Link>
        </h4>
        <img
          src={
            selectedImage
              ? `http://localhost:1337${selectedImage}`
              : "/placeholder.jpg"
          }
          alt={name || "Назва відсутня"}
          className={styles.mainImage}
        />
        <div className={styles.thumbnailContainer}>
          {additionalImages?.map((image, index) => (
            <img
              key={index}
              src={`http://localhost:1337${image.url}`}
              alt={`Зображення ${index + 1}`}
              className={`${styles.thumbnail} ${
                selectedImage === image.url ? styles.selectedThumbnail : ""
              }`}
              onClick={() => handleThumbnailClick(image.url)}
            />
          ))}
        </div>
        <p className={styles.description}>{description || "Опис відсутній"}</p>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.productInfo}>
          <h2>{name || "Назва відсутня"}</h2>
          <p>Артикул: {article || "Не вказано"}</p>
          <p className={styles.price}>
            {price ? `${price} грн` : "Ціна не вказана"}
          </p>
          <p className={styles.status}>{available}</p>
        </div>

        <div className={styles.addToCartSection}>
          <input
            type="number"
            min="1"
            defaultValue="1"
            className={styles.quantitySelector}
          />
          <button className={styles.addToCartButton}>Додати до кошика</button>
        </div>

        <div
          className={`${styles.specifications} ${specsOpen ? styles.open : ""}`}
          onClick={toggleSpecifications}
        >
          <h3>Характеристики</h3>
          {specsOpen && (
            <div className={styles.specificationList}>
              {specifications &&
                Object.entries(specifications).map(([key, value], index) => (
                  <p key={index}>
                    <strong>{key}: </strong> {value}
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
