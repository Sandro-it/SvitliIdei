// // src/pages/ResiliencePage.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "../styles/ResiliencePage.module.css";
// import ProductCard from "../components/ProductCard"; // Імпорт компонента картки товару

// const ResiliencePage = () => {
//   const [product, setProduct] = useState(null);
//   const [resilienceVideo, setResilienceVideo] = useState(null);
//   const [resiliencePhoto, setResiliencePhoto] = useState(null);

//   // Запит для отримання картки товару
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/products?filters[category][name][$eq]=Ліхтар&filters[sub_category][name][$eq]=\"Незламність"&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setProduct(response.data.data[0]);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні товару:", error);
//       }
//     };

//     fetchProduct();
//   }, []);

//   // Запит для отримання відео
//   useEffect(() => {
//     const fetchResilienceVideo = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/resiliences?filters[name][$eq]=Відеоогляд&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setResilienceVideo(response.data.data[0].resilienceVideo.url);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні відео:", error);
//       }
//     };

//     fetchResilienceVideo();
//   }, []);

//   // Запит для отримання фото
//   useEffect(() => {
//     const fetchResiliencePhoto = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/resiliences?filters[name][$eq]=Військові&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setResiliencePhoto(response.data.data[0].resiliencePhoto.url);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні фото:", error);
//       }
//     };

//     fetchResiliencePhoto();
//   }, []);

//   return (
//     <div className={styles.resiliencePage}>
//       {/* Верхній блок */}
//       <div className={styles.topSection}>
//         {/* Відео з лівого боку */}
//         <div className={styles.videoContainer}>
//           {resilienceVideo && (
//             <video
//               src={`http://localhost:1337${resilienceVideo}`}
//               controls
//               className={styles.video}
//             ></video>
//           )}
//         </div>

//         {/* Опис з правого боку */}
//         <div className={styles.descriptionContainer}>
//           <p>
//             <strong>Темні часи потребують світлих ідей!</strong>
//           </p>
//           <p>До вашої уваги наш «Ліхтар Незламності»</p>
//           <p>Він не потребує зарядки та простий у використанні.</p>
//           <p>Ми виготовляємо та відправляємо такі ліхтарі на фронт.</p>
//           <p>
//             <strong>Долучайтесь до перемоги світла над темрявою.</strong>
//           </p>
//           <p>
//             <span role="img" aria-label="bank">
//               🏦
//             </span>{" "}
//             Банка Монобанку:
//             <a
//               href="https://send.monobank.ua/jar/8aH9LG55uh"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               https://send.monobank.ua/jar/8aH9LG55uh
//             </a>
//           </p>
//           <p>
//             <span role="img" aria-label="card">
//               💳
//             </span>{" "}
//             Номер картки банки: 5375411202658725
//           </p>
//           <p>Не скаржся на темряву.</p>
//           <p>Стань сам маленьким джерелом світла.</p>
//           <p>
//             <span role="img" aria-label="copyright">
//               ©️
//             </span>{" "}
//             Бернар Вербер
//           </p>
//         </div>
//       </div>

//       {/* Нижній блок */}
//       <div className={styles.bottomSection}>
//         {/* Картка товару з лівого боку */}
//         <div className={styles.productCardContainer}>
//           {product && <ProductCard product={product} />}
//         </div>

//         {/* Фото з правого боку */}
//         <div className={styles.photoContainer}>
//           {resiliencePhoto && (
//             <img
//               src={`http://localhost:1337${resiliencePhoto}`}
//               alt="Ліхтар Незламність"
//               className={styles.photo}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResiliencePage;

//========================два фото===========================//
// // src/pages/ResiliencePage.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "../styles/ResiliencePage.module.css";
// import ProductCard from "../components/ProductCard"; // Імпорт компонента картки товару

// const ResiliencePage = () => {
//   const [product, setProduct] = useState(null);
//   const [resilienceVideo, setResilienceVideo] = useState(null);
//   const [firstPhoto, setFirstPhoto] = useState(null); // Окремий стан для першого фото
//   const [secondPhoto, setSecondPhoto] = useState(null); // Окремий стан для другого фото

//   // Запит для отримання картки товару
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/products?filters[category][name][$eq]=Ліхтар&filters[sub_category][name][$eq]="Незламність"&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setProduct(response.data.data[0]);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні товару:", error);
//       }
//     };

