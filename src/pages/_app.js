import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <StyleProvider hashPriority="high">
            {getLayout(<Component {...pageProps} />)}
        </StyleProvider>
    );
}
