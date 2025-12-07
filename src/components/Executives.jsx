export default function Executives() {
  const execRoles = [
    "Co-President",
    "Co-President",
    "Vice President",
    "VP Finance",
    "VP Engineering",
    "VP Science",
    "VP ALES",
    "VP Grad",
    "VP External",
  ];

  const vacantRoles = ["VP Admin"];

  return (
    <section id="executives" className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Meet the team!
      </h2>

      {/* Executives Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {execRoles.map((role) => (
          <div
            key={role}
            className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center"
          >
            <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4 text-center">
              {role}
            </h3>

            {/* Placeholder photo area */}
            <div className="bg-offwhite w-full h-64 rounded-2xl" />
          </div>
        ))}
      </div>

      {/* Vacant Positions */}
      <div className="w-full max-w-6xl">
        <h3 className="text-greentxt font-instrument text-xl font-semibold mb-4">
          Vacant Positions
        </h3>

        <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8">
          {vacantRoles.map((role) => (
            <p
              key={role}
              className="text-greentxt font-instrument text-lg font-medium"
            >
              {role}
            </p>
          ))}
        </div>
      </div>

    </section>
  );
}