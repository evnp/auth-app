import _ from 'lodash';
import * as util from './utilities';

export const ACTIONS = util.mapToObject([
  'CHANGE_USER',
]);

export function changeUser(user=null) {
  return {type: ACTIONS.CHANGE_USER, user};
}
