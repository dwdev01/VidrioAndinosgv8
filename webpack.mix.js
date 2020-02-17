let mix = require("laravel-mix");

mix.postCss("src/css/tailwind.css", "dist", [
  require("tailwindcss")("./tailwind.config.js")
]);

mix.js("src/js/app.js", "dist");
