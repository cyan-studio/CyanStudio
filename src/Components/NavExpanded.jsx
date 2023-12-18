import { Link } from "react-router-dom";

export const NavExpanded = (props) => {
  // eslint-disable-next-line react/prop-types
  let expan = props.expanded;

  if (!expan) return;
  return (
    <div className="h-full w-full border-2 border-b border-lgray">
      <div className="flex flex-col gap-x-10 gap-y-2.5 bg-dgray px-5 py-2.5  text-lgray md:flex-row md:px-10 md:py-5">
        <div className="flex flex-col font-montserrat">
          <Link
            to="/Website"
            className="text-bsm hover:font-semibold md:mb-2 md:text-xl"
          >
            Website Development
          </Link>
          <ul className="ml-5 hidden list-disc text-base font-light md:contents">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Mock Ups</li>
            <li>Prototype</li>
            <li>and more</li>
          </ul>
        </div>
        <div className="flex flex-col font-montserrat">
          <Link
            to="/SEO"
            className="text-sm hover:font-semibold md:mb-2 md:text-xl"
          >
            Search Engine Optimization
          </Link>
          <ul className="ml-5 hidden list-disc text-base font-light md:contents">
            <li>Backlink Analysis</li>
            <li>Link Building</li>
            <li>SEO Performance</li>
            <li>Audit Site</li>
            <li>Site Crawl and bug report</li>
            <li>and more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
