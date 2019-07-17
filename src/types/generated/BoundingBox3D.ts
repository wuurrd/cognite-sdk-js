/**
 * The bounding box of the subtree with this sector as the root sector. Is null if there are
 * no geometries in the subtree.
 */
export interface BoundingBox3D {
    max: number[];
    min: number[];
}
