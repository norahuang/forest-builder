enum Tree {
    //% blockIdentity="blocks.tree" enumval=6 block="OakSapling"
    //% jres="Block.OakSapling" alias=OAK_SAPLING
    OakSapling = Block.OakSapling,
    //% blockIdentity="blocks.tree" enumval=65542 block="SpruceSapling"
    //% jres="Block.SpruceSapling" alias=SPRUCE_SAPLING
    SpruceSapling = Block.SpruceSapling,
    //% blockIdentity="blocks.tree" enumval=131078 block="BirchSapling"
    //% jres="Block.BirchSapling" alias=BIRCH_SAPLING
    BirchSapling = Block.BirchSapling,
    //% blockIdentity="blocks.tree" enumval=196614 block="JungleSapling"
    //% jres="Block.JungleSapling" alias=JUNGLE_SAPLING
    JungleSapling = Block.JungleSapling,
    //% blockIdentity="blocks.tree" enumval=262150 block="AcaciaSapling"
    //% jres="Block.AcaciaSapling" alias=ACACIA_SAPLING
    AcaciaSapling = Block.AcaciaSapling,
    //% blockIdentity="blocks.tree" enumval=327686 block="DarkOakSapling"
    //% jres="Block.DarkOakSapling" alias=DARK_OAK_SAPLING
    DarkOakSapling = Block.DarkOakSapling
}
namespace forestBuilder {
    /**
     * @param size
     * @param tree
     */
    //% blockId=minecraftForest block="forest with %size| of %tree"
    //% tree.shadow=minecraftTree
    export function forest(size: number, tree: number) {
        blocks.fill(
            DIRT,
            posCamera(-size / 2, 0, 5),
            posCamera(size / 2, 0.1, 5 + size),
            FillOperation.Replace
        )
        blocks.fill(
            tree,
            posCamera(-size / 2 + 1, 0.1, 6),
            posCamera(size / 2 - 1, 0.2, 4 + size),
            FillOperation.Replace
        )
    }

    //% blockId=minecraftTree 
    //% block="%input"
    //% tree.fieldEditor="gridpicker"
    export function tree(input: Tree): number {
        switch (input) {
            case Tree.OakSapling: return Block.OakSapling;
            case Tree.SpruceSapling: return Block.SpruceSapling;
            case Tree.BirchSapling: return Block.BirchSapling;
            case Tree.JungleSapling: return Block.JungleSapling;
            case Tree.AcaciaSapling: return Block.AcaciaSapling;
            case Tree.DarkOakSapling: return Block.DarkOakSapling;
            default: return Block.OakSapling
        }
    }
}
