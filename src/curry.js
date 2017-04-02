// @flow
import _ from 'lodash/fp';

const curriedSum = _.curry((val1, val2) => val1 + val2);

export default curriedSum;
