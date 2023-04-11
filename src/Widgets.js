import React from 'react'
import "./Widgets.css"
import  Info from '@mui/icons-material/Info'
import  FiberManualRecord from '@mui/icons-material/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>

        {newsArticle("ChatGPT on fire",'Top news- 9009 readers')}
        {newsArticle("Bitcon Breaks $20k",'Crypto- 4039 readers')}
        {newsArticle("Tesla hits new highs",'Cars- 2564 readers')}
        {newsArticle("Redux new update way too good",'Code- 658 readers')}
        {newsArticle("Hemilton on Pole",'Sports- 700 readers')}
        {newsArticle("Yoga in your routine",'LifeStyle- 563 readers')}

    </div>
  )
}

export default Widgets