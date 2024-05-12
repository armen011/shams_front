import ENTranslation from './en.json';
import enTrans from './en.json';
import ruTrans from './ru.json';
import hyTrans from './hy.json';

// const translationFiles = {
//   en: () => import('./en.json'),
//   ru: () => import('./ru.json'),
//   hy: () => import('./hy.json'),
// };

export type KeyType = keyof typeof ENTranslation;

export * from './consts';

const translationFiles = {
  en: enTrans,
  ru: ruTrans,
  hy: hyTrans,
};

export type LocaleType = keyof typeof translationFiles;

export default translationFiles;
