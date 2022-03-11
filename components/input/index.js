import styles from './input.module.css';
import Image from 'next/image'


export const Input = (props) => {
    const {
        image,
        alt,
        type,
        placeholder,
        value,
        onChange
    } = props

    return (
        <label className={styles.container}>
            <Image
                src={image}
                alt={alt}
                width={30}
                height={30}
            />
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
            </input>
        </label>
    )
}
