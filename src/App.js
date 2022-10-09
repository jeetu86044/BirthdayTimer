import React, { useState, useEffect } from 'react';
import B1 from './images/image1.jpeg';
import B2 from './images/image2.jpeg';
import B3 from './images/image3.jpeg';
import B4 from './images/image4.jpeg';
import B5 from './images/image5.jpeg';
import B6 from './images/image6.jpeg';
import B7 from './images/image7.jpeg';
import B8 from './images/image8.jpeg';
import B9 from './images/image9.jpeg';
import B10 from './images/image10.jpeg';
import B11 from './images/image11.jpeg';
import B12 from './images/image12.jpeg';
import B13 from './images/image13.jpeg';
import B14 from './images/image14.jpeg';
import B15 from './images/image15.jpeg';
import B16 from './images/image16.jpeg';
import B17 from './images/image17.jpeg';

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
        case 3: setImage({ id: 4, img: B4 }); break;
        case 4: setImage({ id: 5, img: B5 }); break;
        case 5: setImage({ id: 6, img: B6 }); break;
        case 6: setImage({ id: 7, img: B7 }); break;
        case 7: setImage({ id: 8, img: B8 }); break;
        case 8: setImage({ id: 9, img: B9 }); break;
        case 9: setImage({ id: 10, img: B10 }); break;
        case 10: setImage({ id: 11, img: B11 }); break;
        case 11: setImage({ id: 12, img: B12 }); break;
        case 12: setImage({ id: 13, img: B13 }); break;
        case 13: setImage({ id: 14, img: B14 }); break;
        case 14: setImage({ id: 15, img: B15 }); break;
        case 15: setImage({ id: 16, img: B16 }); break;
        case 16: setImage({ id: 17, img: B17 }); break;
        case 17: setImage({ id: 1, img: B1 }); break;
        default: setImage({ id: 15, img: B15 })
      }
    }, 5000);
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
