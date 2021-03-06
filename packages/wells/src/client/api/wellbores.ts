import { Asset, AssetsAPI } from '@cognite/sdk';
import { SearchWellbores, Wellbore } from '../model/Wellbore';
import { Survey } from '../model/Survey';
import { Surveys } from './surveys';
import { accessApi } from '@cognite/sdk-core';
import { Well, WellDatum } from '../model/Well';
import { Wells } from './wells';
import { WellHeadLocation } from '../model/WellHeadLocation';

export class Wellbores extends AssetsAPI {
  /**
   * Dependecy injection
   *
   * public setter and private getter
   *
   * allows for:
   *
   * ```js
   * var trajectories = this.surveys.listTrajectories(assetId)
   * ```
   */
  private _surveysSDK?: Surveys;

  public set surveysSdk(sdk: Surveys) {
    this._surveysSDK = sdk;
  }
  private get surveys(): Surveys {
    return accessApi(this._surveysSDK);
  }
  /**
   * Converts asset into a wellbore..
   * Contains lazy getter for trajectories
   *
   * @param asset
   */
  private mapToWellbore = async (assets: Asset[]): Promise<Wellbore[]> => {
    return assets.map(asset => {
      const wellbore = <Wellbore>{
        id: asset.id,
        name: asset.name,
        metadata: asset.metadata,
        trajectories: async (): Promise<Survey[]> => {
          return await this.surveys.listTrajectories(asset.id);
        },
        parentWell: async (): Promise<Well | undefined> => {
          return await this.getParentWell(asset);
        },
      };
      wellbore.getDatum = async (): Promise<WellDatum | undefined> => {
        const well = await wellbore.parentWell();
        if (well) {
          return well.datum;
        }
      };
      wellbore.getWellHeadLocation = async (): Promise<
        WellHeadLocation | undefined
      > => {
        const well = await wellbore.parentWell();
        if (well) {
          return well.wellHeadLocation;
        }
      };
      return wellbore;
    });
  };

  /**
   * Method for finding the parent wellbore of a given wellbore asset
   *
   * ```
   * const parent = await client.wellbores.getParentWell(asset);
   * ```
   * @param asset
   */
  private getParentWell = async (asset: Asset): Promise<Well | undefined> => {
    if (!asset.metadata || asset.metadata.type !== 'Wellbore') {
      if (asset.metadata && asset.metadata!.type === 'Well') {
        return Wells.mapToWell([asset])[0];
      } else {
        return undefined;
      }
    }
    if (asset.parentId) {
      let parentWell = (await this.retrieve([{ id: asset.parentId }]))[0];
      while (parentWell.metadata && parentWell.metadata.type !== 'Well') {
        if (!parentWell.parentId) {
          return undefined;
        }
        parentWell = (await this.retrieve([{ id: parentWell.parentId }]))[0];
      }
      const well = Wells.mapToWell([parentWell])[0];
      return well;
    }
  };

  /**
   * A generic template for searching wellbores based on exact filtering
   *
   * ```js
   * const created = await client.wellbores.searchAssets(exactSearch: {key: val});
   * ```
   *
   * @param exactSearch Filter on assets with strict matching.
   */
  private searchAssets = async (exactSearch = {}): Promise<Asset[]> => {
    const body = {
      filter: {
        metadata: {
          type: 'Wellbore',
        },
        ...exactSearch,
      },
    };
    return await this.search(body);
  };

  /**
   * List all wellbores
   *
   * ```js
   * const created = await client.wells.listAll();
   * ```
   *
   * @param customFilter a custom filter you can apply, input: any -> output: Promise<Wellbore[]>
   */
  public listAll = async (
    customFilter?: SearchWellbores
  ): Promise<Wellbore[]> => {
    if (customFilter) {
      return await customFilter();
    }
    return this.mapToWellbore(await this.searchAssets());
  };

  /**
   * Get all wellbores that are immediate children of an parentId
   *
   * ```js
   * const created = await client.wellbores.listChildren(parentId: 31647372237);
   * ```
   *
   * @param parentId the parent Id of a particular asset
   * @param customFilter a custom filter you can apply, input: any -> output: Promise<Wellbore[]>
   */
  public listChildren = async (
    parentId: number,
    customFilter?: SearchWellbores
  ) => {
    if (customFilter) {
      return await customFilter(parentId);
    }

    const exactSearch = { parentIds: [parentId] };
    return this.mapToWellbore(await this.searchAssets(exactSearch));
  };

  /**
   * List assets (wellbores) in subtrees rooted at the specified assets (wells)
   *
   * ```js
   * const created = await client.wellbores.listByWellId(wellId: 21646274724);
   * ```
   *
   * @param parentId the parent Id of a particular asset
   * @param customFilter a custom filter you can apply, input: any -> output: Promise<Wellbore[]>
   */
  public listByWellId = async (
    wellId: number,
    customFilter?: SearchWellbores
  ) => {
    if (customFilter) {
      return await customFilter(wellId);
    }

    const exactSearch = { assetSubtreeIds: [{ id: wellId }] };
    return this.mapToWellbore(await this.searchAssets(exactSearch));
  };
}
