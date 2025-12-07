export default function About() {
  return (
    <section id="about" className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center">
      
      {/* Section Title */}
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Learn more about us!
      </h2>

      {/* 3-Column Card Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center">
          <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4">
            Our Journey
          </h3>

          <div className="bg-offwhite w-full h-64 rounded-2xl" />
        </div>

        {/* Card 2 */}
        <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center">
          <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4">
            Our Purpose
          </h3>

          <div className="bg-offwhite w-full h-64 rounded-2xl" />
        </div>

        {/* Card 3 */}
        <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center">
          <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4">
            Why We Exist
          </h3>

          <div className="bg-offwhite w-full h-64 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}