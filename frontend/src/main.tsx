import App from '@/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';

import './index.css';

const root = document.getElementById('root') as HTMLElement;

const rootElement = createRoot(root);

const queryClient = new QueryClient();

rootElement.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
