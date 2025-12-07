export default function Events() {
  // Load all JSON event files at build time
  const files = import.meta.glob("../content/events/*.json", { eager: true });

  let events = Object.values(files).map((mod) => mod.default);

  // Sort by date descending (newest first)
  events = events.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section
      id="events"
      className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        What's coming up!
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, idx) => (
          <article
            key={event.title + idx}
            className="bg-lighttanback rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col gap-3"
          >
            <h3 className="text-greentxt font-instrument text-2xl font-semibold">
              {event.title}
            </h3>
            {event.date && (
              <p className="text-tantxt font-inria text-sm">
                {new Date(event.date).toLocaleString(undefined, {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            )}
            {event.location && (
              <p className="text-greentxt font-inria text-sm">
                Location: {event.location}
              </p>
            )}
            {event.description && (
              <p className="text-greentxt font-inria text-base mt-2">
                {event.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}