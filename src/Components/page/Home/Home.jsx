import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";
import img6 from "../../../images/img6.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="section-1">
        <div className="section-1-img">
          <img src={img1} alt="" />
        </div>
        <div className="section-1-text">
          <div>
            <p className="section-head-content">Introducing Oleato™</p>
            <p className="section-text">
              A luxuriously smooth coffee experience perfectly balanced with
              Partanna® extra virgin olive oil.
            </p>
            <Link>Send an gift</Link>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-text">
          <div>
            <p className="section-head-content">Savory and satisfying</p>
            <p className="section-text">
              Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the
              way.
            </p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="section-2-img">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="section-3">
        <div className="section-3-img">
          <img src={img3} alt="" />
        </div>
        <div className="section-3-text">
          <div>
            <p className="section-head-content">
              Love at First Sip Duo, now in the app
            </p>
            <p className="section-text">
              Join Starbucks® Rewards and say “be mine” to the Chocolate-Covered
              Strawberry Crème Frappuccino® drink or Chocolate Hazelnut Cookie
              Cold Brew, perfect for sharing. Here for a limited time.
            </p>
            <Link>Download to Order</Link>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="section-4-text">
          <div>
            <p className="section-head-content">Our latest collection</p>
            <p className="section-text">
              Damon Brown celebrates Black culture and his take on community
              using surprising color palettes, angles, and shapes in this artist
              series.
            </p>
            <Link>Meet Damon</Link>
          </div>
        </div>
        <div className="section-4-img">
          <img src={img4} alt="" />
        </div>
      </div>
      <div className="section-5">
        <div className="section-5-img">
          <img src={img5} alt="" />
        </div>
        <div className="section-5-text">
          <div>
            <p className="section-head-content">Your go-to brought to you</p>
            <p className="section-text">
              Enjoy 20% off Starbucks orders of $15+ on DoorDash. Offer valid
              1/22-2/4. New customers only. Max discount up to $5. Terms apply.*
            </p>
            <Link>Order now</Link>
          </div>
        </div>
      </div>
      <div className="section-6">
        <div className="section-6-text">
          <div>
            <p className="section-head-content">Savory and satisfying</p>
            <p className="section-text">
              Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the
              way.
            </p>
            <Link>Order now</Link>
          </div>
        </div>
        <div className="section-6-img">
          <img src={img6} alt="" />
        </div>
      </div>
      <div className="end-content">
        <p>
          *Valid 1/22-2/4, enjoy 20% off your Starbucks order of $15 or more
          through the DoorDash app, excluding taxes and fees. Maximum discount
          is up to $5. New customers only. Restrictions and other
          taxes/fees/gratuity still apply. See DoorDash app for details and
          location availability. Fees subject to change. Restricted delivery
          area. Menu limited. Delivery orders may be limited to a maximum
          subtotal no more than $100, excluding taxes and fees, on any single
          transaction. We may adjust this limit at any time at our discretion.
          Product image may vary from delivered product. Available at
          participating locations only. All deliveries subject to availability.
          Must have or create a valid DoorDash account with valid form of
          accepted payment on file. No cash value. Non-transferable. Prices for
          Starbucks items purchased through DoorDash may be higher than as
          marked or posted in stores. May not be combined with other offers,
          discounts or promotions. See DoorDash terms and conditions at
          help.doordash.com/consumers/s/article/offer-terms-conditions.
        </p>
      </div>
    </div>
  );
};

export default Home;
