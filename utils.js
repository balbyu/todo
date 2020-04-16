/**
 * Parses the query request for valid options and assigns a sort direction if not provided one.
 *
 * @param queryParams the query parameters
 * @param queryParams.column The column of the object to sort by
 * @param queryParams.direciton The direction (ASC, DESC) to sort the column by
 * @param validColumns an array of valid column identifiers
 */
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
