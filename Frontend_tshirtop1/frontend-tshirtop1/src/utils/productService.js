import { back } from "./api";

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await back.get("/api/products"); // Se usa API Gateway
    return response.data;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const response = await back.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo el producto ${id}:`, error);
    return null;
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await back.post("/api/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error creando producto:", error);
    return null;
  }
};

// Actualizar un producto
export const updateProduct = async (id, productData) => {
  try {
    const response = await back.put(`/api/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error actualizando el producto ${id}:`, error);
    return null;
  }
};

// Eliminar un producto
export const deleteProduct = async (id) => {
  try {
    await back.delete(`/api/products/${id}`);
    return { message: "Producto eliminado con éxito" };
  } catch (error) {
    console.error(`Error eliminando el producto ${id}:`, error);
    return null;
  }
};
