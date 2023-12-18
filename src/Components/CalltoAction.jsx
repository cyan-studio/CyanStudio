import { Link } from "react-router-dom";

export const CalltoAction = (props) => {
  return (
    <Link to="/contact">
      <button className="w-fit bg-dgray p-2.5 font-montserrat text-base font-medium text-lgray md:px-[60px] md:py-[15px] md:text-2xl lg:px-[81px] lg:py-[19px] lg:text-3xl">
        {/* eslint-disable-next-line react/prop-types*/}
        {props.text}
      </button>
    </Link>
  );
};

export const SEOCalltoAction = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <Link to="/SEO">
      <button className="w-fit bg-dgray p-2.5 font-montserrat text-base font-medium text-lgray md:px-[60px] md:py-[15px] md:text-2xl lg:px-[81px] lg:py-[19px] lg:text-3xl">
        {/* eslint-disable-next-line react/prop-types */}
        {props.text}
      </button>
    </Link>
  );
};

export const WebCalltoAction = (props) => {
  return (
    <Link to="/Website">
      <button className="w-fit bg-dgray p-2.5 font-montserrat text-base font-medium text-lgray md:px-[60px] md:py-[15px] md:text-2xl lg:px-[81px] lg:py-[19px] lg:text-3xl">
        {/* eslint-disable-next-line react/prop-types, no-undef */}
        {props.text}
      </button>
    </Link>
  );
};
