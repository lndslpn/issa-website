export default function Faq() {
  const files = import.meta.glob("../content/faq/*.json", { eager: true });
  const faqs = Object.values(files).map((mod) => mod.default);

  return (
    <section
      id="faq"
      className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Questions?
      </h2>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        {faqs.map((item, idx) => (
          <div
            key={item.question + idx}
            className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-6"
          >
            <h3 className="text-greentxt font-instrument text-lg font-semibold mb-2">
              {item.question}
            </h3>
            <p className="text-greentxt font-inria text-base">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}