import Link from "next/link"

export const HowIsDealsRummyPlayed = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">This variant of Indian rummy called Deals rummy games are played for a set number of deals using chips. In order to win the Deals Rummy game, you must create at least two sequences (containing one pure sequence) and sets with the 13 cards you have in your hand.</p>
        </div>
    )
}

export const WhatIsDeclarationOfDealsRummy = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">A player must submit a legitimate declaration in order to win a certain transaction. An invalid declaration is one that lacks the necessary components to be made into a legitimate declaration. According to the deals rummy regulations, submitting an invalid declaration might result in a player receiving 80 points, the maximum possible score in the game.</p>
        </div>
    )
}

export const HowToDetermineWinnersScoreInDealsRummy = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">The winner receives a hand total of zero points and completes the game's objective before any other players. Based on the players' scores, the winners receive chips from the losers. The following formula is used to determine the player's winnings:</p>
            <p className="mb-[14px]">Winnings are calculated as (Entry Fee x number of Participants) - platform fee.</p>
        </div>
    )
}

export const HowToDetermineLoosersScoreInDealsRummy = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">The points of the unmatched cards in hand are used to determine the losing players' score. In the absence of a pure sequence, the player receives the maximum of 80 points, which is equal to the points on all cards in their possession.</p>
            <p className="mb-[14px]">When a player only holds a pure sequence and no other sequences, all other cards' points are added together.</p>
            <p className="mb-[14px]">When a player declares before their opposition moves, it is referred to as a deal show, and the following formula is used to determine the deal show's point total:</p>
            <p className="mb-[14px]">The losing player's score is equal to 1/2* total points.</p>
        </div>
    )
}

export const WhatIfMakesThreeConsecutiveErrors = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">The number of players at the table affects the drop points in the game. On a two-player table, for example, you cannot leave the game, however you will be eliminated once you miss 3 consecutive moves. Your hand cards will determine how many points you receive, with a ceiling of 80 points.</p>
        </div>
    )
}

export const HowDoChipsWork = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">The players' agreed-upon transactions form the foundation for allocating the chips. At the beginning of the game, each player pays the entry fee. The number of deals to be played, multiplied by the highest possible score (80 points) by each player, determines how many chips will be distributed. Each player will be given 400 chips to play with if there are 5 deals to be made.</p>
        </div>
    )
}

export const PointsCalculationInDealsRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">Points are awarded in Deals Rummy based on the cards that each player has remaining in their hand at the end of the game. Each card has a specific point value, with face cards and aces being worth the most points and low cards such as twos and threes being worth the least. The player with the fewest points at the end of the game is the winner.</p>
            <p className="mb-[14px]">For more info, click on this link: <Link className="text-[#007bff]" href="https://www.a23.com/rummy/deals-rummy.html">https://www.a23.com/rummy/deals-rummy.html</Link></p>              
        </div>
    )
}

export const CanIWinRealMoneyInDealsRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">Yes, you can win real money by playing Deals Rummy on A23.</p>
            <p className="mb-[14px]">For more info, click here: <Link className="text-[#007bff]" href="https://www.a23.com/rummy/deals-rummy.html">https://www.a23.com/rummy/deals-rummy.html</Link></p>              
        </div>
    )
}
