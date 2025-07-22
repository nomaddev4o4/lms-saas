import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/comapnion.action";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessinosCompanions = await getRecentSessions(3);
  return (
    <main>
      <h1 className="text-3xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            duration={companion.duration}
            color={companion.color}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessinosCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
