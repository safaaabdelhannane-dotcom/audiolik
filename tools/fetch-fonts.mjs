/**
 * Re-télécharge les woff2 depuis Google Fonts et régénère assets/fonts/fonts.css.
 * Sous-ensembles conservés : latin, latin-ext, arabic (pas de cyrillique).
 *
 *   node tools/fetch-fonts.mjs
 *
 * On auto-héberge pour deux raisons : aucune IP de visiteur ne part vers un CDN
 * (c'est un site de santé), et la connexion tierce en moins accélère le premier rendu.
 */
const CSS = 'https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700'
  + '&family=Figtree:wght@400;500;600;700'
  + '&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap';
console.log('Voir README §Polices. Source :\n  ' + CSS);
