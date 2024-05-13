import axios from 'axios'

const domain = "http://localhost:5001/api"

const getAllCategories = async () => {
    let url = `${domain}/categories`;
    return await axios.get(url)
};

const createCategory = async (payload) => {
    let url = `${domain}/categories`;
    return await axios.post(url, payload)
};

const editCategory = async ({ id, category }) => {
    let url = `${domain}/categories/${id}`;
    return await axios.put(url, category)
};

const deleteCategory = async (payload) => {
    let url = `${domain}/categories/${payload}`;
    return await axios.delete(url)
};

export { getAllCategories, createCategory, deleteCategory, editCategory }