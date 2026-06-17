import Image from "next/image";
import { addMovie } from "@/actions/action";

export default function Home() {
  return (
    <section
      className="text-gray-300 body-font overflow-hidden"
      data--h-bstatus="0OBSERVED"
    >
      <div className="container px-5 py-24 mx-auto" data--h-bstatus="0OBSERVED">
        <div
          className="-my-8 divide-y-2 divide-gray-100"
          data--h-bstatus="0OBSERVED"
        >
          <div
            className="py-8 flex flex-wrap md:flex-nowrap"
            data--h-bstatus="0OBSERVED"
          >
            <div
              className="md:w-64 md:mb-0 mb-6 shrink-0 flex flex-col"
              data--h-bstatus="0OBSERVED"
            >
              <span
                className="font-semibold title-font text-gray-200"
                data--h-bstatus="0OBSERVED"
              >
                CATEGORY
              </span>
              <span
                className="mt-1 text-gray-400 text-sm"
                data--h-bstatus="0OBSERVED"
              >
                12 Jun 2019
              </span>
            </div>
            <div className="md:grow" data--h-bstatus="0OBSERVED">
              <h2
                className="text-2xl font-medium text-gray-100 title-font mb-2"
                data--h-bstatus="0OBSERVED"
              >
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p className="leading-relaxed" data--h-bstatus="0OBSERVED">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-4"
                data--h-bstatus="0OBSERVED"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data--h-bstatus="0OBSERVED"
                >
                  <path d="M5 12h14" data--h-bstatus="0OBSERVED"></path>
                  <path d="M12 5l7 7-7 7" data--h-bstatus="0OBSERVED"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="py-8 flex flex-wrap md:flex-nowrap"
            data--h-bstatus="0OBSERVED"
          >
            <div
              className="md:w-64 md:mb-0 mb-6 shrink-0 flex flex-col"
              data--h-bstatus="0OBSERVED"
            >
              <span
                className="font-semibold title-font text-gray-200"
                data--h-bstatus="0OBSERVED"
              >
                CATEGORY
              </span>
              <span
                className="mt-1 text-gray-400 text-sm"
                data--h-bstatus="0OBSERVED"
              >
                12 Jun 2019
              </span>
            </div>
            <div className="md:grow" data--h-bstatus="0OBSERVED">
              <h2
                className="text-2xl font-medium text-gray-100 title-font mb-2"
                data--h-bstatus="0OBSERVED"
              >
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p className="leading-relaxed" data--h-bstatus="0OBSERVED">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-4"
                data--h-bstatus="0OBSERVED"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data--h-bstatus="0OBSERVED"
                >
                  <path d="M5 12h14" data--h-bstatus="0OBSERVED"></path>
                  <path d="M12 5l7 7-7 7" data--h-bstatus="0OBSERVED"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="py-8 flex flex-wrap md:flex-nowrap"
            data--h-bstatus="0OBSERVED"
          >
            <div
              className="md:w-64 md:mb-0 mb-6 shrink-0 flex flex-col"
              data--h-bstatus="0OBSERVED"
            >
              <span
                className="font-semibold title-font text-gray-200"
                data--h-bstatus="0OBSERVED"
              >
                CATEGORY
              </span>
              <span
                className="text-sm text-gray-400"
                data--h-bstatus="0OBSERVED"
              >
                12 Jun 2019
              </span>
            </div>
            <div className="md:grow" data--h-bstatus="0OBSERVED">
              <h2
                className="text-2xl font-medium text-gray-100 title-font mb-2"
                data--h-bstatus="0OBSERVED"
              >
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed" data--h-bstatus="0OBSERVED">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-4"
                data--h-bstatus="0OBSERVED"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data--h-bstatus="0OBSERVED"
                >
                  <path d="M5 12h14" data--h-bstatus="0OBSERVED"></path>
                  <path d="M12 5l7 7-7 7" data--h-bstatus="0OBSERVED"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
