import React from "react";
import styles from "./privacyPolicyLists.module.scss";
import cn from "classnames";

type PrivacyPolicyListsProps = {
  text: string;
  className?: string;
};

const PrivacyPolicyLists: React.FC<PrivacyPolicyListsProps> = ({
  text,
  className,
}) => {
  return <li className={cn(className, styles.privacyPolicyLists)}>{text}</li>;
};

export default PrivacyPolicyLists;
