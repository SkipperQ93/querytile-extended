export const logError = (message) => {
  console.error("[ERROR]", message);
};

export const closeQueryOps = (settings) => {
  queryOps -= 1;

  if (queryOps > 0) return;

  //Sort options
  var $queryDropdownOptions = $("#query-dropdown option"); // Retrieve options
  $queryDropdownOptions.detach().sort(function (a, b) {
    // Detach from select, then Sort
    var at = $(a).text();
    var bt = $(b).text();
    return at > bt ? 1 : at < bt ? -1 : 0; // Tell the sort function how to order
  });
  $queryDropdownOptions.appendTo($queryDropdown);

  //Select configured id
  if (settings && settings.queryId) {
    $queryDropdown.val(settings.queryId);
  }

  $queryDropdown.prop("disabled", false);
};

export const startQueryOps = () => {
  queryOps += 1;
};
