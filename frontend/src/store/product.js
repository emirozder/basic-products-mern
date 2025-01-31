import { create } from "zustand"

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  getProducts: async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    set({ products: data?.data })
  },
  createProduct: async (product) => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
    const data = await res.json()
    set((state) => ({ products: [...state.products, data?.data] }))
    return data
  },
  updateProduct: async (pid, product) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
    const data = await res.json()
    set((state) => ({
      products: state.products.map((p) => (p._id === pid ? data?.data : p)),
    }))
    return data
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    set((state) => ({ products: state.products.filter((p) => p._id !== pid) }))
    return data;
  },
}))