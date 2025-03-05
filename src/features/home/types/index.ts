export interface CardResponse {
  list: List[];
  hasNext: boolean;
}

export interface List {
  cardType: string;
  profile: Profile;
  card: Card;
}

export interface Profile {
  nickName: string;
  profileImage: ProfileImage;
}

export interface ProfileImage {
  imageUrl: string;
}

export interface Card {
  cardType: string;
  cardId: string;
  category: Category;
  title: string;
  body?: string;
  cardImage: CardImage[];
  viewCount: number;
  userCount: number;
  createdAt: number;
}

export interface Category {
  name: string;
  imageUrl: string;
}

export interface CardImage {
  imageUrl: string;
}
