import Card from "../Components/Card"
import { quran_duaa } from "../Data/quran_duaa"

const Quran = () => {
  return (
    <div>
      <Card data={quran_duaa} />
    </div>
  )
}

export default Quran
