/**
 * Re-vendorise les icônes Phosphor (MIT) dans src/icons.mjs sous forme de sprite
 * <symbol> inline.
 *
 *   node tools/fetch-icons.mjs
 *
 * Sprite inline plutôt que fichier externe : le <use href="autre.svg#id"> reste
 * fragile sur les anciens Safari, et cela évite une requête.
 */
export const ICONS = ['arrow-right','arrow-up','bell-ringing','calendar-check',
  'caret-down','chat-circle-text','check','clock',
  'coffee','ear','envelope-simple','faders',
  'info','lightning','map-pin','microphone-stage',
  'moon','note-pencil','path','phone',
  'plus','receipt','repeat','shield-check',
  'sun','television-simple','warning-circle','whatsapp-logo'];
console.log(`${ICONS.length} icônes · https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/<nom>.svg`);
