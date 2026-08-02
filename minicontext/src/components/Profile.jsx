import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import { div } from 'framer-motion/client'
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
