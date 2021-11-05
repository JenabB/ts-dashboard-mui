import { useMemo, FC, ReactNode } from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
//
import shape from "./shape";
import palette from "./pallete";
import typography from "./typography";
import breakpoints from "./breakpoints";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------

interface Props {
  children: ReactNode;
}
const ThemeConfig: FC<Props> = ({ children }: Props) => {
  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape,
      typography,
      breakpoints,
      shadows,
      customShadows,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
