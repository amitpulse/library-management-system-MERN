import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../additional_info/AdditionalInfo.css'

const AdditionalInfo = () => {
  const {user} = useAuthContext();
    const [userInfo, setUserInfo] = useState(null)

    // useEffect(() => {
    //    const fetchUserInfo = async () => {
    //       const response = await fetch('/api/userinfo/addinfo', {
    //         headers:{
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${user.token}`
    //         }

    //       })
    //   const json = await response.json()

    //       if(response.ok){
    //         setUserInfo(json)
    //       }
    //     }

    //     if(user){

    //       fetchUserInfo()
    //     }
    // }, [user])


  return (
    <div>
      <div>
        <h3>Admission : <span>{userInfo.admission}</span></h3>
        <h3>Gender : <span>{userInfo.gender}</span></h3>
        <h3>Blood Group : <span>{userInfo.bloodGroup}</span></h3>
        <h3>Emergency Contact No : <span>{userInfo.emergencyContact}</span></h3>
        <h3>Address: <span>{userInfo.address}</span></h3>
      </div>
    </div>
  )
}

export default AdditionalInfo
