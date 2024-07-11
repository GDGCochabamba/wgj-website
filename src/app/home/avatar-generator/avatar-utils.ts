import { AvatarOptions, KeyAvatar } from './avatar-types';
import { getPreview } from './avatar-selector-path';

function getRandonItem(options: string[]): string {
  const size = options.length;
  const index = Math.floor(Math.random() * size);
  return options[index];
}
const paleteColors = [
  '#262E33',
  '#65C9FF',
  '#5199E4',
  '#25557C',
  '#E5E5E5',
  '#929598',
  '#3C4F5C',
  '#B1E2FF',
  '#A7FFC4',
  '#FFDEB5',
  '#FFAFB9',
  '#FFFFB1',
  '#FF488E',
  '#FF5C5C',
  '#FFFFFF',
];
const hairColors = [
  '#0e0e0e',
  '#3eac2c',
  '#6a4e35',
  '#85c2c6',
  '#796a45',
  '#562306',
  '#592454',
  '#ab2a18',
  '#ac6511',
  '#afafaf',
  '#b9a05f',
  '#cb6820',
  '#dba3be',
  '#e5d7a3',
];
const optionHair = [
  'bigHair',
  'bob',
  'bun',
  'curly',
  'curvy',
  'dreads',
  'frida',
  'froAndBand',
  'fro',
  'longButNotTooLong',
  'miaWallace',
  'shavedSides',
  'straightAndStrand',
  'straight01',
  'straight02',
  'dreads01',
  'dreads02',
  'frizzle',
  'theCaesar',
  'shaggyMullet',
  'shaggy',
  'shortCurly',
  'shortFlat',
  'shortRound',
  'sides',
  'shortWaved',
  'theCaesarAndSidePart',
  'none',
];
const optionBeard = [
  'beardLight',
  'beardMajestic',
  'beardMedium',
  'moustaceFancy',
  'none',
];
const optionMouth = [
  'concerned',
  'disbelief',
  'eating',
  'grimace',
  'sad',
  'screamOpen',
  'serious',
  'smile',
  'tongue',
  'twinkle',
  'vomit',
];
const optionEyebrows = [
  'angryNatural',
  'defaultNatural',
  'flatNatural',
  'frownNatural',
  'raisedExcitedNatural',
  'sadConcernedNatural',
  'unibrowNatural',
  'upDownNatural',
  'raisedExcited',
  'angry',
  'sadConcerned',
  'upDown',
];
const optionEyes = [
  'squint',
  'closed',
  'cry',
  'eyeRoll',
  'happy',
  'hearts',
  'side',
  'surprised',
  'wink',
  'winkWacky',
  'xDizzy',
  'default',
];
const optionGlasses = [
  'prescription01',
  'prescription02',
  'kurt',
  'round',
  'sunglasses',
  'wayfarers',
  'none',
];
const optionHat = [
  'hat',
  'eyepatch',
  'turban',
  'hijab',
  'winterHat01',
  'winterHat02',
  'none',
];
const optionClothes = [
  'blazerAndShirt',
  'blazerAndSweater',
  'collarAndSweater',
  'hoodie',
  'overall',
  'shirtCrewNeck',
  'shirtScoopNeck',
  'shirtVNeck',
  'graphicShirt',
];
const optionEarrings = [
  'skullOutline',
  'skull',
  'resist',
  'pizza',
  'hola',
  'diamond',
  'deer',
  'cumbia',
  'bear',
  'bat',
  'wtm',
  'angular',
  'gdg',
  'gp4',
  'techkids',
  'scesi',
  'makerHouse',
  'adaData',
  'mujeresTics',
  'none',
];
const optionsBody = ['light', 'brown', 'darkBrown', 'black'];
const optionNutria = [
  'nutria1',
  // 'nutria2',
  'none',
];
const hairColor = getRandonItem(hairColors);
export const avatarOptions: AvatarOptions = {
  body: {
    currentValue: getRandonItem(optionsBody),
    options: optionsBody,
    name: 'cuerpo',
    type: 'body',
  },
  beard: {
    color: hairColor,
    currentValue: 'none',
    options: optionBeard,
    name: 'decorativo',
    type: 'beard',
  },
  mouth: {
    currentValue: getRandonItem(optionMouth),
    options: optionMouth,
    name: 'boca',
    type: 'mouth',
  },
  eyebrows: {
    color: hairColor,
    currentValue: getRandonItem(optionEyebrows),
    options: optionEyebrows,
    name: 'cejas',
    type: 'eyebrows',
  },
  eyes: {
    color: '#1c1c1c',
    currentValue: getRandonItem(optionEyes),
    options: optionEyes,
    name: 'ojos',
    type: 'eyes',
  },
  glasses: {
    color: getRandonItem(paleteColors),
    currentValue: getRandonItem(optionGlasses),
    options: optionGlasses,
    name: 'lentes',
    type: 'glasses',
  },
  // clothes: {
  //   color: getRandonItem(paleteColors),
  //   currentValue: getRandonItem(optionClothes),
  //   options: optionClothes,
  //   name: 'ropa',
  //   type: 'clothes',
  // },
  // earrings: {
  //   color: getRandonItem(paleteColors),
  //   currentValue: 'none',
  //   options: optionEarrings,
  //   name: 'sello',
  //   type: 'earrings',
  // },
  hair: {
    color: hairColor,
    currentValue: getRandonItem(optionHair),
    options: optionHair,
    name: 'cabello',
    type: 'hair',
  },
  hat: {
    color: getRandonItem(paleteColors),
    currentValue: 'none',
    options: optionHat,
    name: 'aretes',
    type: 'hat',
  },
  // nutria: {
  //   currentValue: 'none',
  //   options: optionNutria,
  //   name: 'nutria',
  //   type: 'nutria',
  // },
};

export function buildAvatar(avatar: AvatarOptions): string {
  let svg = '';
  svg = Object.keys(avatar)
    .map((key: string) =>
      getPreview(
        key,
        avatar[key as KeyAvatar].currentValue,
        avatar[key as KeyAvatar].color!,
      ),
    )
    .join();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 762 762" fill="none" shape-rendering="auto"><metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:rdf><rdf:description><dc:title>Adventurer</dc:title><dc:creator>Lisa Wischofsky</dc:creator><dc:source xsi:type="dcterms:URI">https://www.figma.com/community/file/1184595184137881796</dc:source><dcterms:license xsi:type="dcterms:URI">https://creativecommons.org/licenses/by/4.0/</dcterms:license><dc:rights>Remix of „Adventurer” (https://www.figma.com/community/file/1184595184137881796) by „Lisa Wischofsky”, licensed under „CC BY 4.0” (https://creativecommons.org/licenses/by/4.0/)</dc:rights></rdf:description></rdf:rdf></metadata><mask id="viewboxMask"><rect width="762" height="762" rx="0" ry="0" x="0" y="0" fill="#fff"></rect></mask>
    ${svg}
  </svg>`;
}
