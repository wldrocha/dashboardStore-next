const API = process.env.NEXT_PUBLIC_API_URL

export const endPoints = {
  auth: {
    login: `${API}/api/v1/auth/login`,
    profile: `${API}/api/v1/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/v1/product/${id}`,
  },
}
