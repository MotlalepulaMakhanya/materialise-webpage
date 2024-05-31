import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import data from './data.json' assert { type: 'json' };

export default defineConfig({
  base: '/responsive_webpages/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        images: 'images',
        bootstrap: 'index-bootstrap.html',
        materialize: 'index-materialize.html',
      }
    }
  },
  plugins: [handlebars({
    context: data
  })]
});
