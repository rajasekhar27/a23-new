import Link from "next/link"

const Logo = () => {
    return(
        <Link href="/" >
            <img src='/assets/images/common/a23-logo-yellow.svg' alt='A23' height={34} width={47.08} loading='lazy' />
        </Link>
    )
}
export default Logo