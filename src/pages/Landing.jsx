import React from 'react'
import Button from "../components/Button"
function Landing() {
  return (
    <div>
            <div className='roundShape darkColor w-full flex' style={{width: "1920"}}>
                    <div className="text lg:w-[50%] lg:px-36 h-full min-h-96 flex flex-col lg:pt-48 items-start text-start">
                        <h1 className='text-4xl font-bold'><span className='text-orange-400'>Studing</span> Online is now much easier</h1>
                        <p>TOTC is an interesting plateform that will teach you is more an interactive way</p>
                        <div className='flex gap-3 items-center'>
                            <Button title={"Join for free"} className={"lightColor min-w-36"}/>
                            <Button title={"|>"} className={"bg-white text-sky-400 max-w-10"}/>
                            <span>Watch how it works</span>                        
                        </div>
                    </div>
                    <div className="picture flex  lg:w-[50%] min-h-96 h-full justify-center items-center overflow-hidden">
                        <img className='h-full overflow-hidden' src="" alt="" />
                        
                    </div>
            </div>
    </div>
  )
}


export default Landing