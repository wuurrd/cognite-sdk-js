// Copyright 2020 Cognite AS

import {
  CogniteExternalId,
  CogniteInternalId,
  CreatedAndLastUpdatedTimeFilter,
  DateRange,
  FilterQuery,
  IdEither,
  Label,
  Timestamp,
  Range,
  LabelFilter,
  SinglePatchString,
} from '@cognite/sdk';

export * from '@cognite/sdk';
// This file is here mostly to allow apis to import { ... } from '../../types';
// Overriding types should probably be done in their respective API endpoint files, where possible

export type RelationshipResourceType =
  | 'asset'
  | 'timeSeries'
  | 'file'
  | 'event'
  | 'sequence';

export interface Relationship {
  /**
   * External id of the relationship, must be unique within the project
   */
  externalId: CogniteExternalId;
  /**
   * External id of the CDF resource that constitutes the relationship source
   */
  sourceExternalId: CogniteExternalId;
  /**
   * Enum: "asset" "timeSeries" "file" "event" "sequence".
   * The CDF resource type of the relationship source. Must be one of the specified values.
   */
  sourceType: RelationshipResourceType;
  /**
   * External id of the CDF resource that constitutes the relationship target.
   */
  targetExternalId: CogniteExternalId;
  /**
   * Enum: "asset" "timeSeries" "file" "event" "sequence".
   * The CDF resource type of the relationship target. Must be one of the specified values.
   */
  targetType: RelationshipResourceType;
  /**
   * Time when the relationship became active.
   * If there is no startTime, relationship is active from the beginning of time until endTime.
   */
  startTime?: Timestamp;
  /**
   * Time when the relationship became inactive. If there is no endTime,
   * relationship is active from startTime until the present or any point in the future.
   * If endTime and startTime are set, then endTime must be strictly greater than startTime
   */
  endTime?: Timestamp;
  /**
   * Confidence value of the existence of this relationship.
   * Generated relationships should provide a realistic score on the likelihood of the existence of the relationship.
   * Relationships without a confidence value can be interpreted at the discretion of each project.
   */
  confidence?: number;
  /**
   * The id of the dataset this relationship belongs to
   */
  dataSetId?: CogniteInternalId;
  /**
   * A list of the labels associated with this resource item
   */
  labels?: Label[];
}

export interface RelationshipsFilterRequest extends FilterQuery {
  /**
   * Filter on relationships with exact match.
   * Multiple filter elements in one property, e.g. sourceExternalIds: [ "a", "b" ],
   * will return all relationships where the sourceExternalId field is either a or b.
   * Filters in multiple properties will return the relationships that match all criteria.
   * If the filter is not specified it default to an empty filter.
   */
  filter?: RelationshipsFilter;
}

export interface RelationshipsFilter extends CreatedAndLastUpdatedTimeFilter {
  /**
   * Include relationships that have any of these values in their sourceExternalId field
   */
  sourceExternalIds?: CogniteExternalId[];
  /**
   * Items Enum: "asset" "timeSeries" "file" "event" "sequence".
   * Include relationships that have any of these values in their sourceType field
   */
  sourceTypes?: RelationshipResourceType[];
  /**
   * Include relationships that have any of these values in their targetExternalId field
   */
  targetExternalIds?: CogniteExternalId[];
  /**
   * Items Enum: "asset" "timeSeries" "file" "event" "sequence".
   * Include relationships that have any of these values in their targetType field
   */
  targetTypes?: RelationshipResourceType[];
  /**
   * Only include relationships that reference these specific dataSet IDs
   */
  dataSetIds?: IdEither[];
  startTime?: DateRange;
  endTime?: DateRange;
  /**
   * Confidence range to filter for
   */
  confidence?: Range<number>;
  /**
   * Limits results to those active at any point within the given time range, i.e.
   * if there is any overlap in the intervals [activeAtTime.min, activeAtTime.max] and [startTime, endTime],
   * where both intervals are inclusive. If a relationship does not have a startTime,
   * it is regarded as active from the beginning of time by this filter.
   * If it does not have an endTime is will be regarded as active until the end of time.
   * Similarly, if a min is not supplied to the filter, the min will be implicitly set to the beginning of time,
   * and if a max is not supplied, the max will be implicitly set to the end of time.
   */
  activeAtTime?: DateRange;
  /**
   * Return only the resource matching the specified label constraints
   */
  labels?: LabelFilter;
}

export type ContextResponseStatus =
  | 'QUEUED'
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED';

// TODO: fix the interface
export type EntityMatchingMatchObject = IdEither & {
  name?: string;
  description?: string;
};

export const EntityMatchingFitRequestIdField = {
  id: 'id' as EntityMatchingFitRequestIdField,
  externalId: 'externalId' as EntityMatchingFitRequestIdField,
};

