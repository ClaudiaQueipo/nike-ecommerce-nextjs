import { create } from "zustand"

// Ejemplo de store - define tus stores aquí
interface ExampleStore {
  count: number
  increment: () => void
  decrement: () => void
}

export const useExampleStore = create<ExampleStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}))
