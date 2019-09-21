import React from "react";

const MenuButtonClose = props => {
  const styles = {
    container: {
      display: "flex",
      cursor: "pointer",
      color: "black",
      flexDirection: "column",
      height: "35px",
      width: "35px",
      justifyContent: "center",
      justifyItems: "center",
      alignSelf: "center"
    },
    bar1: {
      width: "100%",
      height: "5px",
      borderRadius: "3px",
      backgroundColor: "black"
    },

    bar2: {
      width: "100%",
      height: "5px",
      position: "relative",
      top: "-5px",
      borderRadius: "3px",
      backgroundColor: "black",
      transform: "rotate(-90deg)"
    }
  };
  return (
    <div style={styles.container} onClick={props.handleSidebarHide}>
      <div style={styles.bar1} />
      <div style={styles.bar2} />
    </div>
  );
};

export default MenuButtonClose;
