import React from 'react'
import usePipo from './usePipo'

const Pipo = () => {
    const [pipo,makePipo] = usePipo()
    console.log(pipo)
    console.log(makePipo("morsalin"))
    return (
        <div>
            {makePipo("morsalin")}
        </div>
    )
}

export default Pipo
