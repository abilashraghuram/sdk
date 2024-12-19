/* tslint:disable */
/* eslint-disable */
/**
 * Daytona Server API
 * Daytona Server API
 *
 * The version of the OpenAPI document: v0.0.0-dev
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime'
/**
 *
 * @export
 * @interface Position
 */
export interface Position {
  /**
   *
   * @type {number}
   * @memberof Position
   */
  character: number
  /**
   *
   * @type {number}
   * @memberof Position
   */
  line: number
}

/**
 * Check if a given object implements the Position interface.
 */
export function instanceOfPosition(value: object): value is Position {
  if (!('character' in value) || value['character'] === undefined) return false
  if (!('line' in value) || value['line'] === undefined) return false
  return true
}

export function PositionFromJSON(json: any): Position {
  return PositionFromJSONTyped(json, false)
}

export function PositionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Position {
  if (json == null) {
    return json
  }
  return {
    character: json['character'],
    line: json['line'],
  }
}

export function PositionToJSON(json: any): Position {
  return PositionToJSONTyped(json, false)
}

export function PositionToJSONTyped(
  value?: Position | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    character: value['character'],
    line: value['line'],
  }
}
