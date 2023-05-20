import React from 'react'
import Fifthnav from '../components/subjects_navebar/Fifthnav'
import Dotnet from '../components/subjects_cards/fifthsem/dotnet'
import Php from '../components/subjects_cards/fifthsem/php'
import Maths from '../components/subjects_cards/fifthsem/maths'
import Appdev from '../components/subjects_cards/fifthsem/appdev'


const Unit5 = () => {
  return (
    <>
    <Fifthnav />
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           <Dotnet />
           <Php />
           <Maths />
           <Appdev />
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Unit5