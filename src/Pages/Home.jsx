import { CalltoAction } from "../Components/CalltoAction";
import { SEOCalltoAction } from "../Components/CalltoAction";
import { WebCalltoAction } from "../Components/CalltoAction";
import "../Styles/Fonts.css";

const Home = () => {
  return (
    <div className="mt-5 flex flex-col gap-y-10">
      {/*Hero section*/}
      <div className="flex flex-col justify-start gap-y-5 p-5 font-montserrat md:p-10 ">
        <p id="hero" className=" p-o m-0 justify-self-start font-medium">
          <p id="hero" className="inline font-medium text-hcyan">
            Cyan Studio
          </p>{" "}
          is an independent web <br /> solutions studio
        </p>
        <p className=" p-o m-0 text-xs font-normal md:w-1/2 md:text-lg md:font-light">
          We are an online solutions expert focusing on bringing your brand to
          life through the web design and development{" "}
        </p>
        <CalltoAction text="Book a Call" />
      </div>
      {/*Services*/}
      <div className="grid grid-cols-1 gap-y-5 px-5 md:px-10">
        <div className=" grid-col-1 grid w-fit gap-y-0 justify-self-start md:justify-self-center">
          <div className="font-mSubrayada text-lg md:text-4xl lg:text-6xl">
            Our Services
          </div>
          <div className="w-fit font-montserrat text-xs md:justify-center md:justify-self-center md:text-lg">
            How can we help you?
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2">
          <div className="flex  w-auto flex-col justify-start gap-y-5">
            <div className="font-montserrat text-base font-semibold md:text-2xl">
              Website <p className="inline font-semibold text-wblue">Design</p>{" "}
              & <p className="inline font-semibold text-wblue">Development</p>
            </div>
            <div className="font-montserrat text-base md:text-lg">
              Bring your business to the web with {""}
              <p className="inline text-base text-hcyan">Cyan</p>. With us
              you’ll get a personalized 1 on 1 development experience where
              you’ll have control and freedom to see your website come to life.
            </div>
            <WebCalltoAction text="Learn more" />
          </div>
          <div className="lg: flex h-fit w-full flex-col justify-start gap-y-5">
            <div className="font-montserrat text-base font-semibold md:text-2xl">
              <p className="inline font-semibold text-dgreen">SEO</p> &{" "}
              <p className="inline font-semibold text-dgreen">Google Ads</p>
            </div>
            <div className="font-montserrat text-base md:text-lg">
              Up to date SEO employs tailored strategies keyword research,
              on-page optimization, link building, and content marketing to
              drive organic traffic, enhance visibility, and outshine the
              competition.{" "}
            </div>
            <SEOCalltoAction text="Learn more" />
          </div>
        </div>
      </div>
      {/*Contact */}
      <div className="flex h-auto w-screen flex-col gap-y-5 bg-dgray p-5 md:p-10">
        <div className="w-full font-mSubrayada text-lg text-lgray md:text-4xl lg:text-5xl">
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
              className="font-monterrat px-2.5 py-3 text-dgray md:py-5"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              className="font-monterrat px-2.5 py-3 text-dgray md:py-5"
            />
            <input
              type="Number"
              name="Phone"
              placeholder="Phone"
              className="font-monterrat px-2.5 py-3 text-dgray md:py-5"
            />
            <input
              type="Email"
              name="Email"
              placeholder="Email"
              className="font-monterrat px-2.5 py-3 text-dgray md:py-5"
            />

            <select
              type="text"
              name="Services"
              placeholder="Services"
              className="font-monterrat px-2.5 py-3 text-dgray md:py-5"
            >
              <option value="Web design">Web design</option>
              <option value="SEO">Search Engine Optimization</option>

              <option value="Web development">Web development</option>
            </select>
          </div>
          <input
            type="Submit"
            placeholder="Submit"
            className="w-fit cursor-pointer self-start bg-lgray px-20 py-3 font-montserrat text-base font-semibold focus:border-2 focus:border-lgray focus:bg-dgray focus:text-lgray focus:outline-none md:py-5"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
