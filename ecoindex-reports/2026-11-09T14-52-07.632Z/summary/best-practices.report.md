# Rapport des bonnes pratiques d'ecoconception

## Parcours : pages-principales.report.json

### Page : http://localhost:4173/

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Animated elements detected
50 animated element(s) found
- status: KO
- id: rweb-no-animations
- description: Avoid animations and transitions to reduce CPU and battery usage. [See RWEB_0009](https://rweb.greenit.fr/en/fiches/RWEB_0009-avoid-javascriptcss-animations)
<details>
<summary>Details de l'audit</summary>

| Element | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| button.active | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Avoid carousels
No carousel libraries detected
- status: OK
- id: rweb-no-carousel
- description: Avoid using carousel/slider libraries when possible. [See RWEB_0010](https://rweb.greenit.fr/en/fiches/RWEB_0010-limiting-the-use-of-carousels)

##### [KO] RWEB_0011 - Missing title or meta description
Missing title or meta description
- status: KO
- id: rweb-title-meta
- description: Ensure the page has a non-empty title and meta description. [See RWEB_0011](https://rweb.greenit.fr/en/fiches/RWEB_0011-relevant-page-titles-and-metadescriptions)

##### [KO] RWEB_0031 - No print css implemented.
Print CSS count: 0
- status: KO
- id: rweb-print-css
- description: A print css must be implemented to hide useless elements when printing. [See RWEB_0031](https://rweb.greenit.fr/en/fiches/RWEB_0031-provide-a-css-print)

##### [OK] RWEB_0032 - Limit font families (≤ 2)
0 external font families
- status: OK
- id: rweb-limit-fonts
- description: Reduce the number of external font families loaded. [See RWEB_0032](https://rweb.greenit.fr/en/fiches/RWEB_0032-prefer-standard-fonts)

##### [OK] RWEB_0033 - No embedded documents
No embedded documents detected
- status: OK
- id: rweb-no-embedded-docs
- description: Avoid embedding documents (PDF, Word, etc.) directly in HTML. Use links instead. [See RWEB_0033](https://rweb.greenit.fr/en/fiches/RWEB_0033-do-not-display-documents-within-pages)

##### [OK] RWEB_0035 - Limit CSS stylesheets (≤ 7)
1 CSS stylesheet(s)
- status: OK
- id: rweb-limit-css-files
- description: Keep the number of CSS files to 7 or fewer to reduce HTTP requests. [See RWEB_0035](https://rweb.greenit.fr/en/fiches/RWEB_0035-limit-the-number-of-css)

##### [KO] RWEB_0036 - Large CSS files without media targeting detected
1 large CSS file(s) without media targeting
- status: KO
- id: rweb-css-splitting
- description: Split large CSS files by media type (print, mobile…) so only relevant styles are parsed. [See RWEB_0036](https://rweb.greenit.fr/en/fiches/RWEB_0036-divide-css)
<details>
<summary>Details de l'audit</summary>

| CSS URL |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Prefer CSS over images for UI elements
No icon images in buttons/links detected
- status: OK
- id: rweb-prefer-css
- description: Replace bitmap or SVG icons inside buttons and links with CSS shapes or icon fonts to reduce HTTP requests. [See RWEB_0037](https://rweb.greenit.fr/en/fiches/RWEB_0037-use-css-instead-of-images)

##### [OK] RWEB_0038 - Avoid bitmap images for UI elements
No bitmap images in UI containers
- status: OK
- id: rweb-no-bitmap-ui
- description: Replace bitmap images (PNG/JPG/WebP) in headers, navs, footers and buttons with SVG or CSS. [See RWEB_0038](https://rweb.greenit.fr/en/fiches/RWEB_0038-avoid-using-raster-images-for-the-interface)

##### [OK] RWEB_0042 - Minimize inline assets
No inline assets
- status: OK
- id: rweb-no-inline-assets
- description: Minimize the use of inline scripts and styles. [See RWEB_0042](https://rweb.greenit.fr/en/fiches/RWEB_0042-externalize-css-and-javascript)

##### [OK] RWEB_0051 - Use lazy loading for images
All images use lazy loading
- status: OK
- id: rweb-lazy-loading
- description: Add loading="lazy" to below-the-fold images to defer their download. [See RWEB_0051](https://rweb.greenit.fr/en/fiches/RWEB_0051-use-lazy-loading)

##### [OK] RWEB_0055 - Avoid canvas elements
No canvas elements
- status: OK
- id: rweb-no-canvas
- description: Minimize the use of canvas elements. [See RWEB_0055](https://rweb.greenit.fr/en/fiches/RWEB_0055-limit-canvas-use)

##### [OK] RWEB_0059 - No official social network buttons
0 social SDK request(s) detected
- status: OK
- id: rweb-no-social-sdk
- description: Replace official social network buttons with static links to reduce third-party requests. [See RWEB_0059](https://rweb.greenit.fr/en/fiches/RWEB_0059-replace-the-official-social-network-sharing-buttons)

##### [KO] RWEB_0060 - No active Service Worker detected
No Service Worker
- status: KO
- id: rweb-service-worker
- description: A Service Worker improves caching and reduces network requests. [See RWEB_0060](https://rweb.greenit.fr/en/fiches/RWEB_0060-save-bandwidth-with-service-workers)

##### [OK] RWEB_0075 - Use Cache-Control headers
All resources have Cache-Control
- status: OK
- id: rweb-cache-control
- description: Set Cache-Control headers on HTML, CSS, JS and font resources to reduce repeated downloads. [See RWEB_0075](https://rweb.greenit.fr/en/fiches/RWEB_0075-add-expires-or-cache-control-headers)

##### [KO] RWEB_0076 - Text resources not compressed
2/3 text resources compressed (67%)
- status: KO
- id: rweb-http-compression
- description: Enable gzip/brotli compression for HTML, CSS and JS resources. [See RWEB_0076](https://rweb.greenit.fr/en/fiches/RWEB_0076-compressing-text-files-css-js-html-and-svg)
<details>
<summary>Details de l'audit</summary>

| Uncompressed URL |
| --- |
| http://localhost:4173/ |

</details>

##### [OK] RWEB_0077 - Minify inline CSS and JS
All inline assets appear minified
- status: OK
- id: rweb-minification
- description: Minify inline style and script blocks to reduce page weight. [See RWEB_0077](https://rweb.greenit.fr/en/fiches/RWEB_0077-minifying-text-files-css-js-html-and-svg)

##### [OK] RWEB_0078 - Combine CSS and JS files (≤2 each)
1 CSS + 1 JS files
- status: OK
- id: rweb-combine-assets
- description: Concatenate CSS and JS files to reduce HTTP requests. [See RWEB_0078](https://rweb.greenit.fr/en/fiches/RWEB_0078-combining-css-and-javascript-files)

##### [OK] RWEB_0081 - No cookies on static resources
No static resources with Cookie header
- status: OK
- id: rweb-no-cookie-on-static
- description: Avoid sending cookies with static resources (images, CSS, JS, fonts). [See RWEB_0081](https://rweb.greenit.fr/en/fiches/RWEB_0081-host-static-resources-on-a-cookie-free-domain)

##### [OK] RWEB_0082 - Limit resource domains (≤ 5)
1 unique domain(s)
- status: OK
- id: rweb-limit-domains
- description: Reduce the number of unique domains serving page resources. [See RWEB_0082](https://rweb.greenit.fr/en/fiches/RWEB_0082-limit-the-number-of-domains-serving-resources)

##### [KO] RWEB_0083 - Resources served over HTTP/1
4 resource(s) on HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Use HTTP/2 to benefit from multiplexing and header compression. [See RWEB_0083](https://rweb.greenit.fr/en/fiches/RWEB_0083-http2-over-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/ |
| http://localhost:4173/assets/index-CLsLZYyB.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - HSTS header missing
HSTS header is missing
- status: KO
- id: rweb-hsts
- description: Enable HSTS (HTTP Strict-Transport-Security) header to enforce HTTPS. [See RWEB_0084](https://rweb.greenit.fr/en/fiches/RWEB_0084-favor-hsts-preload-list-over-301-redirects)

##### [OK] RWEB_0099 - Avoid using GIFs
No GIFs detected
- status: OK
- id: rweb-no-gif
- description: Avoid using GIFs for animations or images; use modern formats instead. [See RWEB_0099](https://rweb.greenit.fr/en/fiches/RWEB_0099-limit-the-use-of-animated-gif)

##### [OK] RWEB_0100 - Optimize SVG files
All SVG files appear optimized
- status: OK
- id: rweb-optimize-svg
- description: SVG files over 2048 bytes likely contain metadata or comments that can be removed. [See RWEB_0100](https://rweb.greenit.fr/en/fiches/RWEB_0100-optimize-vector-images)

##### [OK] RWEB_0106 - No video/audio autoplay
0 autoplay element(s)
- status: OK
- id: rweb-no-autoplay
- description: Avoid autoplay on video and audio elements. [See RWEB_0106](https://rweb.greenit.fr/es/fiches/RWEB_0106-evitar-la-reproduccion-y-carga-automatica-de-videos-y-sonidos)

##### [OK] RWEB_0111 - Limit analytics tools (≤ 1)
0 analytics tool(s) detected
- status: OK
- id: rweb-limit-analytics
- description: Limit analytics tools to one per page. [See RWEB_0111](https://rweb.greenit.fr/es/fiches/RWEB_0111-limitar-las-herramientas-de-analisis-y-los-datos-recopilados)

##### [OK] RWEB_0112 - Avoid HTTP redirects (≤ 1)
0 redirect(s)
- status: OK
- id: rweb-no-redirects
- description: Reduce HTTP redirects to avoid unnecessary round trips. [See RWEB_0112](https://rweb.greenit.fr/en/fiches/RWEB_0112-avoir-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Do not resize images in the browser
Found 0 resized image(s)
- status: OK
- id: bp-badly-sized-images
- description: Do not resize images using the HTML attributes height and width. This sends images in their original size, wasting bandwidth and processor power. A PNG-24 image measuring 350 x 300 px is 41 KB. If you were to resize the same image file in HTML and display it as a 70 x 60 px thumbnail, it would still be 41 KB, when in fact it should be no more than 3 KB! This means 38 KB downloaded for nothing. The best solution is to resize images using software such as Photoshop, without using HTML. When the content added by website users has no specific added value, it

##### [OK] Cookie size ≤ 512 bytes
No Cookie header exceeds 512 bytes
- status: OK
- id: bp-cookie-size
- description: Keep Cookie request headers under 512 bytes to reduce HTTP overhead.

##### [OK] Avoid HTTP request errors (4xx/5xx)
No HTTP errors
- status: OK
- id: bp-no-http-errors
- description: Fix broken resources (404, 500…) to avoid unnecessary network load and improve user experience.

##### [OK] Avoid blocking DOM write API in inline scripts
No blocking DOM write API detected
- status: OK
- id: bp-no-document-write
- description: Using the deprecated DOM write API blocks HTML parsing and forces a full browser re-parse. Replace it with modern DOM manipulation methods (e.g. element.insertAdjacentHTML or appendChild).

##### [OK] Avoid downloading images that are not displayed
No hidden downloaded images
- status: OK
- id: bp-no-hidden-images
- description: Images that are downloaded but hidden waste bandwidth. Use lazy loading or remove them.

##### [OK] No JavaScript runtime errors in console
No JavaScript runtime errors
- status: OK
- id: bp-no-js-errors
- description: Fix JavaScript errors detected at runtime. These are console.error() calls recorded during page load and indicate broken features. Unlike static linting (RWEB_0043), this check does not cover code style or syntax issues.

##### [OK] Do not use browser plugins (Flash, Silverlight, Java)
No browser plugins detected
- status: OK
- id: bp-no-plugins
- description: Remove Flash, Silverlight and Java applet elements — these plugins are obsolete, insecure and unsupported.

##### [KO] Render-blocking external scripts detected
1 render-blocking external script(s)
- status: KO
- id: bp-no-unused-code
- description: Add async or defer to external scripts to prevent blocking the critical rendering path. Render-blocking scripts delay page display and increase CPU usage unnecessarily.
<details>
<summary>Details de l'audit</summary>

| Script URL |
| --- |
| /assets/index-CLsLZYyB.js |

</details>

### Page : http://localhost:4173/3

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Animated elements detected
2 animated element(s) found
- status: KO
- id: rweb-no-animations
- description: Avoid animations and transitions to reduce CPU and battery usage. [See RWEB_0009](https://rweb.greenit.fr/en/fiches/RWEB_0009-avoid-javascriptcss-animations)
<details>
<summary>Details de l'audit</summary>

| Element | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Avoid carousels
No carousel libraries detected
- status: OK
- id: rweb-no-carousel
- description: Avoid using carousel/slider libraries when possible. [See RWEB_0010](https://rweb.greenit.fr/en/fiches/RWEB_0010-limiting-the-use-of-carousels)

##### [KO] RWEB_0011 - Missing title or meta description
Missing title or meta description
- status: KO
- id: rweb-title-meta
- description: Ensure the page has a non-empty title and meta description. [See RWEB_0011](https://rweb.greenit.fr/en/fiches/RWEB_0011-relevant-page-titles-and-metadescriptions)

##### [KO] RWEB_0031 - No print css implemented.
Print CSS count: 0
- status: KO
- id: rweb-print-css
- description: A print css must be implemented to hide useless elements when printing. [See RWEB_0031](https://rweb.greenit.fr/en/fiches/RWEB_0031-provide-a-css-print)

##### [OK] RWEB_0032 - Limit font families (≤ 2)
0 external font families
- status: OK
- id: rweb-limit-fonts
- description: Reduce the number of external font families loaded. [See RWEB_0032](https://rweb.greenit.fr/en/fiches/RWEB_0032-prefer-standard-fonts)

##### [OK] RWEB_0033 - No embedded documents
No embedded documents detected
- status: OK
- id: rweb-no-embedded-docs
- description: Avoid embedding documents (PDF, Word, etc.) directly in HTML. Use links instead. [See RWEB_0033](https://rweb.greenit.fr/en/fiches/RWEB_0033-do-not-display-documents-within-pages)

##### [OK] RWEB_0035 - Limit CSS stylesheets (≤ 7)
1 CSS stylesheet(s)
- status: OK
- id: rweb-limit-css-files
- description: Keep the number of CSS files to 7 or fewer to reduce HTTP requests. [See RWEB_0035](https://rweb.greenit.fr/en/fiches/RWEB_0035-limit-the-number-of-css)

##### [KO] RWEB_0036 - Large CSS files without media targeting detected
1 large CSS file(s) without media targeting
- status: KO
- id: rweb-css-splitting
- description: Split large CSS files by media type (print, mobile…) so only relevant styles are parsed. [See RWEB_0036](https://rweb.greenit.fr/en/fiches/RWEB_0036-divide-css)
<details>
<summary>Details de l'audit</summary>

| CSS URL |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Prefer CSS over images for UI elements
No icon images in buttons/links detected
- status: OK
- id: rweb-prefer-css
- description: Replace bitmap or SVG icons inside buttons and links with CSS shapes or icon fonts to reduce HTTP requests. [See RWEB_0037](https://rweb.greenit.fr/en/fiches/RWEB_0037-use-css-instead-of-images)

##### [OK] RWEB_0038 - Avoid bitmap images for UI elements
No bitmap images in UI containers
- status: OK
- id: rweb-no-bitmap-ui
- description: Replace bitmap images (PNG/JPG/WebP) in headers, navs, footers and buttons with SVG or CSS. [See RWEB_0038](https://rweb.greenit.fr/en/fiches/RWEB_0038-avoid-using-raster-images-for-the-interface)

##### [OK] RWEB_0042 - Minimize inline assets
No inline assets
- status: OK
- id: rweb-no-inline-assets
- description: Minimize the use of inline scripts and styles. [See RWEB_0042](https://rweb.greenit.fr/en/fiches/RWEB_0042-externalize-css-and-javascript)

##### [OK] RWEB_0051 - Use lazy loading for images
All images use lazy loading
- status: OK
- id: rweb-lazy-loading
- description: Add loading="lazy" to below-the-fold images to defer their download. [See RWEB_0051](https://rweb.greenit.fr/en/fiches/RWEB_0051-use-lazy-loading)

##### [OK] RWEB_0055 - Avoid canvas elements
No canvas elements
- status: OK
- id: rweb-no-canvas
- description: Minimize the use of canvas elements. [See RWEB_0055](https://rweb.greenit.fr/en/fiches/RWEB_0055-limit-canvas-use)

##### [OK] RWEB_0059 - No official social network buttons
0 social SDK request(s) detected
- status: OK
- id: rweb-no-social-sdk
- description: Replace official social network buttons with static links to reduce third-party requests. [See RWEB_0059](https://rweb.greenit.fr/en/fiches/RWEB_0059-replace-the-official-social-network-sharing-buttons)

##### [KO] RWEB_0060 - No active Service Worker detected
No Service Worker
- status: KO
- id: rweb-service-worker
- description: A Service Worker improves caching and reduces network requests. [See RWEB_0060](https://rweb.greenit.fr/en/fiches/RWEB_0060-save-bandwidth-with-service-workers)

##### [OK] RWEB_0075 - Use Cache-Control headers
All resources have Cache-Control
- status: OK
- id: rweb-cache-control
- description: Set Cache-Control headers on HTML, CSS, JS and font resources to reduce repeated downloads. [See RWEB_0075](https://rweb.greenit.fr/en/fiches/RWEB_0075-add-expires-or-cache-control-headers)

##### [KO] RWEB_0076 - Text resources not compressed
2/3 text resources compressed (67%)
- status: KO
- id: rweb-http-compression
- description: Enable gzip/brotli compression for HTML, CSS and JS resources. [See RWEB_0076](https://rweb.greenit.fr/en/fiches/RWEB_0076-compressing-text-files-css-js-html-and-svg)
<details>
<summary>Details de l'audit</summary>

| Uncompressed URL |
| --- |
| http://localhost:4173/3 |

</details>

##### [OK] RWEB_0077 - Minify inline CSS and JS
All inline assets appear minified
- status: OK
- id: rweb-minification
- description: Minify inline style and script blocks to reduce page weight. [See RWEB_0077](https://rweb.greenit.fr/en/fiches/RWEB_0077-minifying-text-files-css-js-html-and-svg)

##### [OK] RWEB_0078 - Combine CSS and JS files (≤2 each)
1 CSS + 1 JS files
- status: OK
- id: rweb-combine-assets
- description: Concatenate CSS and JS files to reduce HTTP requests. [See RWEB_0078](https://rweb.greenit.fr/en/fiches/RWEB_0078-combining-css-and-javascript-files)

##### [OK] RWEB_0081 - No cookies on static resources
No static resources with Cookie header
- status: OK
- id: rweb-no-cookie-on-static
- description: Avoid sending cookies with static resources (images, CSS, JS, fonts). [See RWEB_0081](https://rweb.greenit.fr/en/fiches/RWEB_0081-host-static-resources-on-a-cookie-free-domain)

##### [OK] RWEB_0082 - Limit resource domains (≤ 5)
1 unique domain(s)
- status: OK
- id: rweb-limit-domains
- description: Reduce the number of unique domains serving page resources. [See RWEB_0082](https://rweb.greenit.fr/en/fiches/RWEB_0082-limit-the-number-of-domains-serving-resources)

##### [KO] RWEB_0083 - Resources served over HTTP/1
4 resource(s) on HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Use HTTP/2 to benefit from multiplexing and header compression. [See RWEB_0083](https://rweb.greenit.fr/en/fiches/RWEB_0083-http2-over-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/3 |
| http://localhost:4173/assets/index-CLsLZYyB.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - HSTS header missing
HSTS header is missing
- status: KO
- id: rweb-hsts
- description: Enable HSTS (HTTP Strict-Transport-Security) header to enforce HTTPS. [See RWEB_0084](https://rweb.greenit.fr/en/fiches/RWEB_0084-favor-hsts-preload-list-over-301-redirects)

##### [OK] RWEB_0099 - Avoid using GIFs
No GIFs detected
- status: OK
- id: rweb-no-gif
- description: Avoid using GIFs for animations or images; use modern formats instead. [See RWEB_0099](https://rweb.greenit.fr/en/fiches/RWEB_0099-limit-the-use-of-animated-gif)

##### [OK] RWEB_0100 - Optimize SVG files
All SVG files appear optimized
- status: OK
- id: rweb-optimize-svg
- description: SVG files over 2048 bytes likely contain metadata or comments that can be removed. [See RWEB_0100](https://rweb.greenit.fr/en/fiches/RWEB_0100-optimize-vector-images)

##### [OK] RWEB_0106 - No video/audio autoplay
0 autoplay element(s)
- status: OK
- id: rweb-no-autoplay
- description: Avoid autoplay on video and audio elements. [See RWEB_0106](https://rweb.greenit.fr/es/fiches/RWEB_0106-evitar-la-reproduccion-y-carga-automatica-de-videos-y-sonidos)

##### [OK] RWEB_0111 - Limit analytics tools (≤ 1)
0 analytics tool(s) detected
- status: OK
- id: rweb-limit-analytics
- description: Limit analytics tools to one per page. [See RWEB_0111](https://rweb.greenit.fr/es/fiches/RWEB_0111-limitar-las-herramientas-de-analisis-y-los-datos-recopilados)

##### [OK] RWEB_0112 - Avoid HTTP redirects (≤ 1)
0 redirect(s)
- status: OK
- id: rweb-no-redirects
- description: Reduce HTTP redirects to avoid unnecessary round trips. [See RWEB_0112](https://rweb.greenit.fr/en/fiches/RWEB_0112-avoir-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Do not resize images in the browser
Found 0 resized image(s)
- status: OK
- id: bp-badly-sized-images
- description: Do not resize images using the HTML attributes height and width. This sends images in their original size, wasting bandwidth and processor power. A PNG-24 image measuring 350 x 300 px is 41 KB. If you were to resize the same image file in HTML and display it as a 70 x 60 px thumbnail, it would still be 41 KB, when in fact it should be no more than 3 KB! This means 38 KB downloaded for nothing. The best solution is to resize images using software such as Photoshop, without using HTML. When the content added by website users has no specific added value, it

##### [OK] Cookie size ≤ 512 bytes
No Cookie header exceeds 512 bytes
- status: OK
- id: bp-cookie-size
- description: Keep Cookie request headers under 512 bytes to reduce HTTP overhead.

##### [OK] Avoid HTTP request errors (4xx/5xx)
No HTTP errors
- status: OK
- id: bp-no-http-errors
- description: Fix broken resources (404, 500…) to avoid unnecessary network load and improve user experience.

##### [OK] Avoid blocking DOM write API in inline scripts
No blocking DOM write API detected
- status: OK
- id: bp-no-document-write
- description: Using the deprecated DOM write API blocks HTML parsing and forces a full browser re-parse. Replace it with modern DOM manipulation methods (e.g. element.insertAdjacentHTML or appendChild).

##### [OK] Avoid downloading images that are not displayed
No hidden downloaded images
- status: OK
- id: bp-no-hidden-images
- description: Images that are downloaded but hidden waste bandwidth. Use lazy loading or remove them.

##### [OK] No JavaScript runtime errors in console
No JavaScript runtime errors
- status: OK
- id: bp-no-js-errors
- description: Fix JavaScript errors detected at runtime. These are console.error() calls recorded during page load and indicate broken features. Unlike static linting (RWEB_0043), this check does not cover code style or syntax issues.

##### [OK] Do not use browser plugins (Flash, Silverlight, Java)
No browser plugins detected
- status: OK
- id: bp-no-plugins
- description: Remove Flash, Silverlight and Java applet elements — these plugins are obsolete, insecure and unsupported.

##### [KO] Render-blocking external scripts detected
1 render-blocking external script(s)
- status: KO
- id: bp-no-unused-code
- description: Add async or defer to external scripts to prevent blocking the critical rendering path. Render-blocking scripts delay page display and increase CPU usage unnecessarily.
<details>
<summary>Details de l'audit</summary>

| Script URL |
| --- |
| /assets/index-CLsLZYyB.js |

</details>

## Parcours : rechercher-et-consulter-un-logement.report.json

### Page : http://localhost:4173/

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Animated elements detected
50 animated element(s) found
- status: KO
- id: rweb-no-animations
- description: Avoid animations and transitions to reduce CPU and battery usage. [See RWEB_0009](https://rweb.greenit.fr/en/fiches/RWEB_0009-avoid-javascriptcss-animations)
<details>
<summary>Details de l'audit</summary>

| Element | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| button.active | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| button | transition: background, color |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| article.listing-card | transition: transform, box-shadow |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Avoid carousels
No carousel libraries detected
- status: OK
- id: rweb-no-carousel
- description: Avoid using carousel/slider libraries when possible. [See RWEB_0010](https://rweb.greenit.fr/en/fiches/RWEB_0010-limiting-the-use-of-carousels)

##### [KO] RWEB_0011 - Missing title or meta description
Missing title or meta description
- status: KO
- id: rweb-title-meta
- description: Ensure the page has a non-empty title and meta description. [See RWEB_0011](https://rweb.greenit.fr/en/fiches/RWEB_0011-relevant-page-titles-and-metadescriptions)

##### [KO] RWEB_0031 - No print css implemented.
Print CSS count: 0
- status: KO
- id: rweb-print-css
- description: A print css must be implemented to hide useless elements when printing. [See RWEB_0031](https://rweb.greenit.fr/en/fiches/RWEB_0031-provide-a-css-print)

##### [OK] RWEB_0032 - Limit font families (≤ 2)
0 external font families
- status: OK
- id: rweb-limit-fonts
- description: Reduce the number of external font families loaded. [See RWEB_0032](https://rweb.greenit.fr/en/fiches/RWEB_0032-prefer-standard-fonts)

##### [OK] RWEB_0033 - No embedded documents
No embedded documents detected
- status: OK
- id: rweb-no-embedded-docs
- description: Avoid embedding documents (PDF, Word, etc.) directly in HTML. Use links instead. [See RWEB_0033](https://rweb.greenit.fr/en/fiches/RWEB_0033-do-not-display-documents-within-pages)

##### [OK] RWEB_0035 - Limit CSS stylesheets (≤ 7)
1 CSS stylesheet(s)
- status: OK
- id: rweb-limit-css-files
- description: Keep the number of CSS files to 7 or fewer to reduce HTTP requests. [See RWEB_0035](https://rweb.greenit.fr/en/fiches/RWEB_0035-limit-the-number-of-css)

##### [KO] RWEB_0036 - Large CSS files without media targeting detected
1 large CSS file(s) without media targeting
- status: KO
- id: rweb-css-splitting
- description: Split large CSS files by media type (print, mobile…) so only relevant styles are parsed. [See RWEB_0036](https://rweb.greenit.fr/en/fiches/RWEB_0036-divide-css)
<details>
<summary>Details de l'audit</summary>

| CSS URL |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Prefer CSS over images for UI elements
No icon images in buttons/links detected
- status: OK
- id: rweb-prefer-css
- description: Replace bitmap or SVG icons inside buttons and links with CSS shapes or icon fonts to reduce HTTP requests. [See RWEB_0037](https://rweb.greenit.fr/en/fiches/RWEB_0037-use-css-instead-of-images)

##### [OK] RWEB_0038 - Avoid bitmap images for UI elements
No bitmap images in UI containers
- status: OK
- id: rweb-no-bitmap-ui
- description: Replace bitmap images (PNG/JPG/WebP) in headers, navs, footers and buttons with SVG or CSS. [See RWEB_0038](https://rweb.greenit.fr/en/fiches/RWEB_0038-avoid-using-raster-images-for-the-interface)

##### [OK] RWEB_0042 - Minimize inline assets
No inline assets
- status: OK
- id: rweb-no-inline-assets
- description: Minimize the use of inline scripts and styles. [See RWEB_0042](https://rweb.greenit.fr/en/fiches/RWEB_0042-externalize-css-and-javascript)

##### [OK] RWEB_0051 - Use lazy loading for images
All images use lazy loading
- status: OK
- id: rweb-lazy-loading
- description: Add loading="lazy" to below-the-fold images to defer their download. [See RWEB_0051](https://rweb.greenit.fr/en/fiches/RWEB_0051-use-lazy-loading)

##### [OK] RWEB_0055 - Avoid canvas elements
No canvas elements
- status: OK
- id: rweb-no-canvas
- description: Minimize the use of canvas elements. [See RWEB_0055](https://rweb.greenit.fr/en/fiches/RWEB_0055-limit-canvas-use)

##### [OK] RWEB_0059 - No official social network buttons
0 social SDK request(s) detected
- status: OK
- id: rweb-no-social-sdk
- description: Replace official social network buttons with static links to reduce third-party requests. [See RWEB_0059](https://rweb.greenit.fr/en/fiches/RWEB_0059-replace-the-official-social-network-sharing-buttons)

##### [KO] RWEB_0060 - No active Service Worker detected
No Service Worker
- status: KO
- id: rweb-service-worker
- description: A Service Worker improves caching and reduces network requests. [See RWEB_0060](https://rweb.greenit.fr/en/fiches/RWEB_0060-save-bandwidth-with-service-workers)

##### [OK] RWEB_0075 - Use Cache-Control headers
All resources have Cache-Control
- status: OK
- id: rweb-cache-control
- description: Set Cache-Control headers on HTML, CSS, JS and font resources to reduce repeated downloads. [See RWEB_0075](https://rweb.greenit.fr/en/fiches/RWEB_0075-add-expires-or-cache-control-headers)

##### [KO] RWEB_0076 - Text resources not compressed
2/3 text resources compressed (67%)
- status: KO
- id: rweb-http-compression
- description: Enable gzip/brotli compression for HTML, CSS and JS resources. [See RWEB_0076](https://rweb.greenit.fr/en/fiches/RWEB_0076-compressing-text-files-css-js-html-and-svg)
<details>
<summary>Details de l'audit</summary>

| Uncompressed URL |
| --- |
| http://localhost:4173/ |

</details>

##### [OK] RWEB_0077 - Minify inline CSS and JS
All inline assets appear minified
- status: OK
- id: rweb-minification
- description: Minify inline style and script blocks to reduce page weight. [See RWEB_0077](https://rweb.greenit.fr/en/fiches/RWEB_0077-minifying-text-files-css-js-html-and-svg)

##### [OK] RWEB_0078 - Combine CSS and JS files (≤2 each)
1 CSS + 1 JS files
- status: OK
- id: rweb-combine-assets
- description: Concatenate CSS and JS files to reduce HTTP requests. [See RWEB_0078](https://rweb.greenit.fr/en/fiches/RWEB_0078-combining-css-and-javascript-files)

##### [OK] RWEB_0081 - No cookies on static resources
No static resources with Cookie header
- status: OK
- id: rweb-no-cookie-on-static
- description: Avoid sending cookies with static resources (images, CSS, JS, fonts). [See RWEB_0081](https://rweb.greenit.fr/en/fiches/RWEB_0081-host-static-resources-on-a-cookie-free-domain)

##### [OK] RWEB_0082 - Limit resource domains (≤ 5)
1 unique domain(s)
- status: OK
- id: rweb-limit-domains
- description: Reduce the number of unique domains serving page resources. [See RWEB_0082](https://rweb.greenit.fr/en/fiches/RWEB_0082-limit-the-number-of-domains-serving-resources)

##### [KO] RWEB_0083 - Resources served over HTTP/1
4 resource(s) on HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Use HTTP/2 to benefit from multiplexing and header compression. [See RWEB_0083](https://rweb.greenit.fr/en/fiches/RWEB_0083-http2-over-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/ |
| http://localhost:4173/assets/index-CLsLZYyB.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - HSTS header missing
HSTS header is missing
- status: KO
- id: rweb-hsts
- description: Enable HSTS (HTTP Strict-Transport-Security) header to enforce HTTPS. [See RWEB_0084](https://rweb.greenit.fr/en/fiches/RWEB_0084-favor-hsts-preload-list-over-301-redirects)

##### [OK] RWEB_0099 - Avoid using GIFs
No GIFs detected
- status: OK
- id: rweb-no-gif
- description: Avoid using GIFs for animations or images; use modern formats instead. [See RWEB_0099](https://rweb.greenit.fr/en/fiches/RWEB_0099-limit-the-use-of-animated-gif)

##### [OK] RWEB_0100 - Optimize SVG files
All SVG files appear optimized
- status: OK
- id: rweb-optimize-svg
- description: SVG files over 2048 bytes likely contain metadata or comments that can be removed. [See RWEB_0100](https://rweb.greenit.fr/en/fiches/RWEB_0100-optimize-vector-images)

##### [OK] RWEB_0106 - No video/audio autoplay
0 autoplay element(s)
- status: OK
- id: rweb-no-autoplay
- description: Avoid autoplay on video and audio elements. [See RWEB_0106](https://rweb.greenit.fr/es/fiches/RWEB_0106-evitar-la-reproduccion-y-carga-automatica-de-videos-y-sonidos)

##### [OK] RWEB_0111 - Limit analytics tools (≤ 1)
0 analytics tool(s) detected
- status: OK
- id: rweb-limit-analytics
- description: Limit analytics tools to one per page. [See RWEB_0111](https://rweb.greenit.fr/es/fiches/RWEB_0111-limitar-las-herramientas-de-analisis-y-los-datos-recopilados)

##### [OK] RWEB_0112 - Avoid HTTP redirects (≤ 1)
0 redirect(s)
- status: OK
- id: rweb-no-redirects
- description: Reduce HTTP redirects to avoid unnecessary round trips. [See RWEB_0112](https://rweb.greenit.fr/en/fiches/RWEB_0112-avoir-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Do not resize images in the browser
Found 0 resized image(s)
- status: OK
- id: bp-badly-sized-images
- description: Do not resize images using the HTML attributes height and width. This sends images in their original size, wasting bandwidth and processor power. A PNG-24 image measuring 350 x 300 px is 41 KB. If you were to resize the same image file in HTML and display it as a 70 x 60 px thumbnail, it would still be 41 KB, when in fact it should be no more than 3 KB! This means 38 KB downloaded for nothing. The best solution is to resize images using software such as Photoshop, without using HTML. When the content added by website users has no specific added value, it

##### [OK] Cookie size ≤ 512 bytes
No Cookie header exceeds 512 bytes
- status: OK
- id: bp-cookie-size
- description: Keep Cookie request headers under 512 bytes to reduce HTTP overhead.

##### [OK] Avoid HTTP request errors (4xx/5xx)
No HTTP errors
- status: OK
- id: bp-no-http-errors
- description: Fix broken resources (404, 500…) to avoid unnecessary network load and improve user experience.

##### [OK] Avoid blocking DOM write API in inline scripts
No blocking DOM write API detected
- status: OK
- id: bp-no-document-write
- description: Using the deprecated DOM write API blocks HTML parsing and forces a full browser re-parse. Replace it with modern DOM manipulation methods (e.g. element.insertAdjacentHTML or appendChild).

##### [OK] Avoid downloading images that are not displayed
No hidden downloaded images
- status: OK
- id: bp-no-hidden-images
- description: Images that are downloaded but hidden waste bandwidth. Use lazy loading or remove them.

##### [OK] No JavaScript runtime errors in console
No JavaScript runtime errors
- status: OK
- id: bp-no-js-errors
- description: Fix JavaScript errors detected at runtime. These are console.error() calls recorded during page load and indicate broken features. Unlike static linting (RWEB_0043), this check does not cover code style or syntax issues.

##### [OK] Do not use browser plugins (Flash, Silverlight, Java)
No browser plugins detected
- status: OK
- id: bp-no-plugins
- description: Remove Flash, Silverlight and Java applet elements — these plugins are obsolete, insecure and unsupported.

##### [KO] Render-blocking external scripts detected
1 render-blocking external script(s)
- status: KO
- id: bp-no-unused-code
- description: Add async or defer to external scripts to prevent blocking the critical rendering path. Render-blocking scripts delay page display and increase CPU usage unnecessarily.
<details>
<summary>Details de l'audit</summary>

| Script URL |
| --- |
| /assets/index-CLsLZYyB.js |

</details>

### Page : http://localhost:4173/3

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Animated elements detected
2 animated element(s) found
- status: KO
- id: rweb-no-animations
- description: Avoid animations and transitions to reduce CPU and battery usage. [See RWEB_0009](https://rweb.greenit.fr/en/fiches/RWEB_0009-avoid-javascriptcss-animations)
<details>
<summary>Details de l'audit</summary>

| Element | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Avoid carousels
No carousel libraries detected
- status: OK
- id: rweb-no-carousel
- description: Avoid using carousel/slider libraries when possible. [See RWEB_0010](https://rweb.greenit.fr/en/fiches/RWEB_0010-limiting-the-use-of-carousels)

##### [KO] RWEB_0011 - Missing title or meta description
Missing title or meta description
- status: KO
- id: rweb-title-meta
- description: Ensure the page has a non-empty title and meta description. [See RWEB_0011](https://rweb.greenit.fr/en/fiches/RWEB_0011-relevant-page-titles-and-metadescriptions)

##### [KO] RWEB_0031 - No print css implemented.
Print CSS count: 0
- status: KO
- id: rweb-print-css
- description: A print css must be implemented to hide useless elements when printing. [See RWEB_0031](https://rweb.greenit.fr/en/fiches/RWEB_0031-provide-a-css-print)

##### [OK] RWEB_0032 - Limit font families (≤ 2)
0 external font families
- status: OK
- id: rweb-limit-fonts
- description: Reduce the number of external font families loaded. [See RWEB_0032](https://rweb.greenit.fr/en/fiches/RWEB_0032-prefer-standard-fonts)

##### [OK] RWEB_0033 - No embedded documents
No embedded documents detected
- status: OK
- id: rweb-no-embedded-docs
- description: Avoid embedding documents (PDF, Word, etc.) directly in HTML. Use links instead. [See RWEB_0033](https://rweb.greenit.fr/en/fiches/RWEB_0033-do-not-display-documents-within-pages)

##### [OK] RWEB_0035 - Limit CSS stylesheets (≤ 7)
1 CSS stylesheet(s)
- status: OK
- id: rweb-limit-css-files
- description: Keep the number of CSS files to 7 or fewer to reduce HTTP requests. [See RWEB_0035](https://rweb.greenit.fr/en/fiches/RWEB_0035-limit-the-number-of-css)

##### [KO] RWEB_0036 - Large CSS files without media targeting detected
1 large CSS file(s) without media targeting
- status: KO
- id: rweb-css-splitting
- description: Split large CSS files by media type (print, mobile…) so only relevant styles are parsed. [See RWEB_0036](https://rweb.greenit.fr/en/fiches/RWEB_0036-divide-css)
<details>
<summary>Details de l'audit</summary>

| CSS URL |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Prefer CSS over images for UI elements
No icon images in buttons/links detected
- status: OK
- id: rweb-prefer-css
- description: Replace bitmap or SVG icons inside buttons and links with CSS shapes or icon fonts to reduce HTTP requests. [See RWEB_0037](https://rweb.greenit.fr/en/fiches/RWEB_0037-use-css-instead-of-images)

##### [OK] RWEB_0038 - Avoid bitmap images for UI elements
No bitmap images in UI containers
- status: OK
- id: rweb-no-bitmap-ui
- description: Replace bitmap images (PNG/JPG/WebP) in headers, navs, footers and buttons with SVG or CSS. [See RWEB_0038](https://rweb.greenit.fr/en/fiches/RWEB_0038-avoid-using-raster-images-for-the-interface)

##### [OK] RWEB_0042 - Minimize inline assets
No inline assets
- status: OK
- id: rweb-no-inline-assets
- description: Minimize the use of inline scripts and styles. [See RWEB_0042](https://rweb.greenit.fr/en/fiches/RWEB_0042-externalize-css-and-javascript)

##### [OK] RWEB_0051 - Use lazy loading for images
All images use lazy loading
- status: OK
- id: rweb-lazy-loading
- description: Add loading="lazy" to below-the-fold images to defer their download. [See RWEB_0051](https://rweb.greenit.fr/en/fiches/RWEB_0051-use-lazy-loading)

##### [OK] RWEB_0055 - Avoid canvas elements
No canvas elements
- status: OK
- id: rweb-no-canvas
- description: Minimize the use of canvas elements. [See RWEB_0055](https://rweb.greenit.fr/en/fiches/RWEB_0055-limit-canvas-use)

##### [OK] RWEB_0059 - No official social network buttons
0 social SDK request(s) detected
- status: OK
- id: rweb-no-social-sdk
- description: Replace official social network buttons with static links to reduce third-party requests. [See RWEB_0059](https://rweb.greenit.fr/en/fiches/RWEB_0059-replace-the-official-social-network-sharing-buttons)

##### [KO] RWEB_0060 - No active Service Worker detected
No Service Worker
- status: KO
- id: rweb-service-worker
- description: A Service Worker improves caching and reduces network requests. [See RWEB_0060](https://rweb.greenit.fr/en/fiches/RWEB_0060-save-bandwidth-with-service-workers)

##### [OK] RWEB_0075 - Use Cache-Control headers
All resources have Cache-Control
- status: OK
- id: rweb-cache-control
- description: Set Cache-Control headers on HTML, CSS, JS and font resources to reduce repeated downloads. [See RWEB_0075](https://rweb.greenit.fr/en/fiches/RWEB_0075-add-expires-or-cache-control-headers)

##### [KO] RWEB_0076 - Text resources not compressed
2/3 text resources compressed (67%)
- status: KO
- id: rweb-http-compression
- description: Enable gzip/brotli compression for HTML, CSS and JS resources. [See RWEB_0076](https://rweb.greenit.fr/en/fiches/RWEB_0076-compressing-text-files-css-js-html-and-svg)
<details>
<summary>Details de l'audit</summary>

| Uncompressed URL |
| --- |
| http://localhost:4173/3 |

</details>

##### [OK] RWEB_0077 - Minify inline CSS and JS
All inline assets appear minified
- status: OK
- id: rweb-minification
- description: Minify inline style and script blocks to reduce page weight. [See RWEB_0077](https://rweb.greenit.fr/en/fiches/RWEB_0077-minifying-text-files-css-js-html-and-svg)

##### [OK] RWEB_0078 - Combine CSS and JS files (≤2 each)
1 CSS + 1 JS files
- status: OK
- id: rweb-combine-assets
- description: Concatenate CSS and JS files to reduce HTTP requests. [See RWEB_0078](https://rweb.greenit.fr/en/fiches/RWEB_0078-combining-css-and-javascript-files)

##### [OK] RWEB_0081 - No cookies on static resources
No static resources with Cookie header
- status: OK
- id: rweb-no-cookie-on-static
- description: Avoid sending cookies with static resources (images, CSS, JS, fonts). [See RWEB_0081](https://rweb.greenit.fr/en/fiches/RWEB_0081-host-static-resources-on-a-cookie-free-domain)

##### [OK] RWEB_0082 - Limit resource domains (≤ 5)
1 unique domain(s)
- status: OK
- id: rweb-limit-domains
- description: Reduce the number of unique domains serving page resources. [See RWEB_0082](https://rweb.greenit.fr/en/fiches/RWEB_0082-limit-the-number-of-domains-serving-resources)

##### [KO] RWEB_0083 - Resources served over HTTP/1
4 resource(s) on HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Use HTTP/2 to benefit from multiplexing and header compression. [See RWEB_0083](https://rweb.greenit.fr/en/fiches/RWEB_0083-http2-over-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/3 |
| http://localhost:4173/assets/index-CLsLZYyB.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - HSTS header missing
HSTS header is missing
- status: KO
- id: rweb-hsts
- description: Enable HSTS (HTTP Strict-Transport-Security) header to enforce HTTPS. [See RWEB_0084](https://rweb.greenit.fr/en/fiches/RWEB_0084-favor-hsts-preload-list-over-301-redirects)

##### [OK] RWEB_0099 - Avoid using GIFs
No GIFs detected
- status: OK
- id: rweb-no-gif
- description: Avoid using GIFs for animations or images; use modern formats instead. [See RWEB_0099](https://rweb.greenit.fr/en/fiches/RWEB_0099-limit-the-use-of-animated-gif)

##### [OK] RWEB_0100 - Optimize SVG files
All SVG files appear optimized
- status: OK
- id: rweb-optimize-svg
- description: SVG files over 2048 bytes likely contain metadata or comments that can be removed. [See RWEB_0100](https://rweb.greenit.fr/en/fiches/RWEB_0100-optimize-vector-images)

##### [OK] RWEB_0106 - No video/audio autoplay
0 autoplay element(s)
- status: OK
- id: rweb-no-autoplay
- description: Avoid autoplay on video and audio elements. [See RWEB_0106](https://rweb.greenit.fr/es/fiches/RWEB_0106-evitar-la-reproduccion-y-carga-automatica-de-videos-y-sonidos)

##### [OK] RWEB_0111 - Limit analytics tools (≤ 1)
0 analytics tool(s) detected
- status: OK
- id: rweb-limit-analytics
- description: Limit analytics tools to one per page. [See RWEB_0111](https://rweb.greenit.fr/es/fiches/RWEB_0111-limitar-las-herramientas-de-analisis-y-los-datos-recopilados)

##### [OK] RWEB_0112 - Avoid HTTP redirects (≤ 1)
0 redirect(s)
- status: OK
- id: rweb-no-redirects
- description: Reduce HTTP redirects to avoid unnecessary round trips. [See RWEB_0112](https://rweb.greenit.fr/en/fiches/RWEB_0112-avoir-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Do not resize images in the browser
Found 0 resized image(s)
- status: OK
- id: bp-badly-sized-images
- description: Do not resize images using the HTML attributes height and width. This sends images in their original size, wasting bandwidth and processor power. A PNG-24 image measuring 350 x 300 px is 41 KB. If you were to resize the same image file in HTML and display it as a 70 x 60 px thumbnail, it would still be 41 KB, when in fact it should be no more than 3 KB! This means 38 KB downloaded for nothing. The best solution is to resize images using software such as Photoshop, without using HTML. When the content added by website users has no specific added value, it

##### [OK] Cookie size ≤ 512 bytes
No Cookie header exceeds 512 bytes
- status: OK
- id: bp-cookie-size
- description: Keep Cookie request headers under 512 bytes to reduce HTTP overhead.

##### [OK] Avoid HTTP request errors (4xx/5xx)
No HTTP errors
- status: OK
- id: bp-no-http-errors
- description: Fix broken resources (404, 500…) to avoid unnecessary network load and improve user experience.

##### [OK] Avoid blocking DOM write API in inline scripts
No blocking DOM write API detected
- status: OK
- id: bp-no-document-write
- description: Using the deprecated DOM write API blocks HTML parsing and forces a full browser re-parse. Replace it with modern DOM manipulation methods (e.g. element.insertAdjacentHTML or appendChild).

##### [OK] Avoid downloading images that are not displayed
No hidden downloaded images
- status: OK
- id: bp-no-hidden-images
- description: Images that are downloaded but hidden waste bandwidth. Use lazy loading or remove them.

##### [OK] No JavaScript runtime errors in console
No JavaScript runtime errors
- status: OK
- id: bp-no-js-errors
- description: Fix JavaScript errors detected at runtime. These are console.error() calls recorded during page load and indicate broken features. Unlike static linting (RWEB_0043), this check does not cover code style or syntax issues.

##### [OK] Do not use browser plugins (Flash, Silverlight, Java)
No browser plugins detected
- status: OK
- id: bp-no-plugins
- description: Remove Flash, Silverlight and Java applet elements — these plugins are obsolete, insecure and unsupported.

##### [KO] Render-blocking external scripts detected
1 render-blocking external script(s)
- status: KO
- id: bp-no-unused-code
- description: Add async or defer to external scripts to prevent blocking the critical rendering path. Render-blocking scripts delay page display and increase CPU usage unnecessarily.
<details>
<summary>Details de l'audit</summary>

| Script URL |
| --- |
| /assets/index-CLsLZYyB.js |

</details>

### Page : http://localhost:4173/7

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Animated elements detected
2 animated element(s) found
- status: KO
- id: rweb-no-animations
- description: Avoid animations and transitions to reduce CPU and battery usage. [See RWEB_0009](https://rweb.greenit.fr/en/fiches/RWEB_0009-avoid-javascriptcss-animations)
<details>
<summary>Details de l'audit</summary>

| Element | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Avoid carousels
No carousel libraries detected
- status: OK
- id: rweb-no-carousel
- description: Avoid using carousel/slider libraries when possible. [See RWEB_0010](https://rweb.greenit.fr/en/fiches/RWEB_0010-limiting-the-use-of-carousels)

##### [KO] RWEB_0011 - Missing title or meta description
Missing title or meta description
- status: KO
- id: rweb-title-meta
- description: Ensure the page has a non-empty title and meta description. [See RWEB_0011](https://rweb.greenit.fr/en/fiches/RWEB_0011-relevant-page-titles-and-metadescriptions)

##### [KO] RWEB_0031 - No print css implemented.
Print CSS count: 0
- status: KO
- id: rweb-print-css
- description: A print css must be implemented to hide useless elements when printing. [See RWEB_0031](https://rweb.greenit.fr/en/fiches/RWEB_0031-provide-a-css-print)

##### [OK] RWEB_0032 - Limit font families (≤ 2)
0 external font families
- status: OK
- id: rweb-limit-fonts
- description: Reduce the number of external font families loaded. [See RWEB_0032](https://rweb.greenit.fr/en/fiches/RWEB_0032-prefer-standard-fonts)

##### [OK] RWEB_0033 - No embedded documents
No embedded documents detected
- status: OK
- id: rweb-no-embedded-docs
- description: Avoid embedding documents (PDF, Word, etc.) directly in HTML. Use links instead. [See RWEB_0033](https://rweb.greenit.fr/en/fiches/RWEB_0033-do-not-display-documents-within-pages)

##### [OK] RWEB_0035 - Limit CSS stylesheets (≤ 7)
1 CSS stylesheet(s)
- status: OK
- id: rweb-limit-css-files
- description: Keep the number of CSS files to 7 or fewer to reduce HTTP requests. [See RWEB_0035](https://rweb.greenit.fr/en/fiches/RWEB_0035-limit-the-number-of-css)

##### [KO] RWEB_0036 - Large CSS files without media targeting detected
1 large CSS file(s) without media targeting
- status: KO
- id: rweb-css-splitting
- description: Split large CSS files by media type (print, mobile…) so only relevant styles are parsed. [See RWEB_0036](https://rweb.greenit.fr/en/fiches/RWEB_0036-divide-css)
<details>
<summary>Details de l'audit</summary>

| CSS URL |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Prefer CSS over images for UI elements
No icon images in buttons/links detected
- status: OK
- id: rweb-prefer-css
- description: Replace bitmap or SVG icons inside buttons and links with CSS shapes or icon fonts to reduce HTTP requests. [See RWEB_0037](https://rweb.greenit.fr/en/fiches/RWEB_0037-use-css-instead-of-images)

##### [OK] RWEB_0038 - Avoid bitmap images for UI elements
No bitmap images in UI containers
- status: OK
- id: rweb-no-bitmap-ui
- description: Replace bitmap images (PNG/JPG/WebP) in headers, navs, footers and buttons with SVG or CSS. [See RWEB_0038](https://rweb.greenit.fr/en/fiches/RWEB_0038-avoid-using-raster-images-for-the-interface)

##### [OK] RWEB_0042 - Minimize inline assets
No inline assets
- status: OK
- id: rweb-no-inline-assets
- description: Minimize the use of inline scripts and styles. [See RWEB_0042](https://rweb.greenit.fr/en/fiches/RWEB_0042-externalize-css-and-javascript)

##### [OK] RWEB_0051 - Use lazy loading for images
All images use lazy loading
- status: OK
- id: rweb-lazy-loading
- description: Add loading="lazy" to below-the-fold images to defer their download. [See RWEB_0051](https://rweb.greenit.fr/en/fiches/RWEB_0051-use-lazy-loading)

##### [OK] RWEB_0055 - Avoid canvas elements
No canvas elements
- status: OK
- id: rweb-no-canvas
- description: Minimize the use of canvas elements. [See RWEB_0055](https://rweb.greenit.fr/en/fiches/RWEB_0055-limit-canvas-use)

##### [OK] RWEB_0059 - No official social network buttons
0 social SDK request(s) detected
- status: OK
- id: rweb-no-social-sdk
- description: Replace official social network buttons with static links to reduce third-party requests. [See RWEB_0059](https://rweb.greenit.fr/en/fiches/RWEB_0059-replace-the-official-social-network-sharing-buttons)

##### [KO] RWEB_0060 - No active Service Worker detected
No Service Worker
- status: KO
- id: rweb-service-worker
- description: A Service Worker improves caching and reduces network requests. [See RWEB_0060](https://rweb.greenit.fr/en/fiches/RWEB_0060-save-bandwidth-with-service-workers)

##### [OK] RWEB_0075 - Use Cache-Control headers
All resources have Cache-Control
- status: OK
- id: rweb-cache-control
- description: Set Cache-Control headers on HTML, CSS, JS and font resources to reduce repeated downloads. [See RWEB_0075](https://rweb.greenit.fr/en/fiches/RWEB_0075-add-expires-or-cache-control-headers)

##### [KO] RWEB_0076 - Text resources not compressed
2/3 text resources compressed (67%)
- status: KO
- id: rweb-http-compression
- description: Enable gzip/brotli compression for HTML, CSS and JS resources. [See RWEB_0076](https://rweb.greenit.fr/en/fiches/RWEB_0076-compressing-text-files-css-js-html-and-svg)
<details>
<summary>Details de l'audit</summary>

| Uncompressed URL |
| --- |
| http://localhost:4173/7 |

</details>

##### [OK] RWEB_0077 - Minify inline CSS and JS
All inline assets appear minified
- status: OK
- id: rweb-minification
- description: Minify inline style and script blocks to reduce page weight. [See RWEB_0077](https://rweb.greenit.fr/en/fiches/RWEB_0077-minifying-text-files-css-js-html-and-svg)

##### [OK] RWEB_0078 - Combine CSS and JS files (≤2 each)
1 CSS + 1 JS files
- status: OK
- id: rweb-combine-assets
- description: Concatenate CSS and JS files to reduce HTTP requests. [See RWEB_0078](https://rweb.greenit.fr/en/fiches/RWEB_0078-combining-css-and-javascript-files)

##### [OK] RWEB_0081 - No cookies on static resources
No static resources with Cookie header
- status: OK
- id: rweb-no-cookie-on-static
- description: Avoid sending cookies with static resources (images, CSS, JS, fonts). [See RWEB_0081](https://rweb.greenit.fr/en/fiches/RWEB_0081-host-static-resources-on-a-cookie-free-domain)

##### [OK] RWEB_0082 - Limit resource domains (≤ 5)
1 unique domain(s)
- status: OK
- id: rweb-limit-domains
- description: Reduce the number of unique domains serving page resources. [See RWEB_0082](https://rweb.greenit.fr/en/fiches/RWEB_0082-limit-the-number-of-domains-serving-resources)

##### [KO] RWEB_0083 - Resources served over HTTP/1
4 resource(s) on HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Use HTTP/2 to benefit from multiplexing and header compression. [See RWEB_0083](https://rweb.greenit.fr/en/fiches/RWEB_0083-http2-over-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/7 |
| http://localhost:4173/assets/index-CLsLZYyB.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - HSTS header missing
HSTS header is missing
- status: KO
- id: rweb-hsts
- description: Enable HSTS (HTTP Strict-Transport-Security) header to enforce HTTPS. [See RWEB_0084](https://rweb.greenit.fr/en/fiches/RWEB_0084-favor-hsts-preload-list-over-301-redirects)

##### [OK] RWEB_0099 - Avoid using GIFs
No GIFs detected
- status: OK
- id: rweb-no-gif
- description: Avoid using GIFs for animations or images; use modern formats instead. [See RWEB_0099](https://rweb.greenit.fr/en/fiches/RWEB_0099-limit-the-use-of-animated-gif)

##### [OK] RWEB_0100 - Optimize SVG files
All SVG files appear optimized
- status: OK
- id: rweb-optimize-svg
- description: SVG files over 2048 bytes likely contain metadata or comments that can be removed. [See RWEB_0100](https://rweb.greenit.fr/en/fiches/RWEB_0100-optimize-vector-images)

##### [OK] RWEB_0106 - No video/audio autoplay
0 autoplay element(s)
- status: OK
- id: rweb-no-autoplay
- description: Avoid autoplay on video and audio elements. [See RWEB_0106](https://rweb.greenit.fr/es/fiches/RWEB_0106-evitar-la-reproduccion-y-carga-automatica-de-videos-y-sonidos)

##### [OK] RWEB_0111 - Limit analytics tools (≤ 1)
0 analytics tool(s) detected
- status: OK
- id: rweb-limit-analytics
- description: Limit analytics tools to one per page. [See RWEB_0111](https://rweb.greenit.fr/es/fiches/RWEB_0111-limitar-las-herramientas-de-analisis-y-los-datos-recopilados)

##### [OK] RWEB_0112 - Avoid HTTP redirects (≤ 1)
0 redirect(s)
- status: OK
- id: rweb-no-redirects
- description: Reduce HTTP redirects to avoid unnecessary round trips. [See RWEB_0112](https://rweb.greenit.fr/en/fiches/RWEB_0112-avoir-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Do not resize images in the browser
Found 0 resized image(s)
- status: OK
- id: bp-badly-sized-images
- description: Do not resize images using the HTML attributes height and width. This sends images in their original size, wasting bandwidth and processor power. A PNG-24 image measuring 350 x 300 px is 41 KB. If you were to resize the same image file in HTML and display it as a 70 x 60 px thumbnail, it would still be 41 KB, when in fact it should be no more than 3 KB! This means 38 KB downloaded for nothing. The best solution is to resize images using software such as Photoshop, without using HTML. When the content added by website users has no specific added value, it

##### [OK] Cookie size ≤ 512 bytes
No Cookie header exceeds 512 bytes
- status: OK
- id: bp-cookie-size
- description: Keep Cookie request headers under 512 bytes to reduce HTTP overhead.

##### [OK] Avoid HTTP request errors (4xx/5xx)
No HTTP errors
- status: OK
- id: bp-no-http-errors
- description: Fix broken resources (404, 500…) to avoid unnecessary network load and improve user experience.

##### [OK] Avoid blocking DOM write API in inline scripts
No blocking DOM write API detected
- status: OK
- id: bp-no-document-write
- description: Using the deprecated DOM write API blocks HTML parsing and forces a full browser re-parse. Replace it with modern DOM manipulation methods (e.g. element.insertAdjacentHTML or appendChild).

##### [OK] Avoid downloading images that are not displayed
No hidden downloaded images
- status: OK
- id: bp-no-hidden-images
- description: Images that are downloaded but hidden waste bandwidth. Use lazy loading or remove them.

##### [OK] No JavaScript runtime errors in console
No JavaScript runtime errors
- status: OK
- id: bp-no-js-errors
- description: Fix JavaScript errors detected at runtime. These are console.error() calls recorded during page load and indicate broken features. Unlike static linting (RWEB_0043), this check does not cover code style or syntax issues.

##### [OK] Do not use browser plugins (Flash, Silverlight, Java)
No browser plugins detected
- status: OK
- id: bp-no-plugins
- description: Remove Flash, Silverlight and Java applet elements — these plugins are obsolete, insecure and unsupported.

##### [KO] Render-blocking external scripts detected
1 render-blocking external script(s)
- status: KO
- id: bp-no-unused-code
- description: Add async or defer to external scripts to prevent blocking the critical rendering path. Render-blocking scripts delay page display and increase CPU usage unnecessarily.
<details>
<summary>Details de l'audit</summary>

| Script URL |
| --- |
| /assets/index-CLsLZYyB.js |

</details>