const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        Experience & Certifications
      </h2>

      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">Awards & Achievements</h3>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>
            🏆 <strong>2025 Global Arcademia GameJam Winner</strong> —
            Collaborated with a team to develop an innovative game project that
            won first place.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>
            🛡️ <strong>CISCO Certified Network Associate (CCNA)</strong> —
            Completed foundational networking certification.
          </li>
          <li>
            🎯 Currently planning to pursue{" "}
            <strong>Microsoft Azure Fundamentals</strong> or{" "}
            <strong>AWS Certified Cloud Practitioner</strong>.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
