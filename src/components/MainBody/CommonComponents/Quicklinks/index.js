"use client"

import Link from 'next/link'
import { useState } from 'react'

import "../../../../Css/LayoutCss/common-components.css"

const QuickLinks = ({quickDisclosureItems}) => {
    
    const [selectedItem,setSelectedItem] = useState(0)

    let sliceLength = Math.round(quickDisclosureItems.length / 2)

    const handleSelectedItem = (id) => {
        if(selectedItem === id){ 
            setSelectedItem(0)
        }else{
            setSelectedItem(id)
        }
    }

    return(
        
            <div id="quicklinksDisclosure" className='quicklinks-disclosure md:quicklinks-disclosure-md'>
                    <div className='mycontainer'>
                        {quickDisclosureItems.slice(0,sliceLength).map(item => (
                            <div key={item.id} className='sm:quicklinks-item quicklinks-item-lastchild-md'>
                                <>
                                    <button className="disclosure-button" onClick={() => handleSelectedItem(item.id)}>
                                        <h2 className='title'>{item.title}</h2>
                                        <img src='/assets/images/footer/angle-arrow-down-footer.svg' alt='arrow-down'loading='lazy' />
                                    </button>
                                    
                                    {item.descriptionList?.map(list => (
                                        <div className={`${item.id === selectedItem ? "disclosure-active" : "disclosure-inactive"}`} key={list.id}>
                                            <div className={`disclosure-panel`}>
                                                <Link href={list.link}>{list.text}</Link>
                                            </div>
                                        </div>)
                                    )}
                                </>
                            </div>
                        ))}
                    </div>
           
                    <div className='mycontainer'>
                        {quickDisclosureItems.slice(sliceLength,quickDisclosureItems.length).map(item => (
                            <div key={item.id} className='quicklinks-item-lastchild'>
                                <>
                                    <button className="disclosure-button" onClick={() => handleSelectedItem(item.id)}>
                                        <h2 className='title'>{item.title}</h2>
                                        <img src='/assets/images/footer/angle-arrow-down-footer.svg' alt='arrow-down'loading='lazy' />
                                    </button>
                                    {item.descriptionList?.map(list => (
                                        <div className={`${item.id === selectedItem ? "disclosure-active" : "disclosure-inactive"}`} key={list.id}>
                                            <div className={`disclosure-panel`}>
                                                <Link href={list.link}>{list.text}</Link>
                                            </div>
                                        </div>)
                                    )}
                                </>
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default QuickLinks