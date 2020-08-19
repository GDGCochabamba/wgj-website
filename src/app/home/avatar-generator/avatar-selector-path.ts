export function getHair(type: string, color: string): string {
  let hair = '';
  switch (type) {
    case 'short1':
      hair = `<path _ngcontent-ulh-c50="" xmlns="http://www.w3.org/2000/svg" d="M2 10h1V8h1V7h1V6h1V5h1V4h7v1h3V4h-1V3h-1V2H4v1H3v1H2v6z" fill=${color} />`;
      break;
    case 'simpleBraid':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M2 9v3h1v1H2v2H1v1h1v-1h1v-1h1v-1h1v-1H4v-1H3V9H2zm0-2h1V6h1V5h2V4h9v1h1v1h1v1h1V3h-1V2h-1V1H4v1H3v1H2v4z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'doubleBraid':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M2 9v3h1v1H2v2H1v1h1v-1h1v-1h1v-1h1v-1H4v-1H3V9H2zm16 0v3h-1v1h1v2h1v1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1V9h1zm-1-2h1V3h-1V2h-1V1H4v1H3v1H2v4h1V6h1V5h2V4h9v1h1v1h1v1z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'short2':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M2 9v6h2v-4H3V9H2zm0-2h2V4h12v3h2V3h-1V2H3v1H2v4zm15 2h1v6h-2v-4h1V9z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'short3':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M2 13V9h1v2h1v1h1v1H2zm15-4h1v4h-3v-1h1v-1h1V9zM2 7h1V4h1V3h1V2h10v1h1v1h1v3h1V3h-1V2h-1V1H4v1H3v1H2v4z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'medium':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M1 15h5v-2H5v-1H4v-1H3V6h2V5h2V4h1V3h6v1h1v1h1v1h1v5h-1v1h-1v1h-1v2h5V4h-1V3h-1V2h-1V1H4v1H3v1H2v1H1v11z" fill=${color} />`;
      break;
    case 'braid':
      // tslint:disable-next-line: max-line-length
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M3 4v3h1V4h2v1h1V4h1v1h1V4h7v3h1V4h1V2h-1V1h-2v1H5V1H3v1H2v2h1z" fill=${color} />`;
      break;
    case 'disaster':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M0 7h1v5h1v1h1V9h1V7h1V6h1V4h1V3h7v1h1v1h1v1h1v7h1v-2h1V7h-1V6h1V4h-1v1h-1V3h1V2h-1v1h-1V2h-2V1h-1V0h-1v1H5V0H4v1H3V0H2v1h1v2H2V2H1v1h1v1H1v2H0v1z" fill=${color} />`;
      break;
    case 'men-short1':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M2 4v1h1v1h2V4h1V2H4v1H3v1H2zm6-1h2v1h2V3h1V2H8v1zm6 1h1v2h2V5h1V4h-1V3h-1V2h-2v2z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'men-short2':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M5 2v1H4v1H3v3h2V6h1V5h6V4h1V3h1v1h-1v1h1v1h1v1h2V4h-1V3h-1V2H5z" fill=${color} />`;
      break;
    case 'men-short3':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M3 8h1V5h12v3h1V4h-1V3h-1V2H5v1H4v1H3v4z" fill=${color} />`;
      break;
    case 'men-very-short':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M3 3v2h1V4h1V3h10v1h1v1h1V3h-1V2H4v1H3z" fill=${color} />`;
      break;
    case 'men-entry':
      // tslint:disable-next-line: max-line-length
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M3 6h1V4h1V3h2v1h1v1h4V4h1V3h2v1h1v2h1V4h-1V3h-1V2H5v1H4v1H3v2z" fill=${color} />`;
      break;
    case 'men-disorder':
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M2 7h1V5h2V4h1V3h1v1h2V3h4V2h1v1h1v1h1v1h1v2h1V6h1V4h-1V3h-1V2h-1V1h-1V0h-1v1h-2V0h-1v1H9V0H8v1H7V0H5v1H4v1H2v5z" fill=${color} />`;
      break;
    case 'none':
      hair = '';
      break;
    case 'long':
    default:
      hair = `<path xmlns="http://www.w3.org/2000/svg" d="M1 17h3v-1h4v-2H6v-1H5v-1H4v-1H3V9H2V7h1V5h1V4h7V3h1v1h1V3h1v1h1V3h1v2h1v2h1v2h-1v2h-1v1h-1v1h-1v1h-2v2h4v1h3V4h-1V3h-1V2h-1V1H4v1H3v1H2v1H1v13z" fill=${color} />`;
      break;
  }
  return hair;
}

