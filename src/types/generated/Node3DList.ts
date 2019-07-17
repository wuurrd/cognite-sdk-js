export interface Node3DList {
    items: Node3DListItem[];
}

export interface Node3DListItem {
    /**
     * The bounding box of the subtree with this sector as the root sector. Is null if there are
     * no geometries in the subtree.
     */
    boundingBox: Node3DListBoundingBox;
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
}

/**
 * The bounding box of the subtree with this sector as the root sector. Is null if there are
 * no geometries in the subtree.
 */
export interface Node3DListBoundingBox {
    max: number[];
    min: number[];
}
