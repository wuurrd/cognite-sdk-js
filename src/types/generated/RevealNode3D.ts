export interface RevealNode3D {
    /**
     * The bounding box of the subtree with this sector as the root sector. Is null if there are
     * no geometries in the subtree.
     */
    boundingBox: RevealNode3DBoundingBox;
    /**
     * The depth of the node in the tree, starting from 0 at the root node.
     */
    depth: number;
    /**
     * The ID of the node.
     */
    id: number;
    /**
     * The name of the node.
     */
    name: string;
    /**
     * The parent of the node, null if it is the root node.
     */
    parentId: number;
    /**
     * The number of descendants of the node, plus one (counting itself).
     */
    subtreeSize: number;
    /**
     * The index of the node in the 3D model hierarchy, starting from 0. The tree is traversed
     * in a depth-first order.
     */
    treeIndex: number;
    /**
     * The sector the node is contained in.
     */
    sectorId?: number;
}

/**
 * The bounding box of the subtree with this sector as the root sector. Is null if there are
 * no geometries in the subtree.
 */
export interface RevealNode3DBoundingBox {
    max: number[];
    min: number[];
}
