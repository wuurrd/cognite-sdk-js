export interface SetRevisionCameraProperties {
    /**
     * Initial camera position and target.
     */
    set?: Set;
}

/**
 * Initial camera position and target.
 */
export interface Set {
    /**
     * Initial camera position.
     */
    position?: number[];
    /**
     * Initial camera target.
     */
    target?: number[];
}
