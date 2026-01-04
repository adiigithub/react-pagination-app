import React from 'react'

const Pages = ({
  current,
  handelLeftButton,
  handelRightButton,
  noOfPages,
  handelPage
}) => {
  return (
    <div className="products-contain">
      <button disabled={current===0} onClick={handelLeftButton} >◀️</button>
      {
        [...Array(noOfPages).keys().map(n=>(
          <span className={"products-number "+ (n===current ? "active": "")} key={n} 
          onClick={()=>handelPage(n)}
          >
            {n}
          </span>

        ))]
      }
      <button disabled={current===noOfPages-1} onClick={handelRightButton}>▶️</button>
    </div>
  )
}

export default Pages