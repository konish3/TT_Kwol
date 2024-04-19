import { useEffect, useState } from "react";
import { CAR_DATA } from "../../helpers/data/carData";
import { Images } from "../../components/CarImages/Images";
import { Title } from "../../components/CarTitle/Title";
import { CustomButton } from "../../components/_shared/Button/Button";
import { CustomTypography } from "../../components/_shared/Typography/Tupography";
import { Popup } from "../../components/popup/Popup";
import { Spinner } from "../../components/_shared/Spinner/Spinner";

export const Card = () => {
  const [data, setData] = useState(null);
  const [hasPopup, setHasPopup] = useState(false);

  useEffect(() => {
    const id = Math.random() < 0.5 ? 0 : 1;
    setTimeout(() => {
      setData(CAR_DATA.find((item, index) => index === id));
    }, 3000);
  }, []);
  console.log(data);

  const handlePopup = () => {
    setHasPopup(!hasPopup);
  };

  return (
    <>
      {data ? (
        <div
          className={`" rounded-3xl shadow-xl w-11/12 flex flex-col gap-3.5 hover:shadow-2xl sm:w-1/2 lg:w-1/3 cursor-pointer" ${
            hasPopup
              ? "blur md:w-1/2 rounded-3xl shadow-xl w-11/12 flex flex-col gap-3.5"
              : "md:w-1/2 rounded-3xl shadow-xl w-11/12 flex flex-col gap-3.5 hover:shadow-2xl cursor-pointer"
          } `}
        >
          <Images arrayData={data.images} />
          <Title className="flex justify-center font-semibold text-lg">
            {data.title}
          </Title>
          <CustomTypography className="w-[300px] m-auto text-sm md:w-[385px] lg:w-[340px] text-center">
            {data.description}
          </CustomTypography>
          <CustomButton
            className="font-medium text-sm rounded-lg bg-[#fde047] text-[#374151] h-[34px] w-full"
            type="button"
            onClick={handlePopup}
          >
            Подробнее
          </CustomButton>
        </div>
      ) : (
        <Spinner></Spinner>
        // <CustomTypography>Загрузка...</CustomTypography>
      )}
      {hasPopup ? <Popup data={data} goBack={handlePopup}></Popup> : false}
    </>
  );
};
