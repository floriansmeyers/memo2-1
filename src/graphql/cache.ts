import { InMemoryCache, makeVar } from '@apollo/client';

export const yearFilter = makeVar<number>(2019);
export const monthFilter = makeVar<string>('January');

export const appLanguageVar = makeVar<string>('');

export const cache = new InMemoryCache();
