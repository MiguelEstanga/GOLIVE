import React from 'react';

function Comments({ comments }) {
    return (
        <>
            {comments.map((_, index) => (
                <div className='individual-comment' key={index}>
                    <div className='individual-comment-img'>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className='individual-comment-text'>
                            <h6>Tutor:</h6>
                            <p>Lorem ipsu</p>
                        </div>
                    <div className='date-commets'><p>Respuesta - hace un momento</p></div>
                </div>
            ))}
        </>
    );
}

export { Comments };