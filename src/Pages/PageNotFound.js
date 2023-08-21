import React from 'react'

function PageNotFound() {


    const style404 = {
        color: 'rgb(33, 209, 146)',
        fontSize: '48px',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px auto', // Center horizontally with some top margin
        textAlign: 'center',
      };

    return (
        <div className="PageNotFound" style={{textAlign:'center'}}>
            <h1 style={{fontSize:"80px", marginTop: '20px'}}>Page Not Found</h1>
            <div className="404-text" style={style404}>
                <p style={{ marginBottom: '50px' }}>Something went wrong. There is nothing to see here.</p>
            </div>
        </div>
    )
}

export default PageNotFound