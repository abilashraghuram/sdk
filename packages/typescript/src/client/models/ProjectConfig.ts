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
import type { PrebuildConfig } from './PrebuildConfig'
import {
  PrebuildConfigFromJSON,
  PrebuildConfigFromJSONTyped,
  PrebuildConfigToJSON,
  PrebuildConfigToJSONTyped,
} from './PrebuildConfig'
import type { BuildConfig } from './BuildConfig'
import {
  BuildConfigFromJSON,
  BuildConfigFromJSONTyped,
  BuildConfigToJSON,
  BuildConfigToJSONTyped,
} from './BuildConfig'

/**
 *
 * @export
 * @interface ProjectConfig
 */
export interface ProjectConfig {
  /**
   *
   * @type {BuildConfig}
   * @memberof ProjectConfig
   */
  buildConfig?: BuildConfig
  /**
   *
   * @type {boolean}
   * @memberof ProjectConfig
   */
  _default: boolean
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ProjectConfig
   */
  envVars: { [key: string]: string }
  /**
   *
   * @type {string}
   * @memberof ProjectConfig
   */
  gitProviderConfigId?: string
  /**
   *
   * @type {string}
   * @memberof ProjectConfig
   */
  image: string
  /**
   *
   * @type {string}
   * @memberof ProjectConfig
   */
  name: string
  /**
   *
   * @type {Array<PrebuildConfig>}
   * @memberof ProjectConfig
   */
  prebuilds?: Array<PrebuildConfig>
  /**
   *
   * @type {string}
   * @memberof ProjectConfig
   */
  repositoryUrl: string
  /**
   *
   * @type {string}
   * @memberof ProjectConfig
   */
  user: string
}

/**
 * Check if a given object implements the ProjectConfig interface.
 */
export function instanceOfProjectConfig(value: object): value is ProjectConfig {
  if (!('_default' in value) || value['_default'] === undefined) return false
  if (!('envVars' in value) || value['envVars'] === undefined) return false
  if (!('image' in value) || value['image'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('repositoryUrl' in value) || value['repositoryUrl'] === undefined)
    return false
  if (!('user' in value) || value['user'] === undefined) return false
  return true
}

export function ProjectConfigFromJSON(json: any): ProjectConfig {
  return ProjectConfigFromJSONTyped(json, false)
}

export function ProjectConfigFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProjectConfig {
  if (json == null) {
    return json
  }
  return {
    buildConfig:
      json['buildConfig'] == null
        ? undefined
        : BuildConfigFromJSON(json['buildConfig']),
    _default: json['default'],
    envVars: json['envVars'],
    gitProviderConfigId:
      json['gitProviderConfigId'] == null
        ? undefined
        : json['gitProviderConfigId'],
    image: json['image'],
    name: json['name'],
    prebuilds:
      json['prebuilds'] == null
        ? undefined
        : (json['prebuilds'] as Array<any>).map(PrebuildConfigFromJSON),
    repositoryUrl: json['repositoryUrl'],
    user: json['user'],
  }
}

export function ProjectConfigToJSON(json: any): ProjectConfig {
  return ProjectConfigToJSONTyped(json, false)
}

export function ProjectConfigToJSONTyped(
  value?: ProjectConfig | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    buildConfig: BuildConfigToJSON(value['buildConfig']),
    default: value['_default'],
    envVars: value['envVars'],
    gitProviderConfigId: value['gitProviderConfigId'],
    image: value['image'],
    name: value['name'],
    prebuilds:
      value['prebuilds'] == null
        ? undefined
        : (value['prebuilds'] as Array<any>).map(PrebuildConfigToJSON),
    repositoryUrl: value['repositoryUrl'],
    user: value['user'],
  }
}
