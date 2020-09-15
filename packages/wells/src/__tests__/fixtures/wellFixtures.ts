export const mockedWellResultFixture = [
  {
    name: '16/1',
    description: 'GC16',
    metadata: {
      ACTIVE_UI_UNITSYS_ID: '11.0',
      COMPLETION_WELL_ID: '2003-P',
      // CONVERGENCE: '-0.03456295',
      // CONVERGENCE_DSDSUNIT: 'lat_dms',
      // COORD_TYPE: '0.0',
      // CREATE_APP_ID: 'DIMS32',
      // CREATE_DATE: '2001-04-30T00:00:00.000',
      // CREATE_USER_ID: 'Data Migration Tool - DIMS',
      // DSDS_CRS_NAME: 'ED50 * Long name Long name Long name Long name Long name',
      // GEO_DESCRIPTION: 'ACTUAL_POSITIONING_REPORT',
      // GEO_LATITUDE_DSDSUNIT: 'lat_dms',
      // GEO_LONGITUDE_DSDSUNIT: 'lat_dms',
      // GEO_OFFSET_EAST: '497494.7969980101',
      // GEO_OFFSET_EAST_DSDSUNIT: 'meters',
      // GEO_OFFSET_NORTH: '6315612.511974738',
      // GEO_OFFSET_NORTH_DSDSUNIT: 'meters',
      // IS_OFFSHORE: 'Y',
      // IS_PLATFORM: 'N',
      // IS_READONLY: 'Y',
      // LOC_COUNTRY: 'TITIAN',
      // REMARKS: 'Well Location Data Source :\r\nSee Site Audit Information',
      // SCALE_FACTOR: '0.99960005',
      // SITE_ID: '0bwtnmyQaZ',
      // SLOT_EW: '-0.13506989',
      // SLOT_EW_DSDSUNIT: 'm',
      // SLOT_NAME: '03',
      // SLOT_NS: '3.343256',
      // SLOT_NS_DSDSUNIT: 'm',
      // SLOT_RADIAL_ERROR: '0.0',
      // SLOT_RADIAL_ERROR_DSDSUNIT: 'm',
      // SPUD_DATE: '2001-09-07T04:30:00.000',
      // TIGHT_GROUP_ID: 'KrQry',
      // UNIT_SET_ON_CREATE: 'MIXED to API',
      // UPDATE_APP_ID: 'COMPASS',
      // UPDATE_DATE: '2019-07-10T10:28:45.000',
      // UPDATE_USER_ID: 'TEST\\test(TEST\\TEST)',
      // USE_SLOT_AS_REFERENCE: '1.0',
      // WATER_DEPTH: '67.4',
      // WATER_DEPTH_DSDSUNIT: 'm',
      // WELLHEAD_DEPTH_DSDSUNIT: 'm',
      // WELL_COMMON_NAME: '1/3-K-3',
      // WELL_DESC_ALTERNATE: '000103K3',
      // WELL_ID: '03W9I01028',
      // WELL_LEGAL_NAME: '1/3-K-3',
      // WELL_LOCATION_SPATIAL:
      //   '{"y_unit":"dega","x":["2.9571973629448447"],"y":["56.982155042727506"],"x_unittype":"project lat/lon","y_unittype":"project lat/lon","geo_type":"POINT","properties":[{"name":"crs","unitType":"UNKNOWN","values":"[\\"World Geodetic System 1984\\"]","unit":"UNKNOWN","type":"STRING"}],"x_unit":"dega","z":[]}',
      // WELL_NET_INT: '0.0',
      // WELL_NET_INT_DSDSUNIT: 'percent',
      // WELL_OPERATOR: 'RANDOM_GUY',
      // WELL_WORKING_INT: '0.0',
      // WELL_WORKING_INT_DSDSUNIT: 'percent',
      // WRP_AZIMUTH_DSDSUNIT: 'lat_dms',
      // WRP_EW_DSDSUNIT: 'm',
      // WRP_INCLINATION_DSDSUNIT: 'lat_dms',
      // WRP_MD_DSDSUNIT: 'm',
      // WRP_NS_DSDSUNIT: 'm',
      // WRP_OFFSET: '0.0',
      WRP_TVD: '67.4',
      WRP_TVD_DSDSUNIT: 'm',
      source: 'EDM',
      type: 'Well',
    },
    id: 7591554097499339,
    createdTime: new Date(1574266721666),
    lastUpdatedTime: new Date(1574266721666),
    rootId: 7591554097499339,
  },
];

export const getDefaultWell = (includeWellBore = false) => ({
  ...mockedWellResultFixture[0],
  wellbores: includeWellBore ? [getDefaultWellbore()] : undefined,
});

export const getDefaultWellbore = () => ({
  ...mockedWellboreResultFixture[0],
  wellId: mockedWellResultFixture[0].id,
});

export const mockedWellboreResultFixture = [
  { parentId: 7591554097499339, id: 75915540932488339 },
  { parentId: 75915540932488339, id: 75915540932499340 },
];
