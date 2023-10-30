'use client'

import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { dailyData, specialData } from '@/components/Data/tourneyInfoData'

import "./Css/common.css"
import "./Css/responsive.css"

const DailyComponent = ({dailyData}) => {
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
            {dailyData.map(content =>
                <Link href={content.route}><img src={content.image} alt={content.alt} className='w-full h-full rounded-lg'/></Link>
            )}
        </div>
    )
}

const SpecialComponent = ({specialData}) => {
    return(
        <>
            <Link href={specialData[0].route}><img src={specialData[0].image} alt={specialData[0].alt} className='w-full h-full rounded-lg'/></Link>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-4 md:mt-6'>
                {specialData.slice(1,).map(content =>
                    <Link href={content.route}><img src={content.image} alt={content.alt} className='w-full h-full rounded-lg'/></Link>
                )}
            </div>
        </>
    )
}

const TourneyBannersData = [
    {"id" : 1, "tab" : "Daily", "component" : <DailyComponent dailyData={dailyData}/>},
    {"id" : 2, "tab" : "Special", "component" : <SpecialComponent specialData={specialData}/>},
]

const TourneyBanners = () => {
    return(
        <section id="tourneyBanners">
            <Tab.Group as={'div'} className="tourney-tab-group sm:tourney-tab-group-sm md:tourney-tab-group-md lg:tourney-tab-group-lg xl:tourney-tab-group-xl">
                <div style={{borderBottom:"1px solid var(--primary-blue, #032146)"}}>
                    <Tab.List className="tab-list">
                        <>
                            {TourneyBannersData.map(list => (
                                <Tab className="tab w-1/2 md:w-1/4  md:px-[15px]" key={list.id} >
                                    {({ selected }) => (
                                        <div className={`${ selected ? 'activeTab' : 'inActiveTab'} tab-title-style`}>
                                            {list.tab}
                                        </div>
                                    )}
                                </Tab>
                            ))}
                        </>
                    </Tab.List>
                </div>

                <Tab.Panels className="tab-panel">
                    {TourneyBannersData.map(panel => (
                        <Tab.Panel key={panel.id} className="my-4 md:my-6 px-[15px]">
                            {panel.component}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default TourneyBanners


