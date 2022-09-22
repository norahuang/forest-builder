//% emitAsConstant
enum Tree {
    //% blockIdentity="blocks.tree" enumval=6 block="OakSapling"
    //% jres alias=OAK_SAPLING
    OakSapling = 6,
    //% blockIdentity="blocks.tree" enumval=65542 block="SpruceSapling"
    //% jres alias=SPRUCE_SAPLING
    SpruceSapling = 65542,
    //% blockIdentity="blocks.tree" enumval=131078 block="BirchSapling"
    //% jres alias=BIRCH_SAPLING
    BirchSapling = 131078,
    //% blockIdentity="blocks.tree" enumval=196614 block="JungleSapling"
    //% jres alias=JUNGLE_SAPLING
    JungleSapling = 196614,
    //% blockIdentity="blocks.tree" enumval=262150 block="AcaciaSapling"
    //% jres alias=ACACIA_SAPLING
    AcaciaSapling = 262150,
    //% blockIdentity="blocks.tree" enumval=327686 block="DarkOakSapling"
    //% jres alias=DARK_OAK_SAPLING
    DarkOakSapling = 327686
}


/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" icon="\uf1bb" weight=100
namespace forestBuilder {
    /**
     * @param size
     * @param tree
     */
    //% blockId=minecraftForest block="forest with %size| of %tree=minecraftTree"
    export function forest(size: number, tree: number) {
        blocks.fill(
            DIRT,
            posCamera(-size / 2, 0, 5),
            posCamera(size / 2, size, 5 + size),
            FillOperation.Replace
        )
        blocks.fill(
            tree,
            posCamera(-size / 2 + 1, 1, 6),
            posCamera(size / 2 - 1, size - 1, 4 + size),
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
            case Tree.DarkOakSapling: return Block.DarkOakSapling
        }
    }
}