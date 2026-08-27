import { PresentationProvider } from './context/PresentationContext';
import { PresentationLayout } from './components/layout/PresentationLayout';

export function App() {
  return (
    <PresentationProvider>
      <PresentationLayout />
    </PresentationProvider>
  );
}

export default App;
