import { useEffect, useState } from 'react';
import { Company } from './Company';
import { API } from './globalAPI';


export function CompanyList() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`${API}/company`)
      .then((data) => data.json())
      .then((com) => setCompany(com));
  }, []);

  return (
    <div>
      {company.map((comp) => (
        <Company comp={comp} key={comp._id}/>
      ))}
    </div>
  );
}

