import {
  BsClock,
  BsFastForward,
  BsFastForwardCircle,
  BsFillPinMapFill,
} from 'react-icons/bs'

import styles from './Services.module.css'

const Services = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Services</h2>
      <h3>What we do</h3>
      <div className={styles.cardContainer}>
        <div className={styles.innerContainer}>
          {data.map((item, i) => {
            let icon

            switch (item.icon) {
              case 'BsClock':
                icon = <BsClock className={styles.icon} size={80} />
                break
              case 'BsFastForward':
                icon = <BsFastForward className={styles.icon} size={80} />
                break
              case 'BsFastForwardCircle':
                icon = <BsFastForwardCircle className={styles.icon} size={80} />
                break
              case 'BsFillPinMapFill':
                icon = <BsFillPinMapFill className={styles.icon} size={80} />
                break
            }

            return (
              <div key={i} className={styles.itemContainer}>
                {icon}
                <h2 className={styles.text}>{item.header}</h2>
                <p>{item.subheader}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
