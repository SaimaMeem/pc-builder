import { store } from "@/redux/store";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <Provider store={store}>
            <StyleProvider hashPriority="high">
                {getLayout(<Component {...pageProps} />)}
            </StyleProvider>
        </Provider>
    );
}
