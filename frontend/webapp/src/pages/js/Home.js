import React from 'react'
import IndividualIntervalsExample from '../../components/js/Carousel'
export default function Home() {

  const abstyle = {
    textAlign:'center'
  };
  return (
    <>
    <h1  style={abstyle}>This is home page</h1>
    <div className='home-main'>
      <IndividualIntervalsExample/>
    </div>
    </>
  )
}
