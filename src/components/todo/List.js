import React from "react";

const List = ({ todos, getTodo, deleteTodo }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <ul className="list-group">
          {todos.map((todo, index) => {
            const { id, nama, status } = todo;
            return (
              <li
                className="list-group-item justify-content-around"
                key={index}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    {nama} |{" "}
                    <span
                      className={`font-weight-bold ${
                        status === "true" ? "text-success" : "text-danger"
                      }`}
                    >
                      {status === "true" ? "Selesai" : "Belum Selesai"}
                    </span>
                  </div>
                  <div>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => getTodo(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ml-2"
                      onClick={() => deleteTodo(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
