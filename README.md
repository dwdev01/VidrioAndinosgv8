DESCRIPTION
-----------

Tailwind CSS Starter Kit Theme for Drupal 8.

USAGE
-----

```
mkdir -p themes/custom
cd themes/custom
git clone https://git.drupal.org/sandbox/opdavies-3015651 tailwindcss
```

To re-compile the CSS:

```
npm install
npm run build
```

DEPENDENCIES
------------

- Laravel Mix (https://github.com/JeffreyWay/laravel-mix) for PostCSS compiling
  and asset generation.
- The Laravel Mix Tailwind plugin.

CONFIGURATION OVERRIDES
-----------------------

Overrides made to the default tailwind.js file:

- `options.prefix` has been changed to `tw-`. This is so that some of
  Tailwind's default classes like `block` don't apply to Drupal's default
  markup.
- `options.important` has been changed to `true`.


{#
/**
 * @file
 * Default theme implementation to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   "/" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - messages: Status and error messages. Should be displayed prominently.
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.breadcrumb: Items for the breadcrumb region. 
 * - page.banner: Items for the banner region.
 * - page.content: The main content of the current page.
 * - page.sidebar: Items for the sidebar.
 * - page.footer-first: Items for the footer first region.
 * - page.footer-second: Items for the footer second region.
 * - page.footer-third: Items for the footer third region.
 * - page.footer: Items for the footer region.
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 *
 * @ingroup themeable
 */
