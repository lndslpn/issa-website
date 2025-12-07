import { useEffect, useState } from "react";
import matter from "gray-matter";

export default function Executives() {
  const [execs, setExecs] = useState([]);

  useEffect(() => {
    async function loadExecutives() {
      // Grab all markdown files from src/content/executives
      const files = import.meta.glob("../content/executives/*.md", { as: "raw" });

      const parsed = [];
      for (const path in files) {
        const fileContent = await files[path]();
        const { data } = matter(fileContent); // parse frontmatter
        parsed.push(data);
      }

      // Sort by role (optional)
      parsed.sort((a, b) => a.role.localeCompare(b.role));

      setExecs(parsed);
    }

    loadExecutives();
  }, []);

  const activeRoles = execs.filter((e) => !e.vacant);
  const vacantRoles = execs.filter((e) => e.vacant);

  return (
    <section
      id="executives"
      className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Meet the team!
      </h2>

      {/* Active Execs */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {activeRoles.map((exec) => (
          <div
            key={exec.role}
            className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center"
          >
            <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4 text-center">
              {exec.role}
            </h3>

            {exec.photo ? (
              <img
                src={exec.photo}
                alt={exec.role}
                className="w-full h-64 object-cover rounded-2xl"
              />
            ) : (
              <div className="bg-offwhite w-full h-64 rounded-2xl" />
            )}

            <p className="text-xl mt-4 text-greentxt">{exec.name}</p>
          </div>
        ))}
      </div>

      {/* Vacant Roles */}
      {vacantRoles.length > 0 && (
        <div className="w-full max-w-6xl">
          <h3 className="text-greentxt font-instrument text-xl font-semibold mb-4">
            Vacant Positions
          </h3>

          <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8">
            {vacantRoles.map((exec) => (
              <p
                key={exec.role}
                className="text-greentxt font-instrument text-lg font-medium"
              >
                {exec.role}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}