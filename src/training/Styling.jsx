import React from 'react';
import './MyComponent.css';
// hanya sekali pakai
import styles from './MyComponent.module.css';

const Styling = () => {
  return (
    <div>
        {/* CSS inline */}
        <div style={{ backgroundColor: 'blue', color: 'white' }}>
            Halo, metro
        </div>
        {/* CSS File */}
        <div className='my-component'>
            Halo, metro
        </div>
        {/* CSS  Modules */}
        <div className='{styles.component}'>
            Halo, metro
        </div>
    </div>
  )
}

export default Styling