export function getClothes(type: string, color: string): string {
  let clothes = '';
  switch (type) {
    case 'none':
      clothes = '';
      break;
    case 'vshirt':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h2v1h1v1h1v1h1v1H3zm14 0v-3h-1v-1h-2v1h-1v1h-1v1h-1v1h6z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'lines':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h5v1h2v-1h5v1h1v3H3z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M3 17h14v1H3v-1zm0 2v1h14v-1H3z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'dress':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M4 16v4h4v-1H7v-1H6v-1H5v-1H4zm12 0v4h-4v-1h1v-1h1v-1h1v-1h1z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'pixel':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h4v1h4v-1h4v1h1v3H3z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M3 20v-1h1v1H3zm2 0v-1h1v1H5zm2 0v-1h1v1H7zm2 0v-1h1v1H9zm2 0v-1h1v1h-1zm2 0v-1h1v1h-1zm2 0v-1h1v1h-1zm1-2h1v1h-1v-1zm-2 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm-2 0h1v1H8v-1zm-2 0h1v1H6v-1zm-2 0h1v1H4v-1zm-1-1h1v1H3v-1zm2 0h1v1H5v-1zm2 0h1v1H7v-1zm2 0h1v1H9v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM4 16h1v1H4v-1zm2 0h1v1H6v-1zm6 0h1v1h-1v-1zm2 0h1v1h-1v-1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'dress2':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M4 20v-2h1v-1h1v-1h2v1h1v1h2v-1h1v-1h2v1h1v1h1v2H4z" fill=${color} />`;
      break;
    case 'skullShirt':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h12v1h1v3H3z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M5 20v-2h1v-1h8v1h1v2h-2v-1h-2v1H9v-1H7v1H5z" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'star-treck-shirt':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h4v-1h4v1h4v1h1v3H3z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h12v1h1v3H3z" fill="#FFF" fill-opacity=".2"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M12 19v-1h3v1h-3z" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'tshirt':
      clothes = `<path xmlns="http://www.w3.org/2000/svg" d="M3 20v-3h1v-1h3v-1h1v1h1v1h2v-1h1v-1h1v1h3v1h1v3H3z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M6 16H4v1H3v3h6v-2H8v-1H6v-1zm2 0h1-1zm3 0h1-1zm2 0h1v1h-2v1h-1v2h6v-3h-1v-1h-3z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'shirt':
    default:
      clothes = `<path d="M3 20v-3h1v-1h4v1h1v1h2v-1h1v-1h4v1h1v3H3z" fill=${color} />
      <path d="M6 16v1h1v1h1v1h4v-1h1v-1h1v-1h-2v1h-1v1H9v-1H8v-1H6z" fill="#FFF" fill-opacity=".4"/>
      <path d="M13 20v-1h2v1h-2zm1-4v1h2v-1h-2zm-8 0H4v1h2v-1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`;
      break;
  }
  return clothes;
}

export function getMouth(type: string, color: string): string {
  let mouth = '';
  switch (type) {
    case 'sad':
      mouth = `<path xmlns="http://www.w3.org/2000/svg" d="M9 12v1h1v1h1v-2H9z" fill=${color} />`;
      break;
    case 'sadLeft':
      mouth = `<path xmlns="http://www.w3.org/2000/svg" d="M11 11v1H9v1H8v-1h1v-1h2z" fill=${color} />`;
      break;
    case 'neutral':
      mouth = `<path xmlns="http://www.w3.org/2000/svg" d="M9 12h2v1H9v-1z" fill=${color} />`;
      break;
    case 'small':
      mouth = `<path xmlns="http://www.w3.org/2000/svg" d="M9 12v1h1v-1H9z" fill=${color} />`;
      break;
    case 'happyLeft':
      mouth = `<path xmlns="http://www.w3.org/2000/svg" d="M8 11v1h1v1h2v-1H9v-1H8z" fill=${color} />`;
      break;
    case 'happyRight':
    default:
      mouth = `<path d="M9 12v1h2v-1h1v-1h-1v1H9z" fill=${color} />`;
      break;
  }
  return mouth;
}

