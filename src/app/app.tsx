import { useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import OrderButton from './components/OrderButton';
import Header from './components/Header';
import Card from './components/Card';
import Paragraph from './components/Paragraph';

// load images
import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Footer from './components/Footer';

function App() {
  const wickedReference = useRef(null);

  useEffect(() => {
    const wickedElement = wickedReference.current;
    if (wickedElement == null) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wicked');
        }
      });
    });
    observer.observe(wickedElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="font-minionpro px-10 sm:px-20 lg:px-28 py-20 space-y-20">
        <div className="flex flex-col sm:flex-row" ref={wickedReference}>
          <div className="contents sm:flex sm:flex-1 sm:flex-col sm:justify-center space-y-12">
            <Header text={'Enjoy Delicious Sushi Food'} />
            <Paragraph
              text={
                "After A Good Dinner One Can Forgive Anybody, Even One's Own Relations"
              }
            />
            <OrderButton />
          </div>
          <div className="order-2 sm:flex-1">
            <img src={Img1} alt="" className="m-auto rounded-full" />
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <img src={Img2} alt="" className="m-auto rounded-full w-2/3" />
          </div>
          <div className="flex flex-1 flex-col justify-center space-y-12 p-8">
            <Header text={'We Provide Healthy Food'} />
            <Paragraph
              text={
                "Food For Us Comes From Our Relatives, Whether They Have Wings Or Fins Or Roots. That's How We Consider Food. Food Has A Culture. It Has History. It Has Story. It Has Relationship."
              }
            />
          </div>
        </div>

        <div className="flex justify-center flex-col space-y-8">
          <div className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center">
            Popular Dishes
          </div>
          <div className="flex flex-col sm:flex-row">
            <Card
              img={Img3}
              header={'Kawaii Sushi'}
              text={'Sushi Is A Japanese Dish Of Prepared Vinegared Rice..'}
              price={240}
            />
            <Card
              img={Img4}
              header={'Kawaii Sushi'}
              text={'Sushi Is A Japanese Dish Of Prepared Vinegared Rice..'}
              price={240}
            />
            <Card
              img={Img5}
              header={'Kawaii Sushi'}
              text={'Sushi Is A Japanese Dish Of Prepared Vinegared Rice..'}
              price={240}
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 flex-col justify-center space-y-12">
            <Header text={'Sushi Shamurai Salmon Cheese'} />
            <Paragraph
              text={
                "Lk Food Like Eating And I Don't Want To Deprive My Self Of Good Food"
              }
            />
            <OrderButton />
          </div>
          <div className="flex-1">
            <img src={Img6} alt="" className="m-auto rounded-full w-2/3" />
          </div>
        </div>

        <div className="flex space-x-6 bg-[#2d2d2d] p-12 rounded-[80px]">
          <div className="flex-1">
            <div className="m-auto aspect-square">
              <img
                src={Img7}
                alt=""
                className="w-full h-full object-cover rounded-full m-auto"
              />
            </div>
          </div>
          <div className="flex-1 space-y-20 m-auto">
            <div className="text-7xl text-white font-extrabold">
              <span className="underline decoration-white text-[#f872a7]">
                Subscribe
              </span>{' '}
              For <br />
              Offer Updates
            </div>
            <div>
              <input
                placeholder="Enter Email Address"
                className="text-white bg-[#f872a7] placeholder:text-white outline-none text-2xl border-b-[1px] border-black w-full p-6 rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
