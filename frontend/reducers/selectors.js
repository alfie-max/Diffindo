import { keys, values } from 'lodash';

export const selectAllBillsGroupedByMonth = bills => {
  //The returned array has the following format:
  //[ [2015-01, [{Bill_1}, {Bill_2}, {Bill_3}], 2015-02, [{Bill_4}] ] ]
  //Selecting the [0] element, we'll have a, array in which the first element will be the month group and the second one will be an array of bill objects:
  // result = [ 2015-01, [{Bill_1}, {Bill_2}, {Bill_3}] ]
  // result[0] = 2015-01
  // result[1] = [{Bill_1}, {Bill_2}, {Bill_3}]

  let allBills = [];

  values(bills).map(group => {
    allBills.push(values(group))
  });

  return [keys(bills), allBills]
};


export const selectFriendIdsFromSplit = splits => {
  // let result = [];
  // splits.forEach( split => {
  //   result.push(split.username);
  // });
  // return result;

  return splits.map(({ user_id }) => user_id);
}

export const numberOfActiveSplits = splits => {
  // We have to check how many splits currently exist and subtract how many
  // are being destroyed.

}
