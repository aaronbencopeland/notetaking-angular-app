import { Observable, fromEvent, map, startWith } from "rxjs";

// Determines if the screen size matches the query passed via parameter
// Returns whether or not the current window matches the query
export const mediaQueryListener = (query: string): Observable<boolean> => {
    const mediaQuery = window.matchMedia(query);

    return fromEvent<MediaQueryList>(mediaQuery, 'change')
        .pipe(
            startWith(mediaQuery),
            map((list: MediaQueryList) => list.matches)
        );
}
