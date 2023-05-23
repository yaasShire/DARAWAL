import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProfider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootStackNavigation from './src/navigation/rootStackNavigation';
export default function App() {
  return (
    <Provider store={store}>
      <PaperProfider>
        <RootStackNavigation />
      </PaperProfider>
    </Provider>
  );
}

