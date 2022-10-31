const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/pages/404.js"))),
  "component---src-pages-checkout-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/pages/checkout.js"))),
  "component---src-pages-confirmation-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/pages/confirmation.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/pages/index.js"))),
  "component---src-pages-product-archive-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/pages/product-archive.js"))),
  "component---src-template-archive-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/template/archive.js"))),
  "component---src-template-blog-details-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/template/blog-details.js"))),
  "component---src-template-category-post-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/template/category-post.js"))),
  "component---src-template-product-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/template/product.js"))),
  "component---src-template-project-details-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/template/project-details.js"))),
  "component---src-template-tag-template-js": hot(preferDefault(require("/Users/gabriel/Documents/alchemy-dark/src/template/tag-template.js")))
}