export function getEarrings(type: string, color: string): string {
  let earrings = '';
  switch (type) {
    case 'none':
      earrings = '';
      break;
    case 'circle':
      earrings = `<path xmlns="http://www.w3.org/2000/svg" d="M1 9v3h3V9H1zm1 1v1h1v-1H2zm14-1v3h3V9h-3zm1 1v1h1v-1h-1z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'simple':
    default:
      earrings = `<path d="M2 9v2h1V9H2zm15 0h1v2h-1V9z" fill=${color} />
      <path d="M2 9v1h1V9H2zm15 0h1v1h-1V9z" fill="#FFF" fill-opacity=".4"/>`;
      break;
  }
  return earrings;
}

export function getEyebrows(type: string, color: string): string {
  let eyebrows = '';
  switch (type) {
    case 'tired2':
      eyebrows = '';
      break;
    case 'woried':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M8 4v1H7v1H5V5h2V4h1zm4 0h1v1h2v1h-2V5h-1V4z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'leftSide':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M7 5v1H5v1H4V6h1V5h2zm7 0v1h-2v1h-1V6h1V5h2z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'angry2':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M7 5h1v1h1v1H8V6H7V5zm6 0v1h-1v1h-1V6h1V5h1z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'angry':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M6 5h3v2H8V6H6V5zm5 0h3v1h-2v1h-1V5z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'separate':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M4 7V5h3v1H5v1H4zm12-2v2h-1V6h-2V5h3z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'small':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M5 6h2v1H5V6zm8 0h2v1h-2V6z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'long':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M5 5h3v1h1v1H8V6H5V5zm10 0h-3v1h-1v1h1V6h3V5z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'suprised':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M4 7V6h1V5h1v1H5v1H4zm10-2h1v1h1v1h-1V6h-1V5z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'up':
      eyebrows = `<path xmlns="http://www.w3.org/2000/svg" d="M12 7V6h1V5h1v1h1v1h-1V6h-1v1h-1zM5 7V6h1V5h1v1h1v1H7V6H6v1H5z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'tired':
    default:
      eyebrows = `<path d="M6 5h1v1h1v1H5V6h1V5zm7 0h1v1h1v1h-3V6h1V5z" fill-rule="evenodd" fill=${color} />`;
      break;
  }
  return eyebrows;
}

