import React from 'react'

export const Data = (props) => {
    // console.log(props)
    const {imageData} = props;
  return (
    <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
    </div>
  )
}
