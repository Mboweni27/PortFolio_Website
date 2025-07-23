const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* NWU University */}
        <div>
          <h3 className="text-xl font-semibold mb-1">North-West University</h3>
          <p className="italic text-gray-300 mb-1">
            BSc Information Technology (Computer Science & Information Systems)
          </p>
          <p className="text-sm text-gray-400 mb-4">
            2023 — Present (Expected 2025)
          </p>

          <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Software Development & Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Database Systems</li>
            <li>Networking and Security</li>
            <li>Artificial Intelligence</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Matric */}
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Lyttelton Manor High School
          </h3>
          <p className="italic text-gray-300 mb-1">Matriculated: 2022</p>
          <p className="text-sm text-gray-400 mb-4">2018 — 2022</p>

          <h4 className="font-semibold mb-2">Matric Subjects:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Mathematics</li>
            <li>Geography</li>
            <li>Computer Applications Technology</li>
            <li>English</li>
            <li>Afrikaans</li>
            <li>Life Orientation</li>
            <li>Business Studies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
