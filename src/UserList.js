import { useEffect, useState } from "react";
import { Users } from "./Users";
import { API } from "./globalAPI";

export function UserList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${API}/user-profile`)
      .then((data) => data.json())
      .then((userList) => setUser(userList));
  }, []);

  return (
    <div>
      {user.map((users) => (
        <Users users={users} key={users._id} />
      ))}
    </div>
  );
}
;
