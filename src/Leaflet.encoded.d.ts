// Type definitions for Leaflet polyline-encoded 0.0.8
// Project: https://github.com/jieter/Leaflet.encoded
// Definitions by: Romain Deneau <https://github.com/rdeneau>
// TypeScript Version: 2.5

import * as Leaflet from 'leaflet';

export as namespace Lx;

export interface L {
  Polygon: Polygon;
  Polyline: Polyline;
  PolylineUtil: PolylineUtil;
}

export interface PolylineUtilOptions {
  dimension: number;
  factor: number;
  precision: number;
}

export type LatLngTuple = [number, number];

export interface PolylineUtil {
  /**
   * Decode the string `encoded` to an array of `[lat, lng]`-arrays.
   */
  decode(encoded: string, options?: PolylineUtilOptions | number): LatLngTuple[];

  /**
   * Encode an array of `L.LatLng` objects, or an array of arrays.
   */
  encode(points: LatLngTuple[] | Leaflet.LatLng[], options?: PolylineUtilOptions | number): string;
}

// -- Polyline/Polygon extensions -------------------------

export class Polyline extends Leaflet.Polyline {
  /**
   * Return an encoded string for the current Polyline.
   */
  encodePath(): string;

  /**
   * Construct a new `L.Polyline` from a string, with optional `options` object.
   * Backslashes in strings should be properly escaped.
   */
  fromEncoded(encoded: string, options?: Leaflet.PolylineOptions): Leaflet.Polyline;
}

export class Polygon extends Leaflet.Polygon {
  /**
   * Return an encoded string for the current Polygon.
   */
  encodePath(): string;

  /**
   * Construct a new `L.Polygon` from a string, with optional `options` object.
   * Backslashes in strings should be properly escaped.
   */
  fromEncoded(encoded: string, options?: Leaflet.PolylineOptions): Leaflet.Polygon;
}
