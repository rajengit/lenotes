import React from 'react'
import Thirdnav from '../components/subjects_navebar/thirdnav'
import Web_designing from '../components/subjects_cards/thirdsem/web_designing'
import Operating_system from '../components/subjects_cards/thirdsem/operating_system'
import Linux from '../components/subjects_cards/thirdsem/linux'
import RDBMS from '../components/subjects_cards/thirdsem/rdbms'


const Unit3 = () => {
  return (
    <>
    <Thirdnav/>
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Web_designing />
            <Operating_system />
            <Linux  />
            <RDBMS />
           
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Unit3