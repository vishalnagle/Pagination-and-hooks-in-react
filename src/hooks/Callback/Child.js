import React,{memo} from 'react'

const Child = ({Learning}) => {
    console.log("child component")
  return (<>
    <h3>Child</h3>
    </>
  )
}

export default memo(Child)