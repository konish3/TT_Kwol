import { useEffect, useState } from "react";

export const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const clickIndicator = (e) => {
    setActiveIndex(parseInt(e.target.textContent));
  };
  if (activeIndex > 3) {
    setActiveIndex(1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div className="flex justify-center relative">
      <div className="">
        <ul className="">
          {images.map((item, index) => {
            return (
              <li
                className={
                  index + 1 === activeIndex
                    ? "block flex justify-center"
                    : "hidden"
                }
              >
                <img className="w-[400px] rounded-2xl" src={item} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="w-[400px] absolute bottom-[-4px] z-2 text-center">
        {images.map((item, index) => {
          return (
            <li
              className={
                index + 1 === activeIndex
                  ? "inline-block w-3 h-3 leading-[40px] rounded-full text-center bg-[#fde047] cursor-pointer mr-[5px] indent-[-9999px] duration-500"
                  : "inline-block w-3 h-3 leading-[30px] rounded-full text-center bg-white cursor-pointer mr-[5px] indent-[-9999px] duration-500"
              }
              onClick={clickIndicator}
            >
              {index + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
