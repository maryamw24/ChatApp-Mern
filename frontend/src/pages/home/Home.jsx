import React from 'react'
import SideBar from '../../Components/SideBar/SideBar' 
import MessageContainer from '../../Components/MessageContainer/MessageContainer'

//import MessageBox from '../../Components/MessageBox/MessageBox'


const Home = () => {
  return (
    <div className = 'flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <SideBar/>
      <MessageContainer/> 
    </div>
  )
}

export default Home
