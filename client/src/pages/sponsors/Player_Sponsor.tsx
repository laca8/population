import { useState } from 'react'
import Add from '../../components/sponsers/sposnsor_player/Add'
import { player_sponsor, objectId } from '../../types/type'
import Filter from '../../components/sponsers/sposnsor_player/Filter'

import Details from '../../components/sponsers/sposnsor_player/Details'

type obj = player_sponsor & objectId

const Player_Sponsor = () => {
    const [row, setRow] = useState<obj | null>(null);

    const [code, setCode] = useState('')
    const [name, setName] = useState('')

    return (
        <div className='container flex flex-col gap-4 '>
            <Add row={row} />
            <Filter name={name} setName={setName} code={code} setCode={setCode} />
            <Details setRow={setRow} row={row} name={name} code={code} />

        </div>
    )
}

export default Player_Sponsor