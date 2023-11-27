import React from "react";

import style from "./table.module.scss";

type TableData = Record<string, string>;

type Header = {
  id: string;
  text: string;
};

type TableProps = {
  headers: Header[];
  rows: TableData[];
  className?: string;
};

const Table: React.FC<TableProps> = ({ headers, rows, className }) => {
  return (
    <table className={`${className} ${style.tableBlock}`}>
      <thead className={style.tableHead}>
        <tr>
          {headers.map((header) => (
            <th key={header.id}>
              <h3>{header.text}</h3>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {headers.map((header) => (
              <td key={header.id}>
                <p>{row[header.id]}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
