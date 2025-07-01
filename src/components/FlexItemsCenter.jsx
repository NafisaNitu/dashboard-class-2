import React from 'react'

function FlexItemsCenter({children, className=''}) {
  return (
    <div className={`flex items-center ${className}`}>
        {children}
    </div>
  )
}

export default FlexItemsCenter