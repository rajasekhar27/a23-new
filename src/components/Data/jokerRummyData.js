import { CanWePlayRummyWithTwoJokersInASet, HowCanIUseJokerCardInRummyGameToWin, WhatDoJokerCardsWorkInAGameOfRummy, WhatIfAPrintedJokerTurnsToWildJokerCard, WhatIfInARummyGamerJokerIsTheJoker } from "./jokerRummyFaqsComponentsData"

// breadcrumbs-data
export const breadCrumbData = {
    "inActiveData" : [
        {"id" : 1, "title" : "Home", "titleLink" : "#"},
        {"id" : 2, "title" : "Rummy", "titleLink" : "#"},
    ],
    "activeData" : {
        "title" : "Joker Rummy",
    }
}


// banner-data
export const bannerData = {
    "banner_large" : "/assets/images/main-body/rummy/joker-rummy.jpg",
    "banner_small" : "/assets/images/main-body/rummy/joker-rummy.jpg",
    "alt" : "Play Online Rummy Games",
    "title" : "A23 Rummy Player",
}


// faqsDisclosure-data
export const faqsDisclosureItems = [
    {
        "id":1,
        "title":'How do joker Cards work in a game of rummy?',
        "descriptionList":[],
        "component":<WhatDoJokerCardsWorkInAGameOfRummy/>
    },
    
    {
        "id":2,
        "title":"What if a printed Joker turns out to be a wild Joker Card?",
        "descriptionList":[],
        "component":<WhatIfAPrintedJokerTurnsToWildJokerCard/>
    },
    
    {
        "id":3,
        "title":"Can we play rummy with two jokers in a set?",
        "descriptionList":[],
        "component":<CanWePlayRummyWithTwoJokersInASet/>
    },

    {
        "id":4,
        "title":'What if in rummy game the joker is the joker?',
        "descriptionList":[],
        "component" : <HowCanIUseJokerCardInRummyGameToWin/>
    },
    
    {
        "id":5,
        "title":"What is the difference between a rummy sequence and a set?",
        "descriptionList":[],
        "component" : <WhatIfInARummyGamerJokerIsTheJoker/>
    },
    
]