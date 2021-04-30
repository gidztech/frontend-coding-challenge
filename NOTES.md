# Notes

- `check-button` was a div with a tab index which is not good for accessibility, so I made it a button
- I put survey stages in a constant to import because it doesn't change. Not too sure what best practice is here. I noticed some mixed terminology: step vs stage
- I don't think `name` should be used to send goal/diet to server unless it's guaranteed not to change/be localised.
  I used the `key` instead, but then had to re-name them to match the server validation. I probably overcomplicated it. If we were surfacing
  a `displayName` as well, then using `name` as originally intended makes sense.
- 'Back' in browser doesn't update step. I didn't try to solve this, but we should drive this state via router instead of on interactions
- State should be kept in session or local storage to prevent loss of changes. Not solved here.
- Shouldn't be able to access success page directly, should flush history to prevent long history stack. Not solved here.
- Difficult to see what global styles are available because they are minified in index.html. I had to look at other components to get an idea. Component library would help here.
- I added `data-automation` tag to a component to use as a selector in test because using class selectors is not good practice as they can change

I liked the test overall because it was product work and using technology I'd likely be using. The only downside was spending a lot more time on this than was expected. I hadn't used Vue and Vuex before, and it took some time to get my head around things are wired up.
