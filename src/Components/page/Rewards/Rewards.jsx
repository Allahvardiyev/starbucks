import React from "react";
import "./Rewards.css";
import { Link } from "react-router-dom";
import Mobile from "./../../../images/mobile.png";
import Desktop from "./../../../images/desktop.png";
import Rewards1 from "./../../../images/rewards1.jpg";
import Rewards2 from "./../../../images/rewards2.jpg";
import Rewards3 from "./../../../images/rewards3.jpg";
import Rewards4 from "./../../../images/rewards4.jpg";
import Rewards5 from "./../../../images/rewards5.jpg";
import Rewards6 from "./../../../images/rewards6.jpg";
import Rewards7 from "./../../../images/rewards7.jpg";
import Rewards8 from "./../../../images/rewards8.jpg";
import Rewards9 from "./../../../images/rewards9.png";
import Rewards10 from "./../../../images/rewards10.png";
import Rewards11 from "./../../../images/rewards11.png";
import Rewards12 from "./../../../images/rewards12.svg";
import Rewards13 from "./../../../images/rewards13.webp";
import Rewards14 from "./../../../images/rewards14.webp";
import Rewardsbackground from "./../../../images/rewardsbackground.jpg";
import data from "./../../../../data/rewardsData.json";
import { useState } from "react";

