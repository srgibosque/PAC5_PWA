import { Name } from "./name.interface";
import { Legalities } from "./legalities.interface";
import { Ruling } from "./rulings.interface";

export interface Card {
  "artist": string;
  "cmc": number;
  "colorIdentity": string[];
  "colors": string[];
  "flavor": string;
  "foreignNames": Name[];
  "id": string;
  "imageUrl": string;
  "layout": string;
  "legalities": Legalities[];
  "manaCost": string;
  "multiverseid": string;
  "name": string;
  "names": string[];
  "number": string;
  "originalText": string;
  "originalType": string;
  "power": string;
  "printings": string[];
  "rarity": string;
  "rulings": Ruling[]
  "set": string;
  "setName": string;
  "subtypes": string[];
  "text": string;
  "toughness": string;
  "type": string;
  "types": string[];
  "supertypes": string[];
}