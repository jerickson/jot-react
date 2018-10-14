// @flow

'use strict';

import type { Action } from './BookActions';

import { Dispatcher } from 'flux';

const dispatcher: Dispatcher<Action> = new Dispatcher();

export default dispatcher;
