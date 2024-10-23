import React, { useState } from 'react';

const PerksSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="perks--section py-12">
      <article className="container md:w-[80%] mx-auto px-6">
        {/* Visible perks */}
        <ul className="perks--wrap space-y-6">
          <li className="perks--perk">
            <h3 className="perks--perk-title text-xl font-semibold">
              FUEL Your Passion
            </h3>
            <div className="perks--perk-copy mt-2">
              <p className="text-gray-700">
                Our Mind, Body, &amp; Soul program is an incredible resource that offers certain reimbursement benefits like physical wellness, child care, WFH setup, and therapy to promote your well-being both inside and outside of work, in a way that creates the most impact for you.
              </p>
            </div>
          </li>

          <li className="perks--perk">
            <h3 className="perks--perk-title text-xl font-semibold">
              Bonus Perks &amp; Incentives
            </h3>
            <div className="perks--perk-copy mt-2">
              <p className="text-gray-700">
                In addition to uncapped commissions, top producers are eligible for additional performance-based bonuses and incentives.
              </p>
            </div>
          </li>
        </ul>

        {/* Toggle button for hidden perks */}
        <div className='flex justify-center'>
           <button
            aria-expanded={isExpanded}
            className="perks--accordion-trigger mt-8  text-center mx-auto text-green-600"
            aria-controls="perkpnl-6"
            onClick={handleToggle} >
            <h4 className="text-lg">{isExpanded ? 'Hide Benefits and Perks' : 'View All Benefits and Perks'}</h4>
           </button>
        </div>

        {/* Hidden perks */}
        {isExpanded && (
          <ul className="perks--wrap space-y-6 mt-6" id="perkpnl-6">
            <li className="perks--perk">
              <h3 className="perks--perk-title text-xl font-semibold">Uncapped Commission</h3>
              <div className="perks--perk-copy mt-2">
                <p className="text-gray-700">
                  For those driven by achievement, our uncapped commission structure rewards your hard work and dedication.
                </p>
              </div>
            </li>

            <li className="perks--perk">
              <h3 className="perks--perk-title text-xl font-semibold">Flex Fridays</h3>
              <div className="perks--perk-copy mt-2">
                <p className="text-gray-700">
                  Based on your weekly performance, enjoy “Flex Fridays” for some well-deserved downtime.
                </p>
              </div>
            </li>

            <li className="perks--perk">
              <h3 className="perks--perk-title text-xl font-semibold">Generous PTO</h3>
              <div className="perks--perk-copy mt-2">
                <p className="text-gray-700">
                  We value work-life integration, as reflected in our generous PTO policy. Take the time you need to recharge and return refreshed.
                </p>
              </div>
            </li>

            <li className="perks--perk">
              <h3 className="perks--perk-title text-xl font-semibold">Annual Reward Trip</h3>
              <div className="perks--perk-copy mt-2">
                <p className="text-gray-700">
                  Top performers celebrate their success with an all-expenses-paid annual vacation.
                </p>
              </div>
            </li>

            <li className="perks--perk">
              <h3 className="perks--perk-title text-xl font-semibold">Cell Phone Reimbursement</h3>
              <div className="perks--perk-copy mt-2">
                <p className="text-gray-700">
                  We cover part of your cell phone bill, knowing that it’s an essential tool in your professional life.
                </p>
              </div>
            </li>
          </ul>
        )}       
      </article>
    </section>
  );
};

export default PerksSection;
