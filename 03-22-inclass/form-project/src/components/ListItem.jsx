import React from 'react'

const ListItem = ({house, removeHouse}) => {
    
  const {price, image, bed, bath, id} = house;

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3" >
    <div className="card" >
      <img className="card-img-top" src={image} alt="Card image cap" style={{maxHeight:'200px'}}/>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <b>Price</b>
            <span className="text-success">${price}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {bed}
            <span><i class="fa-solid fa-bed"></i></span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {bath}
            <span><i class="fa-solid fa-bath"></i></span>
          </li>
          <li className="list-group-item text-center">
              <button className="btn btn-danger" onClick={()=> removeHouse(id)}>REMOVE</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ListItem