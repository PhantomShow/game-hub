import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  description_raw: string;
  slug: string;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  publishers: Publisher[];
  rating_top: number;
  genres: Genre[];
}
