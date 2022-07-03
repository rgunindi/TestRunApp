
export default function ModalTasks(props) {
  let { id } = props.on[0];
  console.log(props.taskId + "|" + id + "||" + props.on[0].on);
  return (
    <>
      {props.status === true && props.taskId == id ? (
        <div className="modalBackground" key={props.taskId}>
          <div className="modalContainer">
            <button onClick={() => props.modal(false)}>X</button>
            <div className="title">
              <h1>Reports</h1>
            </div>
            <div className="body">
              {props.data && props.data.length > 0 ? (
                <>
                  <p>Reports page is ready! </p>
                  <fieldset>
                    <legend>Task Reports</legend>
                    {props.data &&
                      props.data.map((report, i) => (
                        <fieldset
                          className="failure"
                          style={
                            report.Details.includes("BUILD FAILURE")
                              ? { border: "1px solid red" }
                              : { border: "1px solid #65FAA0" }
                          }
                        >
                          <ul>
                            <li key={i}>
                              Test Id: {report.Id} - Test Task Name:{" "}
                              {report.Name} - {report.LoggedAt}
                            </li>
                            <br />
                            <li>{report.Details}</li>
                          </ul>
                        </fieldset>
                      ))}
                  </fieldset>
                </>
              ) : (
                "No reports yet"
              )}
            </div>

            <div className="footer">
              <button onClick={() => props.modal(false)}>Close</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
