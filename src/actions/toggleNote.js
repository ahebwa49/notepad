const TOGGLE = "TOGGLE";

export const toggleNote = note => {
  return {
    type: TOGGLE,
    note: note
  };
};
