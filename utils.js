export function parseQueryParams({ column, direction }, validColumns) {
  if (!column) return;
  const order = {
    column: null,
    direction: "DESC",
  };

  if (column && validColumns.includes(column)) {
    order.column = column;
  }

  if (direction && ["ASC", "DESC"].includes(direction)) {
    order.direction = direction;
  }

  return [Object.values(order)];
}
