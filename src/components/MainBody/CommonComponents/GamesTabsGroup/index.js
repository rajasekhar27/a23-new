'use client'
import { Tab } from '@headlessui/react'
import Link from 'next/link'

const GamesTabsGroup = ({tabsListAndContent}) => {
    return(
        <Tab.Group as={'div'} className="tab-group md:tab-group-md lg:tab-group-lg">
            <Tab.List style={{overflowX:"auto"}}>
                <div style={{minWidth:'521px'}} className="tab-list">
                    {tabsListAndContent?.map(tabList => (
                        <Tab className="tab" key={tabList.id}>
                            {({ selected }) => (
                                <div className={`${ selected ? 'activeTab' : 'inActiveTab'} tab-title-style`}>
                                    {tabList.tabTitle}
                                </div>
                            )}
                        </Tab>
                    ))}
                </div>
            </Tab.List>

            <Tab.Panels>
                {tabsListAndContent?.map(tabPanel => (
                    <Tab.Panel key={tabPanel.id} className="pt-3 md:pt-5">
                        
                        <p className='tab-content pb-[10px] md:pb-5'>{tabPanel.tabContent}</p>
                        {tabPanel?.tabFooter && <div className="description-footer" style={{paddingTop:"0px"}}>
                            <Link href={tabPanel.tabFooterLink} aria-label="about tabgroup" className="read-more md:read-more-md relative underline" style={{color:tabPanel.tabFooterColor}}>
                                {tabPanel.tabFooterText}
                            </Link>
                        </div>}
                    </Tab.Panel>
                ))}
            </Tab.Panels>

        </Tab.Group>
    )
}

export default GamesTabsGroup