const Rewards = () => {
  const filtr = ["25", "100", "200", "300", "400"];
  const [selecData, setselecData] = useState(
    data.data.find((item) => item.id === 25)
  );
  console.log(selecData);
  const fitr = (e) => {
    const filterData = data.data.find((item) => item.id === +e.target.value);
    console.log(filterData);
    setselecData(filterData);
  };
  return (
    <div className="rewards">
      <div className="rewards-head">
        <p>STARBUCKS® REWARDS</p>
        <Link>Join in the app</Link>
      </div>
      <div className="rewards-head-section">
        <div className="rewards-head-left">
          <p>FREE COFFEE IS A TAP AWAY</p>
          <p>Join now to start earning Rewards.</p>
          <Link>Join now</Link>
        </div>
        <div className="rewards-head-right">
          <img src={Desktop} alt="" />
        </div>
      </div>
      <div className="rewards-section-1">
        <div className="rewards-section-text">
          <h2>Getting started is easy</h2>
          <p>Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className="rewards-card">
          <div className="rewards-card-1">
            <div className="rewards-card-img">
              <img src={Rewards1} alt=""/>
            </div>
            <div className="rewards-card-text">
              <h6>Create an account</h6>
              <p>
                To get started, join now. You can also join in the app to get
                access to the full range of Starbucks® Rewards benefits.
              </p>
            </div>
          </div>
          <div className="rewards-card-1">
            <div className="rewards-card-img">
              <img src={Rewards2} alt="" />
            </div>
            <div className="rewards-card-text">
              <h6>Order and pay how you’d like</h6>
              <p>
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways. Learn how
              </p>
            </div>
          </div>
          <div className="rewards-card-1">
            <div className="rewards-card-img">
              <img src={Rewards3} alt="" />
            </div>
            <div className="rewards-card-text">
              <h6>Earn Stars, get Rewards</h6>
              <p>
                To get started, join now. You can also join in the app to get
                access to the full range of Starbucks® Rewards benefits.As you
                earn Stars, you can redeem them for Rewards—like free food,
                drinks, and more. Start redeeming with as little as 25 Stars!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards-section-2">
        <div className="rewards-section-text">
          <h2>Getting started is easy</h2>

          {filtr.map((item, id) => {
            return (
              <button key={id} onClick={fitr} value={item}>
                {item} *
              </button>
            );
          })}
        </div>
      </div>
      <div className="rewards-section-3">
        <div className="rewards-section-3-img">
          <img src={selecData.img} alt="" />
        </div>
        <div className="rewards-section-text">
          <h2>{selecData.name}</h2>
          <p>{selecData.title}</p>
        </div>
      </div>
      <div className="rewards-section-4">
        <div className="rewards-section-text">
          <h2>Endless Extras</h2>
          <p>
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>
        <div className="rewards-card">
          <div className="rewards-card-1">
            <div className="rewards-card-img">
              <img src={Rewards4} alt="" />
            </div>
            <div className="rewards-card-text">
              <h6>Fun freebies</h6>
              <p>
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </p>
            </div>
          </div>
          <div className="rewards-card-1">
            <div className="rewards-card-img">
              <img src={Rewards5} alt="" />
            </div>
            <div className="rewards-card-text">
              <h6>Order & pay ahead</h6>
              <p>
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </p>
            </div>
          </div>
          <div className="rewards-card-1">
            <div className="rewards-card-img">
              <img src={Rewards6} alt="" />
            </div>
            <div className="rewards-card-text">
              <h6>Get to free faster</h6>
              <p>
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards-section-5">
        <div className="rewards-section-text">
          <h2>Cash or card, you earn Stars</h2>
          <p>
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>
        <div className="grid">
          <div className="grid-head">
            <h4>1★Star per dollar</h4>
            <p>Pay as you go</p>
          </div>
          <div className="gridItem">
            <div className="flex">
              <div className="rewards-section-5-img">
                <img src={Rewards7} alt="" />
              </div>
              <div className="rewards-section-5-text">
                <h3>Scan and pay separately</h3>
                <p>Use cash or credit/debit card at the register.</p>
              </div>
            </div>
            <div className="flex">
              <div className="rewards-section-5-img">
                <img src={Rewards8} alt="" />
              </div>
              <div className="rewards-section-5-text">
                <h3>Scan and pay separately</h3>
                <p>
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid">
          <div className="grid-head">
            <h4>2★Stars per dollar</h4>
            <p>Add funds in the app</p>
          </div>
          <div className="gridItem">
            <div className="flex">
              <div className="rewards-section-5-img">
                <img src={Rewards9} alt="" />
              </div>
              <div className="rewards-section-5-text">
                <h3>Preload</h3>
                <p>
                  Preload To save time and earn Stars twice as fast, add money
                  to your digital Starbucks Card using any payment option. Scan
                  and pay in one step or order ahead in the app.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="rewards-section-5-img">
                <img src={Rewards10} alt="" />
              </div>
              <div className="rewards-section-5-text">
                <h3>Register your gift card</h3>
                <p>
                  Then use it to pay through the app. You can even consolidate
                  balances from multiple cards in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="rewards-section-6">
          <div className="rewards-section-text">
            <h2>Keep the Rewards Coming</h2>
            <p>
              The Rewards don't stop at your morning coffee. Join Starbucks®
              Rewards and unlock perks from our partners, all while earning more
              Stars.
            </p>
          </div>
          <div className="rewards-section-6-grid">
            <div className="section-6-flex">
              <div className="rewards-section-6-img">
                <img src={Rewards13} alt="" />
              </div>
              <div className="rewards-section-6-text">
                <p>
                  Link your Delta SkyMiles® and Starbucks® Rewards accounts to
                  earn 1 mile per $1 spent at Starbucks and double Stars on
                  Delta travel days.1
                </p>
              </div>
            </div>
            <div className="section-6-flex">
              <div className="rewards-section-6-img">
                <img src={Rewards14} alt="" />
              </div>
              <div className="rewards-section-6-text">
                <p>
                  Link your Bank of America eligible card and Starbucks® Rewards
                  account to earn 2% Cash Back and Bonus Stars on qualifying
                  Starbucks in-app purchases.2
                </p>
              </div>
            </div>
          </div>
          <Link>Join Starbucks® Rewards</Link>
        </div>
      </div>
      <div className="rewards-section-7">
        <div className="revards-7-text">
          <h2>Questions?</h2>
          <p>
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions right over here
            .
          </p>
        </div>
      </div>
      <div className="rewards-section-8">
        <div className="rewards-8-text">
          <p>At participating stores. Restrictions apply.</p>
          <p>
            1Excludes taxes and gratuities. At participating stores. Some
            restrictions apply. Flights purchased close to departure may not
            earn double Stars. Stars and miles may not be earned on purchases of
            alcohol, Starbucks Cards and Starbucks Card reloads. For details,
            visit deltastarbucks.com/terms .↩
          </p>
          <p>
            2At participating stores only. Some restrictions apply. Linked Card
            members will earn 2% Cash Back on the full purchase price of every
            Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars
            may not be earned on purchases of alcohol or on reloads of Starbucks
            Cards that are not registered. For details, visit Terms and
            Conditions . Bank of America, N.A. Member FDIC.↩
          </p>
        </div>
        <div className="rewards-section-8-flex">
          <div className="rewards-text">
            <h5>EARNING STARS</h5>
            <p>
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </p>
            <p>
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </p>
            <p>
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </p>
          </div>
          <div className="rewards-text">
            <h5>TERMS OF USE</h5>
            <p>For full program details visit starbucks.com/rewards/terms .</p>
            <p>
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the Starbucks Store Locator and search for
              locations honoring “Redeem Rewards”.
            </p>
          </div>
        </div>
        <div className="rewards-section-8-flex">
          <div className="rewards-text">
            <h5>BENEFITS</h5>
            <p>
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </p>
          </div>
          <div className="rewards-text">
            <h5>REDEEMING REWARDS</h5>
            <p>For full program details visit starbucks.com/rewards/terms .</p>
            <p>
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. You pay the difference for any beverage customization over
              $1 and/or merchandise item over $20. Not all stores honor tiered
              Rewards. Select stores redeem 200 Stars for free food or drink
              items only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
