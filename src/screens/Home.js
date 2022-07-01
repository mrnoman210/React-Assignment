import React from 'react'
import crui1 from "../Images/crui1.jpg"
// import crui2 from "../Images/crui2.jpg"
// import crui3 from "../Images/crui3.jpg"
// import crui4 from "../Images/crui4.jpg"
import man from "../Images/man.jpg"
import dataimg1 from "../Images/dataimg1.webp"
import dataimg2 from "../Images/dataimg2.webp"
import dataimg3 from "../Images/dataimg3.webp"
import dataimg4 from "../Images/dataimg4.webp"
import dataimg5 from "../Images/dataimg5.webp"
import "./Css/Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='container'>
    <h1 id='trendingHeading'>Trending</h1>
   
       {/* Area Carusal */}
    <span>
    <div className='Carousal displayflex'>
        <img src={crui1} className='Crausalimage displayinline'/>
    <div className='carusalText'>
      <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
      <Link to={"/"} className='ForLinks yourmost'><h1>Your most unhappy customers are your greatest source of learning.</h1></Link>
      <p className='carusalText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
       
       {/* Intro Area Below Carusal */}
       <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

    </div>
    </div>
    {/* <div className='carusalDotes'></div> */}
    {/* <div className='carusalDotes'></div>
    <div className='carusalDotes'></div>
    <div className='carusalDotes'></div>
    <div className='carusalDotes'></div> */}
    </span>
    </div>
<span>


<div className='container'>
{/* Data Image Area */}
<div className='dataArea'>
{/* Data 01 */}
<div className='data1'>
  <img src={dataimg1} className='dataareaimg'/>
  <div className='dataalign'>
  <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>

      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

  </div>
</div>



{/* Data 02 */}
<div className='data1'>
  <img src={dataimg2} className='dataareaimg'/>
  <div className='dataalign'>
  <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

  </div>
</div>



{/* Data 03 */}

<div className='data1'>
  <img src={dataimg3} className='dataareaimg'/>
  <div className='dataalign'>
  <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

  </div>
</div>


</div>

{/* Data 04 */}
<div className='dataArea'>
<div className='data1'>
  <img src={dataimg4} className='dataareaimg'/>
  <div className='dataalign'>
  <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

  </div>
</div>



{/* Data 05 */}
<div className='data1'>
  <img src={dataimg3} className='dataareaimg'/>
  <div className='dataalign'>
  <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

  </div>
</div>


{/* Data 06 */}
<div className='data1'>
  <img src={dataimg5} className='dataareaimg'/>
  <div className='dataalign'>
  <Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

  </div>
</div>
</div>
</div>
</span>
<span>
<h2 className='MostPopularPosts'>Most Popular Posts</h2>
<div className='DataAfterPosts'>
<img src={dataimg5} className='afterPopularPosts'/>
<br/>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <p className='dataareaText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
      <div className='manintro'>
        <img src={man} className='manpic'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetials'>Sergy CampBell</Link>
        <p className='ceofounder'>CEO and Founder</p>
      </div>
       </div>

</div>
</span>


<span>
<div className='containerlarge'>
{/* Flex div */}
<div className='displayflex sportandbusiness'>
{/* Sports Data */}
<div className='sportsdata'>
<h1 className='sports'>Sports</h1>
<div className='displayflex'>
{/* Sports Data # 01 */}
<img src={dataimg3} className="sideimgaes"/>
<div className='afterflex'>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  "></Link>


  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <div className='manintroinlast'>
        <img src={man} className='manpicinthelast'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetialsinlast'>Sergy CampBell</Link>
        <p className='ceofounder'>Author, 26 published post</p>
      </div>
       </div>


</div>

</div>

<div className='displayflex'>
{/* Sports Data # 02 */}
<img src={dataimg2} className="sideimgaes"/>
<div className='afterflex'>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  "></Link>


  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <div className='manintroinlast'>
        <img src={man} className='manpicinthelast'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetialsinlast'>Sergy CampBell</Link>
        <p className='ceofounder'>Author, 26 published post</p>
      </div>
       </div>


</div>

</div>
<div className='displayflex'>
{/* Sports Data # 03 */}
<img src={dataimg4} className="sideimgaes"/>
<div className='afterflex'>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  "></Link>


  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <div className='manintroinlast'>
        <img src={man} className='manpicinthelast'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetialsinlast'>Sergy CampBell</Link>
        <p className='ceofounder'>Author, 26 published post</p>
      </div>
       </div>


</div>

</div>
</div>




{/* Business Data */}
<div className='businessdata'>
<h1 className='business'>Business</h1>
<div className='displayflex'>
{/* Business Data # 01 */}
<img src={dataimg3} className="sideimgaes"/>
<div className='afterflex'>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  "></Link>


  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
      <div className='manintroinlast'>
        <img src={man} className='manpicinthelast'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetialsinlast'>Sergy CampBell</Link>
        <p className='ceofounder'>Author, 26 published post</p>
      </div>
       </div>


</div>

</div>


<div className='displayflex'>
{/* Business Data # 02 */}
<img src={dataimg4} className="sideimgaes"/>
<div className='afterflex'>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  "></Link>


  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <div className='manintroinlast'>
        <img src={man} className='manpicinthelast'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetialsinlast'>Sergy CampBell</Link>
        <p className='ceofounder'>Author, 26 published post</p>
      </div>
       </div>


</div>

</div>
<div className='displayflex'>
{/* Business Data # 03 */}
<img src={dataimg1} className="sideimgaes"/>
<div className='afterflex'>
<Link to={"business"} className='ForLinks displayinline carusalLinks'>Business </Link>
      ,
      <Link to={"travel"} className='ForLinks displayinline carusalLinks'>Travel </Link>— July 2, 2020
  <Link to={"/"} className="ForLinks  "></Link>


  <Link to={"/"} className="ForLinks  ">
  <p className='youcanDataArea'>Your most unhappy customers are your greatest source of learning.</p>
  </Link>
  <div className='manintroinlast'>
        <img src={man} className='manpicinthelast'/>
      <div className='topintro'>
        <Link to={"/"} className='ForLinks manIntroDetialsinlast'>Sergy CampBell</Link>
        <p className='ceofounder'>Author, 26 published post</p>
      </div>
       </div>
</div>
</div>
</div>
</div>
</div>
</span>





    </>
  )
}

export default Home