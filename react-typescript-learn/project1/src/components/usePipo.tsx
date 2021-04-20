import React from 'react'

const usePipo = () => {
    const [pipo,setPipo] = React.useState<any | null>()

    function makePipo(div:[any]){

        return <div>MOrsalin</div>
    }
    return [pipo,makePipo]
}

export default usePipo
