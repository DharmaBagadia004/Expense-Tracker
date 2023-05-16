import React from 'react'
import { useWindowSize } from '../../utils/useWindowSize'

function Orb() {
    const {width,height}  = useWindowSize()

    console.log(width,height)
    return(
        <div className='Orb'></div>
    )
}

export default Orb