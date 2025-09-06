import UtamaCard from "./UtamaCard";
import UtamaCarousel from "./UtamaCarousel";
import UtamaNews from "./UtamaNews";
import UtamaData from "./UtamaData";

export default function Utama() {
  return (
    <>
      <UtamaData />
      <UtamaCard />
      <UtamaCarousel />
      <UtamaNews />
    </>
  );
}
