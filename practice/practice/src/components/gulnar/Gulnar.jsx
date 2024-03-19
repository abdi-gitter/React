import React from 'react'
import './Gulnar.css'
import moduleStyles from './Gulnar.module.css'
import './Gulnar.scss'


export default function Gulnar() {
  const border = true;  
  const cats = [{
    id: 1,
    img: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    name: "Cat 1",
    desc: "Cat 1 description"
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg",
    name: "Cat 2",
    desc: "Cat 2 description"
  }]  

  const cardStyles = {
    cardImg: {
        width: 250,
        height: 150
    },
    cardBody: {
        padding: 10,
        margin: 10
    }
  }
  return (
    <div id="gulnar" className={moduleStyles.class}>
        {cats.map(cat=>{
            return <div class={border ? 'card border' : 'card'} key={cat.id}>
              <img style={cardStyles.cardImg} src={cat.img} alt={cat.name} />
              <div style={cardStyles.cardBody} >
                <h4 class="card-title">{cat.name}</h4>
                <p class="card-text">{cat.desc}</p>
              </div>
              <button className='likeBtn'>Like</button>
            </div>
        })}
        
        {/* 
            External CSS
            Inline CSS
            CSS Module
            SASS
            set one conditional style
        */}
    </div>
  )
}
