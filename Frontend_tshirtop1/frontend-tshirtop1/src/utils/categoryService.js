import { back } from "./api";

// Obtener todas las categorías
export const getAllCategories = async () => {
  try {
    const response = await back.get("/api/categories/search");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return [];
  }
};

// Obtener una categoría por ID
export const getCategoryById = async (id) => {
  try {
    const response = await back.get(`/api/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo la categoría ${id}:`, error);
    return null;
  }
};

// Crear una nueva categoría
export const createCategory = async (categoryData) => {
  try {
    const response = await back.post("/api/categories", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creando categoría:", error);
    return null;
  }
};

// Actualizar una categoría
export const updateCategory = async (id, categoryData) => {
  try {
    const response = await back.put(`/api/categories/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error(`Error actualizando la categoría ${id}:`, error);
    return null;
  }
};

// Eliminar una categoría
export const deleteCategory = async (id) => {
  try {
    await back.delete(`/api/categories/${id}`);
    return { message: "Categoría eliminada con éxito" };
  } catch (error) {
    console.error(`Error eliminando la categoría ${id}:`, error);
    return null;
  }
};
