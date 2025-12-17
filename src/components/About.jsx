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

          <div className="bg-offwhite w-full h-64 rounded-2xl p-4 flex flex-col gap-4">
            <p className="text-greentxt text-center">
              Founded and officially registered under UASU in 2023, ISSA has since then grown to 10+ executives and 30+ general members.
            </p>
            <p className="text-greentxt text-center">
              Since our beginning, we have hosted several events, connected with numerous students, and continue to grow our network annually.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center">
          <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4">
            Our Purpose
          </h3>
          <div className="bg-offwhite w-full h-64 rounded-2xl p-4 flex flex-col gap-4">
            <p className="text-greentxt text-center">
              We work as a collective to create resources, events, and community for all Indigenous students in STEM at the UofA.
            </p>
            <p className="text-greentxt text-center">
              This ensures our community is supported in their unique challenges and needs to ensure success regardless of barriers.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center">
          <h3 className="text-greentxt font-instrument text-2xl font-semibold mb-4">
            Why We Exist
          </h3>

          <div className="bg-offwhite w-full h-64 rounded-2xl p-4 flex flex-col gap-4">
            <p className="text-greentxt text-center">
              Indigenous students in STEM have one of the highest dropout rates at the UofA due to a lack of support for the unique barriers they face.
            </p>
            <p className="text-greentxt text-center">
              We hope to address these barriers and support in a way that ensures STEM at UofA continues to be inclusive and diverse for all Indigenous students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}