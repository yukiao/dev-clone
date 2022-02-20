const formatFieldName = (fieldName) => {
  let formatted = fieldName.toLowerCase();
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  return formatted;
};

function nullValueMessage(fieldName) {
  const formmatted = formatFieldName(fieldName);
  return `${formmatted} cannot be empty`;
}

module.exports = {
  nullValueMessage,
};
