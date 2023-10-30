import { CanWeMakeTwoSetsInRummy, CanWeMakeValidDeclarationInRummyWithThreeValidSets, DifferenceBetweenRummySequenceAndSet, HowManyJokersCanBeUsedInRummySet, HowToMakeASetInRummyGame } from "./rummySetsFaqsDataComponent"

// breadcrumbs-data
export const breadCrumbData = {
    "inActiveData" : [
        {"id" : 1, "title" : "Home", "titleLink" : "#"},
        {"id" : 2, "title" : "Rummy", "titleLink" : "#"},
    ],
    "activeData" : {
        "title" : "Sets",
    }
}


// banner-data
export const bannerData = {
    "banner_large" : "/assets/images/main-body/rummy/rummy-sets.jpg",
    "banner_small" : "/assets/images/main-body/rummy/rummy-sets.jpg",
    "alt" : "Play Online Rummy Games",
    "title" : "A23 Rummy Player",
}


// faqsDisclosure-data
export const faqsDisclosureItems = [
    {
        "id":1,
        "title":'How can you make a set in a game of rummy?',
        "descriptionList":[],
        "component":<HowToMakeASetInRummyGame/>
    },
    
    {
        "id":2,
        "title":"In rummy, can we make two sets?",
        "descriptionList":[],
        "component":<CanWeMakeTwoSetsInRummy/>
    },
    
    {
        "id":3,
        "title":"How many jokers can be used in a rummy set?",
        "descriptionList":[],
        "component":<HowManyJokersCanBeUsedInRummySet/>
    },

    {
        "id":4,
        "title":'Can we make a valid declaration in rummy with three valid sets?',
        "descriptionList":[],
        "component" : <CanWeMakeValidDeclarationInRummyWithThreeValidSets/>
    },
    
    {
        "id":5,
        "title":"What is the difference between a rummy sequence and a set?",
        "descriptionList":[],
        "component" : <DifferenceBetweenRummySequenceAndSet/>
    },
    
]