//     fetchProduct();
//   }, []);

//   // Запит для отримання відео
//   useEffect(() => {
//     const fetchResilienceVideo = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/resiliences?filters[name][$eq]=Відеоогляд&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setResilienceVideo(response.data.data[0].resilienceVideo.url);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні відео:", error);
//       }
//     };

//     fetchResilienceVideo();
//   }, []);

//   // Запит для отримання першого фото
//   useEffect(() => {
//     const fetchFirstPhoto = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/resiliences?filters[name][$eq]=Військові&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setFirstPhoto(response.data.data[0].resiliencePhoto.url);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні першого фото:", error);
//       }
//     };

//     fetchFirstPhoto();
//   }, []);

//   // Запит для отримання другого фото
//   useEffect(() => {
//     const fetchSecondPhoto = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/resiliences?filters[name][$eq]=QRCode&populate=*`
//         );
//         if (response.data.data.length > 0) {
//           setSecondPhoto(response.data.data[0].resiliencePhoto2.url);
//         }
//       } catch (error) {
//         console.error("Помилка при завантаженні другого фото:", error);
//       }
//     };

//     fetchSecondPhoto();
//   }, []);

//   return (
//     <div className={styles.resiliencePage}>
//       {/* Верхній блок */}
//       <div className={styles.topSection}>
//         {/* Відео з лівого боку */}
//         <div className={styles.videoContainer}>
//           {resilienceVideo && (
//             <video
//               src={`http://localhost:1337${resilienceVideo}`}
//               controls
//               className={styles.video}
//             ></video>
//           )}
//         </div>

//         {/* Опис з правого боку */}
//         <div className={styles.descriptionContainer}>
//           <p>
//             <strong>Темні часи потребують світлих ідей!</strong>
//           </p>
//           <p>До вашої уваги наш «Ліхтар Незламності»</p>
//           <p>Він не потребує зарядки та простий у використанні.</p>
//           <p>Ми виготовляємо та відправляємо такі ліхтарі на фронт.</p>
//           <p>
//             <strong>Долучайтесь до перемоги світла над темрявою.</strong>
//           </p>
//           <p>
//             <span role="img" aria-label="bank">
//               🏦
//             </span>{" "}
//             Банка Монобанку:
//             <p>
//               <a
//                 href="https://send.monobank.ua/jar/8aH9LG55uh"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 https://send.monobank.ua/jar/8aH9LG55uh
//               </a>
//             </p>
//           </p>
//           <p>
//             <span role="img" aria-label="card">
//               💳
//             </span>{" "}
//             Номер картки банки:
//           </p>
//           <p>5375411202658725</p>
//           <p>Не скаржся на темряву.</p>
//           <p>Стань сам маленьким джерелом світла.</p>
//           <p>
//             <span role="img" aria-label="copyright">
//               ©️
//             </span>{" "}
//             Бернар Вербер
//           </p>
//         </div>
//       </div>

//       {/* Нижній блок */}
//       <div className={styles.bottomSection}>
//         {/* Картка товару з лівого боку */}
//         <div className={styles.productCardContainer}>
//           {product && <ProductCard product={product} />}
//         </div>

//         {/* Фото з правого боку */}
//         <div className={styles.photoContainer}>
//           {firstPhoto && (
//             <img
//               src={`http://localhost:1337${firstPhoto}`}
//               alt="Перше фото"
//               className={styles.photo}
//             />
//           )}
//           {secondPhoto && (
//             <img
//               src={`http://localhost:1337${secondPhoto}`}
//               alt="Друге фото"
//               className={styles.photo}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResiliencePage;

//==================змінні локальні та продакшн 28092024========================/

// src/pages/ResiliencePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/ResiliencePage.module.css";
import ProductCard from "../components/ProductCard"; // Імпорт компонента картки товару

