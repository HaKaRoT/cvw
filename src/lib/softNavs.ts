/*
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ReportOpts} from '../types.js';

export const softNavs = (opts?: ReportOpts) => {
  return (
    PerformanceObserver.supportedEntryTypes.includes('soft-navigation') &&
    opts?.reportSoftNavs
  );
};

export const getSoftNavigationEntry = (
  navigationId?: number
): PerformanceNavigationTiming | SoftNavigationEntry | undefined => {
  if (!navigationId || navigationId === 1) {
    return (
      window.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType('navigation')[0]
    );
  } else {
    return (
      window.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType('soft-navigation')[navigationId - 2]
    );
  }
};
