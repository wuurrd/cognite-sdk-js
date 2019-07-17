export interface AssetMapping3DList {
    items: AssetMapping3DListItem[];
}

export interface AssetMapping3DListItem {
    /**
     * The ID of the associated asset (Cognite's Assets API).
     */
    assetId: number;
    /**
     * The ID of the node.
     */
    nodeId: number;
    /**
     * The number of nodes in the subtree of this node (this number included the node itself).
     */
    subtreeSize: number;
    /**
     * A number describing the position of this node in the 3D hierarchy, starting from 0. The
     * tree is traversed in a depth-first order.
     */
    treeIndex: number;
}
