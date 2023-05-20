import React from 'react'
import Sixthnav from '../components/subjects_navebar/sixthnav'
import Cloud_computing from '../components/subjects_cards/sixthsem/cloudcomputing'
import Tally from '../components/subjects_cards/sixthsem/tally'
import Social_media from '../components/subjects_cards/sixthsem/socialmedia'
import Video_editing from '../components/subjects_cards/sixthsem/videoediting'

const Unit6
 = () => {
  return (
   <>
   <Sixthnav />
   <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Cloud_computing />
            <Tally />
            <Social_media/>
            <Video_editing />
            
          </div>
        </div>
      </section>
   </>
  )
}

export default Unit6
