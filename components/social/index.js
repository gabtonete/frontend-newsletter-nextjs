import Image from 'next/image'

export const Social = props => {

    const { 
        socialSrc,
        socialAlt,
    } = props;

    return (
        <a href="https://github.com/gabtonete" target='_blank'>
            <Image
                src={socialSrc}
                alt={socialAlt}
                width={30}
                height={30}
            />
        </a>

    )
}