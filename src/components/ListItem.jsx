import { IoMdCheckmarkCircle } from "react-icons/io";

function ListItem({iconColor = "text-yellow-400", text = "Components-driven system"}) {
  return (
    <li className='flex justify-start gap-2 py-2 items-center '><IoMdCheckmarkCircle className={`text-2xl ${iconColor}`}/> {text}</li>
  )
}

export default ListItem