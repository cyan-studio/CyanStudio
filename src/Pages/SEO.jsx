import { CalltoAction } from "../Components/CalltoAction";

export const SEO = () => {
  return (
    <div className="mt-5 flex flex-col gap-y-10">
      {/*Hero section*/}
      <div className="flex flex-col justify-start gap-y-5 p-5 font-montserrat md:p-10 ">
        <p id="hero" className=" p-o m-0 justify-self-start font-medium">
          Use <p id="hero" className="inline font-medium text-dgreen"></p> to
          Boost your brands{" "}
          <p id="hero" className="inline font-medium text-dgreen">
            online
          </p>{" "}
          presence to its true potential
        </p>

        <p className=" p-o m-0 text-xs font-normal md:w-1/2 md:text-lg md:font-light">
          Using on-page optimization, link building, and content marketing—to
          drive organic traffic. your brand will be elevated
        </p>
        <CalltoAction text="Book A Consultation" />
      </div>

      {/*Services*/}
      <div className="grid grid-cols-1 gap-y-10 px-5 md:px-10">
        <div className=" grid-col-1 grid w-fit gap-y-0 justify-self-start md:justify-self-center">
          <div className="font-mSubrayada text-lg md:text-4xl lg:text-6xl">
            Our Services
          </div>
          <div className="w-fit font-montserrat text-xs md:justify-center md:justify-self-center md:text-lg">
            Perfect <p className="inline text-dgreen">your</p> digital
            Performance
          </div>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-24 font-montserrat">
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">Backlink Analysis</div>
            <div className="text-base">
              Our SEO services include vital backlink analysis. Our expert team
              evaluates your current backlinks, pinpointing high-quality ones,
              toxic links, and chances for new links. This analysis optimizes
              your strategy, boosting website authority and organic search
              visibility.
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">SEO Performance Audit</div>
            <div className="text-base">
              Our Monthly SEO Performance Audit offers ongoing optimization for
              your website`s SEO. We analyze key metrics, identify areas to
              improve, and offer actionable insights to fuel organic growth and
              long-term search engine ranking success.
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">Link Building</div>
            <div className="text-base">
              Our SEO services include strategic link building to enhance your
              site`s authority and visibility. Our team secures valuable
              backlinks through outreach and relationship-building with
              influential sites, boosting search rankings and organic traffic.
              This strengthens your online presence and maximizes your SEO
              impact.
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">Site Crawl & Bug Report</div>
            <div className="text-base">
              Our Site Crawl & Bug Report service optimizes your site`s search
              ranking. Through advanced tools, we analyze structure, URLs,
              metadata, links, and technical elements to resolve issues like
              crawl errors, broken links, and duplicate content. By addressing
              these, we enhance search engine visibility and organic traffic.
            </div>
          </div>
        </div>
      </div>

      {/*Contact */}
      <div className="flex h-auto w-screen flex-col gap-y-5 bg-lgray p-5 md:p-10">
        <div className="w-full font-mSubrayada text-lg text-dgray md:text-4xl lg:text-5xl">
          Lets Connect
        </div>

        <form
          className="flex flex-col gap-7 "
          action="https://formsubmit.co/thatobusm@gmail.com"
          method="POST"
        >
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 ">
            <input
              name="First Name"
              type="text"
              placeholder="First Name"
              className="font-monterrat bg-dgray px-2.5 py-3 text-lgray placeholder-lgray md:py-5"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              className="font-monterrat bg-dgray px-2.5 py-3 text-lgray placeholder-lgray md:py-5"
            />
            <input
              type="integer"
              name="Phone"
              placeholder="Phone"
              className="font-monterrat bg-dgray px-2.5 py-3 text-lgray placeholder-lgray md:py-5"
            />
            <input
              type="Email"
              name="Email"
              placeholder="Email"
              className="font-monterrat bg-dgray px-2.5 py-3 text-lgray placeholder-lgray md:py-5"
            />

            <select
              type="text"
              name="Services"
              placeholder="Services"
              className="font-monterrat bg-dgray px-2.5 py-3 text-lgray placeholder-lgray md:py-5"
            >
              <option value="Web design">Web design</option>
              <option value="SEO">Search Engine Optimization</option>

              <option value="Web development">Web development</option>
            </select>
          </div>
          <input
            type="Submit"
            placeholder="Submit"
            className="w-fit cursor-pointer self-start bg-dgray px-20 py-3 font-montserrat text-base font-semibold text-lgray focus:border-2 focus:border-dgray focus:bg-lgray focus:text-dgray focus:outline-none md:py-5"
          />
        </form>
      </div>
    </div>
  );
};
