import React from 'react'
import ListItem from '../components/ListItem';

function PriceCard({packageIcon, price,duration, shadow = "hover:shadow-2xl", className,packageText, iconColor, buttonColor = "bg-white", buttonText = "darkText", topButton, topBtnClass}) {
  return (
    <div className={`priceCard p-8 rounded-3xl bg-white ${shadow} ${className}`}>
    <div className="top flex flex-row flex-nowrap justify-between">
    <div className='flex flex-row gap-1 items-center justify-center'>
    {packageIcon}
    <p className='darkText font-bold'>{packageText}</p>
    </div>
    <p className={`py-2 px-4 font-semibold border-black rounded-full ${topBtnClass}`}>{topButton}</p>
    </div>
    <div className="price flex justify-start items-end">
        <h1 className="text-4xl font-black">${price}</h1>
        <p>/ {duration}</p>
    </div>
    <div className='list'>
        <ul className='py-4'>
            <ListItem iconColor={iconColor} />
            <ListItem iconColor={iconColor} text='Sales-boosting landing pages'/>
            <ListItem iconColor={iconColor} text='Awsome Feather icon pack'/>
            <ListItem iconColor={iconColor} text='Themed into 3 different styles'/>
            <ListItem iconColor={iconColor} text='Will help to learn Figma'/>
        </ul>
            <button className={`rounded-2xl font-bold w-full py-3 text-xl border-2 ${buttonColor} ${buttonText}`}>Regular license</button>
    </div>
</div>
  )
}

export default PriceCard