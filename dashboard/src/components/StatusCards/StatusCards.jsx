import React from 'react'
import StatusCard from './StatusCard'
import statusDatas from '../../data/statusDatas';

function StatusCards() {
  return (
    <div className='flex flex-row items-center justify-center gap-6'>
        {statusDatas.map((item) => {
            return (
                <StatusCard key={item.id} item={item} />
            )
        } )}
    </div>
  )
}

export default StatusCards