import React from 'react'
import './Proxy.css'

export default props => {

  const cards = props.state.map(
    value => (
      <div key={value.id} className="frame">
        <img src={value.url} alt="" className="card"/>
        <input className="input"
          onChange={node => props.changeUrl(value.id, node.target.value)}/>
      </div>
    )
  )

  return (
    <>
      {cards}
    </>
  )
}
