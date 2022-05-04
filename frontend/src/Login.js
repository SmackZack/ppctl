import { useState, useEffect } from 'react'
import axios from 'axios'

export default function login(params) {

    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('1234')

    useEffect(async () => {
        const { token } = await axios.post('/login', { email, password })
        if (token) {
            localStorage.setItem('token', token)
        }
    })

    return (
        <div>
            {{ token }}
        </div>
    )

};
