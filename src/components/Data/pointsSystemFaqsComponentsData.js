import Link from "next/link"

export const HowDoRummyPointsWork = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">Each card in rummy games is worth a particular number of points. The player who has no points in their hand has won; all 13 cards must have been grouped/melded into legal sets and sequences. The value of all the unmatched cards in hand is deducted from the losing player's point total. If, for instance, you still need to group J, 5, and 6 (assuming you get at least two sequences, one of which must be a pure sequence), your final Rummy score will be 10+5+6=21.</p>
        </div>
    )
}

export const HowCanYouMakeSetOfGameOfRummy = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">Three or four cards with the same ranking but distinct suits can be combined to form a set. Jokers can be part of a set, including printed and wild jokers. You can combine cards to form a set if you've got three cards with the same ranking yet different suits, or two cards with the same ranking yet different suits as well as a joker.</p>
        </div>
    )
}

export const WorthOfEveryCardInRummy = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">The face cards in rummy, Ace, King, Queen, and Jack, have point values of 10 apiece. The worth of the numbered cards is equal to their face value. A 3 = 3 points, a 4 means 4 points, and so on. In rummy, the joker card has no points.</p>
        </div>
    )
}

export const AboutRummyPointsSystem = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">The most points a participant can receive in an Indian Rummy game is 80 points. As a result, the player will only receive 80 points, even though the total worth of the unmatched cards in their possession is higher.</p>
        </div>
    )
}

export const PointsCalculationInRummyGame = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">Your points or score is calculated based upon sum of the face values of cards. Jack, Queen, King and Ace bear 10 points each and other cards have value same as the number of cards. Example 7 of any suit is worth 7 points.</p>
            <p className="mb-[14px]">However whenever the cards are grouped in a way that your cards form a pure sequence, impure sequence or a set then the points of the group of cards become '0'.</p>
        </div>
    )
}

export const FullCountInGameOfRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">A Full Count is the maximum possible score for one Round. For all types of games in A23 Rummy, the Full Count is 80.</p>
            <p className="mb-[14px]">For more info, visit this page: <Link  href="https://www.a23.com/rummy/how-to-play-rummy.html">How to Play Rummy</Link></p>
        </div>
    )
}

export const MaxiumPenaltyAPlayerCanIncur = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">Since points in a game of <Link href="https://www.a23.com/rummy.html">rummy</Link> have a negative value, the winner receives zero points. In other words, the unmatched cards in the losing player's hand at the end of the game count against them when determining the penalty.</p>
            <p className="mb-[14px]">A player who submits an invalid declaration not just forfeits the game but also receives an 80-point penalty. The leftover cards in the losing player's hand will be used to calculate the rummy points if he or she has made two sequences, one of which is a pure sequence.</p>
            <p className="mb-[14px]">Players who lose can receive a max of 80 penalty points, regardless of the cards they have in their hand. Players have the option to end the game if the cards are not in their favour in order to prevent suffering a significant loss. The ""Drop"" option can be used to do this.</p>
            <p className="mb-[14px]">A player is said to have dropped for the first time if they do so without playing any cards. According to the rummy regulations, a first drop earns 20 points.</p>
            <p className="mb-[14px]">A midway drop occurs when a player leaves the game after taking one or more turns. In this case, the player is assessed a 40-point penalty.</p>
            <p className="mb-[14px]">A player is automatically removed from the game and assessed a penalty of 40 points if they miss three consecutive turns. </p>
            <p className="mb-[14px]">A midway drop occurs when a player departs the game after selecting a card. A middle drop carries a 40-point penalty.</p>
            <p className="mb-[14px]">To know more, click here: <Link href="https://www.a23.com/rummy/rummy-points-system.html">Rummy Points System</Link></p>
            <div className="clear-both"></div>                          
        </div>
    )
}
