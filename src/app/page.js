import LayoutWraper from "@/components/LayoutWraper";
import Header from "@/components/Header";
import MainBody from "@/components/MainBody";
import Footer from "@/components/Footer";
import Home from "@/components/MainBody/Home";
import AboutA23Games from "@/components/MainBody/CommonComponents/aboutA23Games";
import PaymentsAndSecurity from "@/components/MainBody/CommonComponents/paymentSecurity";
import QuicklinksComponent from "@/components/MainBody/CommonComponents/quicklinksComponent";
import QuickLinks from "@/components/MainBody/CommonComponents/Quicklinks";
import FooterComponent from "@/components/MainBody/CommonComponents/footerComponent";
import { quickDisclosureItems } from "@/components/Data/homeData";
import FloatingDownload from "@/components/MainBody/CommonComponents/FloatingDownload/FloatingDownload";


const  Page = () => {
  return (

    <div id="wrapper">

      <LayoutWraper>

        {/* Header */}
        <Header/>
           
        {/* Body */}
        <MainBody>

            <Home/>

        </MainBody>

        {/* Footer */}
        <Footer>

          <AboutA23Games />

          <PaymentsAndSecurity />

          <QuicklinksComponent >
              <QuickLinks quickDisclosureItems={quickDisclosureItems} />
          </QuicklinksComponent>

          <FooterComponent/>

          <FloatingDownload/>

        </Footer>

      </LayoutWraper>

    </div>

  );
}

export default Page;
