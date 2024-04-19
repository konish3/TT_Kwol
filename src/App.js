import { CustomButton } from "./components/_shared/Button/Button";
import { Card } from "./pages/Card/Card";

export const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <CustomButton
        color="red"
        variant="filled"
        className="font-medium text-sm rounded-lg bg-[#fde047] text-[#374151] h-[34px] w-[120px]"
        type="submit"
      >
        Подробнее
      </CustomButton> */}
      <Card />
    </div>
  );
};

export default App;
