/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from './components/Parallax'
import Image from './components/Image'
import HFour from './components/HFour'
import HTwo from './components/HTwo'
import HThree from './components/HThree'
import './Styles/Center.css'
import Paragraph from './components/Paragraph'
import Video from './components/Video'
import Dlc from './components/Dlc'
import Friends from './components/Friends'
import Store from './components/Store'
import './Styles/Divs.css'
import './Styles/Font.css'

const App = () => (
  <div className="font">
    <div><Parallax image="https://hollowknight.com/wp-content/uploads/2018/09/banner_type_02.jpg" /></div>
    <div className="center downOne">
      <div><Image src="https://hollowknight.com/wp-content/uploads/2018/09/tc_tiny_drop_shadow.png" alt="Team Cherry" height="auto" width="auto" /></div>
      <div><Image src="https://hollowknight.com/wp-content/uploads/2015/08/logo_main.png" alt="Log" height="auto" width="auto" /></div>
      <div><HFour clase="first" text="Adventure through a forgotten kingdom of insects and heroes" /></div>
    </div>
    <div className="center downTwo">
      <div className="padded"><HTwo clase="second" text="Descend into the Dark" /></div>
      <div className="iandt">
        <Image src="https://hollowknight.com/wp-content/uploads/2018/09/mines.jpg" />
        <div>
          <HThree clase="third" text="Brave the Depths of a Forgotten Kingdom" />
          <Paragraph text="Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets." />
          <br />
          <br />
          <Paragraph text="As the enigmatic Hollow Knight, you'll traverse the depths, unravel its mysteries and conquer its evils." />
        </div>
      </div>
      <div className="iandt">
        <div>
          <HThree clase="third" text="Use Your Skills and Reflexes to Survive" />
          <Paragraph text="Hollow Knight is a challenging 2D action-adventure. You'll explore twisting caverns, battle tainted creatures and escape intricate traps, all to solve an ancient long-hidden mystery." />
          <br />
          <br />
          <Paragraph text="- Explore vast, Inter-connected Worlds" />
          <br />
          <Paragraph text="- Encounter a bizarre collection of friends and foes" />
          <br />
          <Paragraph text="- Evolve with powerful new skills and abilities" />
        </div>
        <Image src="https://hollowknight.com/wp-content/uploads/2018/09/false_knight.jpg" />
      </div>
      <div className="iandt">
        <Image src="https://hollowknight.com/wp-content/uploads/2018/09/lake_of_unn.jpg" />
        <div>
          <HThree clase="third" text="Evocative Hand-Drawn Art" />
          <Paragraph text="The world of Hollow Knight is brought to life in vivid, moody detail, its caverns alive with bizarre and terrifying creatures, each animated by hand in a traditional 2D style." />
          <br />
          <br />
          <Paragraph text="Every new area you'll discover is beautifully unique and strange, teeming with new creatures and characters to discover. The world of Hollow Knight is one worth exploring just to take in the sights and discover new wonders hidden off of the beaten path." />
        </div>
      </div>
      <div className="video">
        <Video title="Trailer" src="https://www.youtube.com/embed/JuP47fRBsWg" />
      </div>
      <div>
        <HThree clase="third" text="Purchase Hollow Knight Now!" />
        <div className="purchases">
          <Store href="https://www.nintendo.com/games/detail/hollow-knight-switch" src="https://hollowknight.com/wp-content/uploads/2018/09/store_logos__0000_Layer-7.png" />
          <Store href="https://store.playstation.com/en-us/product/UP1822-CUSA13632_00-HOLLOWKNIGHT18US" src="https://hollowknight.com/wp-content/uploads/2018/09/store_logos__0005_Layer-2.png" />
          <Store href="https://www.microsoft.com/en-us/p/hollow-knight-voidheart-edition/9mw9469v91lm" src="https://hollowknight.com/wp-content/uploads/2018/09/store_logos__0002_Layer-5.png" />
        </div>
        <div className="purchases">
          <Store href="https://store.steampowered.com/app/367520/Hollow_Knight/" src="https://hollowknight.com/wp-content/uploads/2018/09/store_logos__0004_Layer-8.png" />
          <Store href="https://www.gog.com/game/hollow_knight" src="https://hollowknight.com/wp-content/uploads/2018/09/store_logos__0006_Layer-3.png" />
          <Store href="https://www.humblebundle.com/store/hollow-knight" src="https://hollowknight.com/wp-content/uploads/2018/09/store_logos__0003_Layer-4.png" />
        </div>
      </div>
      <div className="heightOne" />
      <div>
        <HTwo clase="second" text="Hollow Knight Expands with 4 Giant Free Content Packs" />
        <div className="purchases">
          <Dlc title="Hidden Dreams" text="Mighty new foes emerge! New Boss fights. New Upgrades. New Music." src="https://hollowknight.com/wp-content/uploads/2018/09/cp_thumbs__0003_HD-1.jpg" />
          <Dlc title="The Grimm Troupe" text="Light the Nightmare Lantern. Summon the Troupe. New Major Quest. New Boss Fights. New Charms. New Enemies. New Friends" src="https://hollowknight.com/wp-content/uploads/2018/09/cp_thumbs__0000_Grimm.jpg" />
          <Dlc title="Lifeblood" text="A Kingdom Upgraded! New Boss. Upgraded Bosses. Tweaks and Refinements across the whole game." src="https://hollowknight.com/wp-content/uploads/2018/09/cp_thumbs__0001_Life.jpg" />
          <Dlc title="Godmaster" text="Take your place amongst the Gods. New Characters and Quest. New Boss Fights. Epic New Music!" src="https://hollowknight.com/wp-content/uploads/2018/09/cp_thumbs__0002_God.jpg" />
        </div>
      </div>
      <div className="heightOne" />
      <div className="score">
        <div className="downThree">
          <HTwo clase="second" text="A Haunting, Orchestral Score" />
          <Paragraph text="Composed and produced by Christopher Larkin, Hollow Knight's epic score is woven throughout the game, echoing the sadness of a majestic civilisation brought to ruin." />
        </div>
        <Image src="https://hollowknight.com/wp-content/uploads/2018/09/albums.jpg" height="50" />
      </div>
      <div className="heightTwo" />
      <div>
        <HFour clase="fourth" text="Purchase the Official Soundtrack" />
        <Store href="https://christopherlarkin.bandcamp.com/album/hollow-knight-original-soundtrack" src="https://hollowknight.com/wp-content/uploads/2018/09/bandcamp1.png" />
      </div>
      <div className="heightThree" />
      <div>
        <HThree clase="third" text="Visit our Friends" />
        <div className="friends">
          <Friends src="https://hollowknight.com/wp-content/uploads/2018/09/logos__0002_1.png" title="BROWSE COOL MERCH!" text="Plush Grubs! Plush Knights! Rad Tees and so much more!" link="https://www.fangamer.com/collections/hollow-knight" />
          <Friends src="https://hollowknight.com/wp-content/uploads/2018/09/logos__0001_2.png" title="CHECK OUT THE RANGE!" text="Classy Tees! Stylish Pins! The coolest, friendliest yetee we know" link="https://theyetee.com/collections/hollow-knight" />
          <Friends src="https://hollowknight.com/wp-content/uploads/2019/01/Ghost_Ramp_Logo_cropped.png" title="ALL THE DETAILS!" text="Limited Vinyl Releases!" link="https://ghost-ramp.myshopify.com/collections/videogames" />
        </div>
      </div>
      <div className="downFour"><Parallax image="https://hollowknight.com/wp-content/uploads/2018/09/Xbox_Art_Assets_0002_Super-Hero-Art_dark.jpg" /></div>
      <div className="downFive" />
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
