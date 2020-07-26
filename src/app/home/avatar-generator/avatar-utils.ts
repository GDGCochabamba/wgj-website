import {AvatarOptions, KeyAvatar} from './avatar-types';
import { getPreview } from './avatar-selector-path';

export const avatarOptions: AvatarOptions = {
  body: {
    color: '#EAC393',
    currentValue: 'woman-brunet',
    options: ['woman-brunette', 'woman-afro-american', 'woman-brunet', 'woman-white',
    'men-afro-american', 'men-brunette', 'men-brunet', 'men-white'],
    name: 'rostro',
    type: 'body',
  },
  hair: {
    color: '#232626',
    currentValue: 'medium',
    options: ['long', 'short1', 'short2', 'short3', 'simpleBraid', 'doubleBraid', 'braid', 'medium', 'disaster',
    'men-short1', 'men-short2', 'men-short3', 'men-very-short', 'men-entry', 'men-disorder', 'none'],
    name: 'cabello',
    type: 'hair',
  },
  beard: {
    color: '#322F2F',
    currentValue: 'none',
    options: ['beard1', 'strong', 'none'],
    name: 'barba',
    type: 'beard',
  },
  clothes: {
    color: '#00aedb',
    currentValue: 'shirt',
    options: ['shirt', 'dress', 'dress2', 'lines', 'vshirt', 'tshirt', 'pixel', 'skullShirt', 'star-treck-shirt', 'none'],
    name: 'ropa',
    type: 'clothes',
  },
  mouth: {
    color: '#e32153',
    currentValue: 'happyLeft',
    options: ['happyLeft', 'happyRight', 'small', 'neutral', 'sad', 'sadLeft'],
    name: 'boca',
    type: 'mouth',
  },
  earrings: {
    color: '#eee8aa',
    currentValue: 'none',
    options: ['circle', 'simple', 'none'],
    name: 'aretes',
    type: 'earrings',
  },
  eyebrows: {
    color: '#232626',
    currentValue: 'up',
    options: ['up', 'tired', 'separate', 'suprised', 'long', 'angry', 'angry2', 'leftSide', 'woried'],
    name: 'cejas',
    type: 'eyebrows',
  },
  eyes: {
    color: '#5b7c8b',
    currentValue: 'anime',
    options: ['anime', 'normal', 'lookRight', 'small', 'tired', 'big', 'angry', 'right'],
    name: 'ojos',
    type: 'eyes',
  },
  glasses: {
    color: '#121212',
    currentValue: 'none',
    options: ['normal', 'heart', 'round', 'big', 'none'],
    name: 'lentes',
    type: 'glasses',
  },
  hat: {
    color: '#2663a3',
    currentValue: 'none',
    options: ['pimp', 'pimp2', 'hat', 'none'],
    name: 'sombrero',
    type: 'hat',
  },
};

export function buildAvatar(avatar: AvatarOptions): string {
  let svg = '';
  svg = Object.keys(avatar)
    .map((key: KeyAvatar) => getPreview(key, avatar[key].currentValue, avatar[key].color))
    .join();
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 20" version="1.1" shape-rendering="crispEdges">
    ${svg}
  </svg>`;
}
