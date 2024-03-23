import React from 'react'
import './Main.scss'
import Card from './Card'
import {products} from '../../products'

export default function Main() {
  // const lessThan50 = products.filter((item)=> {
  //     return item.price < 50;   
  // })

  // //find product that has max price,
  // const sortedProducts = products.sort((a,b)=>{
  //   return a.price - b.price;
  // })

  // const maxPricedProduct = sortedProducts[sortedProducts.length-1]

  //identify all the categories uniquely
  const categories = products.reduce((acc,item)=>{
    if(!acc.includes(item.category)){
      acc.push(item.category)
    }
    return acc;
  },['all'])

  // //filter all laptops
  // let fileteredProduct = products.filter((item)=> {
  //   return item.category === 'laptops';   
  // })

  //get first 20 product of which price is greater than 50,
  const greaterThan50 = products.filter((item)=> {
      return item.price > 50;   
  }).slice(0,20)


  return (
    <div className="Main">
      <div className= "category-container">
          {categories.map(item=><button key={item}>{item}</button>)}
      </div>
      <div className='Card-container'>
          {
          greaterThan50.map((item)=> <Card  key={item.id} {...item} /> )
          //fileteredProduct.map((item)=> <Card  key={item.id} {...item} /> )
          // <Card key={maxPricedProduct.id} {...maxPricedProduct}/>
          // lessThan50.map((item)=> <Card  key={item.id} {...item} /> )
          }
      </div>
    </div>
    
  )
}
