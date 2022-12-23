import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MemberList = () => {
  const { user } = useContext(AuthContext);
  const membersData = [
    {
      name: "Abdullah",
      number: "4310001532",
      token: "10001",
    },
    {
      name: "Abdur Rahman",
      number: "4100025532",
      token: "10002",
    },
    {
      name: "Abu Bakkar",
      number: "4251000332",
      token: "10003",
    },
    {
      name: "Omar Faruk",
      number: "4753100042",
      token: "10004",
    },
    {
      name: "Osman",
      number: "4251000532",
      token: "10005",
    },
    {
      name: "Ali",
      number: "4251000639",
      token: "10006",
    },
    {
      name: "Hasan",
      number: "4253100072",
      token: "10007",
    },
    {
      name: "Hossain",
      number: "1000482532",
      token: "10008",
    },
    {
      name: "Amir Hamza",
      number: "4251000932",
      token: "10009",
    },
    {
      name: "Ahmed",
      number: "4253210010",
      token: "10010",
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <div>
            <h2 className="card-title">Select Member</h2>
          </div>
          <div>
            {membersData.map((member, i) => (
              <div key={i} className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    {member.name + " - " + member.number + " - " + member.token}
                  </span>
                  <input type="checkbox" className="checkbox" />
                </label>
              </div>
            ))}
          </div>
          <div>
            <button className="btn btn-primary btn-block">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
