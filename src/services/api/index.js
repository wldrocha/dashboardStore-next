const API = process.env.NEXT_PUBLIC_API_URL

export const endPoints = {
  products: {
    getProducts: `${API}/api/v1/products/`,
    postProducts: `${API}/api/v1/products/`,
    getProduct: (id) => `${API}/api/v1/products/${id}`,
    putProducts: (id) => `${API}/api/v1/products/${id}`,
    deleteProducts: (id) => `${API}/api/v1/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/v1/users`,
    postUsers: `${API}/api/v1/users`,
  },
  auth: {
    login: `${API}/api/v1/auth/login`,
    profile: `${API}/api/v1/auth/profile`,
  },
  categories: {
    getCategories: `${API}/api/v1/categories`,
    postCategories: `${API}/api/v1/categories`,
    getCategoriesProduct: (id) => `${API}/api/v1/categories/${id}/products`,
    putCategories: (id) => `${API}/api/v1/categories/${id}`,
  },
  files: {
    postFiles: `${API}/api/v1/files/upload`,
    getFiles: (fileName) => `${API}/api/v1/${fileName}`,
  },
}
