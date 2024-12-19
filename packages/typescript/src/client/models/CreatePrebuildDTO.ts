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
 * @interface CreatePrebuildDTO
 */
export interface CreatePrebuildDTO {
  /**
   *
   * @type {string}
   * @memberof CreatePrebuildDTO
   */
  branch?: string
  /**
   *
   * @type {number}
   * @memberof CreatePrebuildDTO
   */
  commitInterval?: number
  /**
   *
   * @type {string}
   * @memberof CreatePrebuildDTO
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof CreatePrebuildDTO
   */
  retention: number
  /**
   *
   * @type {Array<string>}
   * @memberof CreatePrebuildDTO
   */
  triggerFiles?: Array<string>
}

/**
 * Check if a given object implements the CreatePrebuildDTO interface.
 */
export function instanceOfCreatePrebuildDTO(
  value: object,
): value is CreatePrebuildDTO {
  if (!('retention' in value) || value['retention'] === undefined) return false
  return true
}

export function CreatePrebuildDTOFromJSON(json: any): CreatePrebuildDTO {
  return CreatePrebuildDTOFromJSONTyped(json, false)
}

export function CreatePrebuildDTOFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreatePrebuildDTO {
  if (json == null) {
    return json
  }
  return {
    branch: json['branch'] == null ? undefined : json['branch'],
    commitInterval:
      json['commitInterval'] == null ? undefined : json['commitInterval'],
    id: json['id'] == null ? undefined : json['id'],
    retention: json['retention'],
    triggerFiles:
      json['triggerFiles'] == null ? undefined : json['triggerFiles'],
  }
}

export function CreatePrebuildDTOToJSON(json: any): CreatePrebuildDTO {
  return CreatePrebuildDTOToJSONTyped(json, false)
}

export function CreatePrebuildDTOToJSONTyped(
  value?: CreatePrebuildDTO | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    branch: value['branch'],
    commitInterval: value['commitInterval'],
    id: value['id'],
    retention: value['retention'],
    triggerFiles: value['triggerFiles'],
  }
}
