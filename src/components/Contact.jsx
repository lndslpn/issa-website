export default function Contact() {
  const files = import.meta.glob("../content/contact/*.json", { eager: true });
  const contacts = Object.values(files).map((mod) => mod.default);

  return (
    <section
      id="contact"
      className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Let's Connect!
      </h2>

      <div className="w-full max-w-xl flex flex-col gap-4">
        {contacts.map((item, idx) => {
          const url = item.url; // may be undefined if your JSON doesn't include it yet
          const isExternal = typeof url === "string" && /^https?:\/\//.test(url);

          return (
            <div
              key={item.label + idx}
              className="bg-lighttanback rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.15)] px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            >
              {/* Title */}
              <span className="text-greentxt font-instrument text-lg font-semibold">
                {item.label}
              </span>

              {/* Clickable value (if url exists), otherwise plain text */}
              <span className="text-greentxt font-inria text-base break-words">
                {url ? (
                  <a
                    href={url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="hover:underline hover:opacity-80 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}