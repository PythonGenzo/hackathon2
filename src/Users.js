export function Users({ users }) {

  return (
    <div className="user-container">
      <div className="user-details">
        <img src={users.photo} alt={users.name} className="users-photo" />
        <div className="users-detail">
          <p><button>{users.name}</button></p>
          <p>{users.state_country}</p>
          <p>{users.points}</p>
          <p>{users.skill}</p>
        </div>
      </div>

    </div>
  );
};

