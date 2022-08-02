import React from 'react';
import ReactLoading from 'react-loading';
function Loading(props) {
    return (
        <div>
            <ReactLoading type='bars' color='#8d99ae' height={250} width={250} />
        </div>
    );
}

export default Loading;