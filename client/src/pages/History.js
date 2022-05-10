import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";

const History = (props) => {
  const tableBody = useMemo(() => {
    return props.launches
      ?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.sha)}>
            <td>{launch.sha}</td>
            <td>{launch.authorName}</td>
            <td>{launch.commitMessage}</td>
            <td>{new Date(launch.creationDate).toDateString()}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <article id="history">
      <Appear animate show={props.entered}>
        <Paragraph>History of commits of the GitHub repository</Paragraph>
        <Table animate>
          <table style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "23rem" }}>Sha</th>
                <th style={{ width: "7rem" }}>Author Name</th>
                <th style={{ width: "10rem" }}>Message</th>
                <th style={{ width: "8rem" }}>Date</th>
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </Table>
      </Appear>
    </article>
  );
};

export default History;
