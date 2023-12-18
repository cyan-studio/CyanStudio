import { CalltoAction } from "../Components/CalltoAction";

export const WebDev = () => {
  return (
    <div className="mt-5 flex flex-col gap-y-10">
      {/*Hero section*/}
      <div className="flex flex-col justify-start gap-y-5 p-5 font-montserrat md:p-10 ">
        <p id="hero" className=" p-o m-0 justify-self-start font-medium">
          From{" "}
          <p id="hero" className="inline font-medium text-wblue">
            Design
          </p>{" "}
          to{" "}
          <p id="hero" className="inline font-medium text-wblue">
            Development
          </p>{" "}
          lets bring your brand to the web
        </p>
        <p className=" p-o m-0 text-xs font-normal md:w-1/2 md:text-lg md:font-light">
          Using the latest technology we will ensure your digital product will
          give the best client experience.
        </p>
        <CalltoAction text="Book A Consultation" />
      </div>

      {/*Services*/}
      <div className="grid grid-cols-1 gap-y-10 px-5 md:px-10">
        <div className=" grid-col-1 grid w-fit gap-y-0 justify-self-start md:justify-self-center">
          <div className="font-mSubrayada text-lg md:text-4xl lg:text-6xl">
            Web solutions
          </div>
          <div className="w-fit font-montserrat text-xs md:justify-center md:justify-self-center md:text-lg">
            Lets get your <p className="inline text-wblue">your</p> vision to
            the web
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2">
          <div className="flex  w-auto flex-col justify-start gap-y-5">
            <div className="font-montserrat text-base font-semibold md:text-2xl">
              Web design
            </div>
            <div className="font-montserrat text-base md:text-lg">
              It is important to have a website that stands out and effectively
              represents your brand. Logos, Graphic design and Mockups will all
              be used to make sure you get the an aesthetically pleasing and
              satisfying website.
            </div>
            <CalltoAction text="Book a Call" />
          </div>
          <div className="lg: flex h-fit w-full flex-col justify-start gap-y-5">
            <div className="font-montserrat text-base font-semibold md:text-2xl">
              Web Development
            </div>
            <div className="font-montserrat text-base md:text-lg">
              Great code makes great designs truly come to life. Following lean
              development processes ensures that we deliver digital products
              that last and follow high security and performance standards.
            </div>
            <CalltoAction text="Book a Call" />
          </div>
        </div>

        <div className=" grid-col-1 grid w-fit gap-y-0 justify-self-start md:justify-self-center">
          <div className="font-mSubrayada text-lg md:text-4xl lg:text-6xl">
            Our Approach
          </div>
          <div className="w-fit font-montserrat text-xs md:justify-center md:justify-self-center md:text-lg">
            How we <p className="inline text-wblue">your</p> vision to the web
          </div>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-24 font-montserrat">
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">01 Set Scope</div>
            <div className="text-base">
              Once the project is defined. A scope that outlines the specific
              objectives, deliverables, and timelines of the project will be
              created
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">02 Research</div>
            <div className="text-base">
              Define user personas based on the target audience. Perform
              usability testing on existing or similar websites.
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">03 Design</div>
            <div className="text-base">
              Multiple drafts of the projects design will be created and
              detailed until not only the client is satisfied but a great
              industry standard is reached
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">04 Development</div>
            <div className="text-base">
              Using the latest and most relevant technology, the digital product
              will be designed with optimization and fast running websites in
              mind.
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">05 Testing</div>
            <div className="text-base">
              Once the final versions of the product have been created. The app
              will be compared against agianst a set of visual, functional, and
              performance criteria.
            </div>
          </div>
          <div className="flex w-[305px] flex-col gap-y-5">
            <div className="text-lg font-semibold">06 Final Prototype</div>
            <div className="text-base">
              Just before deployment to a server. The final prototype or mockup
              will be viewed by the client and reviewed. Ending the client
              process.
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
