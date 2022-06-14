export function Company({ comp }) {

  return (
    <div className="company-container">
      <img src={comp.photo} alt={comp.companyName} className="company-image" />
      <div className="company-list">
        <p>{comp.companyName}</p>
        <p>{comp.location}</p>
        <p>{comp.role}</p>
        <p>{comp.description}</p>
      </div>
      <button>Apply Now</button>
    </div>
  );
}
