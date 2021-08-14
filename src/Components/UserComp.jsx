
const UserComp = ({data}) => {
  return (
    <div className="usersData">
      {data.map((val) => {
        return (
          <div key={val.id} className="card">
            <div className="cardImage">
              <img src={val.avatar} alt="Img"/>
            </div>

            <div className="cardContent">
              <h1>{`${val.first_name} ${val.last_name}`}</h1>
              <p>{val.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserComp;
