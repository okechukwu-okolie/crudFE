import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss(),
],
// server:{
//   proxy:{
//     '/books':{
//       target:'http://localhost:3000',
//       changeOrigin:true,
//     }
//   }
// }
})
