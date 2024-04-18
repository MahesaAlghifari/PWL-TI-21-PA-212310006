const colors = {
    dark1: '#1D1F2B',
    dark2: '#252837',
    blue1: '#6D7EBD'
};

const ButtonPrimary = ({ children, items, actions }) => {
    return (
        <button className={"btn btn-success "}
            type="submit"
            title={items.title}
            onClick={actions}>
            {children}
        </button>
    )
}


const ButtonDelete = ({ children, items, onDelete }) => {
    return (
      <button
        className={"btn btn-sm btn-clear btn-secondary mx-1"}
        type="button"
        title={items.title}
        onClick={onDelete}
        style={{ backgroundColor: colors.dark1, color: "grey" }}
      >
        {children}
      </button>
    );
  };
  
  const ButtonSecondary = ({ children, items, actions }) => {
    return (
        <button className={"btn btn-sm btn-clear btn-secondary m"}
            type="button"
            title={items.title}
            onClick={actions}
            style={{ backgroundColor: colors.dark1, color: "grey" }}>
            {children}
        </button>
    )
}


export { ButtonPrimary, ButtonSecondary, ButtonDelete }
