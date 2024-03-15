import React from 'react';
// import gambarSaya from './images/jett.jpg';

const Gambar = () => {
    const imagePath = './images/jett.jpg';
  return (
    <div>
        <img src="./images/jett.jpg" alt="jett" width={300} height={200} />
        <img src="https://picsum.photos/id/237/1200/300" alt="random img" />
        {/* <img src={require('./images/jett.jpg')} alt="deskripsi gambar" width={300} /> */}

        {/* Image with path value */}
        <img src={imagePath} alt="jett" width={300} height={200} />
        {/* Image with Import */}
        {/* <img src={gambarSaya} alt="jett" width={300} height={200} /> */}
    </div>
  )
}

export default Gambar