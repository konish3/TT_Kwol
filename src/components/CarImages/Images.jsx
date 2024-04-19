import { CustomTypography } from "../_shared/Typography/Tupography";
import { Slider } from "../_shared/Slider/Slider";

export const Images = ({ arrayData }) => {
  return (
    <div className="mt-[15px] rounded-xl">
      {arrayData.length ? (
        <Slider images={arrayData} />
      ) : (
        <CustomTypography>Фото не загружено</CustomTypography>
      )}
    </div>
  );
};
