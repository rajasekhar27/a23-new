
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LayoutWraper from "@/components/LayoutWraper";
import MainBody from "@/components/MainBody";
import TourneyInfo from "@/components/MainBody/TourneyInfo";
import PaymentsAndSecurity from "@/components/MainBody/CommonComponents/paymentSecurity";
import QuicklinksComponent from "@/components/MainBody/CommonComponents/quicklinksComponent";
import QuickLinks from "@/components/MainBody/CommonComponents/Quicklinks";
import FooterComponent from "@/components/MainBody/CommonComponents/footerComponent";
import { quickDisclosureItems } from "@/components/Data/homeData";

const  Page = () => {
  return (

    <div id="wrapper">

      <LayoutWraper>

        {/* Header */}
        <Header/>
        
        {/* Body */}
        <MainBody>

            <TourneyInfo/>

        </MainBody>
        
        {/* Footer */}
        <Footer>

          <PaymentsAndSecurity />

          <QuicklinksComponent >
              <QuickLinks quickDisclosureItems={quickDisclosureItems}/>
          </QuicklinksComponent>

          <FooterComponent/>

        </Footer>

      </LayoutWraper>

    </div>

  );
}

export default Page;
