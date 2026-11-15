# Rapport des bonnes pratiques d'ecoconception

## Parcours : pages-principales.report.json

### Page : http://localhost:4173/

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Éléments animés détectés
50 élément(s) animé(s) trouvé(s)
- status: KO
- id: rweb-no-animations
- description: Évitez les animations et transitions pour réduire l'utilisation du CPU et la consommation de batterie. [Voir RWEB_0009](https://rweb.greenit.fr/fr/fiches/RWEB_0009-eviter-les-animations-javascript-css)
<details>
<summary>Details de l'audit</summary>

| Élément | Property |
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

##### [OK] RWEB_0010 - Éviter les carrousels
Aucune bibliothèque de carrousel détectée
- status: OK
- id: rweb-no-carousel
- description: Évitez d'utiliser des bibliothèques de carrousels/sliders quand c'est possible. [Voir RWEB_0010](https://rweb.greenit.fr/fr/fiches/RWEB_0010-limiter-le-recours-aux-carrousels)

##### [KO] RWEB_0011 - Titre ou meta description manquant
Titre ou meta description manquant
- status: KO
- id: rweb-title-meta
- description: Assurez-vous que la page possède un titre et une meta description non vides. [Voir RWEB_0011](https://rweb.greenit.fr/fr/fiches/RWEB_0011-avoir-un-titre-de-page-et-une-metadescription-pertinents-avec-le-contenu-de-la-page)

##### [KO] RWEB_0031 - Aucun CSS d'impression implémenté.
Nombre de CSS d'impression : 0
- status: KO
- id: rweb-print-css
- description: Un CSS d'impression doit être mis en place pour masquer les éléments inutiles lors de l'impression. [Voir RWEB_0031](https://rweb.greenit.fr/fr/fiches/RWEB_0031-fournir-une-css-print)

##### [OK] RWEB_0032 - Limiter les familles de polices (≤ 2)
0 famille de police externe
- status: OK
- id: rweb-limit-fonts
- description: Réduisez le nombre de familles de polices externes chargées. [Voir RWEB_0032](https://rweb.greenit.fr/fr/fiches/RWEB_0032-favoriser-les-polices-standards)

##### [OK] RWEB_0033 - Pas de documents embarqués
Aucun document embarqué détecté
- status: OK
- id: rweb-no-embedded-docs
- description: Évitez d'intégrer des documents (PDF, Word, etc.) directement dans le HTML. Utilisez des liens à la place. [Voir RWEB_0033](https://rweb.greenit.fr/fr/fiches/RWEB_0033-ne-pas-afficher-les-documents-a-l-interieur-des-pages)

##### [OK] RWEB_0035 - Limiter les feuilles de style CSS (≤ 7)
1 feuille(s) de style CSS
- status: OK
- id: rweb-limit-css-files
- description: Limitez le nombre de fichiers CSS à 7 ou moins pour réduire les requêtes HTTP. [Voir RWEB_0035](https://rweb.greenit.fr/fr/fiches/RWEB_0035-limiter-le-nombre-de-css)

##### [KO] RWEB_0036 - Des fichiers CSS volumineux sans ciblage média ont été détectés
1 grand(s) fichier(s) CSS sans ciblage média
- status: KO
- id: rweb-css-splitting
- description: Découpez les gros fichiers CSS par type de média (impression, mobile…) pour que seuls les styles pertinents soient analysés. [Voir RWEB_0036](https://rweb.greenit.fr/fr/fiches/RWEB_0036-decouper-les-css)
<details>
<summary>Details de l'audit</summary>

| URL CSS |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Préférer CSS aux images pour les éléments d'interface
Aucune image icône dans les boutons/liens détectée
- status: OK
- id: rweb-prefer-css
- description: Remplacez les icônes bitmap ou SVG dans les boutons et liens par des formes CSS ou des polices d'icônes pour réduire les requêtes HTTP. [Voir RWEB_0037](https://rweb.greenit.fr/fr/fiches/RWEB_0037-preferer-les-css-aux-images)

##### [OK] RWEB_0038 - Éviter les images bitmap pour les éléments d'interface
Aucune image bitmap dans des conteneurs d'interface
- status: OK
- id: rweb-no-bitmap-ui
- description: Remplacez les images bitmap (PNG/JPG/WebP) dans les en-têtes, navigations, pieds de page et boutons par du SVG ou du CSS. [Voir RWEB_0038](https://rweb.greenit.fr/fr/fiches/RWEB_0038-eviter-d-utiliser-des-images-matricielles-pour-l-interface)

##### [OK] RWEB_0042 - Minimiser les ressources inline
Aucune ressource inline
- status: OK
- id: rweb-no-inline-assets
- description: Minimisez l'utilisation de scripts et styles inline. [Voir RWEB_0042](https://rweb.greenit.fr/fr/fiches/RWEB_0042-externaliser-les-css-et-javascript)

##### [OK] RWEB_0051 - Utiliser le chargement différé pour les images
Toutes les images utilisent le chargement différé
- status: OK
- id: rweb-lazy-loading
- description: Ajoutez loading="lazy" aux images sous la ligne de flottaison pour différer leur téléchargement. [Voir RWEB_0051](https://rweb.greenit.fr/fr/fiches/RWEB_0051-utiliser-le-chargement-paresseux)

##### [OK] RWEB_0055 - Éviter les éléments canvas
Aucun élément canvas
- status: OK
- id: rweb-no-canvas
- description: Minimisez l'utilisation des éléments canvas. [Voir RWEB_0055](https://rweb.greenit.fr/fr/fiches/RWEB_0055-limiter-le-recours-aux-canvas)

##### [OK] RWEB_0059 - Pas de boutons officiels de réseaux sociaux
0 requête(s) SDK de réseau social détectée(s)
- status: OK
- id: rweb-no-social-sdk
- description: Remplacez les boutons officiels des réseaux sociaux par des liens statiques pour réduire les requêtes tierces. [Voir RWEB_0059](https://rweb.greenit.fr/fr/fiches/RWEB_0059-remplacer-les-boutons-officiels-de-partage-des-reseaux-sociaux)

##### [KO] RWEB_0060 - Aucun Service Worker actif détecté
Aucun Service Worker
- status: KO
- id: rweb-service-worker
- description: Un Service Worker améliore la mise en cache et réduit les requêtes réseau. [Voir RWEB_0060](https://rweb.greenit.fr/fr/fiches/RWEB_0060-economiser-de-la-bande-passante-grace-a-un-serviceworker)

##### [OK] RWEB_0075 - Utiliser les en-têtes Cache-Control
Toutes les ressources ont un Cache-Control
- status: OK
- id: rweb-cache-control
- description: Définissez des en-têtes Cache-Control sur les ressources HTML, CSS, JS et les polices pour réduire les téléchargements répétés. [Voir RWEB_0075](https://rweb.greenit.fr/fr/fiches/RWEB_0075-ajouter-des-entetes-expires-ou-cache-control)

##### [KO] RWEB_0076 - Ressources texte non compressées
2/3 ressources texte compressées (67%)
- status: KO
- id: rweb-http-compression
- description: Activez la compression gzip/brotli pour les ressources HTML, CSS et JS. [Voir RWEB_0076](https://rweb.greenit.fr/fr/fiches/RWEB_0076-compresser-les-fichiers-css-javascript-html-et-svg)
<details>
<summary>Details de l'audit</summary>

| URL non compressée |
| --- |
| http://localhost:4173/ |

</details>

##### [OK] RWEB_0077 - Minifier les CSS et JS inline
Toutes les ressources inline semblent minifiées
- status: OK
- id: rweb-minification
- description: Minifiez les blocs de style et de script inline pour réduire le poids de la page. [Voir RWEB_0077](https://rweb.greenit.fr/fr/fiches/RWEB_0077-minifier-les-fichiers-css-javascript-html-et-svg)

##### [OK] RWEB_0078 - Combiner les fichiers CSS et JS (≤2 chacun)
1 CSS + 1 JS fichiers
- status: OK
- id: rweb-combine-assets
- description: Concaténez les fichiers CSS et JS pour réduire les requêtes HTTP. [Voir RWEB_0078](https://rweb.greenit.fr/fr/fiches/RWEB_0078-combiner-les-fichiers-css-et-javascript)

##### [OK] RWEB_0081 - Pas de cookies sur les ressources statiques
Aucune ressource statique avec en-tête Cookie
- status: OK
- id: rweb-no-cookie-on-static
- description: Évitez d'envoyer des cookies avec les ressources statiques (images, CSS, JS, polices). [Voir RWEB_0081](https://rweb.greenit.fr/fr/fiches/RWEB_0081-heberger-les-ressources-cssjs-sur-un-domaine-sans-cookie)

##### [OK] RWEB_0082 - Limiter les domaines de ressources (≤ 5)
1 domaine(s) unique(s)
- status: OK
- id: rweb-limit-domains
- description: Réduisez le nombre de domaines uniques servant les ressources de la page. [Voir RWEB_0082](https://rweb.greenit.fr/fr/fiches/RWEB_0082-limiter-le-nombre-de-domaines-servant-les-ressources)

##### [KO] RWEB_0083 - Ressources servies en HTTP/1
4 ressource(s) en HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Utilisez HTTP/2 pour bénéficier du multiplexage et de la compression des en-têtes. [Voir RWEB_0083](https://rweb.greenit.fr/fr/fiches/RWEB_0083-privilegier-http2-a-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/ |
| http://localhost:4173/assets/index-D3WXi6FD.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - En-tête HSTS manquant
En-tête HSTS absent
- status: KO
- id: rweb-hsts
- description: Activez l'en-tête HSTS (HTTP Strict-Transport-Security) pour imposer HTTPS. [Voir RWEB_0084](https://rweb.greenit.fr/fr/fiches/RWEB_0084-favoriser-hsts-preload-list-aux-redirections-301)

##### [OK] RWEB_0099 - Éviter l'utilisation de GIFs
Aucun GIF détecté
- status: OK
- id: rweb-no-gif
- description: Évitez d'utiliser des GIFs pour les animations ou images ; utilisez des formats modernes à la place. [Voir RWEB_0099](https://rweb.greenit.fr/fr/fiches/RWEB_0099-limiter-l-utilisation-des-gifs-animes)

##### [OK] RWEB_0100 - Optimiser les fichiers SVG
Tous les fichiers SVG semblent optimisés
- status: OK
- id: rweb-optimize-svg
- description: Les fichiers SVG de plus de 2048 octets contiennent probablement des métadonnées ou commentaires qui peuvent être supprimés. [Voir RWEB_0100](https://rweb.greenit.fr/fr/fiches/RWEB_0100-optimiser-les-images-vectorielles)

##### [OK] RWEB_0106 - Pas de lecture automatique vidéo/audio
0 élément(s) avec lecture automatique
- status: OK
- id: rweb-no-autoplay
- description: Évitez la lecture automatique sur les éléments vidéo et audio. [Voir RWEB_0106](https://rweb.greenit.fr/fr/fiches/RWEB_0106-eviter-la-lecture-et-le-chargement-automatique-des-videos-et-des-sons)

##### [OK] RWEB_0111 - Limiter les outils analytics (≤ 1)
0 outil(s) analytics détecté(s)
- status: OK
- id: rweb-limit-analytics
- description: Limitez les outils d'analytics à un par page. [Voir RWEB_0111](https://rweb.greenit.fr/fr/fiches/RWEB_0111-limiter-les-outils-d-analytics-et-les-donnees-collectees)

##### [OK] RWEB_0112 - Éviter les redirections HTTP (≤ 1)
0 redirection(s)
- status: OK
- id: rweb-no-redirects
- description: Réduisez les redirections HTTP pour éviter des allers-retours inutiles. [Voir RWEB_0112](https://rweb.greenit.fr/fr/fiches/RWEB_0112-eviter-les-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Ne pas redimensionner les images dans le navigateur
Trouvé 0 image(s) redimensionnée(s)
- status: OK
- id: bp-badly-sized-images
- description: Ne redimensionnez pas les images via les attributs HTML height et width. Cela envoie les images dans leur taille originale, gaspillant bande passante et puissance de calcul. Redimensionnez les images avec un logiciel tel que Photoshop plutôt qu'en HTML.

##### [OK] Taille des cookies ≤ 512 octets
Aucun en-tête Cookie ne dépasse 512 octets
- status: OK
- id: bp-cookie-size
- description: Maintenez les en-têtes de requête Cookie sous 512 octets pour réduire la surcharge HTTP.

##### [OK] Éviter les erreurs de requêtes HTTP (4xx/5xx)
Aucune erreur HTTP
- status: OK
- id: bp-no-http-errors
- description: Corrigez les ressources cassées (404, 500…) pour éviter une charge réseau inutile et améliorer l'expérience utilisateur.

##### [OK] Éviter l'API d'écriture DOM dans les scripts inline
Aucun appel à l'API d'écriture DOM détecté
- status: OK
- id: bp-no-document-write
- description: L'utilisation de l'API DOM d'écriture dépréciée bloque l'analyse HTML et force un re-parsing complet. Remplacez-la par des méthodes modernes (ex: element.insertAdjacentHTML ou appendChild).

##### [OK] Éviter de télécharger des images non affichées
Aucune image masquée téléchargée
- status: OK
- id: bp-no-hidden-images
- description: Les images téléchargées mais masquées gaspillent de la bande passante. Utilisez le chargement différé ou supprimez-les.

##### [OK] Aucune erreur JavaScript à l'exécution dans la console
Aucune erreur JavaScript à l'exécution
- status: OK
- id: bp-no-js-errors
- description: Corrigez les erreurs JavaScript détectées à l'exécution. Il s'agit d'appels à console.error() enregistrés pendant le chargement de la page, indiquant des fonctionnalités cassées. Contrairement à l'analyse statique (RWEB_0043), cette vérification ne couvre pas les problèmes de style de code ou de syntaxe.

##### [OK] Ne pas utiliser de plugins navigateur (Flash, Silverlight, Java)
Aucun plugin navigateur détecté
- status: OK
- id: bp-no-plugins
- description: Supprimez les éléments Flash, Silverlight et Java applet — ces plugins sont obsolètes, non sécurisés et non supportés.

##### [KO] Scripts externes bloquants le rendu détectés
1 script(s) externe(s) bloquant(s) le rendu
- status: KO
- id: bp-no-unused-code
- description: Ajoutez async ou defer aux scripts externes pour éviter de bloquer le chemin de rendu critique. Les scripts bloquants retardent l'affichage de la page et augmentent inutilement la consommation CPU.
<details>
<summary>Details de l'audit</summary>

| URL du script |
| --- |
| /assets/index-D3WXi6FD.js |

</details>

### Page : http://localhost:4173/3

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Éléments animés détectés
2 élément(s) animé(s) trouvé(s)
- status: KO
- id: rweb-no-animations
- description: Évitez les animations et transitions pour réduire l'utilisation du CPU et la consommation de batterie. [Voir RWEB_0009](https://rweb.greenit.fr/fr/fiches/RWEB_0009-eviter-les-animations-javascript-css)
<details>
<summary>Details de l'audit</summary>

| Élément | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Éviter les carrousels
Aucune bibliothèque de carrousel détectée
- status: OK
- id: rweb-no-carousel
- description: Évitez d'utiliser des bibliothèques de carrousels/sliders quand c'est possible. [Voir RWEB_0010](https://rweb.greenit.fr/fr/fiches/RWEB_0010-limiter-le-recours-aux-carrousels)

##### [KO] RWEB_0011 - Titre ou meta description manquant
Titre ou meta description manquant
- status: KO
- id: rweb-title-meta
- description: Assurez-vous que la page possède un titre et une meta description non vides. [Voir RWEB_0011](https://rweb.greenit.fr/fr/fiches/RWEB_0011-avoir-un-titre-de-page-et-une-metadescription-pertinents-avec-le-contenu-de-la-page)

##### [KO] RWEB_0031 - Aucun CSS d'impression implémenté.
Nombre de CSS d'impression : 0
- status: KO
- id: rweb-print-css
- description: Un CSS d'impression doit être mis en place pour masquer les éléments inutiles lors de l'impression. [Voir RWEB_0031](https://rweb.greenit.fr/fr/fiches/RWEB_0031-fournir-une-css-print)

##### [OK] RWEB_0032 - Limiter les familles de polices (≤ 2)
0 famille de police externe
- status: OK
- id: rweb-limit-fonts
- description: Réduisez le nombre de familles de polices externes chargées. [Voir RWEB_0032](https://rweb.greenit.fr/fr/fiches/RWEB_0032-favoriser-les-polices-standards)

##### [OK] RWEB_0033 - Pas de documents embarqués
Aucun document embarqué détecté
- status: OK
- id: rweb-no-embedded-docs
- description: Évitez d'intégrer des documents (PDF, Word, etc.) directement dans le HTML. Utilisez des liens à la place. [Voir RWEB_0033](https://rweb.greenit.fr/fr/fiches/RWEB_0033-ne-pas-afficher-les-documents-a-l-interieur-des-pages)

##### [OK] RWEB_0035 - Limiter les feuilles de style CSS (≤ 7)
1 feuille(s) de style CSS
- status: OK
- id: rweb-limit-css-files
- description: Limitez le nombre de fichiers CSS à 7 ou moins pour réduire les requêtes HTTP. [Voir RWEB_0035](https://rweb.greenit.fr/fr/fiches/RWEB_0035-limiter-le-nombre-de-css)

##### [KO] RWEB_0036 - Des fichiers CSS volumineux sans ciblage média ont été détectés
1 grand(s) fichier(s) CSS sans ciblage média
- status: KO
- id: rweb-css-splitting
- description: Découpez les gros fichiers CSS par type de média (impression, mobile…) pour que seuls les styles pertinents soient analysés. [Voir RWEB_0036](https://rweb.greenit.fr/fr/fiches/RWEB_0036-decouper-les-css)
<details>
<summary>Details de l'audit</summary>

| URL CSS |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Préférer CSS aux images pour les éléments d'interface
Aucune image icône dans les boutons/liens détectée
- status: OK
- id: rweb-prefer-css
- description: Remplacez les icônes bitmap ou SVG dans les boutons et liens par des formes CSS ou des polices d'icônes pour réduire les requêtes HTTP. [Voir RWEB_0037](https://rweb.greenit.fr/fr/fiches/RWEB_0037-preferer-les-css-aux-images)

##### [OK] RWEB_0038 - Éviter les images bitmap pour les éléments d'interface
Aucune image bitmap dans des conteneurs d'interface
- status: OK
- id: rweb-no-bitmap-ui
- description: Remplacez les images bitmap (PNG/JPG/WebP) dans les en-têtes, navigations, pieds de page et boutons par du SVG ou du CSS. [Voir RWEB_0038](https://rweb.greenit.fr/fr/fiches/RWEB_0038-eviter-d-utiliser-des-images-matricielles-pour-l-interface)

##### [OK] RWEB_0042 - Minimiser les ressources inline
Aucune ressource inline
- status: OK
- id: rweb-no-inline-assets
- description: Minimisez l'utilisation de scripts et styles inline. [Voir RWEB_0042](https://rweb.greenit.fr/fr/fiches/RWEB_0042-externaliser-les-css-et-javascript)

##### [OK] RWEB_0051 - Utiliser le chargement différé pour les images
Toutes les images utilisent le chargement différé
- status: OK
- id: rweb-lazy-loading
- description: Ajoutez loading="lazy" aux images sous la ligne de flottaison pour différer leur téléchargement. [Voir RWEB_0051](https://rweb.greenit.fr/fr/fiches/RWEB_0051-utiliser-le-chargement-paresseux)

##### [OK] RWEB_0055 - Éviter les éléments canvas
Aucun élément canvas
- status: OK
- id: rweb-no-canvas
- description: Minimisez l'utilisation des éléments canvas. [Voir RWEB_0055](https://rweb.greenit.fr/fr/fiches/RWEB_0055-limiter-le-recours-aux-canvas)

##### [OK] RWEB_0059 - Pas de boutons officiels de réseaux sociaux
0 requête(s) SDK de réseau social détectée(s)
- status: OK
- id: rweb-no-social-sdk
- description: Remplacez les boutons officiels des réseaux sociaux par des liens statiques pour réduire les requêtes tierces. [Voir RWEB_0059](https://rweb.greenit.fr/fr/fiches/RWEB_0059-remplacer-les-boutons-officiels-de-partage-des-reseaux-sociaux)

##### [KO] RWEB_0060 - Aucun Service Worker actif détecté
Aucun Service Worker
- status: KO
- id: rweb-service-worker
- description: Un Service Worker améliore la mise en cache et réduit les requêtes réseau. [Voir RWEB_0060](https://rweb.greenit.fr/fr/fiches/RWEB_0060-economiser-de-la-bande-passante-grace-a-un-serviceworker)

##### [OK] RWEB_0075 - Utiliser les en-têtes Cache-Control
Toutes les ressources ont un Cache-Control
- status: OK
- id: rweb-cache-control
- description: Définissez des en-têtes Cache-Control sur les ressources HTML, CSS, JS et les polices pour réduire les téléchargements répétés. [Voir RWEB_0075](https://rweb.greenit.fr/fr/fiches/RWEB_0075-ajouter-des-entetes-expires-ou-cache-control)

##### [KO] RWEB_0076 - Ressources texte non compressées
2/3 ressources texte compressées (67%)
- status: KO
- id: rweb-http-compression
- description: Activez la compression gzip/brotli pour les ressources HTML, CSS et JS. [Voir RWEB_0076](https://rweb.greenit.fr/fr/fiches/RWEB_0076-compresser-les-fichiers-css-javascript-html-et-svg)
<details>
<summary>Details de l'audit</summary>

| URL non compressée |
| --- |
| http://localhost:4173/3 |

</details>

##### [OK] RWEB_0077 - Minifier les CSS et JS inline
Toutes les ressources inline semblent minifiées
- status: OK
- id: rweb-minification
- description: Minifiez les blocs de style et de script inline pour réduire le poids de la page. [Voir RWEB_0077](https://rweb.greenit.fr/fr/fiches/RWEB_0077-minifier-les-fichiers-css-javascript-html-et-svg)

##### [OK] RWEB_0078 - Combiner les fichiers CSS et JS (≤2 chacun)
1 CSS + 1 JS fichiers
- status: OK
- id: rweb-combine-assets
- description: Concaténez les fichiers CSS et JS pour réduire les requêtes HTTP. [Voir RWEB_0078](https://rweb.greenit.fr/fr/fiches/RWEB_0078-combiner-les-fichiers-css-et-javascript)

##### [OK] RWEB_0081 - Pas de cookies sur les ressources statiques
Aucune ressource statique avec en-tête Cookie
- status: OK
- id: rweb-no-cookie-on-static
- description: Évitez d'envoyer des cookies avec les ressources statiques (images, CSS, JS, polices). [Voir RWEB_0081](https://rweb.greenit.fr/fr/fiches/RWEB_0081-heberger-les-ressources-cssjs-sur-un-domaine-sans-cookie)

##### [OK] RWEB_0082 - Limiter les domaines de ressources (≤ 5)
1 domaine(s) unique(s)
- status: OK
- id: rweb-limit-domains
- description: Réduisez le nombre de domaines uniques servant les ressources de la page. [Voir RWEB_0082](https://rweb.greenit.fr/fr/fiches/RWEB_0082-limiter-le-nombre-de-domaines-servant-les-ressources)

##### [KO] RWEB_0083 - Ressources servies en HTTP/1
4 ressource(s) en HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Utilisez HTTP/2 pour bénéficier du multiplexage et de la compression des en-têtes. [Voir RWEB_0083](https://rweb.greenit.fr/fr/fiches/RWEB_0083-privilegier-http2-a-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/3 |
| http://localhost:4173/assets/index-D3WXi6FD.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - En-tête HSTS manquant
En-tête HSTS absent
- status: KO
- id: rweb-hsts
- description: Activez l'en-tête HSTS (HTTP Strict-Transport-Security) pour imposer HTTPS. [Voir RWEB_0084](https://rweb.greenit.fr/fr/fiches/RWEB_0084-favoriser-hsts-preload-list-aux-redirections-301)

##### [OK] RWEB_0099 - Éviter l'utilisation de GIFs
Aucun GIF détecté
- status: OK
- id: rweb-no-gif
- description: Évitez d'utiliser des GIFs pour les animations ou images ; utilisez des formats modernes à la place. [Voir RWEB_0099](https://rweb.greenit.fr/fr/fiches/RWEB_0099-limiter-l-utilisation-des-gifs-animes)

##### [OK] RWEB_0100 - Optimiser les fichiers SVG
Tous les fichiers SVG semblent optimisés
- status: OK
- id: rweb-optimize-svg
- description: Les fichiers SVG de plus de 2048 octets contiennent probablement des métadonnées ou commentaires qui peuvent être supprimés. [Voir RWEB_0100](https://rweb.greenit.fr/fr/fiches/RWEB_0100-optimiser-les-images-vectorielles)

##### [OK] RWEB_0106 - Pas de lecture automatique vidéo/audio
0 élément(s) avec lecture automatique
- status: OK
- id: rweb-no-autoplay
- description: Évitez la lecture automatique sur les éléments vidéo et audio. [Voir RWEB_0106](https://rweb.greenit.fr/fr/fiches/RWEB_0106-eviter-la-lecture-et-le-chargement-automatique-des-videos-et-des-sons)

##### [OK] RWEB_0111 - Limiter les outils analytics (≤ 1)
0 outil(s) analytics détecté(s)
- status: OK
- id: rweb-limit-analytics
- description: Limitez les outils d'analytics à un par page. [Voir RWEB_0111](https://rweb.greenit.fr/fr/fiches/RWEB_0111-limiter-les-outils-d-analytics-et-les-donnees-collectees)

##### [OK] RWEB_0112 - Éviter les redirections HTTP (≤ 1)
0 redirection(s)
- status: OK
- id: rweb-no-redirects
- description: Réduisez les redirections HTTP pour éviter des allers-retours inutiles. [Voir RWEB_0112](https://rweb.greenit.fr/fr/fiches/RWEB_0112-eviter-les-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Ne pas redimensionner les images dans le navigateur
Trouvé 0 image(s) redimensionnée(s)
- status: OK
- id: bp-badly-sized-images
- description: Ne redimensionnez pas les images via les attributs HTML height et width. Cela envoie les images dans leur taille originale, gaspillant bande passante et puissance de calcul. Redimensionnez les images avec un logiciel tel que Photoshop plutôt qu'en HTML.

##### [OK] Taille des cookies ≤ 512 octets
Aucun en-tête Cookie ne dépasse 512 octets
- status: OK
- id: bp-cookie-size
- description: Maintenez les en-têtes de requête Cookie sous 512 octets pour réduire la surcharge HTTP.

##### [OK] Éviter les erreurs de requêtes HTTP (4xx/5xx)
Aucune erreur HTTP
- status: OK
- id: bp-no-http-errors
- description: Corrigez les ressources cassées (404, 500…) pour éviter une charge réseau inutile et améliorer l'expérience utilisateur.

##### [OK] Éviter l'API d'écriture DOM dans les scripts inline
Aucun appel à l'API d'écriture DOM détecté
- status: OK
- id: bp-no-document-write
- description: L'utilisation de l'API DOM d'écriture dépréciée bloque l'analyse HTML et force un re-parsing complet. Remplacez-la par des méthodes modernes (ex: element.insertAdjacentHTML ou appendChild).

##### [OK] Éviter de télécharger des images non affichées
Aucune image masquée téléchargée
- status: OK
- id: bp-no-hidden-images
- description: Les images téléchargées mais masquées gaspillent de la bande passante. Utilisez le chargement différé ou supprimez-les.

##### [OK] Aucune erreur JavaScript à l'exécution dans la console
Aucune erreur JavaScript à l'exécution
- status: OK
- id: bp-no-js-errors
- description: Corrigez les erreurs JavaScript détectées à l'exécution. Il s'agit d'appels à console.error() enregistrés pendant le chargement de la page, indiquant des fonctionnalités cassées. Contrairement à l'analyse statique (RWEB_0043), cette vérification ne couvre pas les problèmes de style de code ou de syntaxe.

##### [OK] Ne pas utiliser de plugins navigateur (Flash, Silverlight, Java)
Aucun plugin navigateur détecté
- status: OK
- id: bp-no-plugins
- description: Supprimez les éléments Flash, Silverlight et Java applet — ces plugins sont obsolètes, non sécurisés et non supportés.

##### [KO] Scripts externes bloquants le rendu détectés
1 script(s) externe(s) bloquant(s) le rendu
- status: KO
- id: bp-no-unused-code
- description: Ajoutez async ou defer aux scripts externes pour éviter de bloquer le chemin de rendu critique. Les scripts bloquants retardent l'affichage de la page et augmentent inutilement la consommation CPU.
<details>
<summary>Details de l'audit</summary>

| URL du script |
| --- |
| /assets/index-D3WXi6FD.js |

</details>

## Parcours : rechercher-et-consulter-un-logement.report.json

### Page : http://localhost:4173/

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Éléments animés détectés
50 élément(s) animé(s) trouvé(s)
- status: KO
- id: rweb-no-animations
- description: Évitez les animations et transitions pour réduire l'utilisation du CPU et la consommation de batterie. [Voir RWEB_0009](https://rweb.greenit.fr/fr/fiches/RWEB_0009-eviter-les-animations-javascript-css)
<details>
<summary>Details de l'audit</summary>

| Élément | Property |
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

##### [OK] RWEB_0010 - Éviter les carrousels
Aucune bibliothèque de carrousel détectée
- status: OK
- id: rweb-no-carousel
- description: Évitez d'utiliser des bibliothèques de carrousels/sliders quand c'est possible. [Voir RWEB_0010](https://rweb.greenit.fr/fr/fiches/RWEB_0010-limiter-le-recours-aux-carrousels)

##### [KO] RWEB_0011 - Titre ou meta description manquant
Titre ou meta description manquant
- status: KO
- id: rweb-title-meta
- description: Assurez-vous que la page possède un titre et une meta description non vides. [Voir RWEB_0011](https://rweb.greenit.fr/fr/fiches/RWEB_0011-avoir-un-titre-de-page-et-une-metadescription-pertinents-avec-le-contenu-de-la-page)

##### [KO] RWEB_0031 - Aucun CSS d'impression implémenté.
Nombre de CSS d'impression : 0
- status: KO
- id: rweb-print-css
- description: Un CSS d'impression doit être mis en place pour masquer les éléments inutiles lors de l'impression. [Voir RWEB_0031](https://rweb.greenit.fr/fr/fiches/RWEB_0031-fournir-une-css-print)

##### [OK] RWEB_0032 - Limiter les familles de polices (≤ 2)
0 famille de police externe
- status: OK
- id: rweb-limit-fonts
- description: Réduisez le nombre de familles de polices externes chargées. [Voir RWEB_0032](https://rweb.greenit.fr/fr/fiches/RWEB_0032-favoriser-les-polices-standards)

##### [OK] RWEB_0033 - Pas de documents embarqués
Aucun document embarqué détecté
- status: OK
- id: rweb-no-embedded-docs
- description: Évitez d'intégrer des documents (PDF, Word, etc.) directement dans le HTML. Utilisez des liens à la place. [Voir RWEB_0033](https://rweb.greenit.fr/fr/fiches/RWEB_0033-ne-pas-afficher-les-documents-a-l-interieur-des-pages)

##### [OK] RWEB_0035 - Limiter les feuilles de style CSS (≤ 7)
1 feuille(s) de style CSS
- status: OK
- id: rweb-limit-css-files
- description: Limitez le nombre de fichiers CSS à 7 ou moins pour réduire les requêtes HTTP. [Voir RWEB_0035](https://rweb.greenit.fr/fr/fiches/RWEB_0035-limiter-le-nombre-de-css)

##### [KO] RWEB_0036 - Des fichiers CSS volumineux sans ciblage média ont été détectés
1 grand(s) fichier(s) CSS sans ciblage média
- status: KO
- id: rweb-css-splitting
- description: Découpez les gros fichiers CSS par type de média (impression, mobile…) pour que seuls les styles pertinents soient analysés. [Voir RWEB_0036](https://rweb.greenit.fr/fr/fiches/RWEB_0036-decouper-les-css)
<details>
<summary>Details de l'audit</summary>

| URL CSS |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Préférer CSS aux images pour les éléments d'interface
Aucune image icône dans les boutons/liens détectée
- status: OK
- id: rweb-prefer-css
- description: Remplacez les icônes bitmap ou SVG dans les boutons et liens par des formes CSS ou des polices d'icônes pour réduire les requêtes HTTP. [Voir RWEB_0037](https://rweb.greenit.fr/fr/fiches/RWEB_0037-preferer-les-css-aux-images)

##### [OK] RWEB_0038 - Éviter les images bitmap pour les éléments d'interface
Aucune image bitmap dans des conteneurs d'interface
- status: OK
- id: rweb-no-bitmap-ui
- description: Remplacez les images bitmap (PNG/JPG/WebP) dans les en-têtes, navigations, pieds de page et boutons par du SVG ou du CSS. [Voir RWEB_0038](https://rweb.greenit.fr/fr/fiches/RWEB_0038-eviter-d-utiliser-des-images-matricielles-pour-l-interface)

##### [OK] RWEB_0042 - Minimiser les ressources inline
Aucune ressource inline
- status: OK
- id: rweb-no-inline-assets
- description: Minimisez l'utilisation de scripts et styles inline. [Voir RWEB_0042](https://rweb.greenit.fr/fr/fiches/RWEB_0042-externaliser-les-css-et-javascript)

##### [OK] RWEB_0051 - Utiliser le chargement différé pour les images
Toutes les images utilisent le chargement différé
- status: OK
- id: rweb-lazy-loading
- description: Ajoutez loading="lazy" aux images sous la ligne de flottaison pour différer leur téléchargement. [Voir RWEB_0051](https://rweb.greenit.fr/fr/fiches/RWEB_0051-utiliser-le-chargement-paresseux)

##### [OK] RWEB_0055 - Éviter les éléments canvas
Aucun élément canvas
- status: OK
- id: rweb-no-canvas
- description: Minimisez l'utilisation des éléments canvas. [Voir RWEB_0055](https://rweb.greenit.fr/fr/fiches/RWEB_0055-limiter-le-recours-aux-canvas)

##### [OK] RWEB_0059 - Pas de boutons officiels de réseaux sociaux
0 requête(s) SDK de réseau social détectée(s)
- status: OK
- id: rweb-no-social-sdk
- description: Remplacez les boutons officiels des réseaux sociaux par des liens statiques pour réduire les requêtes tierces. [Voir RWEB_0059](https://rweb.greenit.fr/fr/fiches/RWEB_0059-remplacer-les-boutons-officiels-de-partage-des-reseaux-sociaux)

##### [KO] RWEB_0060 - Aucun Service Worker actif détecté
Aucun Service Worker
- status: KO
- id: rweb-service-worker
- description: Un Service Worker améliore la mise en cache et réduit les requêtes réseau. [Voir RWEB_0060](https://rweb.greenit.fr/fr/fiches/RWEB_0060-economiser-de-la-bande-passante-grace-a-un-serviceworker)

##### [OK] RWEB_0075 - Utiliser les en-têtes Cache-Control
Toutes les ressources ont un Cache-Control
- status: OK
- id: rweb-cache-control
- description: Définissez des en-têtes Cache-Control sur les ressources HTML, CSS, JS et les polices pour réduire les téléchargements répétés. [Voir RWEB_0075](https://rweb.greenit.fr/fr/fiches/RWEB_0075-ajouter-des-entetes-expires-ou-cache-control)

##### [KO] RWEB_0076 - Ressources texte non compressées
2/3 ressources texte compressées (67%)
- status: KO
- id: rweb-http-compression
- description: Activez la compression gzip/brotli pour les ressources HTML, CSS et JS. [Voir RWEB_0076](https://rweb.greenit.fr/fr/fiches/RWEB_0076-compresser-les-fichiers-css-javascript-html-et-svg)
<details>
<summary>Details de l'audit</summary>

| URL non compressée |
| --- |
| http://localhost:4173/ |

</details>

##### [OK] RWEB_0077 - Minifier les CSS et JS inline
Toutes les ressources inline semblent minifiées
- status: OK
- id: rweb-minification
- description: Minifiez les blocs de style et de script inline pour réduire le poids de la page. [Voir RWEB_0077](https://rweb.greenit.fr/fr/fiches/RWEB_0077-minifier-les-fichiers-css-javascript-html-et-svg)

##### [OK] RWEB_0078 - Combiner les fichiers CSS et JS (≤2 chacun)
1 CSS + 1 JS fichiers
- status: OK
- id: rweb-combine-assets
- description: Concaténez les fichiers CSS et JS pour réduire les requêtes HTTP. [Voir RWEB_0078](https://rweb.greenit.fr/fr/fiches/RWEB_0078-combiner-les-fichiers-css-et-javascript)

##### [OK] RWEB_0081 - Pas de cookies sur les ressources statiques
Aucune ressource statique avec en-tête Cookie
- status: OK
- id: rweb-no-cookie-on-static
- description: Évitez d'envoyer des cookies avec les ressources statiques (images, CSS, JS, polices). [Voir RWEB_0081](https://rweb.greenit.fr/fr/fiches/RWEB_0081-heberger-les-ressources-cssjs-sur-un-domaine-sans-cookie)

##### [OK] RWEB_0082 - Limiter les domaines de ressources (≤ 5)
1 domaine(s) unique(s)
- status: OK
- id: rweb-limit-domains
- description: Réduisez le nombre de domaines uniques servant les ressources de la page. [Voir RWEB_0082](https://rweb.greenit.fr/fr/fiches/RWEB_0082-limiter-le-nombre-de-domaines-servant-les-ressources)

##### [KO] RWEB_0083 - Ressources servies en HTTP/1
4 ressource(s) en HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Utilisez HTTP/2 pour bénéficier du multiplexage et de la compression des en-têtes. [Voir RWEB_0083](https://rweb.greenit.fr/fr/fiches/RWEB_0083-privilegier-http2-a-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/ |
| http://localhost:4173/assets/index-D3WXi6FD.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - En-tête HSTS manquant
En-tête HSTS absent
- status: KO
- id: rweb-hsts
- description: Activez l'en-tête HSTS (HTTP Strict-Transport-Security) pour imposer HTTPS. [Voir RWEB_0084](https://rweb.greenit.fr/fr/fiches/RWEB_0084-favoriser-hsts-preload-list-aux-redirections-301)

##### [OK] RWEB_0099 - Éviter l'utilisation de GIFs
Aucun GIF détecté
- status: OK
- id: rweb-no-gif
- description: Évitez d'utiliser des GIFs pour les animations ou images ; utilisez des formats modernes à la place. [Voir RWEB_0099](https://rweb.greenit.fr/fr/fiches/RWEB_0099-limiter-l-utilisation-des-gifs-animes)

##### [OK] RWEB_0100 - Optimiser les fichiers SVG
Tous les fichiers SVG semblent optimisés
- status: OK
- id: rweb-optimize-svg
- description: Les fichiers SVG de plus de 2048 octets contiennent probablement des métadonnées ou commentaires qui peuvent être supprimés. [Voir RWEB_0100](https://rweb.greenit.fr/fr/fiches/RWEB_0100-optimiser-les-images-vectorielles)

##### [OK] RWEB_0106 - Pas de lecture automatique vidéo/audio
0 élément(s) avec lecture automatique
- status: OK
- id: rweb-no-autoplay
- description: Évitez la lecture automatique sur les éléments vidéo et audio. [Voir RWEB_0106](https://rweb.greenit.fr/fr/fiches/RWEB_0106-eviter-la-lecture-et-le-chargement-automatique-des-videos-et-des-sons)

##### [OK] RWEB_0111 - Limiter les outils analytics (≤ 1)
0 outil(s) analytics détecté(s)
- status: OK
- id: rweb-limit-analytics
- description: Limitez les outils d'analytics à un par page. [Voir RWEB_0111](https://rweb.greenit.fr/fr/fiches/RWEB_0111-limiter-les-outils-d-analytics-et-les-donnees-collectees)

##### [OK] RWEB_0112 - Éviter les redirections HTTP (≤ 1)
0 redirection(s)
- status: OK
- id: rweb-no-redirects
- description: Réduisez les redirections HTTP pour éviter des allers-retours inutiles. [Voir RWEB_0112](https://rweb.greenit.fr/fr/fiches/RWEB_0112-eviter-les-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Ne pas redimensionner les images dans le navigateur
Trouvé 0 image(s) redimensionnée(s)
- status: OK
- id: bp-badly-sized-images
- description: Ne redimensionnez pas les images via les attributs HTML height et width. Cela envoie les images dans leur taille originale, gaspillant bande passante et puissance de calcul. Redimensionnez les images avec un logiciel tel que Photoshop plutôt qu'en HTML.

##### [OK] Taille des cookies ≤ 512 octets
Aucun en-tête Cookie ne dépasse 512 octets
- status: OK
- id: bp-cookie-size
- description: Maintenez les en-têtes de requête Cookie sous 512 octets pour réduire la surcharge HTTP.

##### [OK] Éviter les erreurs de requêtes HTTP (4xx/5xx)
Aucune erreur HTTP
- status: OK
- id: bp-no-http-errors
- description: Corrigez les ressources cassées (404, 500…) pour éviter une charge réseau inutile et améliorer l'expérience utilisateur.

##### [OK] Éviter l'API d'écriture DOM dans les scripts inline
Aucun appel à l'API d'écriture DOM détecté
- status: OK
- id: bp-no-document-write
- description: L'utilisation de l'API DOM d'écriture dépréciée bloque l'analyse HTML et force un re-parsing complet. Remplacez-la par des méthodes modernes (ex: element.insertAdjacentHTML ou appendChild).

##### [OK] Éviter de télécharger des images non affichées
Aucune image masquée téléchargée
- status: OK
- id: bp-no-hidden-images
- description: Les images téléchargées mais masquées gaspillent de la bande passante. Utilisez le chargement différé ou supprimez-les.

##### [OK] Aucune erreur JavaScript à l'exécution dans la console
Aucune erreur JavaScript à l'exécution
- status: OK
- id: bp-no-js-errors
- description: Corrigez les erreurs JavaScript détectées à l'exécution. Il s'agit d'appels à console.error() enregistrés pendant le chargement de la page, indiquant des fonctionnalités cassées. Contrairement à l'analyse statique (RWEB_0043), cette vérification ne couvre pas les problèmes de style de code ou de syntaxe.

##### [OK] Ne pas utiliser de plugins navigateur (Flash, Silverlight, Java)
Aucun plugin navigateur détecté
- status: OK
- id: bp-no-plugins
- description: Supprimez les éléments Flash, Silverlight et Java applet — ces plugins sont obsolètes, non sécurisés et non supportés.

##### [KO] Scripts externes bloquants le rendu détectés
1 script(s) externe(s) bloquant(s) le rendu
- status: KO
- id: bp-no-unused-code
- description: Ajoutez async ou defer aux scripts externes pour éviter de bloquer le chemin de rendu critique. Les scripts bloquants retardent l'affichage de la page et augmentent inutilement la consommation CPU.
<details>
<summary>Details de l'audit</summary>

| URL du script |
| --- |
| /assets/index-D3WXi6FD.js |

</details>

### Page : http://localhost:4173/3

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Éléments animés détectés
2 élément(s) animé(s) trouvé(s)
- status: KO
- id: rweb-no-animations
- description: Évitez les animations et transitions pour réduire l'utilisation du CPU et la consommation de batterie. [Voir RWEB_0009](https://rweb.greenit.fr/fr/fiches/RWEB_0009-eviter-les-animations-javascript-css)
<details>
<summary>Details de l'audit</summary>

| Élément | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Éviter les carrousels
Aucune bibliothèque de carrousel détectée
- status: OK
- id: rweb-no-carousel
- description: Évitez d'utiliser des bibliothèques de carrousels/sliders quand c'est possible. [Voir RWEB_0010](https://rweb.greenit.fr/fr/fiches/RWEB_0010-limiter-le-recours-aux-carrousels)

##### [KO] RWEB_0011 - Titre ou meta description manquant
Titre ou meta description manquant
- status: KO
- id: rweb-title-meta
- description: Assurez-vous que la page possède un titre et une meta description non vides. [Voir RWEB_0011](https://rweb.greenit.fr/fr/fiches/RWEB_0011-avoir-un-titre-de-page-et-une-metadescription-pertinents-avec-le-contenu-de-la-page)

##### [KO] RWEB_0031 - Aucun CSS d'impression implémenté.
Nombre de CSS d'impression : 0
- status: KO
- id: rweb-print-css
- description: Un CSS d'impression doit être mis en place pour masquer les éléments inutiles lors de l'impression. [Voir RWEB_0031](https://rweb.greenit.fr/fr/fiches/RWEB_0031-fournir-une-css-print)

##### [OK] RWEB_0032 - Limiter les familles de polices (≤ 2)
0 famille de police externe
- status: OK
- id: rweb-limit-fonts
- description: Réduisez le nombre de familles de polices externes chargées. [Voir RWEB_0032](https://rweb.greenit.fr/fr/fiches/RWEB_0032-favoriser-les-polices-standards)

##### [OK] RWEB_0033 - Pas de documents embarqués
Aucun document embarqué détecté
- status: OK
- id: rweb-no-embedded-docs
- description: Évitez d'intégrer des documents (PDF, Word, etc.) directement dans le HTML. Utilisez des liens à la place. [Voir RWEB_0033](https://rweb.greenit.fr/fr/fiches/RWEB_0033-ne-pas-afficher-les-documents-a-l-interieur-des-pages)

##### [OK] RWEB_0035 - Limiter les feuilles de style CSS (≤ 7)
1 feuille(s) de style CSS
- status: OK
- id: rweb-limit-css-files
- description: Limitez le nombre de fichiers CSS à 7 ou moins pour réduire les requêtes HTTP. [Voir RWEB_0035](https://rweb.greenit.fr/fr/fiches/RWEB_0035-limiter-le-nombre-de-css)

##### [KO] RWEB_0036 - Des fichiers CSS volumineux sans ciblage média ont été détectés
1 grand(s) fichier(s) CSS sans ciblage média
- status: KO
- id: rweb-css-splitting
- description: Découpez les gros fichiers CSS par type de média (impression, mobile…) pour que seuls les styles pertinents soient analysés. [Voir RWEB_0036](https://rweb.greenit.fr/fr/fiches/RWEB_0036-decouper-les-css)
<details>
<summary>Details de l'audit</summary>

| URL CSS |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Préférer CSS aux images pour les éléments d'interface
Aucune image icône dans les boutons/liens détectée
- status: OK
- id: rweb-prefer-css
- description: Remplacez les icônes bitmap ou SVG dans les boutons et liens par des formes CSS ou des polices d'icônes pour réduire les requêtes HTTP. [Voir RWEB_0037](https://rweb.greenit.fr/fr/fiches/RWEB_0037-preferer-les-css-aux-images)

##### [OK] RWEB_0038 - Éviter les images bitmap pour les éléments d'interface
Aucune image bitmap dans des conteneurs d'interface
- status: OK
- id: rweb-no-bitmap-ui
- description: Remplacez les images bitmap (PNG/JPG/WebP) dans les en-têtes, navigations, pieds de page et boutons par du SVG ou du CSS. [Voir RWEB_0038](https://rweb.greenit.fr/fr/fiches/RWEB_0038-eviter-d-utiliser-des-images-matricielles-pour-l-interface)

##### [OK] RWEB_0042 - Minimiser les ressources inline
Aucune ressource inline
- status: OK
- id: rweb-no-inline-assets
- description: Minimisez l'utilisation de scripts et styles inline. [Voir RWEB_0042](https://rweb.greenit.fr/fr/fiches/RWEB_0042-externaliser-les-css-et-javascript)

##### [OK] RWEB_0051 - Utiliser le chargement différé pour les images
Toutes les images utilisent le chargement différé
- status: OK
- id: rweb-lazy-loading
- description: Ajoutez loading="lazy" aux images sous la ligne de flottaison pour différer leur téléchargement. [Voir RWEB_0051](https://rweb.greenit.fr/fr/fiches/RWEB_0051-utiliser-le-chargement-paresseux)

##### [OK] RWEB_0055 - Éviter les éléments canvas
Aucun élément canvas
- status: OK
- id: rweb-no-canvas
- description: Minimisez l'utilisation des éléments canvas. [Voir RWEB_0055](https://rweb.greenit.fr/fr/fiches/RWEB_0055-limiter-le-recours-aux-canvas)

##### [OK] RWEB_0059 - Pas de boutons officiels de réseaux sociaux
0 requête(s) SDK de réseau social détectée(s)
- status: OK
- id: rweb-no-social-sdk
- description: Remplacez les boutons officiels des réseaux sociaux par des liens statiques pour réduire les requêtes tierces. [Voir RWEB_0059](https://rweb.greenit.fr/fr/fiches/RWEB_0059-remplacer-les-boutons-officiels-de-partage-des-reseaux-sociaux)

##### [KO] RWEB_0060 - Aucun Service Worker actif détecté
Aucun Service Worker
- status: KO
- id: rweb-service-worker
- description: Un Service Worker améliore la mise en cache et réduit les requêtes réseau. [Voir RWEB_0060](https://rweb.greenit.fr/fr/fiches/RWEB_0060-economiser-de-la-bande-passante-grace-a-un-serviceworker)

##### [OK] RWEB_0075 - Utiliser les en-têtes Cache-Control
Toutes les ressources ont un Cache-Control
- status: OK
- id: rweb-cache-control
- description: Définissez des en-têtes Cache-Control sur les ressources HTML, CSS, JS et les polices pour réduire les téléchargements répétés. [Voir RWEB_0075](https://rweb.greenit.fr/fr/fiches/RWEB_0075-ajouter-des-entetes-expires-ou-cache-control)

##### [KO] RWEB_0076 - Ressources texte non compressées
2/3 ressources texte compressées (67%)
- status: KO
- id: rweb-http-compression
- description: Activez la compression gzip/brotli pour les ressources HTML, CSS et JS. [Voir RWEB_0076](https://rweb.greenit.fr/fr/fiches/RWEB_0076-compresser-les-fichiers-css-javascript-html-et-svg)
<details>
<summary>Details de l'audit</summary>

| URL non compressée |
| --- |
| http://localhost:4173/3 |

</details>

##### [OK] RWEB_0077 - Minifier les CSS et JS inline
Toutes les ressources inline semblent minifiées
- status: OK
- id: rweb-minification
- description: Minifiez les blocs de style et de script inline pour réduire le poids de la page. [Voir RWEB_0077](https://rweb.greenit.fr/fr/fiches/RWEB_0077-minifier-les-fichiers-css-javascript-html-et-svg)

##### [OK] RWEB_0078 - Combiner les fichiers CSS et JS (≤2 chacun)
1 CSS + 1 JS fichiers
- status: OK
- id: rweb-combine-assets
- description: Concaténez les fichiers CSS et JS pour réduire les requêtes HTTP. [Voir RWEB_0078](https://rweb.greenit.fr/fr/fiches/RWEB_0078-combiner-les-fichiers-css-et-javascript)

##### [OK] RWEB_0081 - Pas de cookies sur les ressources statiques
Aucune ressource statique avec en-tête Cookie
- status: OK
- id: rweb-no-cookie-on-static
- description: Évitez d'envoyer des cookies avec les ressources statiques (images, CSS, JS, polices). [Voir RWEB_0081](https://rweb.greenit.fr/fr/fiches/RWEB_0081-heberger-les-ressources-cssjs-sur-un-domaine-sans-cookie)

##### [OK] RWEB_0082 - Limiter les domaines de ressources (≤ 5)
1 domaine(s) unique(s)
- status: OK
- id: rweb-limit-domains
- description: Réduisez le nombre de domaines uniques servant les ressources de la page. [Voir RWEB_0082](https://rweb.greenit.fr/fr/fiches/RWEB_0082-limiter-le-nombre-de-domaines-servant-les-ressources)

##### [KO] RWEB_0083 - Ressources servies en HTTP/1
4 ressource(s) en HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Utilisez HTTP/2 pour bénéficier du multiplexage et de la compression des en-têtes. [Voir RWEB_0083](https://rweb.greenit.fr/fr/fiches/RWEB_0083-privilegier-http2-a-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/3 |
| http://localhost:4173/assets/index-D3WXi6FD.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - En-tête HSTS manquant
En-tête HSTS absent
- status: KO
- id: rweb-hsts
- description: Activez l'en-tête HSTS (HTTP Strict-Transport-Security) pour imposer HTTPS. [Voir RWEB_0084](https://rweb.greenit.fr/fr/fiches/RWEB_0084-favoriser-hsts-preload-list-aux-redirections-301)

##### [OK] RWEB_0099 - Éviter l'utilisation de GIFs
Aucun GIF détecté
- status: OK
- id: rweb-no-gif
- description: Évitez d'utiliser des GIFs pour les animations ou images ; utilisez des formats modernes à la place. [Voir RWEB_0099](https://rweb.greenit.fr/fr/fiches/RWEB_0099-limiter-l-utilisation-des-gifs-animes)

##### [OK] RWEB_0100 - Optimiser les fichiers SVG
Tous les fichiers SVG semblent optimisés
- status: OK
- id: rweb-optimize-svg
- description: Les fichiers SVG de plus de 2048 octets contiennent probablement des métadonnées ou commentaires qui peuvent être supprimés. [Voir RWEB_0100](https://rweb.greenit.fr/fr/fiches/RWEB_0100-optimiser-les-images-vectorielles)

##### [OK] RWEB_0106 - Pas de lecture automatique vidéo/audio
0 élément(s) avec lecture automatique
- status: OK
- id: rweb-no-autoplay
- description: Évitez la lecture automatique sur les éléments vidéo et audio. [Voir RWEB_0106](https://rweb.greenit.fr/fr/fiches/RWEB_0106-eviter-la-lecture-et-le-chargement-automatique-des-videos-et-des-sons)

##### [OK] RWEB_0111 - Limiter les outils analytics (≤ 1)
0 outil(s) analytics détecté(s)
- status: OK
- id: rweb-limit-analytics
- description: Limitez les outils d'analytics à un par page. [Voir RWEB_0111](https://rweb.greenit.fr/fr/fiches/RWEB_0111-limiter-les-outils-d-analytics-et-les-donnees-collectees)

##### [OK] RWEB_0112 - Éviter les redirections HTTP (≤ 1)
0 redirection(s)
- status: OK
- id: rweb-no-redirects
- description: Réduisez les redirections HTTP pour éviter des allers-retours inutiles. [Voir RWEB_0112](https://rweb.greenit.fr/fr/fiches/RWEB_0112-eviter-les-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Ne pas redimensionner les images dans le navigateur
Trouvé 0 image(s) redimensionnée(s)
- status: OK
- id: bp-badly-sized-images
- description: Ne redimensionnez pas les images via les attributs HTML height et width. Cela envoie les images dans leur taille originale, gaspillant bande passante et puissance de calcul. Redimensionnez les images avec un logiciel tel que Photoshop plutôt qu'en HTML.

##### [OK] Taille des cookies ≤ 512 octets
Aucun en-tête Cookie ne dépasse 512 octets
- status: OK
- id: bp-cookie-size
- description: Maintenez les en-têtes de requête Cookie sous 512 octets pour réduire la surcharge HTTP.

##### [OK] Éviter les erreurs de requêtes HTTP (4xx/5xx)
Aucune erreur HTTP
- status: OK
- id: bp-no-http-errors
- description: Corrigez les ressources cassées (404, 500…) pour éviter une charge réseau inutile et améliorer l'expérience utilisateur.

##### [OK] Éviter l'API d'écriture DOM dans les scripts inline
Aucun appel à l'API d'écriture DOM détecté
- status: OK
- id: bp-no-document-write
- description: L'utilisation de l'API DOM d'écriture dépréciée bloque l'analyse HTML et force un re-parsing complet. Remplacez-la par des méthodes modernes (ex: element.insertAdjacentHTML ou appendChild).

##### [OK] Éviter de télécharger des images non affichées
Aucune image masquée téléchargée
- status: OK
- id: bp-no-hidden-images
- description: Les images téléchargées mais masquées gaspillent de la bande passante. Utilisez le chargement différé ou supprimez-les.

##### [OK] Aucune erreur JavaScript à l'exécution dans la console
Aucune erreur JavaScript à l'exécution
- status: OK
- id: bp-no-js-errors
- description: Corrigez les erreurs JavaScript détectées à l'exécution. Il s'agit d'appels à console.error() enregistrés pendant le chargement de la page, indiquant des fonctionnalités cassées. Contrairement à l'analyse statique (RWEB_0043), cette vérification ne couvre pas les problèmes de style de code ou de syntaxe.

##### [OK] Ne pas utiliser de plugins navigateur (Flash, Silverlight, Java)
Aucun plugin navigateur détecté
- status: OK
- id: bp-no-plugins
- description: Supprimez les éléments Flash, Silverlight et Java applet — ces plugins sont obsolètes, non sécurisés et non supportés.

##### [KO] Scripts externes bloquants le rendu détectés
1 script(s) externe(s) bloquant(s) le rendu
- status: KO
- id: bp-no-unused-code
- description: Ajoutez async ou defer aux scripts externes pour éviter de bloquer le chemin de rendu critique. Les scripts bloquants retardent l'affichage de la page et augmentent inutilement la consommation CPU.
<details>
<summary>Details de l'audit</summary>

| URL du script |
| --- |
| /assets/index-D3WXi6FD.js |

</details>

### Page : http://localhost:4173/7

#### Bonnes pratiques RWEB

##### [KO] RWEB_0009 - Éléments animés détectés
2 élément(s) animé(s) trouvé(s)
- status: KO
- id: rweb-no-animations
- description: Évitez les animations et transitions pour réduire l'utilisation du CPU et la consommation de batterie. [Voir RWEB_0009](https://rweb.greenit.fr/fr/fiches/RWEB_0009-eviter-les-animations-javascript-css)
<details>
<summary>Details de l'audit</summary>

| Élément | Property |
| --- | --- |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |
| a | transition: background-color, color, text-decoration, box-shadow, -webkit-text-decoration |

</details>

##### [OK] RWEB_0010 - Éviter les carrousels
Aucune bibliothèque de carrousel détectée
- status: OK
- id: rweb-no-carousel
- description: Évitez d'utiliser des bibliothèques de carrousels/sliders quand c'est possible. [Voir RWEB_0010](https://rweb.greenit.fr/fr/fiches/RWEB_0010-limiter-le-recours-aux-carrousels)

##### [KO] RWEB_0011 - Titre ou meta description manquant
Titre ou meta description manquant
- status: KO
- id: rweb-title-meta
- description: Assurez-vous que la page possède un titre et une meta description non vides. [Voir RWEB_0011](https://rweb.greenit.fr/fr/fiches/RWEB_0011-avoir-un-titre-de-page-et-une-metadescription-pertinents-avec-le-contenu-de-la-page)

##### [KO] RWEB_0031 - Aucun CSS d'impression implémenté.
Nombre de CSS d'impression : 0
- status: KO
- id: rweb-print-css
- description: Un CSS d'impression doit être mis en place pour masquer les éléments inutiles lors de l'impression. [Voir RWEB_0031](https://rweb.greenit.fr/fr/fiches/RWEB_0031-fournir-une-css-print)

##### [OK] RWEB_0032 - Limiter les familles de polices (≤ 2)
0 famille de police externe
- status: OK
- id: rweb-limit-fonts
- description: Réduisez le nombre de familles de polices externes chargées. [Voir RWEB_0032](https://rweb.greenit.fr/fr/fiches/RWEB_0032-favoriser-les-polices-standards)

##### [OK] RWEB_0033 - Pas de documents embarqués
Aucun document embarqué détecté
- status: OK
- id: rweb-no-embedded-docs
- description: Évitez d'intégrer des documents (PDF, Word, etc.) directement dans le HTML. Utilisez des liens à la place. [Voir RWEB_0033](https://rweb.greenit.fr/fr/fiches/RWEB_0033-ne-pas-afficher-les-documents-a-l-interieur-des-pages)

##### [OK] RWEB_0035 - Limiter les feuilles de style CSS (≤ 7)
1 feuille(s) de style CSS
- status: OK
- id: rweb-limit-css-files
- description: Limitez le nombre de fichiers CSS à 7 ou moins pour réduire les requêtes HTTP. [Voir RWEB_0035](https://rweb.greenit.fr/fr/fiches/RWEB_0035-limiter-le-nombre-de-css)

##### [KO] RWEB_0036 - Des fichiers CSS volumineux sans ciblage média ont été détectés
1 grand(s) fichier(s) CSS sans ciblage média
- status: KO
- id: rweb-css-splitting
- description: Découpez les gros fichiers CSS par type de média (impression, mobile…) pour que seuls les styles pertinents soient analysés. [Voir RWEB_0036](https://rweb.greenit.fr/fr/fiches/RWEB_0036-decouper-les-css)
<details>
<summary>Details de l'audit</summary>

| URL CSS |
| --- |
| http://localhost:4173/assets/index-CJa6g-Pc.css |

</details>

##### [OK] RWEB_0037 - Préférer CSS aux images pour les éléments d'interface
Aucune image icône dans les boutons/liens détectée
- status: OK
- id: rweb-prefer-css
- description: Remplacez les icônes bitmap ou SVG dans les boutons et liens par des formes CSS ou des polices d'icônes pour réduire les requêtes HTTP. [Voir RWEB_0037](https://rweb.greenit.fr/fr/fiches/RWEB_0037-preferer-les-css-aux-images)

##### [OK] RWEB_0038 - Éviter les images bitmap pour les éléments d'interface
Aucune image bitmap dans des conteneurs d'interface
- status: OK
- id: rweb-no-bitmap-ui
- description: Remplacez les images bitmap (PNG/JPG/WebP) dans les en-têtes, navigations, pieds de page et boutons par du SVG ou du CSS. [Voir RWEB_0038](https://rweb.greenit.fr/fr/fiches/RWEB_0038-eviter-d-utiliser-des-images-matricielles-pour-l-interface)

##### [OK] RWEB_0042 - Minimiser les ressources inline
Aucune ressource inline
- status: OK
- id: rweb-no-inline-assets
- description: Minimisez l'utilisation de scripts et styles inline. [Voir RWEB_0042](https://rweb.greenit.fr/fr/fiches/RWEB_0042-externaliser-les-css-et-javascript)

##### [OK] RWEB_0051 - Utiliser le chargement différé pour les images
Toutes les images utilisent le chargement différé
- status: OK
- id: rweb-lazy-loading
- description: Ajoutez loading="lazy" aux images sous la ligne de flottaison pour différer leur téléchargement. [Voir RWEB_0051](https://rweb.greenit.fr/fr/fiches/RWEB_0051-utiliser-le-chargement-paresseux)

##### [OK] RWEB_0055 - Éviter les éléments canvas
Aucun élément canvas
- status: OK
- id: rweb-no-canvas
- description: Minimisez l'utilisation des éléments canvas. [Voir RWEB_0055](https://rweb.greenit.fr/fr/fiches/RWEB_0055-limiter-le-recours-aux-canvas)

##### [OK] RWEB_0059 - Pas de boutons officiels de réseaux sociaux
0 requête(s) SDK de réseau social détectée(s)
- status: OK
- id: rweb-no-social-sdk
- description: Remplacez les boutons officiels des réseaux sociaux par des liens statiques pour réduire les requêtes tierces. [Voir RWEB_0059](https://rweb.greenit.fr/fr/fiches/RWEB_0059-remplacer-les-boutons-officiels-de-partage-des-reseaux-sociaux)

##### [KO] RWEB_0060 - Aucun Service Worker actif détecté
Aucun Service Worker
- status: KO
- id: rweb-service-worker
- description: Un Service Worker améliore la mise en cache et réduit les requêtes réseau. [Voir RWEB_0060](https://rweb.greenit.fr/fr/fiches/RWEB_0060-economiser-de-la-bande-passante-grace-a-un-serviceworker)

##### [OK] RWEB_0075 - Utiliser les en-têtes Cache-Control
Toutes les ressources ont un Cache-Control
- status: OK
- id: rweb-cache-control
- description: Définissez des en-têtes Cache-Control sur les ressources HTML, CSS, JS et les polices pour réduire les téléchargements répétés. [Voir RWEB_0075](https://rweb.greenit.fr/fr/fiches/RWEB_0075-ajouter-des-entetes-expires-ou-cache-control)

##### [KO] RWEB_0076 - Ressources texte non compressées
2/3 ressources texte compressées (67%)
- status: KO
- id: rweb-http-compression
- description: Activez la compression gzip/brotli pour les ressources HTML, CSS et JS. [Voir RWEB_0076](https://rweb.greenit.fr/fr/fiches/RWEB_0076-compresser-les-fichiers-css-javascript-html-et-svg)
<details>
<summary>Details de l'audit</summary>

| URL non compressée |
| --- |
| http://localhost:4173/7 |

</details>

##### [OK] RWEB_0077 - Minifier les CSS et JS inline
Toutes les ressources inline semblent minifiées
- status: OK
- id: rweb-minification
- description: Minifiez les blocs de style et de script inline pour réduire le poids de la page. [Voir RWEB_0077](https://rweb.greenit.fr/fr/fiches/RWEB_0077-minifier-les-fichiers-css-javascript-html-et-svg)

##### [OK] RWEB_0078 - Combiner les fichiers CSS et JS (≤2 chacun)
1 CSS + 1 JS fichiers
- status: OK
- id: rweb-combine-assets
- description: Concaténez les fichiers CSS et JS pour réduire les requêtes HTTP. [Voir RWEB_0078](https://rweb.greenit.fr/fr/fiches/RWEB_0078-combiner-les-fichiers-css-et-javascript)

##### [OK] RWEB_0081 - Pas de cookies sur les ressources statiques
Aucune ressource statique avec en-tête Cookie
- status: OK
- id: rweb-no-cookie-on-static
- description: Évitez d'envoyer des cookies avec les ressources statiques (images, CSS, JS, polices). [Voir RWEB_0081](https://rweb.greenit.fr/fr/fiches/RWEB_0081-heberger-les-ressources-cssjs-sur-un-domaine-sans-cookie)

##### [OK] RWEB_0082 - Limiter les domaines de ressources (≤ 5)
1 domaine(s) unique(s)
- status: OK
- id: rweb-limit-domains
- description: Réduisez le nombre de domaines uniques servant les ressources de la page. [Voir RWEB_0082](https://rweb.greenit.fr/fr/fiches/RWEB_0082-limiter-le-nombre-de-domaines-servant-les-ressources)

##### [KO] RWEB_0083 - Ressources servies en HTTP/1
4 ressource(s) en HTTP/1
- status: KO
- id: rweb-uses-http2
- description: Utilisez HTTP/2 pour bénéficier du multiplexage et de la compression des en-têtes. [Voir RWEB_0083](https://rweb.greenit.fr/fr/fiches/RWEB_0083-privilegier-http2-a-http1)
<details>
<summary>Details de l'audit</summary>

| URL |
| --- |
| http://localhost:4173/7 |
| http://localhost:4173/assets/index-D3WXi6FD.js |
| http://localhost:4173/assets/index-CJa6g-Pc.css |
| http://localhost:4173/sample_data.json |

</details>

##### [KO] RWEB_0084 - En-tête HSTS manquant
En-tête HSTS absent
- status: KO
- id: rweb-hsts
- description: Activez l'en-tête HSTS (HTTP Strict-Transport-Security) pour imposer HTTPS. [Voir RWEB_0084](https://rweb.greenit.fr/fr/fiches/RWEB_0084-favoriser-hsts-preload-list-aux-redirections-301)

##### [OK] RWEB_0099 - Éviter l'utilisation de GIFs
Aucun GIF détecté
- status: OK
- id: rweb-no-gif
- description: Évitez d'utiliser des GIFs pour les animations ou images ; utilisez des formats modernes à la place. [Voir RWEB_0099](https://rweb.greenit.fr/fr/fiches/RWEB_0099-limiter-l-utilisation-des-gifs-animes)

##### [OK] RWEB_0100 - Optimiser les fichiers SVG
Tous les fichiers SVG semblent optimisés
- status: OK
- id: rweb-optimize-svg
- description: Les fichiers SVG de plus de 2048 octets contiennent probablement des métadonnées ou commentaires qui peuvent être supprimés. [Voir RWEB_0100](https://rweb.greenit.fr/fr/fiches/RWEB_0100-optimiser-les-images-vectorielles)

##### [OK] RWEB_0106 - Pas de lecture automatique vidéo/audio
0 élément(s) avec lecture automatique
- status: OK
- id: rweb-no-autoplay
- description: Évitez la lecture automatique sur les éléments vidéo et audio. [Voir RWEB_0106](https://rweb.greenit.fr/fr/fiches/RWEB_0106-eviter-la-lecture-et-le-chargement-automatique-des-videos-et-des-sons)

##### [OK] RWEB_0111 - Limiter les outils analytics (≤ 1)
0 outil(s) analytics détecté(s)
- status: OK
- id: rweb-limit-analytics
- description: Limitez les outils d'analytics à un par page. [Voir RWEB_0111](https://rweb.greenit.fr/fr/fiches/RWEB_0111-limiter-les-outils-d-analytics-et-les-donnees-collectees)

##### [OK] RWEB_0112 - Éviter les redirections HTTP (≤ 1)
0 redirection(s)
- status: OK
- id: rweb-no-redirects
- description: Réduisez les redirections HTTP pour éviter des allers-retours inutiles. [Voir RWEB_0112](https://rweb.greenit.fr/fr/fiches/RWEB_0112-eviter-les-redirections)

#### Bonnes pratiques generiques d'ecoconception

##### [OK] Ne pas redimensionner les images dans le navigateur
Trouvé 0 image(s) redimensionnée(s)
- status: OK
- id: bp-badly-sized-images
- description: Ne redimensionnez pas les images via les attributs HTML height et width. Cela envoie les images dans leur taille originale, gaspillant bande passante et puissance de calcul. Redimensionnez les images avec un logiciel tel que Photoshop plutôt qu'en HTML.

##### [OK] Taille des cookies ≤ 512 octets
Aucun en-tête Cookie ne dépasse 512 octets
- status: OK
- id: bp-cookie-size
- description: Maintenez les en-têtes de requête Cookie sous 512 octets pour réduire la surcharge HTTP.

##### [OK] Éviter les erreurs de requêtes HTTP (4xx/5xx)
Aucune erreur HTTP
- status: OK
- id: bp-no-http-errors
- description: Corrigez les ressources cassées (404, 500…) pour éviter une charge réseau inutile et améliorer l'expérience utilisateur.

##### [OK] Éviter l'API d'écriture DOM dans les scripts inline
Aucun appel à l'API d'écriture DOM détecté
- status: OK
- id: bp-no-document-write
- description: L'utilisation de l'API DOM d'écriture dépréciée bloque l'analyse HTML et force un re-parsing complet. Remplacez-la par des méthodes modernes (ex: element.insertAdjacentHTML ou appendChild).

##### [OK] Éviter de télécharger des images non affichées
Aucune image masquée téléchargée
- status: OK
- id: bp-no-hidden-images
- description: Les images téléchargées mais masquées gaspillent de la bande passante. Utilisez le chargement différé ou supprimez-les.

##### [OK] Aucune erreur JavaScript à l'exécution dans la console
Aucune erreur JavaScript à l'exécution
- status: OK
- id: bp-no-js-errors
- description: Corrigez les erreurs JavaScript détectées à l'exécution. Il s'agit d'appels à console.error() enregistrés pendant le chargement de la page, indiquant des fonctionnalités cassées. Contrairement à l'analyse statique (RWEB_0043), cette vérification ne couvre pas les problèmes de style de code ou de syntaxe.

##### [OK] Ne pas utiliser de plugins navigateur (Flash, Silverlight, Java)
Aucun plugin navigateur détecté
- status: OK
- id: bp-no-plugins
- description: Supprimez les éléments Flash, Silverlight et Java applet — ces plugins sont obsolètes, non sécurisés et non supportés.

##### [KO] Scripts externes bloquants le rendu détectés
1 script(s) externe(s) bloquant(s) le rendu
- status: KO
- id: bp-no-unused-code
- description: Ajoutez async ou defer aux scripts externes pour éviter de bloquer le chemin de rendu critique. Les scripts bloquants retardent l'affichage de la page et augmentent inutilement la consommation CPU.
<details>
<summary>Details de l'audit</summary>

| URL du script |
| --- |
| /assets/index-D3WXi6FD.js |

</details>