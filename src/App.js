import React, { useState, useEffect } from 'react';
import B1 from './background_image1.jpeg';
import B2 from './background_image2.jpeg';
import B3 from './background_image3.jpeg';

import './App.css';
import Birthday from './BirthDay';

function App() {

  const [image, setImage] = useState({
    id: 1,
    img: B1
  });

  useEffect(() => {
    let interval = setInterval(() => {
      switch(image.id) {
        case 1: setImage({ id: 2, img: B2 }); break;
        case 2: setImage({ id: 3, img: B3 }); break;
        case 3: setImage({ id: 1, img: B1 }); break;
        default: setImage({ id: 1, img: B1 })
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [image])

  return (
    <div className='App' style={{ backgroundImage: `url(${image.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <Birthday />
    </div>
  );
}

export default App;
