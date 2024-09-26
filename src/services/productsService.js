// src/services/productsService.js
import axios from "axios";

const API_URL = "http://localhost:1337/api"; // Заміни на свій базовий URL Strapi

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
