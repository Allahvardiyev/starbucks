import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  let footerData = [
    {
      "About Us": [
        {
          text: "Our Company",
          path: "/company",
          id: 1,
        },
        {
          text: "Our Coffee",
          path: "/coffee",
          id: 2,
        },
        {
          text: "Stories and News",
          path: "/stories-news",
          id: 3,
        },
        {
          text: "Starbucks Archive",
          path: "/archive",
          id: 4,
        },
        {
          text: "Investor Relations",
          path: "/investor-relations",
          id: 5,
        },
        {
          text: "Customer Service",
          path: "/customer-service",
          id: 6,
        },
        {
          text: "Contact us",
          path: "/contact-us",
          id: 7,
        },
      ],
      id: 111,
    },
    {
      Careers: [
        {
          text: "Culture and Values",
          path: "/culture-values",
          id: 8,
        },
        {
          text: "Inclusion, Diversity, and Equity",
          path: "/inclusion",
          id: 9,
        },
        {
          text: "College Achievement Plan",
          path: "/achievment-plan",
          id: 10,
        },
        {
          text: "Alumni Community",
          path: "/alumni-community",
          id: 11,
        },
        {
          text: "U.S. Careers",
          path: "/us-careers",
          id: 12,
        },
        {
          text: "International Careers",
          path: "/international-careers",
          id: 13,
        },
      ],
      id: 222,
    },
    {
      "Social Impact": [
        {
          text: "People",
          path: "/people",
          id: 14,
        },
        {
          text: "Planet",
          path: "/planet",
          id: 15,
        },
        {
          text: "Environmental and Social Impact Reporting",
          path: "/social-impact",
          id: 16,
        },
      ],
      id: 333,
    },
    {
      "For Business Partners": [
        {
          text: "Landlord Support Center",
          path: "/support-center",
          id: 17,
        },
        {
          text: "Suppliers",
          path: "/suppliers",
          id: 18,
        },
        {
          text: "Corporate Gift Card Sales",
          path: "/card-sales",
          id: 19,
        },
        {
          text: "Office and Foodservice Coffee",
          path: "/foodservice-coffee",
          id: 20,
        },
      ],
      id: 444,
    },
    {
      "Order and Pick Up": [
        {
          text: "Order on the App",
          path: "/order-app",
          id: 21,
        },
        {
          text: "Order on the Web",
          path: "/order-web",
          id: 22,
        },
        {
          text: "Delivery",
          path: "/delivery",
          id: 23,
        },
        {
          text: "Order and Pick Up Options",
          path: "/order-pickup-options",
          id: 24,
        },
        {
          text: "Explore and Find Coffee for Home",
          path: "/find-coffee-home",
          id: 25,
        },
      ],
      id: 555,
    },
  ];
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-acordion">
          {footerData.map((item) => (
            <Accordion key={item.id} className="acordion-main">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
                className="acordion-sum"
              >
                {Object.keys(item)[0]}
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {Object.values(item)[0].map((a) => (
                    <li key={a.id}> 
                      <Link to={`${a.path}`}>{a.text}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="footer-lists">
        {
            footerData.map(item=>(
              <div key={item.id}>
                <p className="list-head">{Object.keys(item)[0]}</p>
                <ul>
                  {
                    Object.values(item)[0].map(a=>(
                      <li key={a.id}>
                        <Link to={`${a.path}`}>{a.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className="hr"></div>
      </div>
      <div className="footer-bottom">
             <div className="footer-icons">
              <ul>
                <li><i className="fa-brands fa-spotify"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-pinterest"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
              </ul>
             </div>
             <div className="footer-secondary-links">
              <ul>
                <li><a href="">Privacy Notice</a><span></span></li>
                <li><a href="">Terms of Use</a><span></span></li>
                <li><a href="">Do Not Share My Personal Information</a><span></span></li>
                <li><a href="">CA Supply Chain Act</a><span></span></li>
                <li><a href="">Accessibility</a><span></span></li>
                <li><a href="">Cookie Preferences</a><span></span></li>
              </ul>
             </div>
             <div className="copyright">
             © 2024 Starbucks Coffee Company. All rights reserved.
             </div>
      </div>
    </footer>
  );
}

export default Footer;
