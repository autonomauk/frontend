import Logo from "../../components/logo/Logo";
import GenericPage from "../GenericPage/GenericPage";

const FourOhFourPage = () => {
    return (
        <GenericPage>
            <a href="/"><Logo/></a>
            <p>This page doesn't exist... Maybe you'd like to go back to <b><a href="/">home</a></b>?</p>
        </GenericPage>
    );
}

export default FourOhFourPage;