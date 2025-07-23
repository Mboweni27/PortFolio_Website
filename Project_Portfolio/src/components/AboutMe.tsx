export const AboutMe = () => {
  return (
    <section id="AboutMe" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        About Me
      </h2>

      <p className="mb-6 text-gray-300 text-lg leading-relaxed">
        I am Mbuyelo Batlile Xijahela Mboweni, a passionate full-stack developer
        and automation engineer who thrives at the intersection of technology
        and innovation. Coding isn’t just my profession—it’s my craft, my
        playground, and my continuous learning journey. When I’m not building
        scalable web applications or automating complex workflows, you’ll find
        me immersed in my fitness passions like calisthenics, jogging, and
        weightlifting. Proudly ranked in the 95th percentile worldwide for
        consecutive pull-ups, I’m currently pushing myself towards a new goal of
        30 pull-ups in a row—because growth never stops, both in code and in
        life.
      </p>

      <p className="mb-6 text-gray-300 text-lg leading-relaxed">
        Outside of coding and fitness, I serve as an academic advisor for my
        residence, Green Residence, supporting fellow students and fostering a
        positive learning environment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Effective communication</li>
            <li>Problem-solving mindset</li>
            <li>Adaptability</li>
            <li>Collaboration and teamwork</li>
            <li>Strong work ethic and persistence</li>
          </ul>
        </div>

        {/* Interests & Records */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Interests & Records
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>🏃 Running PB: 3.5 km in 14:30</li>
            <li>💪 95th percentile worldwide for consecutive pull-ups</li>
            <li>🎯 Current fitness goal: 30 pull-ups in a row</li>
            <li>🎮 Passionate about gaming, coding, and learning AI</li>
            <li>🚗 Car enthusiast</li>
            <li>📚 Lifelong learner with a growth mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
