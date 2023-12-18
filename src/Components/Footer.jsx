import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="flex flex-wrap gap-3 p-5 md:p-10 ">
      <div className="font-montserrat text-base">
        Contact us:
        <br />
        Email: thatobusm@gmail.com
        <br />
        Phone: 062 598 2908
      </div>
      <div className="font-montserrat text-base">
        Links:
        <ul>
          <Link to="/Website">
            <li> Website Development</li>
          </Link>
          <Link to="/SEO">
            <li>SEO & Google Ads</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
