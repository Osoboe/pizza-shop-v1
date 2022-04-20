import styles from './Featured.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import facts from '/mocks/facts.json'

const Featured = () => {

    const [index, setIndex] = useState(0);
    
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
    return (
        <div className={styles.root}>
            <div className={styles.root__arrow} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src="/image/arrowl.png" layout='fill' alt="" objectFit="contain" />
            </div>
            <div className={styles.root__wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {facts.map((fact, id) => (
                    <div className={styles.root__textContainer} key={id}>
                        <div className={styles.root__title}>
                            Funny pizza fact # {fact.id}
                        </div>
                        <div className={styles.root__fact}>
                            {fact.text}
                        </div>
                        <div className={styles.root__line}>
                            <Image alt="" src="/image/line.jpg" width="1390px" height="6px" />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.root__arrow} style={{right:0}} onClick={()=>handleArrow("r")}>
                <Image src="/image/arrowr.png" layout='fill' alt="" objectFit="contain" />
            </div>
        </div>
    )
}

export default Featured