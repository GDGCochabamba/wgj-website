export type KeyAvatar =
  | 'hair'
  | 'clothes'
  | 'mouth'
  | 'earrings'
  | 'eyebrows'
  | 'eyes'
  | 'glasses'
  | 'body'
  | 'hat'
  | 'beard'
  | 'nutria';

export type AvatarDecoratorItem = {
  options: string[];
  currentValue: string;
  color?: string;
  name: string;
  type: string;
};

export type AvatarOptions = Record<KeyAvatar, AvatarDecoratorItem>;
