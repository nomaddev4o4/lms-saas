import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import React from "react";

const Page = () => {
  const companions = [
    {
      id: "123",
      name: "Neura the Brainy Explorer",
      topic: "Neural Network of the Brain",
      subject: "Science",
      duration: 45,
      color: "#E5D0FF",
    },
    {
      id: "456",
      name: "Countsy the Number Wizard",
      topic: "Derivatives & Integrals",
      subject: "Maths",
      duration: 30,
      color: "#FFDA6E",
    },
    {
      id: "789",
      name: "Verba the Vocabulary Builder",
      topic: "English Literature ",
      subject: "Language",
      duration: 30,
      color: "#BDE7FF",
    },
  ];
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
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
