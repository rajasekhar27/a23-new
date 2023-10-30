import Link from "next/link"

const BreadCrumb = (props) => {
    const {inActiveData,activeData} = props.breadCrumbData
    return(
        <div id="topBreadcrumb" className='top-breadcrumb sm:top-breadcrumb-sm md:top-breadcrumb-md lg:top-breadcrumb-lg xl:top-breadcrumb-xl'>
            <div className='my-container mx-auto '>
                <nav>
                    <ul className='breadcrumb'>
                        {inActiveData?.map(data => (
                            <li id={data?.id} className="breadcrumb-item inactive"><Link href={data.titleLink} className='underline'>{data.title}</Link></li>
                        ))}
                        
                        <li className="breadcrumb-item active">{activeData.title}</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BreadCrumb