/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The unit does not attack if omitted.
 */
export type Initiative = number;
/**
 * Value of -1 means all directions.
 */
export type Angle = number;

/**
 * An army for the Hex game
 */
export interface Army {
  id: string;
  name: string;
  tokens: [Token, ...(Token)[]];
}
export interface Token {
  id: string;
  hq?: boolean;
  instant?: boolean;
  foundation?: boolean;
  count?: number;
  initiative?: Initiative | [Initiative, ...(Initiative)[]];
  health?: number;
  attacks?: [
    {
      type: "riffle" | "melee" | "cannon";
      angle?: Angle;
      damage?: number;
    },
    ...({
      type: "riffle" | "melee" | "cannon";
      angle?: Angle;
      damage?: number;
    })[]
  ];
  abilities?: [
    {
      type: "airstrike" | "battle" | "castling" | "grenade" | "mobility" | "pushback" | "small_bomb" | "venom";
    },
    ...({
      type: "airstrike" | "battle" | "castling" | "grenade" | "mobility" | "pushback" | "small_bomb" | "venom";
    })[]
  ];
  modifiers?: [
    {
      type: "initiative" | "mobility" | "mother" | "medic" | "melee" | "net" | "quatermaster" | "riffle";
      value?: number;
      hostile?: boolean;
      angle?: Angle;
    },
    ...({
      type: "initiative" | "mobility" | "mother" | "medic" | "melee" | "net" | "quatermaster" | "riffle";
      value?: number;
      hostile?: boolean;
      angle?: Angle;
    })[]
  ];
  shields?: [Angle, ...(Angle)[]];
}