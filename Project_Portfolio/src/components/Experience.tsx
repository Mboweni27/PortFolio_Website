const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        Experience & Certifications
      </h2>

      {/* Professional Experience */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">Professional Experience</h3>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>
            👨‍🏫 <strong>Academic Advisor - North West University</strong> <br />
            Currently mentoring and supporting students academically, helping
            them stay focused and achieve their goals.
          </li>
          <li>
            🧠 <strong>IT Learnership - Stadio Centurion</strong> <br />
            Completed a hands-on IT learnership focused on tech support,
            networking fundamentals, and client-facing skills.
          </li>
        </ul>
      </div>

      {/* Awards */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">Awards & Achievements</h3>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>
            🏆 <strong>2025 Global Arcademia GameJam Winner</strong> - Part of a
            winning team that built an arcade game project in 48 hours, applying
            extensive Object-Oriented Programming principles.
          </li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>
            🛡️{" "}
            <strong>
              CISCO: Introduction to Cybersecurity & Networking Basics
            </strong>{" "}
            - Gained core knowledge in cybersecurity principles and basic
            networking.
          </li>
          <li>
            🎯 Currently preparing for{" "}
            <strong>Microsoft Azure Fundamentals</strong> or{" "}
            <strong>AWS Certified Cloud Practitioner</strong>.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
