import React from "react";
import styles from "./minHardwareBlock.module.scss";

import PrivacyPolicyLists from "../../../components/privacyPolicyLists/PrivacyPolicyLists";
import Table from "../../../components/table/Table";

const listItems = [
  {
    id: 1,
    text: "All servers must be connected to each other through a switch with a 1 Gb bandwidth. External bandwidth does not affect the performance of the internal installation but must be reasonable so that users could access the system.",
  },
  {
    id: 2,
    text: "Operating system - Ubuntu 18.04. or higher.",
  },
];

const headers = [
  { id: "host", text: "Host" },
  { id: "cpu", text: "CPU" },
  { id: "ram", text: "RAM" },
  { id: "hdd", text: "HDD" },
];

const rows = [
  {
    id: "1",
    host: "Firewall server*",
    cpu: "2",
    ram: "8",
    hdd: "1200",
  },
  {
    id: "2",
    host: "VMWare server",
    cpu: "2",
    ram: "64",
    hdd: "1200",
  },
  {
    id: "3",
    host: "VMWare server",
    cpu: "2",
    ram: "64",
    hdd: "1200",
  },
  {
    id: "4",
    host: "VMWare server",
    cpu: "2",
    ram: "64",
    hdd: "1200",
  },
  {
    id: "5",
    host: "Backup storage server",
    cpu: "",
    ram: "",
    hdd: "",
  },
];

export const MinHardwareBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.minHardwareBlock}>
      <div className={styles.constent}>
        <h3 className={styles.title}>
          Min hardware and operating system requirements
        </h3>
        <p className={styles.text}>
          These requirements are applicable if you choose to utilize the
          "subscription with installation on the PSP's servers" option. Please
          ensure that you meet these specific requirements if you opt for this
          particular setup.
        </p>
        <Table headers={headers} rows={rows} className={styles.table} />
        <p className={styles.tableText}>
          *The firewall server must have 6 network cards.
        </p>
        <ol className={styles.listContainer}>
          {listItems.map((item) => (
            <PrivacyPolicyLists
              key={item.id}
              text={item.text}
              className={styles.listItem}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MinHardwareBlock;
