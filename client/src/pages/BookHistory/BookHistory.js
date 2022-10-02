import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useBookContext } from '../../hooks/useBookContext'


const BookHistory = () => {
  const {books} = useBookContext();
  return (
    <div>
      <Navbar/>
      <div>

      </div>
    </div>
  )
}

export default BookHistory
