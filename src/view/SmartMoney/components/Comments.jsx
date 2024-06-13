import React, { useState } from 'react';
import { IndividualComentario, IndividualComentarioText } from '../styled';
import { GetStorageObjet } from '../../../helper/LocalStorage';

function Comments({ comments }) {
   
    return (
        <>
            {comments.map((data, index) => (
                <IndividualComentario    
                    
                    key={index}
                >
               
                    <div className='individual-comment-img'>
                        {/* <img src="" alt="" /> */}
                    </div>

                    <IndividualComentarioText
                        colorBorder={GetStorageObjet("school").cl_border}
                        bgimg={require(`../../../${ GetStorageObjet("school").bg_btns }`)}   
                    >
                        <h6>Tutor: {data.user} </h6>
                        <p>{data.comentarion}</p>
                       
                    </IndividualComentarioText>
                   
                    <div className='date-commets'><p>Respuesta - hace un momento</p></div>
                </IndividualComentario>
            ))}
        </>
    );
}

export { Comments };