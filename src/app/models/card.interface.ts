import { Name } from "./name.interface";
import { Rule } from "./rule.interface";

export interface Card {
  "name": string;
  "names": string[];
  "manaCost": string;
  "cmc": number;
  "colors": string[];
  "colorIdentity": string[];
  "type": string;
  "supertypes": string[];
  "types": string[];
  "subtypes": string[];
  "rarity": string;
  "set": string;
  "text": string;
  "artist": string;
  "number": string;
  "powers": string;
  "toughness": string;
  "layout": string;
  "multiverseid": string;
  "imageUrl": string;
  "rulings": Rule[];
  "foreignNames": Name[];
  "printings": string[];
  "originalText": string;
  "originalType": string;
  "id": string;
}