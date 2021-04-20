import React from 'react'

const usePipo = () => {
    const [pipo,setPipo] = React.useState()

    function makePipo(text){
        return <div>{text}</div>
    }

    return [pipo,makePipo]
}

export default usePipo
