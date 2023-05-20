import React from 'react'
import Fourthnav from '../components/subjects_navebar/Fourthnav'
import Java from '../components/subjects_cards/fourth/java'
import Software_engineering from '../components/subjects_cards/fourth/software_engi'
import Cyber_security from '../components/subjects_cards/fourth/cyber_security'
import E_commerce from '../components/subjects_cards/fourth/Ecommerce'

const Unit4 = () => {
  return (
    <>
    <Fourthnav/>
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           <Java />
           <Software_engineering />
           <Cyber_security />
           <E_commerce/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Unit4