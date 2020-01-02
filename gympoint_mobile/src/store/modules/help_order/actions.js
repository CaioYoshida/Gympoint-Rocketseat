export function loadHelp_orders(help_orders) {
  return {
    type: '@help_order/LOAD',
    help_orders,
  };
}

export function createHelp_ordersRequest(student_id, question) {
  return {
    type: '@help_order/CREATE_REQUEST',
    student_id,
    question,
  };
}

export function createHelp_ordersSuccess(student_id) {
  return {
    type: '@help_order/CREATE_SUCCESS',
    student_id,
  };
}
