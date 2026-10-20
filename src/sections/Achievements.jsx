import { achievements } from "../constants";

const Achievements = () => {
  return (
    <section id="achievements" className="mt-20 c-space md:mt-30">
      <h2 className="text-heading">
        Education & <span className="text-terminal">Achievements</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden transition-colors grid-default-color hover:border-terminal/30"
          >
            <p className="text-sm text-lavender">{item.issuer}</p>
            <p className="mt-2 text-xl font-semibold text-text">{item.title}</p>
            <p className="mt-1 subtext">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
