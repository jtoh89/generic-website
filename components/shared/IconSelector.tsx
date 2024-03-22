import {
  BsClock,
  BsFastForward,
  BsFastForwardCircle,
  BsFillPinMapFill,
  BsHandThumbsUp,
  BsPeople,
  BsTools,
} from 'react-icons/bs'

type Props = {
  icon: string
  size: number
  className?: any
}

const SelectIcon = ({ icon, size, className }: Props) => {
  let returnIcon

  switch (icon) {
    case 'BsClock':
      returnIcon = <BsClock className={className} size={size} />
      break
    case 'BsFastForward':
      returnIcon = <BsFastForward className={className} size={size} />
      break
    case 'BsFastForwardCircle':
      returnIcon = <BsFastForwardCircle className={className} size={size} />
      break
    case 'BsFillPinMapFill':
      returnIcon = <BsFillPinMapFill className={className} size={size} />
      break
    case 'BsHandThumbsUp':
      returnIcon = <BsHandThumbsUp className={className} size={size} />
      break
    case 'BsPeople':
      returnIcon = <BsPeople className={className} size={size} />
      break
    case 'BsTools':
      returnIcon = <BsTools className={className} size={size} />
      break
  }

  return returnIcon
}

export default SelectIcon
