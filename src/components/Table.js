import React from "react";
import { Table } from 'semantic-ui-react';
import EditIcon from "material-ui/svg-icons/image/edit";
import TrashIcon from "material-ui/svg-icons/action/delete";
import CheckIcon from "material-ui/svg-icons/navigation/check";
import TextField from "material-ui/TextField";

import { Link } from "react-router-dom";

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing,
  increment,
) => {
  const currentlyEditing = editIdx === i;
  return (
    <Table.Row key={`tr-${i}`} selectable={false}>
      <Table.Cell>
        {currentlyEditing ? (
          <TextField
            name={header[0].prop}
            onChange={e => handleChange(e, header[0].prop, i)}
            value={x[header[0].prop]}
          />
        ) : (
          <Link onClick={e => increment(e, header[1].prop, i)} to={`/landing/${x[header[0].prop]}`}>  
            {x[header[0].prop]}
          </Link>       
        )}
      </Table.Cell>  
      <Table.Cell>{x[header[1].prop]}</Table.Cell>
      <Table.Cell>
        {currentlyEditing ? (
          <CheckIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </Table.Cell>
      <Table.Cell>
        <TrashIcon onClick={() => handleRemove(i)} />
      </Table.Cell>
    </Table.Row>
  );
};

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing,
  increment,
}) => (
  <Table 
    celled
    className="table">
    <Table.Header>
      <Table.Row>
        {header.map((x, i) => (
          <Table.HeaderCell key={`thc-${i}`}>{x.name}</Table.HeaderCell>
        ))}
        <Table.HeaderCell>Edit</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleChange,
          stopEditing,
          increment,
        )
      )}
    </Table.Body>
  </Table>
);
