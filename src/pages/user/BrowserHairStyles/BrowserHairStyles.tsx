import "./BrowserHairStyles.css";
import ClientSideBar from "../../../components/SideBars/ClientSideBar";
import TopBar from "../../../components/TopBar/TopBar";
import greetings_bg from "/images/user/greetings_bg.jpg";
import StylistCard from "../../../components/StylistCard/StylistCard";
import HairStyleCard from "../../../components/HairStyleCard/HairStyleCard";

const BrowserHairStyles = () => {
  return (
    <div className="w-screen max-h-dvh flex fixed top-0 left-0">
      <ClientSideBar />

      <div className="w-full">
        <TopBar user="Jason" />
        <div className="no-scrollbar page-content flex flex-col gap-16">
          {/* Greetings message */}
          <div className="bg-violet-500 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-4 overflow-clip h-fit lg:h-56">
            <div className="flex flex-col gap-6 p-6 md:pl-12">
              <div>
                <h2 className="text-neutral-50 h2">
                  Looking to get a hair do?
                </h2>
                <p className="text-neutral-50">
                  We will help you find the perfect style for a perfect look! 😎
                </p>
              </div>
              <div className="flex gap-4">
                <button className="btn bg-neutral-50 text-violet-600  hover:bg-neutral-200">
                  Book now
                </button>
                <button className="btn border border-neutral-50 text-neutral-50 hover:text-neutral-200">
                  View favorites
                </button>
              </div>
            </div>
            <img
              src={greetings_bg}
              alt=""
              className="h-full object-cover w-auto lg:w-[500px] opacity-12"
            />
          </div>

          {/* Search to find your style */}
          {/* <div>
            <h2 className="h2 text-neutral-700">Find your perfect stylist</h2>
          </div> */}
          {/* Top Stylists */}
          <div className="flex flex-col gap-6">
            <h2 className="h2 text-neutral-700">Our top stylists</h2>
            <div className="grid grid-cols-4 gap-6 ">
              <StylistCard />
              <StylistCard />
              <StylistCard />
              <StylistCard />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="h2 text-neutral-700">Recommended for you</h2>
            <div className="grid grid-cols-4 gap-6 ">
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
              <HairStyleCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserHairStyles;
