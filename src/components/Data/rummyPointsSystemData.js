import { AboutRummyPointsSystem, FullCountInGameOfRummy, HowCanYouMakeSetOfGameOfRummy, HowDoRummyPointsWork, MaxiumPenaltyAPlayerCanIncur, PointsCalculationInRummyGame, WorthOfEveryCardInRummy } from "./pointsSystemFaqsComponentsData"

// breadcrumbs-data
export const breadCrumbData = {
    "inActiveData" : [
        {"id" : 1, "title" : "Home", "titleLink" : "#"},
        {"id" : 2, "title" : "Rummy", "titleLink" : "#"},
    ],
    "activeData" : {
        "title" : "Points System",
    }
}


// banner-data
export const bannerData = {
    "banner_large" : "/assets/images/main-body/rummy/rummy-points-system.jpg",
    "banner_small" : "/assets/images/main-body/rummy/rummy-points-system.jpg",
    "alt" : "Play Online Rummy Games",
    "title" : "A23 Rummy Player",
}


// faqsDisclosure-data
export const faqsDisclosureItems = [
    {
        "id":1,
        "title":'How do rummy points work?',
        "descriptionList":[],
        "component":<HowDoRummyPointsWork/>
    },
    
    {
        "id":2,
        "title":"How can you make a set in a game of rummy?",
        "descriptionList":[],
        "component":<HowCanYouMakeSetOfGameOfRummy/>
    },
    
    {
        "id":3,
        "title":"In rummy, how much is every card worth?",
        "descriptionList":[],
        "component":<WorthOfEveryCardInRummy/>
    },

    {
        "id":4,
        "title":'What is the rummy point system?',
        "descriptionList":[],
        "component" : <AboutRummyPointsSystem/>
    },
    
    {
        "id":5,
        "title":"How are points calculated in a rummy game?",
        "descriptionList":[],
        "component" : <PointsCalculationInRummyGame/>
    },
    {
        "id":6,
        "title":'What is the full count in a game of rummy?',
        "descriptionList":[],
        "component" : <FullCountInGameOfRummy/>
    },
    
    {
        "id":7,
        "title":"What is the maximum penalty a player can incur?",
        "descriptionList":[],
        "component" : <MaxiumPenaltyAPlayerCanIncur/>
    },
    
]