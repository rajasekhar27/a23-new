"use client"

import Link from 'next/link'
import { useState } from 'react'

const Faqs = ({faqsDisclosureItems}) => {

    const [selectedItem,setSelectedItem] = useState(0)
    
    let sliceLength = Math.round(faqsDisclosureItems.length / 2)
    
    const handleSelectedItem = (id) => {
        if(selectedItem === id){ 
            setSelectedItem(0)
        }else{
            setSelectedItem(id)
        }
    }

    return(
        
        <div  id="faqsDisclosure" className='faqs-disclosure md:faqs-disclosure-md'>
            <div className='mycontainer'>
                {faqsDisclosureItems.slice(0,sliceLength).map(item => (
                    <div key={item.id} className="sm:faqs-item faqs-item-lastchild-md">
                        <>
                            <button className="disclosure-button" onClick={() => handleSelectedItem(item.id)}>
                                <h2 className='title' >{item.title}</h2>
                                <img src='/assets/images/header/angle-arrow-down.svg' alt='arrow-down'loading='lazy' />
                            </button>
                            {item.descriptionList.length > 0 ? 
                                (item.descriptionList?.map(list => (
                                <div className={`${item.id === selectedItem ? "disclosure-active" : "disclosure-inactive"}`} key={list.id}>
                                    <div className={`disclosure-panel`}>
                                        <Link href={list.link}>{list.text}</Link>
                                    </div>
                                </div>)
                                )):
                                (<div className={`${item.id === selectedItem ? "disclosure-active" : "disclosure-inactive"}`} >
                                    {item.component}
                                </div>)
                            }
                        </>
                    </div>
                ))}
            </div>

            <div className='mycontainer'>
                {faqsDisclosureItems.slice(sliceLength,faqsDisclosureItems.length).map(item => (
                    <div key={item.id} className='faqs-item-lastchild'>
                        <>
                            <button className="disclosure-button" onClick={() => handleSelectedItem(item.id)}>
                                <h2 className='title' >{item.title}</h2>
                                <img src='/assets/images/header/angle-arrow-down.svg' alt='arrow-down'loading='lazy' />
                            </button>
                            {item.descriptionList.length > 0 ? 
                                (item.descriptionList?.map(list => (
                                    <div className={`${item.id === selectedItem ? "disclosure-active" : "disclosure-inactive"}`} key={list.id}>
                                        <div className={`disclosure-panel`}>
                                            <Link href={list.link}>{list.text}</Link>
                                        </div>
                                    </div>)
                                )):
                                (<div className={`${item.id === selectedItem ? "disclosure-active" : "disclosure-inactive"}`} >
                                    {item.component}
                                </div>)
                            }
                        </>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default Faqs