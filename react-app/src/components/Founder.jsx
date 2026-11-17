import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '15+', label: 'years of experience' },
  { value: '7', label: 'countries of university partners' },
  { value: 'MBA', label: 'Marketing, University of Pune' },
];

const teams = ['Jamboree Education', 'TimesPro', 'SI-UK India', 'Intake Education', 'AECC Global'];

function Founder() {
  const mediaRevealRef = useReveal();
  const textRevealRef = useReveal();

  return (
    <section className="section" id="founder" aria-labelledby="founder-title">
      <div className="container split split--wide-right">
        <div className="founder__media reveal" ref={mediaRevealRef}>
          <div className="founder__photo">
            {/* [PLACEHOLDER] Replace the initials with the founder's portrait */}
            <span className="founder__initials" aria-hidden="true">
              SH
            </span>
          </div>
          <p className="founder__caption">
            <span className="founder__caption-name">Sunil Hadimani</span>
            <span className="founder__caption-role">Founder &amp; Director</span>
          </p>
        </div>

        <div className="reveal" ref={textRevealRef}>
          <div className="section-head">
            <p className="eyebrow">Meet the founder</p>
            <h2 className="section-head__title" id="founder-title">
              Led by 15+ years in international education.
            </h2>
          </div>

          <p className="founder__bio">
            Sunil Hadimani brings more than 15 years of experience in corporate management and international
            education. Since moving into education in 2014, he has worked with university delegates from the UK,
            Ireland, the USA, Canada, Australia, Germany and Dubai.
          </p>
          <p className="founder__bio">
            He founded DawnBridge Strategies on a simple belief: good strategy, trusted relationships and a partner
            who stays beyond launch day open doors for students, schools and institutions alike.
          </p>

          <ul className="stat-list founder__stats" role="list">
            {stats.map((stat) => (
              <li className="stat-list__item" key={stat.label}>
                <span className="stat-list__value">{stat.value}</span>
                <span className="stat-list__label">{stat.label}</span>
              </li>
            ))}
          </ul>

          <div className="founder__teams">
            <p className="founder__teams-label">Has led branches and teams at</p>
            <ul className="founder__team-list" role="list">
              {teams.map((team) => (
                <li className="founder__team" key={team}>
                  {team}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
