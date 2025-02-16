```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to home page with query parameter using a different approach
    router.replace({ pathname: '/', query: { name: 'John Doe' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home with Query</button>
    </div>
  );
}
```
The solution involves replacing `router.push` with `router.replace`. This ensures that the browser history entry is replaced with the new path, correctly handling query parameters during the redirect.