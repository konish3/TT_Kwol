import { CustomButton } from "../_shared/Button/Button";

export const Popup = ({ data, goBack }) => {
  return (
    <>
      <div className="bg-[#042f2e] w-4/5 absolute top-[10px] p-[10px] sm:w-3/5 lg:w-2/5">
        <CustomButton
          onClick={goBack}
          className="bg-[#e7e5e4] font-medium text-sm rounded-lg text-[#374151] h-[34px] w-full mb-[20px] md:w-24"
          type="button"
        >
          ← Назад
        </CustomButton>
        <div className="flex items-center flex-col">
          {data.images.map((item) => {
            return <img className="w-11/12 mb-[25px] " src={item} alt="" />;
          })}
        </div>
        <div className="text-white text-2xl text-center">{data.title}</div>
        <div className="mt-[20px] mb-[20px] text-[#e5e5e5]">
          {data.descriptionFull}
        </div>
        <CustomButton
          onClick={goBack}
          className="bg-[#e7e5e4] font-medium text-sm rounded-lg text-[#374151] h-[34px] w-full mb-[20px] md:w-24"
          type="button"
        >
          ← Назад
        </CustomButton>
      </div>
    </>
  );
};