export function getEyes(type: string, color: string): string {
  let eyes = '';
  switch (type) {
    case 'none':
      eyes = '';
      break;
    case 'anime':
      eyes = `<path xmlns="http://www.w3.org/2000/svg" d="M5 7h3v3H5V7zm7 0h3v3h-3V7z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M6 7h2v2H6V7zm7 0h2v2h-2V7z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M6 7v1h1v1h1V8H7V7H6zm7 0v1h1v1h1V8h-1V7h-1z" fill="#FFF" fill-opacity=".4"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M7 7v1h1V7H7zm7 0h1v1h-1V7z" fill="#FFF" fill-opacity=".7"/>`;
      break;
    case 'right':
      eyes = `<path xmlns="http://www.w3.org/2000/svg" d="M5 9V7h3v2H5zm7-2h3v2h-3V7z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M7 8v1h1V8H7zm7 0h1v1h-1V8z" fill=${color} />`;
      break;
    case 'angry':
      eyes = `<path xmlns="http://www.w3.org/2000/svg" d="M6 7h1v1h1v1H6V7zm6 0h1v1h1v1h-2V7z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M6 8h1v1H6V8zm6 0h1v1h-1V8z" fill=${color} />`;
      break;
    case 'normal':
      eyes = `
      <path xmlns="http://www.w3.org/2000/svg" d="M5 7h3v2H5V7zm7 0h3v2h-3V7z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M6 8h1v1H6V8zm7 1V8h1v1h-1z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M5 8h3v1H5V8zm7 0h3v1h-3V8z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M7 8v1h1V8H7zm7 0v1h1V8h-1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'tired':
      eyes = `<path xmlns="http://www.w3.org/2000/svg" d="M5 7h3v2H5V7zm7 0h3v2h-3V7z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M6 8h1v1H6V8zm7 0h1v1h-1V8z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M7 7h1v1H7V7zm7 0h1v1h-1V7z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M7 8h1v1H7V8zm5 0h1v1h-1V8z" fill=${color} />`;
      break;
    case 'big':
      eyes = `<path xmlns="http://www.w3.org/2000/svg" d="M5 7h3v3H5V7zm7 0h3v3h-3V7z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M6 8h1v1H6V8zm7 0h1v1h-1V8z" fill=${color} />`;
      break;
    case 'small':
      eyes = `<path xmlns="http://www.w3.org/2000/svg" d="M6 8h1v1H6V8zm7 0h1v1h-1V8z" fill="#FFF"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M7 8h1v1H7V8zm5 0h1v1h-1V8z" fill=${color} />`;
      break;
    case 'lookRight':
    default:
      eyes = `<path d="M6 7h1v2H5V8h1V7zm7 0h1v2h-2V8h1V7z" fill="#FFF"/>
      <path d="M7 7v1H6v1h2V7H7zm7 0v1h-1v1h2V7h-1z" fill=${color} />
      <path d="M7 7v1h1V7H7zM6 8v1h1V8H6zm8-1v1h1V7h-1zm-1 1v1h1V8h-1z" fill="#FFF" fill-opacity=".5"/>`;
      break;
  }
  return eyes;
}

export function getGlasses(type: string, color: string): string {
  let glass = '';
  switch (type) {
    case 'big':
      glass = `<path xmlns="http://www.w3.org/2000/svg" d="M4 8H3V7h1V6h5v1h2V6h5v1h1v1h-1v2h-5V8H9v2H4V8zm1 0V7h3v2H5V8zm7-1v2h3V7h-3z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'round':
      glass = `<path xmlns="http://www.w3.org/2000/svg" d="M12 7v2h3V7h-3zM8 6H5v1H3v1h1v1h1v1h3V9h1V8h2v1h1v1h3V9h1V8h1V7h-2V6h-3v1H8V6zM5 7v2h3V7H5z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'heart':
      glass = `<path xmlns="http://www.w3.org/2000/svg" d="M3 8V7h1V6h2v1h1V6h2v1h2V6h2v1h1V6h2v1h1v1h-1v1h-1v1h-1v1h-1v-1h-1V9h-1V8H9v1H8v1H7v1H6v-1H5V9H4V8H3z" fill=${color} />`;
      break;
    case 'normal':
      glass = `<path xmlns="http://www.w3.org/2000/svg" d="M4 8H3V7h14v1h-1v2h-5V8H9v2H4V8zm1 0h3v1H5V8zm7 0h3v1h-3V8z" fill-rule="evenodd" fill=${color} />`;
      break;
    case 'none':
    default:
      glass = '';
      break;
  }
  return glass;
}

