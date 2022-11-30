import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual'
import { Row } from '../Row/Row';

export const Group = ({getEvents, extraProps, data}) => {
  const parentRef = useRef(null)

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  })

  return (
    <div
      ref={parentRef}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <div>
              <Row
                data={data[virtualRow.index]} 
                extraProps={extraProps} 
                getEvents={getEvents}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}