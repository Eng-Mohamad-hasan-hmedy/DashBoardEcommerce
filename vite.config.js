import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/marketmodern/", // Replace with your repository name
  build: {
    outDir: "DashBoardEcommerce", // Ensure the output directory is set correctly
  },
});


// DashBoardEcommerce;


// https://github.com/Eng-Mohamad-hasan-hmedy/DashBoardEcommerce.git