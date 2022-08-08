export const MAIN_NODES_IDS = ['n2', 'n3', 'n4', 'n5', 'n6', 'n7']

export const CONDENSED_NODES = {
  elements: [
    // main nodes
    {
      data: {
        id: 'n1',
        name: 'Blockchain',
        width: 200,
        height: 200,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943547/n1.png')`,
      },
      position: { x: 0, y: 0 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[0],
        name: 'Wallet',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943548/n2.png')`,
      },
      position: { x: -85, y: -150 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[1],
        name: 'Browser',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943552/n3.png')`,
      },
      position: { x: -175, y: 0 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[2],
        name: 'Routing',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n4.png')`,
      },
      position: { x: -85, y: 150 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[3],
        name: 'Identity',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n5.png')`,
      },
      position: { x: 85, y: 150 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[4],
        name: 'Messaging',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n6.png')`,
      },
      position: { x: 175, y: 0 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[5],
        name: 'Marketplace',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943550/n7.png')`,
      },
      position: { x: 85, y: -150 },
      grabbable: false,
    },
  ],
}

export const EXPANDED_NODES = {
  elements: [
    // main nodes
    {
      data: {
        id: 'n1',
        name: 'Blockchain',
        width: 200,
        height: 200,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943547/n1.png')`,
      },
      position: { x: 0, y: 0 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[0],
        name: 'Wallet',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943548/n2.png')`,
      },
      position: { x: 0, y: -300 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[1],
        name: 'Browser',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943552/n3.png')`,
      },
      position: { x: -300, y: -150 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[2],
        name: 'Routing',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n4.png')`,
      },
      position: { x: -300, y: 150 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[3],
        name: 'Identity',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n5.png')`,
      },
      position: { x: 0, y: 300 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[4],
        name: 'Messaging',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n6.png')`,
      },
      position: { x: 300, y: 150 },
      grabbable: false,
    },
    {
      data: {
        id: MAIN_NODES_IDS[5],
        name: 'Marketplace',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943550/n7.png')`,
      },
      position: { x: 300, y: -150 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n2x1',
        name: 'n2x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 50, y: -150 },
      grabbable: false,
    },
    {
      data: {
        id: 'n2x2',
        name: 'n2x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -75, y: -175 },
      grabbable: false,
    },
    {
      data: {
        id: 'n3x1',
        name: 'n3x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -150, y: -75 },
      grabbable: false,
    },
    {
      data: {
        id: 'n3x2',
        name: 'n3x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -250, y: -25 },
      grabbable: false,
    },
    {
      data: {
        id: 'n4x1',
        name: 'n4x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -150, y: 75 },
      grabbable: false,
    },
    {
      data: {
        id: 'n4x2',
        name: 'n4x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -175, y: 175 },
      grabbable: false,
    },
    {
      data: {
        id: 'n5x1',
        name: 'n5x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 75, y: 150 },
      grabbable: false,
    },
    {
      data: {
        id: 'n5x2',
        name: 'n5x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -50, y: 175 },
      grabbable: false,
    },
    {
      data: {
        id: 'n6x1',
        name: 'n6x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 150, y: 75 },
      grabbable: false,
    },
    {
      data: {
        id: 'n6x2',
        name: 'n6x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 250, y: 25 },
      grabbable: false,
    },
    {
      data: {
        id: 'n7x1',
        name: 'n7x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 175, y: -75 },
      grabbable: false,
    },
    {
      data: {
        id: 'n7x2',
        name: 'n7x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 175, y: -175 },
      grabbable: false,
    },

    // edges
    { data: { source: 'n1', target: 'n2', directed: true } },
    { data: { source: 'n1', target: 'n3', directed: true } },
    { data: { source: 'n1', target: 'n4', directed: true } },
    { data: { source: 'n1', target: 'n5', directed: true } },
    { data: { source: 'n1', target: 'n6', directed: true } },
    { data: { source: 'n1', target: 'n7', directed: true } },
    // edges for extensions
    { data: { source: 'n2', target: 'n2x1', directed: true } },
    { data: { source: 'n2', target: 'n2x2', directed: true } },
    { data: { source: 'n3', target: 'n3x1', directed: true } },
    { data: { source: 'n3', target: 'n3x2', directed: true } },
    { data: { source: 'n4', target: 'n4x1', directed: true } },
    { data: { source: 'n4', target: 'n4x2', directed: true } },
    { data: { source: 'n5', target: 'n5x1', directed: true } },
    { data: { source: 'n5', target: 'n5x2', directed: true } },
    { data: { source: 'n6', target: 'n6x1', directed: true } },
    { data: { source: 'n6', target: 'n6x2', directed: true } },
    { data: { source: 'n7', target: 'n7x1', directed: true } },
    { data: { source: 'n7', target: 'n7x2', directed: true } },
  ],
}

export const DYNAMIC_NODES = {
  elements: [
    // node 2
    {
      data: {
        id: MAIN_NODES_IDS[0],
        name: 'Wallet',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943548/n2.png')`,
      },
      position: { x: -170, y: -300 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n2x1',
        name: 'n2x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -50, y: -225 },
      grabbable: false,
    },
    {
      data: {
        id: 'n2x2',
        name: 'n2x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -170, y: -165 },
      grabbable: false,
    },
    // edges
    { data: { source: 'n1', target: 'n2', directed: true } },
    { data: { source: 'n2', target: 'n2x1', directed: true } },
    { data: { source: 'n2', target: 'n2x2', directed: true } },
    // ========================================================================

    // node 3
    {
      data: {
        id: MAIN_NODES_IDS[1],
        name: 'Browser',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943552/n3.png')`,
      },
      position: { x: -300, y: 0 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n3x1',
        name: 'n3x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -190, y: 65 },
      grabbable: false,
    },
    {
      data: {
        id: 'n3x2',
        name: 'n3x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -190, y: -65 },
      grabbable: false,
    },
    // edges
    { data: { source: 'n1', target: 'n3', directed: true } },
    { data: { source: 'n3', target: 'n3x1', directed: true } },
    { data: { source: 'n3', target: 'n3x2', directed: true } },
    // ========================================================================

    // node 4
    {
      data: {
        id: MAIN_NODES_IDS[2],
        name: 'Routing',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n4.png')`,
      },
      position: { x: -170, y: 300 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n4x1',
        name: 'n4x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -50, y: 225 },
      grabbable: false,
    },
    {
      data: {
        id: 'n4x2',
        name: 'n4x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: -170, y: 165 },
      grabbable: false,
    },
    // edges
    { data: { source: 'n1', target: 'n4', directed: true } },
    { data: { source: 'n4', target: 'n4x1', directed: true } },
    { data: { source: 'n4', target: 'n4x2', directed: true } },
    // ========================================================================

    // node 5
    {
      data: {
        id: MAIN_NODES_IDS[3],
        name: 'Identity',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n5.png')`,
      },
      position: { x: 170, y: 300 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n5x1',
        name: 'n5x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 50, y: 225 },
      grabbable: false,
    },
    {
      data: {
        id: 'n5x2',
        name: 'n5x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 170, y: 165 },
      grabbable: false,
    },
    // edges
    { data: { source: 'n1', target: 'n5', directed: true } },
    { data: { source: 'n5', target: 'n5x1', directed: true } },
    { data: { source: 'n5', target: 'n5x2', directed: true } },
    // ========================================================================

    // node 6
    {
      data: {
        id: MAIN_NODES_IDS[4],
        name: 'Messaging',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943541/n6.png')`,
      },
      position: { x: 300, y: 0 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n6x1',
        name: 'n6x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 190, y: 65 },
      grabbable: false,
    },
    {
      data: {
        id: 'n6x2',
        name: 'n6x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 190, y: -65 },
      grabbable: false,
    },
    // edges
    { data: { source: 'n1', target: 'n6', directed: true } },
    { data: { source: 'n6', target: 'n6x1', directed: true } },
    { data: { source: 'n6', target: 'n6x2', directed: true } },
    // ========================================================================

    // node 7
    {
      data: {
        id: MAIN_NODES_IDS[5],
        name: 'Marketplace',
        width: 150,
        height: 150,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656943550/n7.png')`,
      },
      position: { x: 170, y: -300 },
      grabbable: false,
    },
    // extensions
    {
      data: {
        id: 'n7x1',
        name: 'n7x1',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 50, y: -225 },
      grabbable: false,
    },
    {
      data: {
        id: 'n7x2',
        name: 'n7x2',
        width: 75,
        height: 75,
        image: `url('https://res.cloudinary.com/vmc08/image/upload/v1656990610/placeholder.png')`,
      },
      position: { x: 170, y: -165 },
      grabbable: false,
    },
    // edges
    { data: { source: 'n1', target: 'n7', directed: true } },
    { data: { source: 'n7', target: 'n7x1', directed: true } },
    { data: { source: 'n7', target: 'n7x2', directed: true } },
    // ========================================================================
  ],
}
