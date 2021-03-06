import React from 'react'
import {Typography} from '@material-ui/core'
import {StarDiv} from '../../css/boxers'
import ReactStars from 'react-rating-stars-component';

const Stars = ({starRating,handleStarDivClick}) => {
    const star = ['speed','power','defense','stamina','ringGeneralship'];
    const stars = (star,getStarValues) => {
        return star.map((x,i) => {
            return (
                <StarDiv 
                    onClick={handleStarDivClick}
                    key={i}
                    id={x}>
                    <Typography style={{width: '30%'}} variant='overline'>{x === 'ringGeneralship' ? 'Ring Generalship' : x}</Typography>
                    <ReactStars
                        activeColor="#ffd700"
                        count={5}
                        isHalf
                        size={20}
                        onChange={starRating}
                    />

                </StarDiv>

            )
       });
    };
    return (
        <>
        {   
            stars(star)
        }        
        </>
    )

}

export default Stars