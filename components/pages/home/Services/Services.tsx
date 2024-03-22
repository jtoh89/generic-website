import {
  BsClock,
  BsFastForward,
  BsFastForwardCircle,
  BsFillPinMapFill,
} from 'react-icons/bs'

import SelectIcon from '@/components/shared/IconSelector'

import styles from './Services.module.css'

const Services = ({ data }) => {
  console.log('JonO Services data: ', data)

  return (
    <div className={styles.container}>
      <h2>Services</h2>
      <h3>What we do</h3>
      <div className={styles.cardContainer}>
        <div className={styles.innerContainer}>
          {data.map((item, i) => {
            const icon = SelectIcon({
              icon: item.icon,
              size: 80,
              className: styles.icon,
            })

            return (
              <div key={i} className={styles.itemContainer}>
                {icon}
                <h2 className={styles.text}>{item.service}</h2>
                <p>{item.serviceDescription}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
