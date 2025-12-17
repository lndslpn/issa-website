import React from 'react';

export default function Resources() {
  // Load JSON files eagerly from the resource folders defined in config.yml
  const articleFiles = import.meta.glob("../content/articles/*.json", { eager: true });
  const associationFiles = import.meta.glob("../content/associations/*.json", { eager: true });
  const bulletinFiles = import.meta.glob("../content/bulletin/*.json", { eager: true });

  // Map modules to their default export data
  const articles = Object.values(articleFiles).map((mod) => mod.default);
  const associations = Object.values(associationFiles).map((mod) => mod.default);
  const bulletins = Object.values(bulletinFiles).map((mod) => mod.default);

  return (
    <section id="resources" className="bg-offwhite min-h-[80vh] px-6 py-16 flex flex-col items-center">
      {/* Page Title */}
      <h2 className="text-tantxt font-instrument text-xl md:text-2xl mb-12 text-center">
        Learn more!
      </h2>

      {/* Main Grid Container: 1 col on mobile, 2 col on desktop */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Articles */}
        <div className="flex flex-col gap-6">
          <h3 className="text-greentxt font-instrument text-2xl font-bold mb-2">Articles</h3>
          {articles.map((item, index) => (
            <a 
              key={index} 
              href={item.url} // Uses "url" from config.yml
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lighttanback rounded-2xl p-10 h-48 flex items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-greentxt font-instrument text-xl font-semibold">
                {item.label} {/* Uses "label" from config.yml */}
              </span>
            </a>
          ))}
        </div>

        {/* Right Column: Associations & Bulletin Board */}
        <div className="flex flex-col gap-12">
          
          {/* Similar Associations Section */}
          <div>
            <h3 className="text-greentxt font-instrument text-2xl font-bold mb-4">Similar Associations</h3>
            <div className="flex flex-col gap-3">
              {associations.map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} // Uses "url" from config.yml
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lighttanback rounded-xl py-4 px-6 text-center text-greentxt font-instrument text-lg font-medium hover:bg-opacity-80 transition-all cursor-pointer"
                >
                  {item.label} {/* Uses "label" from config.yml */}
                </a>
              ))}
            </div>
          </div>

          {/* Bulletin Board Section */}
          <div className="bg-lighttanback rounded-3xl p-6 shadow-sm">
            <h3 className="text-greentxt font-instrument text-2xl font-bold mb-4">Bulletin Board</h3>
            <div className="flex flex-col gap-4">
              {bulletins.map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} // Entire card is now the link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-offwhite rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h4 className="text-greentxt font-instrument text-lg font-bold">
                    {item.label} {/* Uses "label" from config.yml */}
                  </h4>
                  <p className="text-greentxt font-inria text-sm opacity-80 mt-1">
                    Click to learn more.
                  </p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}