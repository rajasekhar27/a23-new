import { CanIWinRealMoneyInDealsRummy, HowDoChipsWork, HowIsDealsRummyPlayed, HowToDetermineLoosersScoreInDealsRummy, HowToDetermineWinnersScoreInDealsRummy, PointsCalculationInDealsRummy, WhatIfMakesThreeConsecutiveErrors, WhatIsDeclarationOfDealsRummy } from "./dealsRummyFaqsComponentsData"

// breadcrumbs-data
export const breadCrumbData = {
    "inActiveData" : [
        {"id" : 1, "title" : "Home", "titleLink" : "#"},
        {"id" : 2, "title" : "Rummy", "titleLink" : "#"},
    ],
    "activeData" : {
        "title" : "Deals Rummy",
    }
}

// banner-data
export const bannerData = {
    "banner_large" : "/assets/images/main-body/rummy/deals-rummy.jpg",
    "banner_small" : "/assets/images/main-body/rummy/deals-rummy.jpg",
    "alt" : "Play Online Rummy Games",
    "title" : "A23 Rummy Player",
}


// faqsDisclosure-data
export const faqsDisclosureItems = [
    {
        "id":1,
        "title":'How Is Deals Rummy Played?',
        "descriptionList":[],
        "component":<HowIsDealsRummyPlayed/>
    },
    
    {
        "id":2,
        "title":"What is declaration in deals rummy?",
        "descriptionList":[],
        "component":<WhatIsDeclarationOfDealsRummy/>
    },
    
    {
        "id":3,
        "title":"How is the winner's score in deals rummy determined?",
        "descriptionList":[],
        "component":<HowToDetermineWinnersScoreInDealsRummy/>
    },

    {
        "id":4,
        "title":"How is the loser's score in deals rummy determined?",
        "descriptionList":[],
        "component" : <HowToDetermineLoosersScoreInDealsRummy/>
    },
    
    {
        "id":5,
        "title":"What if you make three consecutive errors?",
        "descriptionList":[],
        "component" : <WhatIfMakesThreeConsecutiveErrors/>
    },
    {
        "id":6,
        "title":'How Do Chips Work?',
        "descriptionList":[],
        "component" : <HowDoChipsWork/>
    },
    
    {
        "id":7,
        "title":"How are points calculated in Deals Rummy?",
        "descriptionList":[],
        "component" : <PointsCalculationInDealsRummy/>
    },
    {
        "id":8,
        "title":"Can I win real money in Deals Rummy?",
        "descriptionList":[],
        "component" : <CanIWinRealMoneyInDealsRummy/>
    },
    
]