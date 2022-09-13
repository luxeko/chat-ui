/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

const PREFIX = 'USER_'

export default function usingLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue  != null) return JSON.parse(jsonValue)
        if(typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
