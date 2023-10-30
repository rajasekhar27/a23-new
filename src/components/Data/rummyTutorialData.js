import { CanTwoPlayersPlayARummyGame, DistinguishesRummyPracticeGamesAndRealMoneyGames, GameOfSkillOrLuck, HowDoYouPlayRummyStepByStep, HowDoesAGameOfRummyBegin, HowToPlayRummyGame, IsItEasyToLearnRummy, PlayingCardsDealtInRummy } from "./rummyTutorialFaqsDataComponents"

// breadcrumbs-data
export const breadCrumbData = {
    "inActiveData" : [
        {"id" : 1, "title" : "Home", "titleLink" : "#"},
        {"id" : 2, "title" : "Rummy", "titleLink" : "#"},
    ],
    "activeData" : {
        "title" : "Tutorial",
    }
}


// banner-data
export const bannerData = {
    "banner_large" : "/assets/images/main-body/rummy/rummy-tutorial.jpg",
    "banner_small" : "/assets/images/main-body/rummy/rummy-tutorial.jpg",
    "alt" : "Play Online Rummy Games",
    "title" : "A23 Rummy Player",
}

// faqsDisclosure-data
export const faqsDisclosureItems = [
    {
        "id":1,
        "title":'How is a game of rummy played?',
        "descriptionList":[],
        "component":<HowToPlayRummyGame/>
    },
    
    {
        "id":2,
        "title":"Rummy: A Game of Skill or Luck?",
        "descriptionList":[],
        "component":<GameOfSkillOrLuck/>
    },
    
    {
        "id":3,
        "title":"How many playing cards are dealt in Rummy?",
        "descriptionList":[],
        "component":<PlayingCardsDealtInRummy/>
    },

    {
        "id":4,
        "title":'How do you play rummy step by step?',
        "descriptionList":[],
        "component" : <HowDoYouPlayRummyStepByStep/>
    },
    
    {
        "id":5,
        "title":"How does a game of Rummy begin?",
        "descriptionList":[],
        "component" : <HowDoesAGameOfRummyBegin/>
    },
    
    {
        "id":6,
        "title":"Can two players play a Rummy game?",
        "descriptionList":[],
        "component" : <CanTwoPlayersPlayARummyGame/>
    },

    {
        "id":7,
        "title":"What distinguishes rummy practice games from real money games?",
        "descriptionList":[],
        "component":<DistinguishesRummyPracticeGamesAndRealMoneyGames/>
    },

    {
        "id":8,
        "title":'Is it easy to learn rummy?',
        "descriptionList":[],
        "component":<IsItEasyToLearnRummy/>
    },
]