import Carousel from "react-bootstrap/Carousel";
import Modals from "./Modals";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";

const galleyData = [
  {
    author: "Leonardo da vinci",
    img: "https://cdn.britannica.com/24/189624-131-BAF1184D/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
  },
  {
    author: "Pablo Picasso",
    img: "https://i.pinimg.com/736x/68/3b/eb/683bebfdb0a128ea772db65c462a23e9--fine-art-paintings-portrait-paintings.jpg",
  },
  {
    author: "S. N. Souza",
    img: "https://cdn.theculturetrip.com/wp-content/uploads/2016/10/va_dali_diner_pr_148_149_1608151836_id_1071940-650x463.jpg",
  },
  {
    author: "M F Hussain",
    img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bright-lights-in-the-forrest-kim-castor.jpg",
  },
  {
    author: "Jasper John",
    img: "https://cdn.wallpapersafari.com/83/75/wonJSQ.jpg",
  },
  {
    author: "Jackson Pollock",
    img: "https://i.pinimg.com/originals/da/bf/21/dabf2115ac40b487f39d60de4c9565ab.jpg",
  },
  {
    author: "Tyeb Mehta",
    img: "https://image.invaluable.com/housePhotos/shannons/96/675996/H0014-L214066369.jpg",
  },
  {
    author: "Marc Chagall",
    img: "https://www.marineinsight.com/wp-content/uploads/2022/09/A-First-Rate-Man-of-War-Driven-Onto-a-Reef-of-Rocks-Floundering-in-a-Gale.jpg",
  },
  {
    author: "Robertson",
    img: "https://t4.ftcdn.net/jpg/05/70/77/23/360_F_570772384_VCIMLO7Q6sdNqbu4GeE8ROJc7aUmIZoR.jpg",
  },
  {
    author: "Satish Gujral",
    img: "https://www.innu.in/images/products/10334_P_87_-_Kids_playing_in_rain.jpg",
  },
];

const carousalData = [
  {
    author: "Leonadro da vinci",
    img: "https://thumbs.dreamstime.com/b/oil-painting-cable-car-san-francisco-oil-painting-cable-car-san-francisco-178839884.jpg",
  },
  {
    author: "Robertson",
    img: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    author: "Noumaan Ansari",
    img: "https://p1.liveauctioneers.com/3242/285297/150474261_1_x.jpg?height=600&quality=95&version=1681756276&width=600",
  },
  {
    author: "TDP Vista",
    img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/stripe-landscape-sp-soni.jpg",
  },
];

const Gallery = () => {
  const [temp, setTemp] = useState([]);

  const [ModalOn, setModalOpen] = useState(false);
  const GalleryCard = ({ value }) => {
    return (
      <div
        className="galleycard"
        onClick={() => {
          setTemp(value);
          return setModalOpen(true);
        }}
      >
        <div
          className="galleybtnimg"
          style={{ backgroundImage: `url(${value.img})` }}
        ></div>
        <div id="galleyCardTitle">
          <h4>{value.author}</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      {ModalOn ? (
        <Modal
          show={ModalOn}
          fullscreen={true}
          onHide={() => setModalOpen(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{temp.author}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              background: `url(${temp.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "auto",
              backgroundColor: "black",
            }}
          ></Modal.Body>
        </Modal>
      ) : (
        <div className="carouselContainer">
          <div className="car">
            <Carousel>
              {carousalData.map((e) => {
                return (
                  <Carousel.Item>
                    <img
                      className="b-block w-100"
                      src={e.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <div id="caroCaptio">
                        <h1>{e.author}</h1>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>

          <div className="gc-Container">
            {galleyData.map((e) => {
              return <GalleryCard value={e} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

// const GalleryCard = () => {
//   const [ModalOn, setModalOpen] = useState(false);

//   return (
//     <div
//       className="galleycard"
//       onClick={() => {
//         console.log(ModalOn);

//         ModalOpen =true;
//        return setModalOpen(true)

//       }}
//     >
//       <div
//         className="galleybtnimg"
//         style={{ backgroundImage: "url(https://placehold.co/100x100)" }}
//       ></div>
//       <div id="galleyCardTitle">
//         <h4>M F Hussain</h4>
//       </div>
//     </div>
//   );
// };

export default Gallery;
