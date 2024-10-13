import React from 'react'
import PriceCard from '../components/PriceCard'



function MemberShip() {
  return (
    <div>
        <div className='affordable flex flex-col gap-8'>
            <div><h1 className='darkText text-5xl text-center font-bold'>Affordable pricing</h1></div>
            <div className='flex justify-center gap-8 py-12'>
               <PriceCard price={"Free"} duration={"Forever"} iconColor={"text-gray-400"}/>
               <PriceCard price={"24"} duration={"Month"} iconColor={"text-yellow-400"} className={"shadow-2xl"} buttonText='text-white'  buttonColor="darkColor"/>
               <PriceCard price={"12"} duration={"Editor"} iconColor={"darkText"}/>
            </div>
        </div>











    </div>
  )
}

export default MemberShip