const ResiliencePage = () => {
  const [product, setProduct] = useState(null);
  const [resilienceVideo, setResilienceVideo] = useState(null);
  const [firstPhoto, setFirstPhoto] = useState(null); // Окремий стан для першого фото
  const [secondPhoto, setSecondPhoto] = useState(null); // Окремий стан для другого фото

  // Запит для отримання картки товару
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
        const response = await axios.get(
          `${backendUrl}/api/products?filters[category][name][$eq]=Ліхтар&filters[sub_category][name][$eq]="Незламність"&populate=*`
        );
        if (response.data.data.length > 0) {
          setProduct(response.data.data[0]);
        }
      } catch (error) {
        console.error("Помилка при завантаженні товару:", error);
      }
    };

    fetchProduct();
  }, []);

  // Запит для отримання відео
  useEffect(() => {
    const fetchResilienceVideo = async () => {
      try {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
        const response = await axios.get(
          `${backendUrl}/api/resiliences?filters[name][$eq]=Відеоогляд&populate=*`
        );
        if (response.data.data.length > 0) {
          setResilienceVideo(response.data.data[0].resilienceVideo.url);
        }
      } catch (error) {
        console.error("Помилка при завантаженні відео:", error);
      }
    };

    fetchResilienceVideo();
  }, []);

  // Запит для отримання першого фото
  useEffect(() => {
    const fetchFirstPhoto = async () => {
      try {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
        const response = await axios.get(
          `${backendUrl}/api/resiliences?filters[name][$eq]=Військові&populate=*`
        );
        if (response.data.data.length > 0) {
          setFirstPhoto(response.data.data[0].resiliencePhoto.url);
        }
      } catch (error) {
        console.error("Помилка при завантаженні першого фото:", error);
      }
    };

    fetchFirstPhoto();
  }, []);

  // Запит для отримання другого фото
  useEffect(() => {
    const fetchSecondPhoto = async () => {
      try {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:1337";
        const response = await axios.get(
          `${backendUrl}/api/resiliences?filters[name][$eq]=QRCode&populate=*`
        );
        if (response.data.data.length > 0) {
          setSecondPhoto(response.data.data[0].resiliencePhoto2.url);
        }
      } catch (error) {
        console.error("Помилка при завантаженні другого фото:", error);
      }
    };

    fetchSecondPhoto();
  }, []);

  return (
    <div className={styles.resiliencePage}>
      {/* Верхній блок */}
      <div className={styles.topSection}>
        {/* Відео з лівого боку */}
        <div className={styles.videoContainer}>
          {resilienceVideo && (
            <video
              src={`${
                import.meta.env.VITE_BACKEND_URL || "http://localhost:1337"
              }${resilienceVideo}`}
              controls
              className={styles.video}
            ></video>
          )}
        </div>

        {/* Опис з правого боку */}
        <div className={styles.descriptionContainer}>
          <p>
            <strong>Темні часи потребують світлих ідей!</strong>
          </p>
          <p>До вашої уваги наш «Ліхтар Незламності»</p>
          <p>Він не потребує зарядки та простий у використанні.</p>
          <p>Ми виготовляємо та відправляємо такі ліхтарі на фронт.</p>
          <p>
            <strong>Долучайтесь до перемоги світла над темрявою.</strong>
          </p>
          <p>
            <span role="img" aria-label="bank">
              🏦
            </span>{" "}
            Банка Монобанку:
            <p>
              <a
                href="https://send.monobank.ua/jar/8aH9LG55uh"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://send.monobank.ua/jar/8aH9LG55uh
              </a>
            </p>
          </p>
          <p>
            <span role="img" aria-label="card">
              💳
            </span>{" "}
            Номер картки банки:
          </p>
          <p>5375411202658725</p>
          <p>Не скаржся на темряву.</p>
          <p>Стань сам маленьким джерелом світла.</p>
          <p>
            <span role="img" aria-label="copyright">
              ©️
            </span>{" "}
            Бернар Вербер
          </p>
        </div>
      </div>

      {/* Нижній блок */}
      <div className={styles.bottomSection}>
        {/* Картка товару з лівого боку */}
        <div className={styles.productCardContainer}>
          {product && <ProductCard product={product} />}
        </div>

        {/* Фото з правого боку */}
        <div className={styles.photoContainer}>
          {firstPhoto && (
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL || "http://localhost:1337"
              }${firstPhoto}`}
              alt="Перше фото"
              className={styles.photo}
            />
          )}
          {secondPhoto && (
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL || "http://localhost:1337"
              }${secondPhoto}`}
              alt="Друге фото"
              className={styles.photo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResiliencePage;
