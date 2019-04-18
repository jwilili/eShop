export class Shop {
  id;
  name: string;
  poster: string;
  isLiked;

  constructor(name, poster) {
    this.name = name;
    this.poster = poster;
    this.isLiked = this.isLiked || false;
  }
}
