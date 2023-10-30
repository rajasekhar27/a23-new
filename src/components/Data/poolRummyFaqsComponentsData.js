import Link from "next/link"

export const HowIsPoolRummyPlayed = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">The pool rummy game is played similarly to other rummy games in that players must submit a legitimate declaration in order to win. Nevertheless, as pool rummy is done either with 101, 201, or 61 score points, you must be careful about the variant you are participating in while playing pool rummy.</p>
        </div>
    )
}

export const What101PoolRummyAimTo = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">In the 101 Pool Rummy game, the goal is to accumulate the fewest points possible during each round. Once a player hits 101 points, they are eliminated, and the other players continue. In this manner, every player is eliminated save for one, who is crowned the victor.</p>
        </div>
    )
}

export const GoalOf201PoolRummy = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">To score the fewest points possible throughout each round in the game of 201 pool rummy is the goal. Once a player hits 201 points, they are eliminated, and the other players continue. In this manner, every player is eliminated except for one, who is crowned the victor.</p>
        </div>
    )
}

export const PoolRummyRules = () => {
    return(
        <div className="text-white">
            <p className="mb-[14px]">Using one or even more decks of playing cards, the game is conducted between two and four players.</p>
            <p className="mb-[14px]">Each participant contributes some cash to the game.</p>
            <p className="mb-[14px]">13 cards are dealt to each player from a thoroughly shuffled deck.</p>
            <p className="mb-[14px]">The goal of the game is for the participants to create two melds, which can either be two pure sequences, one pure sequence and one impure sequence, or one pure sequence and one set.</p>
            <p className="mb-[14px]">The first player to accomplish the aforementioned goal may request a show. At this point, the game is paused, and the sequences and sets are verified. If accepted, the player receives 0 points and is deemed the winner.</p>
        </div>
    )
}

export const DropOptionsIn101PoolRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">A 20-point penalty is assessed for dropping on the opening turn.</p>
            <p className="mb-[14px]">Dropping results in a 40-point deduction for every subsequent turn.</p>
            <p className="mb-[14px]">80 points are deducted for three consecutive misses or incorrect declarations.</p>
        </div>
    )
}

export const DropOptionsIn201PoolRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">A 25-point penalty is assessed for dropping on the opening turn.</p>
            <p className="mb-[14px]">Dropping results in a 50-point deduction for every subsequent turn</p>
            <p className="mb-[14px]">80 points are deducted for three consecutive misses or incorrect declarations.</p>
            
        </div>
    )
}


export const HowDoILowerMyScoreInPoolRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">In pool rummy games, you can lower your score by throwing away unnecessary cards, particularly high-value cards.</p>              
        </div>
    )
}

export const WhatIs51PoolInRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">You must maintain your cards' score points in 51 pool rummy below 51.</p>              
        </div>
    )
}

export const CanIWinRealMoneyInPoolRummyGame = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">Yes, you can win real money in a Pool Rummy game on A23.</p>              
            <p className="mb-[14px]">For more info, click here: <Link className="text-[#007bff]" href="https://www.a23.com/rummy/pool-rummy.html">https://www.a23.com/rummy/pool-rummy.html</Link></p>              
        </div>
    )
}

export const HowAreWinningsCalculatedInPoolRummy = () =>{
    return(
        <div className="text-white">
            <p className="mb-[14px]">In a game of Pool Rummy, the number of cards dealt to each player depends on the number of players in the game. In a two-player game, 13 cards are dealt to each player, while in a three or four player game, 7 cards are dealt to each player.</p>
            <p className="mb-[14px]">The remaining cards are placed face down in the center of the table to form the stock pile. The top card of the stock pile is turned face up to form the discard pile.</p>
            <p className="mb-[14px]">The player to the left of the dealer begins the game by drawing a card from either the stock pile or the discard pile. The player can choose to take the top card of the stock pile, or any card from the top of the discard pile. Once the player has drawn a card, they must then discard one of the cards from their hand. The discarded card is placed face up on the top of the discard pile.</p>
            <p className="mb-[14px]">A player can declare their hand as soon as they have formed all their cards into valid sets and sequences. The player must then lay their cards down on the table for the other players to see. If the cards are found to be valid, the player wins the game and scores zero points. If the cards are found to be invalid, the player's score is calculated based on the point value of the cards in their hand.</p>
            <p className="mb-[14px]">In Pool Rummy, the point value of each card is as follows:</p>
            <ul class="listicon">
                <li>Ace: 10 points</li>
                <li>Face cards (King, Queen, Jack): 10 points</li>
                <li>Number cards: face value (e.g. a 5 of any suits is worth 5 points)</li>
            </ul>
            <p className="mb-[14px]">The player with the lowest score at the end of all the deals is the winner. In case of a tie, the player with the lowest score in the final deal is the winner.</p>
            <p className="mb-[14px]">For more info, please click on the link:  <Link className="text-[#007bff]" href="https://www.a23.com/rummy/pool-rummy.html">https://www.a23.com/rummy/pool-rummy.html</Link></p>
            <div className="clear-both"></div>                   
        </div>
    )
}

export const CanIRejoinAGameAfterGettingEliminated = () =>{
    return(
        <div className="text-white">
            <p>In 101 Pool, a player is eliminated once his score is 101 or more. And a player can re-join only if no other player is above 79.</p>
            <p>In 201 Pool, a player is eliminated once his score is 201 or more. A rejoin is allowed only if no player is above 174. And for 201 Pool-NR games, no rejoins are allowed.</p>
            <p>In 51 Pool, a player is eliminated once his score is 51 or more. And a player can re-join only if no other player is above 39.</p>
            <p>You can find more info on this here:  <Link className="text-[#007bff]" href="https://www.a23.com/rummy/pool-rummy.html">https://www.a23.com/rummy/pool-rummy.html</Link></p>
            <div className="clear-both"></div>                            
        </div>
    )
}

export const EntryFeeToRejoinPoolRummyGame = () =>{
    return(
        <div className="text-white">
            <p>To play a pool <Link className="text-[#007bff]" href="https://www.a23.com/rummy.html">rummy game</Link>  on A23 Rummy, you have to play a small entry fee that starts at Ã¢â€šÂ¹10 (51 and 101 Pool), and Ã¢â€šÂ¹25 for 201 Pool.</p>                    
        </div>
    )
}
