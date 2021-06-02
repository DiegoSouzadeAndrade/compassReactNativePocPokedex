import React, { useEffect } from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ApplicationProvider } from '../context/ApplicationContext';
import App from '../../App';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'SourceSansPro-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'SourceSansPro-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'SourceSansPro-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'SourceSansPro-ExtraLight',
      fontWeight: 'normal',
    },
  },
};

const Routes = () => {
  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0038A8',
      accent: '#f1c40f',
    },
  };

  return (
    <ApplicationProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </ApplicationProvider>
  );
};

export default Routes;