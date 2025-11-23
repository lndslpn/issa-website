
export default function Executives() {
    // Load all JSON files under src/content/executives
    const execFiles = import.meta.glob('../content/executives/*.json', { eager: true });
  
    const executives = Object.values(execFiles).map((mod) => mod.default);
  
    return (
      <section>
        <h2>Our Executives</h2>
        <div>
          {executives.map((e) => (
            <div key={e.name}>
              {e.photo && <img src={e.photo} alt={e.name} />}
              <h3>{e.name}</h3>
              <p>{e.role}</p>
              <p>{e.bio}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }