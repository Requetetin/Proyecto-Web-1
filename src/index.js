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
import '../dist/7938bb43f7a98d1ddc8ddc35893af210.jpg'

const App = () => (
  <div className="font">
    <div><Parallax image="7938bb43f7a98d1ddc8ddc35893af210.jpg" /></div>
    <div className="center downOne">
      <div><Image src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617773200235-37F2RZTI6FCZ7Q2C27L0/ke17ZwdGBToddI8pDm48kMhqWHp80jPD0R1J6V6WI9ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI2aPxl-FFNTg7i0LgEO4JxavU23hGuh041-BDfp22RUk/logo_main.png" alt="Log" height="auto" width="auto" /></div>
      <div><HFour clase="first" text="Adventure through a forgotten kingdom of insects and heroes" /></div>
    </div>
    <div className="center downTwo">
      <div className="padded"><HTwo clase="second" text="Descend into the Dark" /></div>
      <div className="iandt">
        <Image src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/ke17ZwdGBToddI8pDm48kDbdLE7YtGRntuFX5kvV7ZVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzX_Kqw-DSHUDKKNqTjHCmM7_uSPdE4I3Ht0EubtLc-JgcMSUqksi2GcyTVVRnV2TQ/mines.jpg" />
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
        <Image src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763465032-T3M2QQ4KMOTWS3EW7FC8/ke17ZwdGBToddI8pDm48kDbdLE7YtGRntuFX5kvV7ZVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzX_Kqw-DSHUDKKNqTjHCmM7_uSPdE4I3Ht0EubtLc-JgcMSUqksi2GcyTVVRnV2TQ/false_knight.jpg" />
      </div>
      <div className="iandt">
        <Image src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763599729-KB821M5EQA818FABUXO3/ke17ZwdGBToddI8pDm48kDbdLE7YtGRntuFX5kvV7ZVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzX_Kqw-DSHUDKKNqTjHCmM7_uSPdE4I3Ht0EubtLc-JgcMSUqksi2GcyTVVRnV2TQ/lake_of_unn.jpg" />
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
          <Store href="https://www.nintendo.com/games/detail/hollow-knight-switch" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/48a56168-0b87-4f22-af78-c684cb30dbf6/ke17ZwdGBToddI8pDm48kAd_MRSI1qEtOgd8byGZ3EtZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHiik2qXWFuRTByxmBx8q-4wlbSUoTmZnMfmL0uV4fAQD-3CTWZQ124CTRPXn-dnvM/store_logos__0000_Layer-7.png?format=500w" />
          <Store href="https://store.playstation.com/en-us/product/UP1822-CUSA13632_00-HOLLOWKNIGHT18US" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/346967da-cbb2-4ec7-ba17-a9575940f546/ke17ZwdGBToddI8pDm48kAd_MRSI1qEtOgd8byGZ3EtZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHiik2qXWFuRTByxmBx8q-4wlbSUoTmZnMfmL0uV4fAQD-3CTWZQ124CTRPXn-dnvM/store_logos__0005_Layer-2.png?format=500w" />
          <Store href="https://www.microsoft.com/en-us/p/hollow-knight-voidheart-edition/9mw9469v91lm" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/a35fdf81-8c59-447b-a235-932629efaf80/ke17ZwdGBToddI8pDm48kAd_MRSI1qEtOgd8byGZ3EtZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHiik2qXWFuRTByxmBx8q-4wlbSUoTmZnMfmL0uV4fAQD-3CTWZQ124CTRPXn-dnvM/store_logos__0002_Layer-5.png?format=500w" />
        </div>
        <div className="purchases">
          <Store href="https://store.steampowered.com/app/367520/Hollow_Knight/" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/72f81473-d8d9-4345-b3a6-6bce932219cf/ke17ZwdGBToddI8pDm48kAd_MRSI1qEtOgd8byGZ3EtZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHiik2qXWFuRTByxmBx8q-4wlbSUoTmZnMfmL0uV4fAQD-3CTWZQ124CTRPXn-dnvM/store_logos__0004_Layer-8.png?format=500w" />
          <Store href="https://www.gog.com/game/hollow_knight" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/c16daa4a-5ed5-453a-9579-d9f0034eb91b/ke17ZwdGBToddI8pDm48kAd_MRSI1qEtOgd8byGZ3EtZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHiik2qXWFuRTByxmBx8q-4wlbSUoTmZnMfmL0uV4fAQD-3CTWZQ124CTRPXn-dnvM/store_logos__0006_Layer-3.png?format=500w" />
          <Store href="https://www.humblebundle.com/store/hollow-knight" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/015d8746-271d-47a5-bf5a-98f4e61866a8/ke17ZwdGBToddI8pDm48kAd_MRSI1qEtOgd8byGZ3EtZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHiik2qXWFuRTByxmBx8q-4wlbSUoTmZnMfmL0uV4fAQD-3CTWZQ124CTRPXn-dnvM/store_logos__0003_Layer-4.png?format=500w" />
        </div>
      </div>
      <div className="heightOne" />
      <div>
        <HTwo clase="second" text="Hollow Knight Expands with 4 Giant Free Content Packs" />
        <div className="purchases">
          <Dlc title="Hidden Dreams" text="Mighty new foes emerge! New Boss fights. New Upgrades. New Music." src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617765260761-95ZQRWCDRLOSBXZZKW5P/ke17ZwdGBToddI8pDm48kEmaYrhcc_OJ8AYsRoc-mblZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-tj69PLdT2jV8O9YetYI79KwtNDiafHZEtqMTkfyCANIw/cp_thumbs__0003_HD-1.jpg" />
          <Dlc title="The Grimm Troupe" text="Light the Nightmare Lantern. Summon the Troupe. New Major Quest. New Boss Fights. New Charms. New Enemies. New Friends" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617765274908-DFQPAZ3DD0RA43HZV5L9/ke17ZwdGBToddI8pDm48kEmaYrhcc_OJ8AYsRoc-mblZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-tj69PLdT2jV8O9YetYI79KwtNDiafHZEtqMTkfyCANIw/cp_thumbs__0000_Grimm.jpg" />
          <Dlc title="Lifeblood" text="A Kingdom Upgraded! New Boss. Upgraded Bosses. Tweaks and Refinements across the whole game." src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617765348210-JRRYZWFA39VIH18YZJKU/ke17ZwdGBToddI8pDm48kEmaYrhcc_OJ8AYsRoc-mblZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-tj69PLdT2jV8O9YetYI79KwtNDiafHZEtqMTkfyCANIw/cp_thumbs__0001_Life.jpg" />
          <Dlc title="Godmaster" text="Take your place amongst the Gods. New Characters and Quest. New Boss Fights. Epic New Music!" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617765374873-IP4ANI7I6BITEWEVJMRJ/ke17ZwdGBToddI8pDm48kEmaYrhcc_OJ8AYsRoc-mblZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-tj69PLdT2jV8O9YetYI79KwtNDiafHZEtqMTkfyCANIw/cp_thumbs__0002_God.jpg" />
        </div>
      </div>
      <div className="heightOne" />
      <div className="score">
        <div className="downThree">
          <HTwo clase="second" text="A Haunting, Orchestral Score" />
          <Paragraph text="Composed and produced by Christopher Larkin, Hollow Knight's epic score is woven throughout the game, echoing the sadness of a majestic civilisation brought to ruin." />
        </div>
        <Image src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1618301847645-ET681WARSCYE555KSEPX/ke17ZwdGBToddI8pDm48kEobe1lNNDwqLjgMHVnza8JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzoG2Jmu5WBp3TxepSoicyY48cZoDVZFLTuIu_zukpMwna3vcxQ3LfoxwLRWAWt8sA/albums.jpg" height="50" />
      </div>
      <div className="heightTwo" />
      <div>
        <HFour clase="fourth" text="Purchase the Official Soundtrack" />
        <Store href="https://christopherlarkin.bandcamp.com/album/hollow-knight-original-soundtrack" src="https://i0.wp.com/filtermexico.com/wp-content/uploads/2020/03/ETWt_pzUEAAyt0N.jpg?fit=970%2C550&ssl=1" />
      </div>
      <div className="heightThree" />
      <div>
        <HThree clase="third" text="Visit our Friends" />
        <div className="friends">
          <Friends src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617770302866-AI8IAJKDX2OP8DKY70ER/ke17ZwdGBToddI8pDm48kLyPjUO6KGSuuPIcTAZGSDxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEKTMiX3A37hwQFG7MLVufvKh5yBAGH9ySCSkcyi1OM8mQ6l2WM7tn7mqHTODzkmeM/logos__0002_1.png" title="BROWSE COOL MERCH!" text="Plush Grubs! Plush Knights! Rad Tees and so much more!" link="https://www.fangamer.com/collections/hollow-knight" />
          <Friends src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617773843793-Q3495JWLVAIXXBHOBHYT/ke17ZwdGBToddI8pDm48kLyPjUO6KGSuuPIcTAZGSDxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEKTMiX3A37hwQFG7MLVufvKh5yBAGH9ySCSkcyi1OM8mQ6l2WM7tn7mqHTODzkmeM/logos__0001_2.png" title="CHECK OUT THE RANGE!" text="Classy Tees! Stylish Pins! The coolest, friendliest yetee we know" link="https://theyetee.com/collections/hollow-knight" />
          <Friends src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617773942871-6CFH09K3YPMO3O4J16TR/ke17ZwdGBToddI8pDm48kLyPjUO6KGSuuPIcTAZGSDxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEKTMiX3A37hwQFG7MLVufvKh5yBAGH9ySCSkcyi1OM8mQ6l2WM7tn7mqHTODzkmeM/Ghost_Ramp_Logo_cropped.png" title="ALL THE DETAILS!" text="Limited Vinyl Releases!" link="https://ghost-ramp.myshopify.com/collections/videogames" />
        </div>
      </div>
      <div className="downFour"><Parallax image="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617774821378-9XJHZTY649UIZFYEKZVT/ke17ZwdGBToddI8pDm48kMfXn14p903o_5rReG4YYisUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhYrfzBFA6BtAPsUTxexyUpU4BUJPdL_3rWpXDXqOINpCjLISwBs8eEdxAxTptZAUg/ps4_blog_feature_image.png" /></div>
      <div className="downFive" />
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
