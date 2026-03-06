import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) =>
{
    return (
        <div className = 'Card'>
        <div className = 'Top'>
          <img src= {props.brandLogo} alt='company logo'/>
          <button>Save <Bookmark size={18}/></button>
        </div>
        <div className="Center">
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className='Tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
        </div>
        <div className="Bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    )
}

export default Card;