export default function Executives() {
  // Load all JSON exec files eagerly at build time
  const files = import.meta.glob("../content/executives/*.json", { eager: true });

  const execs = Object.values(files).map((mod) => mod.default);

  const activeRoles = execs.filter((e) => !e.vacant);
  const vacantRoles = execs.filter((e) => e.vacant);

  return (
    <section
      id="executives"
      className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Meet the team!
      </h2>

      {/* Executives Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {activeRoles.map((exec) => (
          <div
            key={exec.role + (exec.name || "")}
            className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center"
          >
            <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4 text-center">
              {exec.role}
            </h3>

            {/* Photo or placeholder */}
            {exec.photo ? (
              <img
                src={exec.photo}
                alt={exec.name || exec.role}
                className="bg-offwhite w-full h-64 rounded-2xl object-cover"
              />
            ) : (
              <div className="bg-offwhite w-full h-64 rounded-2xl" />
            )}

            {/* Name - Now with 'capitalize' */}
            {exec.name && (
              <p className="mt-4 text-greentxt font-inria text-lg capitalize font-bold">
                {exec.name}
              </p>
            )}

            {/* Bio - New Section */}
            {exec.bio && (
              <p className="mt-2 text-greentxt font-inria text-sm text-center opacity-90">
                {exec.bio}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Vacant Positions */}
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