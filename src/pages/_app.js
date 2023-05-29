import { ThemeProvider } from "@mui/material";
import Layout from "@/components/Layout";
import theme from "@/theme";
import '@/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
