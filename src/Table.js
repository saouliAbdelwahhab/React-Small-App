import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.prenom}</td>
        <td>
          <button onClick={() => props.removeCharcter(index)}>Deletee</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { removeCharcter } = this.props;
    const { characterData } = this.props;
    return (
      <table id="customers">
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharcter={removeCharcter}
        />
      </table>
    );
  }
}

export default Table;
