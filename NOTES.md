# Notes

1. `check-button` was a div with a tab index which is not good for accessibility, so I made it a button
2. I put survey stages in a constant to import because it doesn't change.
3. I noticed some mixed terminology: step vs stage
4. I don't think `name` should be used to send goal/diet to server unless it's guaranteed not to change/be localised.
   I used the `key` instead, but then had to re-name them to match the server validation. If we were surfacing
   a `displayName` as well, then using `name` as originally intended is good.
5. Back in browser doesn't update step. Instead we should drive this state via router instead of on interactions
6. State should be kept in session or local storage to prevent loss of changes
7. Shouldn't be able to access success page directly
8. Difficult to see what global styles are available because they are minified in index.html. I had to look at other components to get an idea
