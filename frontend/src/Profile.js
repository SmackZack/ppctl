import { useState, useEffect } from 'react'
import axios from 'axios'

export default function profile(params) {
    const [profiel, setProfile] = useState('')

    useEffect(async () => {
        const data = await axios.post('/getProfile')
    })

    return (
        <div>
            {{ data }}
        </div>
    )
};
