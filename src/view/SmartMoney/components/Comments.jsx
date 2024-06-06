import React from 'react';
import { IndividualComentario, IndividualComentarioText } from '../styled';
import { GetStorageObjet } from '../../../helper/LocalStorage';

function Comments({ comments }) {
    return (
        <>
            {comments.map((_, index) => (
                <IndividualComentario    
                    
                    key={index}
                >
               
                    <div className='individual-comment-img'>
                        {/* <img src="" alt="" /> */}
                    </div>

                    <IndividualComentarioText
                        colorBorder={GetStorageObjet("schoolId").cl_border}
                        bgimg={require(`../../../${ GetStorageObjet("schoolId").bg_btns }`)}   
                    >
                        <h6>Tutor:</h6>
                        <p>Lorem ipsu</p>
                       
                    </IndividualComentarioText>
                   
                    <div className='date-commets'><p>Respuesta - hace un momento</p></div>
                </IndividualComentario>
            ))}
        </>
    );
}

export { Comments };