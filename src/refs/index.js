import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {
  <button ref={ref}>
    {props.children}
  </button>
})

const ref = React.createRef()
return (< FancyButton ref={ref}>Click me! </FancyButton>)