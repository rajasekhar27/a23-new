import Link from "next/link"

import "../../../../Css/IsolatedCss/rummy-rules.css"
import ServiceFee from "./serviceFee"

const RummyRulesGuide = () => {
    return(
    <section className="rules-section md:rules-section-md lg:rules-section-lg xl:rules-section-xl">
        <div className="my-container">
        
            <div className="bg-blue-innerpage">
                <h1>Guide to Indian Rummy Rules &amp; Score Calculation</h1>
                <p className="pt-[10px]">
                    As per the <b>Rummy rules</b>, individuals are required to <b>play</b> <Link href="https://www.a23.com/rummy.html" target="_blank"><b>Rummy</b></Link> with two decks of cards and two Jokers. The cards are ranked low to high: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King, as per the <b>Rummy card rules</b>.
                </p>
                <ul className="listicon">
                    <li>The Jack, Queen and King are known as face cards (refer to the <Link href="https://www.a23.com/rummy/rummy-tutorial.html" target="_blank"><b>Rummy guide</b></Link>)</li>
                    <li>The Ace can not only be used as a 1, but also as a face card</li>
                </ul>

                <div className="clear-both"></div>
            </div>

            <div className="bg-blue-innerpage">
                <h3 style={{marginTop:"0"}}>Jokers in Rummy online</h3>
                <div className="clear-both"></div>
                <p>The player has the availability of two Joker types - the first is the Cut Joker and the second is the Paper joker.</p>
                <div style={{margin:"auto", width: "285px"}}> 
                    <span style={{float:"left", marginRight: "20px"}}><img src="/assets/images/main-body/rummy/cutjoker.png" alt="Rummy Rules" title="play 13 card rummy" className="w-100"/><span><strong>(Cut Joker)</strong></span></span>
                    <span style={{float:"right"}}><img src="/assets/images/main-body/rummy/joker.png" className="w-100" alt="Rummy Rules 13 Card" title="play 13 card rummy Game"/><span><strong>(Paper Joker)</strong></span></span>
                </div>
                <div className="clear-both"></div>
                <ul className="listicon" style={{paddingTop:"20px"}}>
                    <li>In the game, Aces become Jokers if the paper Joker turns out to be the Cut Joker.</li>
                </ul>
                <div className="clear-both"></div>
            </div>
            <div className="bg-blue-innerpage">

                <h3 style={{marginTop:"5px"}}>Valid Indian Rummy Show</h3>
                <div className="clear-both"></div>
                <p>As per <b>Rummy sequence rules</b>, 13 cards have to be arranged in sequences (Life) and sets. The following comprises a valid show: (1) Pure Life (2) Second Life (3) Cards left arranged as Life and/or Sets</p>
                <div className="clear-both"></div>
                <ul className="listicon">
                    <li>A Sequence without a Joker is called a Pure Life</li>

                    <div align="center" className="aboutrummy_inner_con"><img src="/assets/images/main-body/rummy/cards_sequence.png" width="285px;" alt="Sequence Rummy" title="13 card rummy Game"/></div>
                    <div className="clear-both"></div>

                    <li><p><span style={{color:"#034b9f"}}>(When there is a Pure Life without a Joker)</span> The Second life sequence can be one with a Joker (making it an Impure Life sequence) or without a Joker present (making it a Pure Second Life sequence)</p></li>

                    <div align="center" className="aboutrummy_inner_con"><img src="/assets/images/main-body/rummy/sequencew.png" width="285px;" alt="Indian Rummy Game Rules" title="card Game rummy"/>
                        
                    </div>

                    <div className="clear-both"></div>
                    <li>
                        <p><span style={{color:"#034b9f"}}>(When there is an Impure Life with a Joker)</span> When there is one or more Life/Set: Card either as Life or sets, it is called an Impure Life. A group of 3-4 cards which have the same rank, but are  from different suits, make a set. They can contain Jokers.</p>
                    </li>
                    <div align="center" className="aboutrummy_inner_con"><img src="/assets/images/main-body/rummy/set.png" width="285px;" alt="Rummy Sequence" title="13 card rummy Rules"/>
                        <p style={{color:"#034b9f"}}>(Set with Joker)</p>
                    </div>
                    <div className="clear-both"></div>
                </ul>
            </div>
            <div className="clear-both"></div>

            <div className="bg-blue-innerpage">
                <h2 style={{marginTop:0}}>Score Calculation in Rummy Online</h2>
                <div className="clear-both"></div>
                <ul className="listicon">
                    <li>There are 0 points in a valid show, as per the <b>Rummy guide</b></li>
                    <li>When you <b>play rummy</b>, a game is concluded when the first valid show is made. The other players then have to arrange their cards in the best groups possible for a minimal score.</li>
                    <li>The player's score is determined by the arrangement and validity of card groups.</li>
                    <li>In <b>Indian Rummy</b>, the face cards (Jack, Queen, King and Ace) have a value of 10 points each.</li>
                    <li>A player can score a maximum of 80 points per game.</li>
                    <li>However, if the player's initiated show is found to be wrong, then as per the Rummy sequence rules, they get an 80-point penalty, irrespective of the cards they hold at hand.</li>
                </ul>
                <div className="clear-both"></div>
                <h2>Score Calculation Examples in Rummy Online</h2>
                <div className="clear-both"></div>
                <p>If a Pure Life is not present in a player's show, the score is calculated by adding the face value of all cards. The Maximum achievable score in the game is 80.</p>
                <div align="center" className="aboutrummy_inner_con about_img_inner"><img src="/assets/images/main-body/rummy/1a.png" alt="Rules to Play Rummy" title="13 card rummy"/></div>

                <p>In <b>Rummy online</b>, if a player initiates a show, which has a Pure Life, but a Second Life is absent, then the score is calculated by adding the face value of all cards apart from the Pure Life ones.</p>
                <div className="clear-both"></div>
                <div align="center" className="aboutrummy_inner_con about_img_inner"><img src="/assets/images/main-body/rummy/2a.png" alt="Rummy Set" title="13 cards rummy rules"/></div>

                <p>
                    If a Pure Life and Second Life is included in the player's show but there is no Set/Life, the face value of the remaining cards, if any, is totalled up in order to calculate the final score, as per the <b>Rummy guide</b>.
                </p>
                <div className="clear-both"></div>
                <div align="center" className="aboutrummy_inner_con about_img_inner"><img src="/assets/images/main-body/rummy/score_3a.png" alt="Indian Rummy Rules" title="Rummy sequence rules"/></div>
                <p>If Pure Life sets, Second Life sets and/or any other valid Life/Sets are included in the show, then the player's score is considered to be 0.</p>
                <div className="clear-both"></div>
                <div align="center" className="aboutrummy_inner_con about_img_inner"><img src="/assets/images/main-body/rummy/4a.png" alt="Rummy Rules 13 Cards" title="13 cards rummy rules"/></div>
            </div>

            <div className="bg-blue-innerpage">
                <div className="clear-both"></div>
                <div className="mid_pnl_inner3">
                    <h3>Wrong Show</h3>                                            
                    <p>Example 1</p>
                    <div className="clear-both"></div>
                    <div className="aboutrummy_inner_con">
                        As per the <b>Rummy guide</b>, a set has a maximum of 4 cards. However, each of them should be from a different suit and have the same face value. In one deck, there can only be a maximum of 4 suits. By adding a joker as a fifth card in a triplet, it is considered as one of the 4 suits. In the given example, the set is shown to have 4 cards and 1 joker - this makes the set wrong.
                    </div>
                    <div className="clear-both"></div>
                    <div align="center" className="aboutrummy_inner_con about_img_inner">
                        <img className="wr-wd-60-p mt-[15px]" src="/assets/images/main-body/rummy/wr1.png" alt="Rummy Game Rules" title="online Rummy rules"/></div>
                    <div className="clear-both"></div>
                    <p>Example 2</p>
                    <div className="clear-both"></div>
                    <div className="aboutrummy_inner_con">
                        A maximum of 4 cards can be in a set, if <b>Rummy rules</b> are followed. Each of them should be from a different suit and have the same face value. A set cannot be classified as one if there is more than 1 card from the same suit. The set in the given example is wrong, since it has two cards from the same suit.
                    </div>
                    <div className="clear-both"></div>
                    <div align="center" className="aboutrummy_inner_con about_img_inner">
                        <img className="wr-wd-60-p mt-[15px]" src="/assets/images/main-body/rummy/wr2.png" alt="Play Rummy Rules" title="13 Card Rummy Game Rules"/></div>
                    <div className="clear-both"></div>
                    <p>Example 3</p>
                    <div className="clear-both"></div>
                    <div className="aboutrummy_inner_con">
                        Each card in the set should be from a different suit and have the same face value. It cannot be considered as a set if it has more than 4 cards. In the below example, there are 3 cards and 2 jokers, making it a wrong set - the <b>Rummy guide</b> says so.
                    </div>
                    <div className="clear-both"></div>
                    <div align="center" className="aboutrummy_inner_con about_img_inner"><img className="wr-wd-60-p mt-[15px]" src="/assets/images/main-body/rummy/wr3.png" alt="Online Rummy Rules" title="Rummy card Game Rules"/></div>
                    <div className="clear-both"></div>
                    <p>Example 4</p>
                    <div className="clear-both"></div>
                    <div className="aboutrummy_inner_con">
                        For a show to be valid, it needs to have one sequence with no Jokers and one Life that can be both with or without a Joker. In the given example, a sequence is absent, making the show a wrong one.
                    </div>
                    <div className="clear-both"></div>
                    <div align="center" className="aboutrummy_inner_con about_img_inner"><img className="wr-wd-60-p mt-[15px]" src="/assets/images/main-body/rummy/wr4.png" alt="Rules to Play Indian Rummy" title="joker rummy card game rules"/></div>
                    <div className="clear-both"></div>
                    <p>Example 5</p>
                    <div className="clear-both"></div>
                    <div className="aboutrummy_inner_con">
                        For a show to be valid, it needs to have one sequence with no Jokers and one Life that can be both with or without a Joker. This is absent in the given example, making it a wrong show.
                    </div>
                    <div className="clear-both"></div>
                    <div align="center" className="aboutrummy_inner_con about_img_inner"><img className="wr-wd-60-p mt-[15px]" src="../assets/images/main-body/rummy/wr5.png" alt="Rummy Joker rules" title="Rules to Play Online Rummy"/> </div>
                    <div className="clear-both"></div>
                </div>
            </div>
            <div className="clear-both"></div>
            <div className="bg-blue-innerpage">
                <h2 >Common Terms used in Indian Rummy Rules</h2>
                <div className="mid_pnl_inner3">
                    <h3>What is a Table?</h3>
                    <div className="clear-both"></div>
                    <p>
                        As per Rummy card rules, a game of <b>Rummy online</b> is played on a table. In a typical case, one game of Indian rummy is played on one Table at a time.
                    </p>                                        
                </div>

                <div className="mid_pnl_inner2">
                    <h3>What is a Deck of cards?</h3>
                    <div className="clear-both"></div>
                    <div className="text-[14px]">According to <b>Rummy rules</b>, a deck of cards consists of:</div>
                    <ul className="listicon">
                        <li>4 suits of 13 cards, creating a group of 52</li>

                        <li>1 Wild Card joker, which is also known as a Paper Joker</li>
                    </ul>
                </div> 

                <div className="clear-both"></div>
                <div className="mid_pnl_inner3">
                    <h3 style={{marginTop:"0px"}}>What is a Joker?</h3>
                    <div className="clear-both"></div>
                    <p>
                        One randomly selected card from the deck becomes the Joker for the game, according to <b>Rummy card rules</b>. All cards of the same rank in any suit are considered Jokers, as well. Two other joker cards with the Joker symbol will also be present. While playing <b>Rummy online</b>, a Joker card can be used as any card while making sets. However, as per <b>Rummy rules</b>, one sequence in the game needs to be made without a Joker card.
                    </p>
                </div>
                <div className="clear-both"></div>

                <div className="mid_pnl_inner2">
                    <h3 style={{marginTop:"5px"}}>What are Chips?</h3>
                    <div className="clear-both"></div>
                    <p>
                        On A23, players need Chips to play <Link href="https://www.a23.com/rummy.html" target="_blank"><b>Rummy online</b></Link>. Chips are deducted from a player's account when they initiate a game - they are also rewarded Chips when they win, depending on the reward in store.
                    </p>
                    <p>There are three Chip types:</p>
                    <ul className="listicon">
                        <li>Play Chips: These free Chips can be used to <b>play Rummy</b> and other games. Once the balance goes below 1000, these can be reloaded.</li>
                        <li>Cash can be used to play games involving cash-based rewards and prizes.</li>
                        <li>Tournament Chips are applicable only for Multi Table Tournaments; these are only added to the player's account when they register a Tournament on A23.</li>
                    </ul>
                    <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
                <div className="mid_pnl_inner3">
                    <h3 style={{marginTop:"5px"}}>What is a Round?</h3>
                    <div className="clear-both"></div>
                    <p>
                        As per the <b>Rummy guide</b>, a Round is essentially a simple game of Rummy, which starts with the dealing of cards and ends with a successful Show being made.
                    </p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is Dealing?</h3>
                    <div className="clear-both"></div>
                    <p>
                        To <b>play Rummy</b>, each player needs to be given cards. This act of card distribution is called Dealing.
                    </p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is Draw and Discard?</h3>
                    <div className="clear-both"></div>
                    <p>In all Rummy online games, players can pick from 2 stacks and draw a card. Once a card is drawn, a card has to be gotten rid of, as well - this means discarding. 
                        <br/>Cards can be drawn from either the un-dealt pile or the discarded pile. A turn can be dropped, as well. However, this can only be done before drawing a card - refer to the <b>Rummy rules</b>.</p>
                </div>
                <div className="mid_pnl_inner3">
                    <h3>What is Meld and Show?</h3>
                    <div className="clear-both"></div>
                    <p>
                        Players are provided with 13 cards per hand. When you <b>play Rummy</b>, the objective is to arrange them into 4 groups of 3, 3, 3, and 4. They can be both Life or Set in nature. Once these groups are made, they have to be submitted for validation. This is called Show, in which the player has to arrange the cards into Lives or Sets - this is called Melding.
                    </p>
                </div>
                <div className="mid_pnl_inner3">
                    <h3>What is a Group?</h3>
                    <div className="clear-both"></div>
                    <p>
                        Grouping is the activity wherein a player can arrange their cards into groups of their choice. When playing <b>Rummy online</b> on an A23 table, the â€œGroupâ€ button appears when two or more cards are selected. This button enables players to create separate groups for these selected cards. A maximum of 6 groups can be created on <Link href="https://www.a23.com/" target="_blank"><b>A23</b></Link> at one time.
                    </p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is a Drop?</h3>
                    <div className="clear-both"></div>
                    <p>Before Drawing the first card, the players have a choice to avoid playing a round. As per the <b>Rummy card rules</b>, this is called a Drop.
                        <br/>If a drop is made in 101 Pool, the given score is 20.
                        <br/>If a drop is made in 201 Pool, the given score is 25.
                        <br/>If a drop is made in 51 Pool, the given score is 10.
                        <br/>In Best of 2 and Best of 3, a drop cannot be made
                        
                    </p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is a Middle Drop?</h3>
                    <div className="clear-both"></div>
                    <p>By neither Drawing nor Discarding any cards, a player can make the choice of not playing after the beginning of a round. This is called Middle Drop in <b>Indian rummy rules</b>.
                        <br/>If a middle drop is done in 101 Pool, the score given is 40.
                        <br/>If a middle drop is done in 201 Pool, the score given is 50.
                        <br/>If a middle drop is done in 51 Pool, the score given is 20.
                        <br/>A Middle Drop should not be made in Best of 2 and Best of 3.
                    </p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is Auto Drop?</h3>
                    <div className="clear-both"></div>
                    <p>An Auto Drop allows a player the choice to not play a round, but only before their turn.</p>
                    <p>Once the player's turn arrives, the hand gets dropped.</p>
                    <p>This cannot be done once a card is drawn or discarded.</p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is a Full Count?</h3>
                    <div className="clear-both"></div>
                    <p>The highest possible score reachable in one round is called a Full Count. In all A23 games, the count is 80 points.</p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>What is "Meld Group" in Rummy Online?</h3>
                    <div className="clear-both"></div>
                    <p>
                        When players place a show after their groups are created, the "Meld Group" option is shown to them. This â€œGroup Meldâ€ option lets players use a single click to meld all the cards in a group into one. In case this is not desired, the â€œGroup Meldâ€ can be disabled by selecting one card in the group. This feature can be ignored entirely by picking one card from a group and the player then has the ability to meld cards from other groups.
                    </p>
                </div> 

                <div className="mid_pnl_inner3">
                    <h3>Play Rummy: When is a deck reshuffled?</h3>
                    <div className="clear-both"></div>
                    <p>
                        Reshuffling is done when all of a deck's cards have been completed. This process utilizes the discarded and dropped cards, with cards that were dropped initially and during the middle, as well.
                    </p>
                </div>

                <div className="mid_pnl_inner3">
                    <h3>Rummy Guide: What is Group Save?</h3>
                    <div className="clear-both"></div>
                    <p>
                        For the players who use grouping during gameplay, groups will be saved on our servers and will be used to decide your score. Group Save will happen as soon as any change is made to groups. In case of disconnection, your last saved groups will be used for deciding your score. Group save is disabled the moment the player stops using grouping functionality. New groups will be saved the moment grouping is enabled.
                    </p>
                </div>
                <div className="mid_pnl_inner3">
                    <h3>Rummy Online: What is Autoplay?</h3>
                    <div className="clear-both"></div>
                    <p>
                        When someone disconnects, the Autoplay feature gets enabled for pool and stake table players playing <b>Indian Rummy</b> - this is only if a card has been drawn from either the open or the closed deck. The default number of autoplay rounds is three, after which the system decides the course of the game based on the saved group score of the player while playing <b>Rummy online</b>.
                    </p>
                    <p>
                        In case the saved group score is lower than the middle drop count, the autoplay movement will continue until a show is placed by another player. If the score is higher, then the player will be in contention for a middle drop, according to the <Link href="https://www.a23.com/rummy/rummy-sequence.html" target="_blank"><b>Rummy sequence</b></Link> <b>rules</b>.
                    </p>
                    <p>
                        This cannot be applied to games of â€œBest of Xâ€ nature, which always go into autoplay, rendering the player unable to drop or middle drop out of it. In case a player places a show, the disconnected one is given whichever is lesser - either the middle drop score or the saved group score. In case of disconnection after a discard and a show is made before the playerâ€™s turn, the score is calculated using the saved cards, as autoplay does not apply in this case. If one disconnects before drawing the first card, the player will be dropped entirely, with the game not going into autoplay. This should be kept in mind, as players <b>play Rummy</b>.
                    </p>
                </div>
            </div>
            <div className="mid_pnl_inner3 mbl_payment_bg" id="nested-tab">
                <h2>Service Fee(in %age)</h2>
                <div className="">
                    <div className="">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" id="eleve-tab" data-toggle="tab" href="#eleve" role="tab" aria-controls="first" aria-selected="true">Pool</Link>    
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="moyen-tab" data-toggle="tab" href="#moyen" role="tab" aria-controls="second" aria-selected="false">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="faible-tab" data-toggle="tab" href="#faible" role="tab" aria-controls="third" aria-selected="false">Points</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="spin-rummy-tab" data-toggle="tab" href="#spin-rummy" role="tab" aria-controls="fourth" aria-selected="false">Spin</Link>
                            </li>
                        </ul>
                    </div>

                
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="eleve" role="tabpanel" aria-labelledby="eleve-tab">
                            
                            <div className="tabbable-responsive">
                                <div className="tabbable">
                                    <ul className="nav nav-pills nav-justified" id="eleve-nav" role="tablist">
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link active" id="eleve-eco-tab" data-toggle="tab" href="#eleve-eco" role="tab" aria-controls="first" aria-selected="true">51 Pool</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="eleve-standard-tab" data-toggle="tab" href="#eleve-standard" role="tab" aria-controls="second" aria-selected="false">101 Pool</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="eleve-three-tab" data-toggle="tab" href="#eleve-three" role="tab" aria-controls="third" aria-selected="false">201 Pool</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="eleve-eco" role="tabpanel" aria-labelledby="eleve-eco-tab">
                                <h3>51 Pool / max 6 players</h3>
                                
                                <div className="table-responsive">
                                    <div className="table">
                                        <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                            <tbody>
                                                <tr>
                                                     <th>GAMETYPE/ Max players</th> 
                                                    <th>Entry</th>
                                                    <th>Service Fee(in %age)</th>
                                                </tr>
                                                <tr>
                                                     <td rowspan="9" style={{verticalAlign: "middle"}}>51 Pool-  6 players</td> 
                                                    <td>10</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <td>50</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>100</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>200</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>500</td>
                                                    <td>15</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="clear-both"></div>
                                
                            </div>
                            
                            <div className="tab-pane fade" id="eleve-standard" role="tabpanel" aria-labelledby="eleve-standard-tab">

                                
                                <h3>101 pool / max 6 players</h3>
                                <div className="table-responsive">
                                    <div className="table">
                                        <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                            <tbody>
                                                <tr>
                                                     <th>GAMETYPE/ Max players</th> 
                                                    <th>Entry</th>
                                                    <th>Service Fee(in %age)</th>
                                                </tr>
                                                <tr>
                                                     <td rowspan="9" style={{verticalAlign: "middle"}}>101 pool / 6 players</td> 
                                                    <td>10</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <td>50</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <td>100</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>200</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>500</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>1000</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>2000</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>3000</td>
                                                    <td>12</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <div className="clear-both"></div>
                                
                            </div>
                            <div className="tab-pane fade" id="eleve-three" role="tabpanel" aria-labelledby="eleve-three-tab">
                                <h3>201 Pool / max 6 players</h3>
                                <div className="table-responsive">
                                    <div className="table">
                                        <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                            <tbody>
                                                <tr>
                                                    <th>GAMETYPE/ Max players</th>
                                                    <th>Entry</th>
                                                    <th>Service Fee(in %age)</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9" style={{verticalAlign: "middle"}}>201 Pool/ 6 players</td>
                                                    <td>25</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <td>50</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <td>100</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>200</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>500</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr>
                                                    <td>1000</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>2000</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>5000</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>10000</td>
                                                    <td>12</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="clear-both"></div>
                        </div>
                        
                    </div>
                    <div className="tab-pane fade" id="moyen" role="tabpanel" aria-labelledby="moyen-tab">
                        
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="moyen" role="tabpanel" aria-labelledby="moyen-tab">
                                
                                <div className="tabbable-responsive">
                                    <div className="tabbable">
                                    <ul className="nav nav-pills nav-justified" id="moyen-nav" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link active" id="moyen-eco-tab" data-toggle="tab" href="#moyen-eco" role="tab" aria-controls="first" aria-selected="true">BestOf2</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="moyen-standard-tab" data-toggle="tab" href="#moyen-standard" role="tab" aria-controls="second" aria-selected="false">BestOf3</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="moyen-three-tab" data-toggle="tab" href="#moyen-three" role="tab" aria-controls="third" aria-selected="false">GunShot</Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>

                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="moyen-eco" role="tabpanel" aria-labelledby="moyen-eco-tab">

                                        
                                        <h3>BestOf2 / max 2 players</h3> 
                                        <div className="table-responsive">
                                            <div className="table">
                                                <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                                    <tbody>
                                                        <tr>
                                                            <th>GAMETYPE/ Max players</th> 
                                                            <th>Entry</th>
                                                            <th>Service Fee(in %age)</th>
                                                        </tr>
                                                        <tr>
                                                             <td rowspan="10" style={{verticalAlign: "middle"}}>BestOf2 - 2 players</td>
                                                            <td>5</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>25</td>
                                                            <td>16</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50</td>
                                                            <td>16</td>
                                                        </tr>
                                                        <tr>
                                                            <td>100</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>200</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500</td>
                                                            <td>13</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1000</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2000</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5000</td>
                                                            <td>12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="clear-both"></div>
                                        
                                        
                                    </div>

                                    <div className="tab-pane fade" id="moyen-standard" role="tabpanel" aria-labelledby="moyen-standard-tab">

                                        
                                        <h3>BestOf3 / max 2 players</h3>                          
                                        <div className="table-responsive">
                                            <div className="table">
                                                <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                                    <tbody>
                                                        <tr>
                                                            <th>GAMETYPE/ Max players</th> 
                                                            <th>Entry</th>
                                                            <th>Service Fee(in %age)</th>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="7" style={{verticalAlign: "middle"}}>BestOf3 - 2 players</td> 
                                                            <td>5</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>25</td>
                                                            <td>16</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50</td>
                                                            <td>16</td>
                                                        </tr>
                                                        <tr>
                                                            <td>100</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>200</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500</td>
                                                            <td>13</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="clear-both"></div>
                                        
                                    </div>

                                    <div className="tab-pane fade" id="moyen-three" role="tabpanel" aria-labelledby="moyen-three-tab">
                                        <h3>GunShot / max 6 players</h3>
                                        <div className="table-responsive">
                                            <div className="table">
                                                <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                                    <tbody>
                                                        <tr>
                                                             <th>GAMETYPE/ Max players</th>
                                                            <th>Entry</th>
                                                            <th>Service Fee(in %age)</th>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="13" style={{verticalAlign: "middle"}}>GunShot/6 players</td> 
                                                            <td>5</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>25</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>100</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>200</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1000</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2000</td>
                                                            <td>10</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="clear-both"></div>
                                    </div>
                                </div>   
                            </div>
                        </div>  
                    </div>
                    
                    <div className="tab-pane fade" id="faible" role="tabpanel" aria-labelledby="faible-tab">
                        <div className="tabbable-responsive">
                            <div className="tabbable">
                                <ul className="nav nav-pills nav-justified" id="moyen-nav" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="faible-tab-1" data-toggle="tab" href="#faible-1" role="tab" aria-controls="first" aria-selected="true">With Joker</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="faible-tab-2" data-toggle="tab" href="#faible-2" role="tab" aria-controls="second" aria-selected="false">Without Joker</Link>
                                    </li>
                                     <li className="nav-item">
                                        <Link className="nav-link" id="faible-tab" data-toggle="tab" href="#faible" role="tab" aria-controls="first" aria-selected="false" style={{visibility: "hidden"}}>a</Link>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="faible-1" role="tabpanel" aria-labelledby="faible-tab-1">
                                

                                <div className="table-responsive">
                                    <div className="table">
                                        <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                            <tbody>
                                                <tr>
                                                     <th>GAMETYPE/ Max players</th> 
                                                    <th>Point value</th>
                                                    <th>Service Fee(in %age)</th>
                                                </tr>
                                                <tr>
                                                     <td rowspan="17" style={{verticalAlign: "middle"}}>RealStake-  2, 6 players</td>
                                                    <td>0.01</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>0.03</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>0.05</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>0.1</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>0.25</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>0.5</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>40</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>60</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>100</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>150</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>200</td>
                                                    <td>10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>  

                            <div className="tab-pane fade" id="faible-2" role="tabpanel" aria-labelledby="faible-tab-2">
                                
                            
                                <div className="table-responsive">
                                    <div className="table">
                                        <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                            <tbody>
                                                <tr>
                                                    <th>GAMETYPE/ Max players</th> 
                                                    <th>Point value</th>
                                                    <th>Service Fee(in %age)</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="17" style={{verticalAlign: "middle"}}>RealStake-  2, 6 players</td>
                                                    <td>0.1</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>15</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            
                            </div>  
                        </div>
                    </div>      

                    <div className="tab-pane fade" id="spin-rummy" role="tabpanel" aria-labelledby="spin-rummy-tab">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="spin-rummy" role="tabpanel" aria-labelledby="spin-rummy-tab">
                                <div className="table-responsive">
                                    <div className="table">
                                        <table border="0" cellpadding="0" cellspacing="0" className="text-center">
                                            <tbody>
                                                <tr>
                                                    <th>Entry</th>
                                                    <th>Service Fee(in %age)</th>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>50</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>200</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>500</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>1,000</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>2,000</td>
                                                    <td>15</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p>
                                    #Service Fee is averaged over a series of games.
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-blue-innerpage">
                <h2>Rummy Online Game Restrictions</h2>
                <h3>What if a draw is made from Open Deck?</h3>
                <p>If a card is drawn from the open deck, it cannot be discarded on the same turn.</p>

                <div className="mid_pnl_inner3">
                    <h3>What if a cut joker or paper joker is discarded by the opponent?</h3>
                    <div className="clear-both"></div>
                    <p>As per <b>Rummy sequence rules</b>, in case of any joker being discarded by an opponent, it cannot be drawn from the open deck. In this situation, a card from the closed deck must be drawn.</p>
                </div>
                <div className="mid_pnl_inner3">
                    <h3>What happens after a card is drawn from the open deck and the game is in autoplay mode?</h3>
                    <div className="clear-both"></div>
                    <p>In case this happens, other players are not allowed to draw this discarded card, when the game is in autoplay.</p>
                </div>
            </div>
            </div>
            
        </div>
        </section>
    )
}

export default RummyRulesGuide