export function getBodyType(type: string, color: string): string {
  let body = '';
  switch (type) {
    case 'woman-afro-american':
      body = `<path d="M3 20v-3h1v-1h4v-2H6v-1H5v-1H4v-1H3V9H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v2h-1v2h-1v1h-1v1h-1v1h-2v2h4v1h1v3H3z"
      fill="#A26D3D" />`;
      break;
    case 'woman-brunette':
      body = `<path d="M3 20v-3h1v-1h4v-2H6v-1H5v-1H4v-1H3V9H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v2h-1v2h-1v1h-1v1h-1v1h-2v2h4v1h1v3H3z"
      fill="#B68655" />`;
      break;
    case 'woman-brunet':
      body = `<path d="M3 20v-3h1v-1h4v-2H6v-1H5v-1H4v-1H3V9H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v2h-1v2h-1v1h-1v1h-1v1h-2v2h4v1h1v3H3z"
      fill="#EAC393" />`;
      break;
    case 'men-afro-american':
      body = `<path xmlns="http://www.w3.org/2000/svg" d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z" fill="#A26D3D"/>`;
      break;
    case 'men-brunette':
      body = `<path xmlns="http://www.w3.org/2000/svg" d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z" fill="#B68655"/>`;
      break;
    case 'men-brunet':
      body = `<path xmlns="http://www.w3.org/2000/svg" d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z" fill="#EAC393"/>`;
      break;
    case 'men-white':
      body = `<path xmlns="http://www.w3.org/2000/svg" d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z" fill="#FFDBAC"/>`;
      break;
    case 'woman-white':
    default:
      body = `<path d="M3 20v-3h1v-1h4v-2H6v-1H5v-1H4v-1H3V9H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v2h-1v2h-1v1h-1v1h-1v1h-2v2h4v1h1v3H3z"
      fill="#FFDBAC" />`;
      break;
  }
  return body;
}

export function getHat(type: string, color: string): string {
  let hat = '';
  switch (type) {
    case 'pimp':
      hat = `<path xmlns="http://www.w3.org/2000/svg" d="M15 0v4h-1V0h1zm-2 0v4h-1V0h1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M2 2v2h16V2h-1V1h-1V0H4v1H3v1H2z" fill=${color} />`;
      break;
    case 'pimp2':
      hat = `<path xmlns="http://www.w3.org/2000/svg" d="M2 4V2h1V1h1V0h12v1h1v1h1v2H2z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M3 1v1h14V1H3zM2 3v1h16V3H2z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'hat':
      hat = `<path xmlns="http://www.w3.org/2000/svg" d="M2 4V2h2V0h12v2h2v2H2z" fill=${color} />
      <path xmlns="http://www.w3.org/2000/svg" d="M4 0v2h12V0H4z" fill="#FFF" fill-opacity=".2"/>`;
      break;
    case 'none':
    default:
      hat = '';
      break;
  }
  return hat;
}

export function getBeard(type: string, color: string): string {
  let beard = '';
  switch (type) {
    case 'beard1':
      beard = `<path xmlns="http://www.w3.org/2000/svg" d="M3 11v2h1v1h1v1h10v-1h1v-1h1v-2H3z" id="Path" fill=${color} fill-opacity="0.75"/>`;
      break;
    case 'strong':
      beard = `<path xmlns="http://www.w3.org/2000/svg" d="M3 7v6h1v1h1v1h10v-1h1v-1h1V7h-1v2h-1v1h-1v1H6v-1H5V9H4V7H3z" id="Path" fill=${color} fill-opacity="1"/>`;
      break;
    case 'none':
    default:
      beard = '';
      break;
  }
  return beard;
}

export function getPreview(type: string, selectedValue: string, color: string): string {
  let decoratorPath = '';
  switch (type) {
    case 'hair':
      decoratorPath = getHair(selectedValue, color);
      break;
    case 'clothes':
      decoratorPath = getClothes(selectedValue, color);
      break;
    case 'mouth':
      decoratorPath = getMouth(selectedValue, color);
      break;
    case 'earrings':
      decoratorPath = getEarrings(selectedValue, color);
      break;
    case 'eyebrows':
      decoratorPath = getEyebrows(selectedValue, color);
      break;
    case 'eyes':
      decoratorPath = getEyes(selectedValue, color);
      break;
    case 'glasses':
      decoratorPath = getGlasses(selectedValue, color);
      break;
    case 'body':
      decoratorPath = getBodyType(selectedValue, color);
      break;
    case 'hat':
      decoratorPath = getHat(selectedValue, color);
      break;
    case 'beard':
      decoratorPath = getBeard(selectedValue, color);
      break;
  }
  return decoratorPath;
}
