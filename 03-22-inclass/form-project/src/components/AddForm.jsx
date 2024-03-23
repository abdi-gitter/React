// This form is responsible for adding a new house to the list of houses.

// in order to do this, we need references to:
// showForm - a boolean that will determine if the form is displayed
// handleClose - a function that will close the form
// addHouse - a function that will add a house to the list of houses

import React from 'react'
// All these are, are bootstrap components!
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import {useState} from 'react'

export default function AddForm({showForm, handleClose, addHouse}) {

  // state values for a house object:
  // image, price, bed, bath
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [bed, setBed] = useState('')
  const [bath, setBath] = useState('')

  const handleAdd = ()=>{
    addHouse({
      id: Date.now(),
      image,
      price,
      bed,
      bath
    })

    // reset form values
    setImage('')
    setPrice('')
    setBed('')
    setBath('')

    // close modal:
    handleClose()
  }

  return (
    <Modal show={showForm} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ADD House</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>House Image</Form.Label>
            <Form.Control type="text" placeholder="https://www.image.com" value ={image} onChange={(e)=>setImage(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>House Price</Form.Label>
            <Form.Control type="text" placeholder="$1000" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Number of Bedrooms</Form.Label>
            <Form.Select value={bed} onChange={(e)=>setBed(e.target.value)}>
              {[1, 2, 3, 4,5,6,7].map((num, i) => (
                <option key={i} value={num}>
                  {num}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of Bathrooms</Form.Label>
            <Form.Select value={bath} onChange={(e)=>setBath(e.target.value)}>
              {[1, 2, 3, 4,5,6,7].map((num, i) => (
                <option key={i} value={num}>
                  {num}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleAdd}>ADD</Button>
      </Modal.Footer>
    </Modal>
  );
}
