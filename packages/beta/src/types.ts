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

export type EntityMatchingJobStatus =
  | 'QUEUED'
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED';

export const EntityMatchingJobStatus = {
  QUEUED: 'QUEUED' as EntityMatchingJobStatus,
  RUNNING: 'RUNNING' as EntityMatchingJobStatus,
  COMPLETED: 'COMPLETED' as EntityMatchingJobStatus,
  FAILED: 'FAILED' as EntityMatchingJobStatus,
};

export type ContextJobId = number;

// TODO: fix the interface
export type EntityMatchingMatchObject = IdEither & {
  name?: string;
  description?: string;
};

export type EntityMatchingFeatureType =
  | 'simple'
  | 'bigram'
  | 'frequency-weighted-bigram'
  | 'bigram-extra-tokenizers'
  | 'bigram-combo';

export type EntityMatchingClassifier =
  | 'RandomForest'
  | 'DecisionTree'
  | 'LogisticRegression'
  | 'AugmentedLogisticRegression'
  | 'AugmentedRandomForest';

export interface EntityMatchingMatchField {
  from: string;
  to: string;
}

export interface EntityMatchingTrueMatch {
  /**
   * The id for the from-object of the match.
   */
  fromId?: CogniteInternalId;
  /**
   * The id for the to-object of the match.
   */
  toId?: CogniteInternalId;
  /**
   * The external id for the from-object of the match.
   */
  fromExternalId?: CogniteExternalId;
  /**
   * The external id for the to-object of the match.
   */
  toExternalId?: CogniteExternalId;
}

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
   * List of objects of pairs of fromId or fromExternalId and toId or toExternalId, that corresponds to entities in matchFrom and matchTo respectively, that indicates a confirmed match used to train the model. If omitted, an unsupervised model is used.
   */
  trueMatches?: EntityMatchingTrueMatch[];
  /**
   * External Id provided by client. Should be unique within the project.
   */
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
   * List of pairs of fields from the matchTo and matchFrom items used to calculate features. All matchFrom and matchTo items should have all the keyFrom and keyTo properties specified here.
   */
  matchFields?: EntityMatchingMatchField[];
  /**
   * Defines the combination of features used. The options are:
   * Simple: Calculates a single cosine-distance similarity score for each of the fields defined in keysFromTo. This is the fastest option.
   * Bigram: Adds similarity score based on the sequence of the terms.
   * Frequency-Weighted-Bigram: Calculates a similarity score based on the sequence of the terms, giving higher weights to less commonly occurring tokens.
   * Bigram-Extra-Tokenizers: Similar to bigram, but able to learn that leading zeros and spaces should be ignored in matching.
   * Bigram-Combo: Calculates all of the above options, relying on the model to determine the appropriate features to use. This is the slowest option.
   */
  featureType?: EntityMatchingFeatureType;
  /**
   * The classifier used in the model. Only relevant if there are trueMatches/labeled data.
   */
  classifier?: EntityMatchingClassifier;
  /**
   * If true, replaces missing data in keyFrom or keyTo with empty strings. Else, returns an error if there is missing data.
   */
  ignoreMissingFields?: boolean;
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
  status?: EntityMatchingJobStatus;
}

// TODO: check with context team on items: array
export type EntityMatchingChange = IdEither & InterfaceEntityMatchingPatch;

export interface InterfaceEntityMatchingPatch {
  update?: {
    /**
     * Set a new value for the model name.
     */
    name?: SinglePatchString;
    /**
     * Set a new value for the model description.
     */
    description: SinglePatchString;
  };
}

export type EntityMatchingModel = {
  /**
   * A server-generated ID for the object.
   */
  id?: CogniteInternalId;
  /**
   * External Id provided by client. Should be unique within the project.
   */
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
   * The feature type used to fit the model.
   */
  featureType?: EntityMatchingFeatureType;
  /**
   * Name of the classifier supervised model, "Unsupervised" if unsupervised model.
   */
  classifier?: string;
  // TODO: classifier should be enum?
  /**
   * List of pairs of fields from the matchTo and matchFrom items used to create features.
   */
  keysFromTo?: string[][]; // TODO: fix
  /**
   * The ID of original model, only relevant when the model is a retrained model.
   */
  originalModelId?: number;
  status?: EntityMatchingJobStatus;
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
  status: EntityMatchingJobStatus;
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
  trueMatches: EntityMatchingTrueMatch[];
  /**
   * Additional entities to match from. The new model uses a combination of this and matchFrom items from the orginal model. If there are identical ids, matchFrom items from original model are dropped.
   */
  matchFrom: EntityMatchingMatchObject[];
  /**
   * Additional entities to match to. The new model uses a combination this and matchTo items from the orginal model. If there are identical ids, the matchTo items from the original model are dropped.
   */
  matchTo: EntityMatchingMatchObject[];
}

export interface EntityMatchingRefitResponse {
  /**
   * User defined name of the model.
   */
  name: string;
  /**
   * User defined description of the model.
   */
  description: string;
  /**
   * The ID of the new model.
   */
  id: number;
  /**
   * The externalId of the new model.
   */
  externalId: string;
  /**
   * The status of the job.
   */
  status: EntityMatchingJobStatus;
  /**
   * ID of original model.
   */
  originalId: number;
}

export interface EntityMatchingRetrievePredictResponse {
  /**
   * Contextualization job ID.
   */
  jobId: ContextJobId;
  /**
   * The status of the job.
   */
  status: EntityMatchingJobStatus;
  /**
   * List of matched entities with confidence score.
   */
  items: EntityMatchingRetrievePredictResponseItem[];
}

export interface EntityMatchingRetrievePredictResponseItem {
  /**
   * The matchFrom item given to predict.
   */
  matchFrom: EntityMatchingMatchObject;
  /**
   * Matched items, sorted from highest score to lowest. May be empty.
   */
  matches: EntityMatchingRetrievePredictResponseItemMatche[];
}

export interface EntityMatchingRetrievePredictResponseItemMatche {
  matchTo: EntityMatchingMatchObject;
  score: number;
}

export interface EntityMatchingFilter {
  /**
   * User defined name of the model.
   */
  name?: string;
  /**
   * User defined description of the model.
   */
  description?: string;
  /**
   * The feature type used to fit the model.
   */
  featureType?: EntityMatchingFeatureType;
  /**
   * Name of the classifier supervised model, "Unsupervised" if unsupervised model
   */
  classifier?: string;
  /**
   * List of pairs of fields from the matchTo and matchFrom items used to create features.
   */
  keysFromTo?: any[]; // TODO: fix
  /**
   * The ID of original model, only relevant when the model is a retrained model.
   */
  originalModelId?: number;
}

export interface EntityMatchingFilterRequest extends FilterQuery {
  filter?: EntityMatchingFilter;
}
