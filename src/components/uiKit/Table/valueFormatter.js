export const valueFormatter = (params) =>
  params?.value !== undefined ? params.value : params?.column?.colId;
