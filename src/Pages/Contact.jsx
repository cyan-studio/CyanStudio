const Contact = () => {
  return (
    <div className="flex h-auto w-screen flex-col gap-y-5 bg-dgray p-5 md:p-10">
      {/*Hero section*/}
      <div className="flex flex-col justify-start gap-y-5 p-5 font-montserrat md:p-10 ">
        <p id="hero" className=" p-o m-0 justify-self-start font-medium">
          <p id="hero" className="inline font-medium text-hcyan">
            See You Soon!
          </p>{" "}
        </p>
        <p className=" p-o m-0 text-xs  font-normal text-lgray md:w-1/2 md:text-lg md:font-light">
          After filling out the form you should be contacted within the week!{" "}
        </p>
      </div>

      <div className="w-full font-mSubrayada text-lg text-lgray md:text-4xl lg:text-5xl">
        Lets Connectl
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
  );
};

export default Contact;