// TODO: why snake case??
export type EntityMatchingFitRequestIdField = 'id' | 'external_id';

export type EntityMatchingFitRequestFeatureType =
  | 'simple'
  | 'bigram'
  | 'frequency-weighted-bigram'
  | 'bigram-extra-tokenizers'
  | 'bigram-combo';

export interface EntityMatchingFitRequest {
  /**
   * List of entities with field id or externalId to match from, for example, time series.
   */
  matchFrom: EntityMatchingMatchObject[];
  /**
   * List of entities with field id or externalId to match to, for example assets.
   */
  matchTo: EntityMatchingMatchObject[];
  /**
   * List of pairs of [match-from id,match-to id] that indicates a confirmed match used to train the model. If omitted, uses an unsupervised model.
   */
  trueMatches?: IdEither[][];
  /**
   * Which field in matchFrom and matchTo to use as the id field
   */
  idField?: EntityMatchingFitRequestIdField;
  externalId?: CogniteExternalId;
  /**
   * User defined name of the model.
   */
  name?: string;
  /**
   * User defined description of the model.
   */
  description?: string;
  /**
   * Defines the combination of features used. The options are:
   * Simple: Calculates a single cosine-distance similarity score for each of the fields defined in keysFromTo. This is the fastest option.
   * Bigram: Adds similarity score based on the sequence of the terms.
   * Frequency-Weighted-Bigram: Calculates a similarity score based on the sequence of the terms, giving higher weights to less commonly occurring tokens.
   * Bigram-Extra-Tokenizers: Similar to bigram, but able to learn that leading zeros and spaces should be ignored in matching.
   * Bigram-Combo: Calculates all of the above options, relying on the model to determine the appropriate features to use. This is the slowest option.
   */
  featureType?: EntityMatchingFitRequestFeatureType;
  /**
   * TODO keysFromto and completeMissing
   */
  keysFromTo?: any;
  completeMissing?: boolean;
}

export interface EntityMatchingFitResponse {
  id?: CogniteInternalId;
  externalId?: CogniteExternalId;
  /**
   * User defined name of the model.
   */
  name?: string;
  /**
   * User defined description of the model
   */
  description?: string;
  /**
   * The status of the job.
   */
  status?: ContextResponseStatus;
}

// TODO: check with context team on items: array
export interface EntityMatchingUpdateRequestItems {
  /**
   * id:
   */
  id?: CogniteInternalId;
  externalId?: CogniteExternalId;
  update?: {
    name?: SinglePatchString;
    description: SinglePatchString;
  };
}

export type EntityMatchingUpdateResponseObject = {
  id?: CogniteInternalId;
  externalId?: CogniteExternalId;
  name?: string;
  description?: string;
  featureType?: string;
  classifier?: string;
  keysFromTo?: Array<string[]>;
  originalModelId?: number;
};

export interface EntityMatchingPredictRequest {
  /**
   * The ID of the model that will be used to predict matches. Must include either externalId or id.
   */
  id?: CogniteInternalId;
  /**
   * The externalId of the model that will be used to predict matches. Must include either externalId or id.
   */
  externalId?: CogniteExternalId;
  /**
   * List of entities with field id or externalId to match from, for example, time series.
   */
  matchFrom?: IdEither[];
  /**
   * List of entities with field id or externalId to match to, for example assets.
   */
  matchTo?: IdEither[];
  /**
   * The maximum number of results to return for each matchFrom.
   */
  numMatches?: number;
  /**
   * Only return matches with score above this threshold.
   */
  scoreThreshold?: number;
}

export interface EntityMatchingPredictResponse {
  /**
   * Contextualization job ID.
   */
  jobId: number;
  /**
   * The status of the job.
   */
  status: ContextResponseStatus;
}

export interface EntityMatchingRefitRequest {
  /**
   * The ID of the original model. Must include either externalId or id.
   */
  id?: CogniteInternalId;
  /**
   * The externalId of the original model. Must include either externalId or id.
   */
  externalId?: CogniteExternalId;
  /**
   * External ID for the new refitted model provided by client. Should be unique within the project.
   */
  newExternalId?: CogniteExternalId;
  /**
   * List of additional confirmed matches used to train the model. The new model uses a combination of this and trueMatches from the orginal model. If there are identical match-from ids, the pair from the original model is dropped.
   */
  trueMatches?: IdEither[][];
  /**
   * Additional entities to match from. The new model uses a combination of this and matchFrom items from the orginal model. If there are identical ids, matchFrom items from original model are dropped.
   */
  matchFrom: EntityMatchingMatchObject;
  /**
   * Additional entities to match to. The new model uses a combination this and matchTo items from the orginal model. If there are identical ids, the matchTo items from the original model are dropped.
   */
  matchTo: EntityMatchingMatchObject;
}
