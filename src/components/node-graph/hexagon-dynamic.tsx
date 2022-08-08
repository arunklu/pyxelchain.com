import React, { useRef, useEffect } from 'react'
import cytoscape from 'cytoscape'
import popper from 'cytoscape-popper'
import { Box } from '@chakra-ui/react'
import tippy, { Instance, Props } from 'tippy.js'

import useMobileState from '@hooks/use-mobile-state'
import { CONDENSED_NODES, DYNAMIC_NODES, MAIN_NODES_IDS } from '@constants/graph-data'
interface HexagonDynamicProps {
  height?: number
  width?: number
  tappable?: boolean
}

cytoscape.use(popper)

const HexagonDynamic: React.FC<HexagonDynamicProps> = ({ width = 480, height = 480, tappable = true }) => {
  const toggleRef = useRef<Record<string, boolean>>({
    [MAIN_NODES_IDS[0]]: false,
    [MAIN_NODES_IDS[1]]: false,
    [MAIN_NODES_IDS[2]]: false,
    [MAIN_NODES_IDS[3]]: false,
    [MAIN_NODES_IDS[4]]: false,
    [MAIN_NODES_IDS[5]]: false,
  })
  const cytoscapeRef = useRef<cytoscape.Core>()
  const cytoscapeRefNodes = useRef<Record<string, Instance<Props>>>({})

  const isMobile = useMobileState()
  const boxRef = useRef<HTMLDivElement>(null)

  const derivedWidth = isMobile && boxRef.current ? width - 120 : width
  const derivedHeight = isMobile && boxRef.current ? height - 120 : height

  useEffect(() => {
    if (boxRef.current) {
      cytoscapeRef.current = cytoscape({
        container: boxRef.current,
        minZoom: 0.6,
        maxZoom: 3,
        userPanningEnabled: false,
        layout: {
          name: 'preset',
        },
        elements: CONDENSED_NODES.elements,
        style: [
          {
            selector: 'node',
            style: {
              'background-opacity': 0,
              'overlay-padding': '4px',
              'background-fit': 'contain',
              'background-clip': 'none',
              width: 'data(width)',
              height: 'data(height)',
              'background-image': 'data(image)',
            },
          },
          {
            selector: 'edge',
            style: {
              width: 2,
              'line-color': '#3a7ecf',
              opacity: 0.5,
            },
          },
        ],
      })
      if (tappable) {
        cytoscapeRef.current.on('tap', 'node', onTapHandler)
      }
      initializeTippy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxRef.current])

  const toggleAllOff = () => {
    const toggleValueObj = toggleRef.current
    Object.keys(toggleValueObj).forEach((key) => {
      toggleValueObj[key] = false
    })
  }

  const reformatGraphData = (nodeId: string, toggleValue: boolean) => {
    if (!toggleValue) {
      const newCondensedElements = CONDENSED_NODES.elements.filter((e) => e.data.id !== nodeId)
      const newEdges = DYNAMIC_NODES.elements.filter((e) => {
        return e.data.target === nodeId || e.data.source === nodeId
      })
      const newNodes = DYNAMIC_NODES.elements.filter((e) => {
        return newEdges.map((ne) => ne.data.target).includes(e.data.id)
      })
      return [...newCondensedElements, ...newEdges, ...newNodes]
    }
    return CONDENSED_NODES.elements
  }

  const onTapHandler = (event: cytoscape.EventObject) => {
    const _private = event.target?._private
    const cy = cytoscapeRef.current
    if (_private.data && _private.data.id !== 'n1' && cy) {
      const privateData = _private.data
      if (MAIN_NODES_IDS.includes(privateData.id)) {
        const toggleValue = toggleRef.current[privateData.id]
        const newElements = reformatGraphData(privateData.id, toggleValue)
        cy.elements().remove()
        if (toggleValue) {
          toggleAllOff()
        } else {
          toggleAllOff()
          toggleRef.current[privateData.id] = true
        }
        cy.add(newElements)
        cy.layout({
          name: 'preset',
          animate: true,
          fit: true,
        }).run()
        initializeTippy()
      }
    }
  }

  const initializeTippy = () => {
    const cy = cytoscapeRef.current
    if (cy) {
      cy.ready(function () {
        const makePopperWithTippy = (node: cytoscape.NodeSingular) => {
          const ref = node.popperRef() // used only for positioning

          // A dummy element must be passed as tippy only accepts dom element(s) as the target
          // https://atomiks.github.io/tippyjs/v6/constructor/#target-types
          const dummyDomEle = document.createElement('div')

          const tip = tippy(dummyDomEle, {
            // tippy props:
            getReferenceClientRect: ref.getBoundingClientRect, // https://atomiks.github.io/tippyjs/v6/all-props/#getreferenceclientrect
            trigger: 'manual', // mandatory, we cause the tippy to show programmatically.

            // your own custom props
            // content prop can be used when the target is a single element https://atomiks.github.io/tippyjs/v6/constructor/#prop
            content: () => {
              const content = document.createElement('div')
              content.innerHTML = node.data('name')
              return content
            },
          })
          cytoscapeRefNodes.current[node.id()] = tip
        }

        cy.nodes().forEach(makePopperWithTippy)
      })

      // cy.nodes().unbind('mouseover');
      // cy.nodes().bind('mouseover', (event) => {
      //  cytoscapeRefNodes.current[event.target.id()].show();
      // });

      // cy.nodes().unbind('mouseout');
      // cy.nodes().bind('mouseout', (event) => {
      //  cytoscapeRefNodes.current[event.target.id()].hide();
      // });
    }
  }

  return (
    <Box pos="relative">
      <Box ref={boxRef} w={derivedWidth} h={derivedHeight} />
    </Box>
  )
}

export default HexagonDynamic
