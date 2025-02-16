# Next.js 15 Query Parameter Redirect Bug

This repository demonstrates a strange behavior in Next.js 15 when redirecting to a page with query parameters using the `useRouter` hook.  The redirect works as expected but the query parameters seem to be lost or ignored in some cases.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Click the "Go to Home with Query" button. 
6. Notice that the query parameter `name` is not available on the home page.

## Expected Behavior

The query parameter `name` should be available on the home page after redirecting.

## Actual Behavior

The query parameter `name` is not available on the home page.

## Possible Solution

The solution may be related to how Next.js handles client-side redirects and query parameters. Further research into the `useRouter.push` method and its interaction with query parameters is needed.