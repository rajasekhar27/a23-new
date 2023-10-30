"use client"

import Link from "next/link"
import { useState } from "react"

import "../../../Css/LayoutCss/common-components.css"

const AboutA23Games = () => {
    const [accordion,setAccordion] = useState(false)
    const [read,setRead] = useState(false)
    return(
        <section id="sectionAbout" >
            <div className="section-about sm:section-about-sm md:section-about-md lg:section-about-lg xl:section-about-xl">
            <div className="panel-heading relative mx-[15px]" onClick={() => {setRead(false) , setAccordion(!accordion)}}>
                <h4 className="panel-title">
                    <button id="aboutA23Games" className={`${accordion ? "accordion-toggle-collapse" : "accordion-toggle"}`}>
                        About A23 Games
                    </button>
                </h4>
            </div>

            {accordion && 
            <>
                <div className="panel-body">
                    <div className="my-container">
                        <div className="px-[15px]">
                            <h3 className="about_h3">Our Company</h3>
                            <p>A23 Games is India's Leading Online Gaming Portal completely owned and operated by Head Digital Works Private Limited. With a mission to promote online gaming in India, A23 Games is steadily providing a platform for a community of skilled gamers all over the country.</p>
                            <p>With 15+ years of pioneering experience in this space, we at A23 Games understand the needs of online gaming in India and strive to provide better and faster results as well as a significantly improved gameplay experience. </p>
                            <p>And with Responsible Gaming at the core of our ideologies, our objective as an industry veteran is to provide you a platform that is "purely a source of entertainment". We want to make sure players are here for the right reasons.</p>
                        </div>
                    

                        <div className="px-[15px]">
                            <h3 className="about_h3">Our Team</h3>
                            <p>At the heart of our operations is a team of remarkable individuals who help steady the ship in the right direction. Our team is a diverse mix of young entrepreneurs as well as an able and experienced team of industry stalwarts who are masters of their domains. </p>
                            <p>And with state-of-the-art software created on a custom-built architecture to be robust in operating Multi-Player Tables and Online Tournaments, we have a dream combo in place. </p>
                            <p>A well-oiled machine that has helped us embark on this journey and to consistently deliver at a very high level for the entirety of our tenure.</p>
                        </div>
                    </div>
                </div>

                <div className="px-[15px]">
                    <div className="text-center" style={{margin:"15px 0"}}>
                        <button onClick={() => setRead(!read)} style={{fontSize: "16px",width:"180px", height: "auto", margin: "auto", padding: "5px 20px",border:"2px solid #032146", borderRadius: "30px", textDecoration: "none", cursor: "pointer"}} className="moreless-button c-white">{read ? "Read less" : "Read more"}</button>
                    </div>
                    <div className={`moretext ${read ? "activeToggle" : "inActiveToggle"}`}>
                        <h2>A23 Multi Gaming Platform Brings you the Best Real Cash Games at Your Desk </h2>
                        <p>What if you could have fun and make money while at it? It's incredibly easy with A23, the multi gaming platform that brings you the best real cash games at your desk. The online cash games not only entertain, it helps you improve your skills and win big rewards. You can download and play online cash games like Rummy, <Link href="carrom.html">Carrom Games</Link>, <Link href="poker.html">Poker Games</Link>, Online <Link href="pool.html">Pool Games</Link> and so on with ease on A23. The real Rummy cash games have numerous gamers battling with other players. You can also try your hand in Fantasy Sports that gives you an adrenaline rush with online cricket games focusing on fantasy teams. You can play cricket games online &amp; <Link href="fantasysports.html">fantasy sports</Link> on the same platform. A23 is the premium cash games app that lets players win cash with the online cash games. </p>
                        <p>A23 is where you can have fun playing your favourite Pool games. If you are interested in Carrom, A23 is the right place that has online Carrom games. The Carrom games are easy to play just like online cricket games and Rummy. You can Play Carrom Games with much ease and win big prizes too. A23 is your one destination for cash games, online Rummy, online Carrom, Pool games, online cricket games and fantasy sports. Wait no more, <Link href="downloads.html">Download A23 Games App</Link> now and get ready to win big.</p>
                        <h2>Download &amp; Play Online Cash Games with Ease on A23</h2>
                        <p>It's time to use your gaming skills to earn real cash. Download and play online cash games with ease on A23. The gaming platform has sixteen years of experience in offering players online cash games to earn real cash online. Play cash games with the easy interface and quick withdrawal methods.  </p>
                        <p>The easy to play interface makes the gaming experience effortless. All the games you love, be it Rummy, online cricket, Carrom games, Rummy games or Pool games – you can find it all on A23. Download the A23 app, sign in with your credentials and then add cash to start playing cash games online. Real cash games are a good way to enjoy playing and make real cash online. A23 being a top cash games app, you can be rest assured about the safety and security of your games and transactions. Download the app and play real cash games now!  </p>
                        <h2>Play Online Rummy Games and Win Real Cash Prizes on A23</h2>
                        <p>How skilled are you at Rummy? It's time to test your skills by joining online Rummy on A23. Here you can win real cash with the real cash games that use your skills and strategy. Millions across India use A23. The app has been serving Rummy lovers for the last sixteen years. Real cash games can be played effortlessly on A23. The simple and easy to use interface helps you <Link href="rummy.html">Play Rummy online</Link> seamlessly. As it involves real cash games, you can easily withdraw the cash using a host of payment gateways. Rummy cash games on A23 are safe and secure. You can meet numerous other players on the platform and also play to win real cash online. A23 has numerous tourneys offering big bumper prizes. The tourneys are updated every day and the real cash prizes are bigger than you imagine. You can easily join any tourney and play cash games on this rummy app.  </p>
                        <p>It's easy to add cash and you can also get bonuses based on the real cash games you choose. The bonus system on A23 is tremendous and gives you great cash advantages. You can multiply the cash in your wallet using the bonus systems offered to the users. Download A23 Rummy now and make the most of these fun games and make some money too. A23 Rummy is safe and secure. Play online Rummy and earn real cash. Go ahead and use your skills to win big. Keep playing for special offers, deals and bonuses. <Link href="rummy/download-rummy.html">Download A23 Rummy app</Link> now! </p>

                        <h2>Enjoy the Safe &amp; Secure Mobile Multi Gaming Experience on India's Leading Online Rummy Platform A23 Games</h2>
                        <p>Rummy is not just a game, it's an emotion. Play unlimited Rummy only on A23, the safe and secure gaming platform. A23 is India's Leading online Rummy platform offering real cash to players. You can play on and win big from a host of tourneys curated to keep the thrill alive. Online cash games are next level on A23 with a bunch of other games like online Carrom, Pool games, online cricket games and fantasy sports. All the games offer great entertainment and fun. What's more, you can win real cash by playing online games. It's 100% safe and secure as your game progresses and wins are tracked. The payment can be withdrawn easily through a choice of payment gateways. There is no need to worry about the safety of the online games that offer you real cash in real time.  </p>
                        <p>Since the online cash games require skills and strategy, you can play and win big. Even though the online games platform is safe, you should play responsibly. There are equal chances of winning and losing. So financial risk is always there, for which it is advised that you play these games responsibly. All the games, be it casual or cash Rummy games, <Link href="rummy/points-rummy.html">Points Rummy</Link>, Gunshot Rummy, Private Tables – are totally safe. If you can play the games skilfully, you can keep on winning. There are millions in India who play real Rummy cash games and win big regularly. It's trusted by the users who are loyal to A23 because of the safety and security it offers. So, you too can begin this fun-filled journey on A23 Rummy to make the most of the thrills available. Download A23 Rummy today and play cash games or online Rummy along with numerous other game variants. <Link href="https://play.google.com/store/apps/details?id=in.a23.rummy">Download rummy cash game app for Android</Link> &amp; <Link href="https://apps.apple.com/in/app/ace2three-rummy-plus/id1027731385  ">iOS </Link> and play safely &amp; securely. </p>

                        <h2>Types of Indian Rummy on A23</h2>
                        <p>With the game of Rummy gaining so much popularity in India over the years among other online cash games, it's time to try your hand at it. Rummy games are exciting and easy to play, and even more so when it offers the option for you to play online cash games through which you can end up winning bigger cash rewards. Explore A23 Rummy to find what suits you best, with multiple Rummy cash games available on the app. Play Rummy from all these game variants available on the app as follows:  </p>
                        <div className="clear-both"></div>
                        <ul className="list-disc pl-[15px] mb-4 text-[0.75rem] md:text-[14px]">
                            <li>Points Rummy </li>
                            <li>Pool games </li>
                            <li>Deals Rummy </li>
                            <li>Gun Shot </li>
                            <li>Private Tables </li>
                            <li>Sit&amp;Go </li>
                            <li>Turbo Tables </li>
                            <li>Happy Hour  </li>
                            <li>Multi Table Tournaments</li>
                        </ul>
                        <div className="clear-both"></div>
                        <p>With so many various cash games available to you, why play Rummy? Well, with online Rummy you can play cash games and win real cash. These real cash games are super fun to play with and also offer you the chance to win cash prizes as you learn new skills playing multiple Rummy games over the course of time. If you are new to Rummy, you can practice the game on the free app, till you are confident enough to try out A23 Rummy, which is the cash games rummy app.</p>

                        <h2>Play Fantasy Sports on A23 and Win Real Cash Daily</h2>
                        <p>With the cricket season in full flow and so much cricket to come this year, fantasy sport is at the forefront of it all. Use your knowledge of the game to good effect and play cricket games online with fantasy on A23. Cricket as a sport, is a game of numbers, and this is where your knowledge of the game comes into effect. Take every factor into account, starting from selecting the right player as captain and building a team around that player. The captain is the most important player of the playing XI, as this player fetches more points than other players. So, pick a player who has been performing consistently and is in good form to captain your side. </p>
                        <p>Now, if you've played online cricket games before, you'll know that balance of your squad is key to winning big. So, pick a team which has a good balance of batters, bowlers and all-rounders. Make sure your selection is based on a ton of important factors such as stats around the stadiums, pitch report, weather conditions and so on. Make informed decisions based on these factors to churn out your best possible XI before entering an online cricket match. Once your team is selected, take part in matches and tournaments that take place every day on A23 and play fantasy sports to win cash daily. Beside Online <Link href="fantasycricket.html">Fantasy Cricket</Link> Games, A23 Fantasy Sports offers <Link href="fantasysports/fantasy-football.html">Fantasy Football</Link>, <Link href="fantasysports/fantasy-volleyball.html">Volleyball</Link>, <Link href="fantasysports/fantasy-basketball.html">Basketball</Link>, <Link href="fantasysports/fantasy-baseball.html">Baseball</Link> and <Link href="fantasysports/fantasy-kabaddi.html">Kabaddi</Link> Games in its Gaming Basket. </p>

                        <h2>Play Online Carrom Games on A23</h2>
                        <p>Carrom is a game that is very popular in the sub-continent. It is a game that involves a wooden square board with four pockets, along with a striker and 23 Carrom men (9 black, 9 white and 1 red queen). The aim of the game is to pocket all the coloured men of a kind (black or white) along with the queen to win against your opponent. The game of Carrom is a game of skill and focus, and can be played between 2-4 players. </p>
                        <p>With the increasing popularity of Carrom games, online Carrom is the newest sensation where you can compete against players online and win big. One of such platforms where you can play Carrom games online is A23. Carrom on A23 is a gamechanger, as it brings together simple game mechanics as well as a seamless gameplay experience for you. The game also comes with a tutorial which will take you through the different aspects of Carrom, starting from striking, breaking and finally finding the deadly precision and angle to pocket all the Carrom men effortlessly. All in all, make you a better online Carrom player. Just like it's physical counterpart, online Carrom on A23 is a very enjoyable experience. </p>

                        <h2>Play Online Pool Games on A23</h2>
                        <p>Pool is a specific type of cue sport that is played on a rectangular table with six pockets into which you are supposed to pocket all the balls using a cue stick. Even though various other forms of Pool exist, the most common ones played all over are eight-ball, blackball, nine-ball, ten-ball, seven-ball, straight Pool, one-pocket, and bank Pool. </p>
                        <p>In order to win a game of 8-ball Pool, you have to pocket all your coloured balls (solids or stripes) depending on the first ball that is pocketed after the break shot. Once all your coloured balls are pocketed, you need to pocket the 8 balls before your opponent does in order to win. Due to the nature of the sport, Pool is widely recognised as one of the most played games ever.  </p>
                        <p>Pool games are skill-based games that can be played both online and offline. And while the offline version of the sport is widely recognised, online Pool games are catching up quickly. What better way to pass time than play a game of Pool with or against your friends on a screen? Pool requires a lot of practice to perfect, and A23 is where you can accomplish that. Play practice games, free games and eventually move on to play Pool games online for cash to win big. </p>

                        <h2>Play Indian Poker Games Online for Free on A23</h2>
                        <p>Poker is by far the most famous of card games all around the world. In terms of sheer number, it has more players than most popular global sports, such as tennis and golf. The reason for Poker's popularity is because it is a game of skill, and is more to do with mathematics and odds, rather than about chance.  </p>
                        <p>If we specifically talk about poker online, one thing it has assured is a growing inclination towards trying the game online as it is more convenient for the user. And as per industry reports, the online poker industry is growing at a rate of 35-40% year on year. And the same can be said about Indian poker.  </p>
                        <p>Poker is a great game where the objective is to win the pot. This pot includes all the bets that the players have made in a single deal.  </p>
                        <p>If you are new to Poker, we suggest you try your hand by playing free online Poker on A23. You can start by playing a poker game of Texas Hold'em, which is by far the most popular and widely played all over. And, it is also one of the easier games you can learn.  </p>
                        <p>Indian Poker, contrary to popular beliefs, is not in any way associated to India. Even though India has seen card games as part of our culture for hundreds of years, Indian Poker is an unusual, unconventional, and yet a simpler version of traditional Poker. Every player gets dealt a card facedown, which they have to turn upwards and hold or place on their forehead. This implies every player would be able to see the card except the player holding the card. Which makes it tricky but also a lot of fun!</p>

                        <h2>Know about A23 Poker Game Variants</h2>
                        <p>There are mainly two main game variants of Poker as well as Poker games online – Texas Hold'em (also called No limit Texas Hold'em) and Pot Limit Omaha. Both these game variants are available to play on A23 Poker. In both these poker card games, there are multiple rounds of betting, called pre-flop, flop, turn, and river. A player, can choose to take the following actions based on the strength of their in-hand cards, such as bet, raise, check, call and fold. </p>
                        <h2>Texas Hold'em Poker Online</h2>
                        <p>In Texas Hold'em, each player at the table is dealt two hole cards and there are five community cards in the middle (the flop, turn and river). Every player can use their hole cards and community cards to make the best possible hand. </p>
                        <h2>Pot Limit Omaha Poker</h2>
                        <p>In Pot Limit Omaha, each player gets 4 hole cards instead of 2. And therefore, a player needs to use 2 out of the 4 hole cards dealt to them, and 3 from the 5 community cards available to create the best hand consisting of 5 cards. A limit is placed on the maximum amount that can be raised in a player's turn. A player may raise any amount less than or equal to the pot value.</p>

                    </div>
                </div>
                </>}
            </div>
        </section>
    )
}

export default AboutA23Games