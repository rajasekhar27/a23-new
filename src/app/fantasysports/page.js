import LayoutWraper from "@/components/LayoutWraper";
import Header from "@/components/Header";
import MainBody from "@/components/MainBody";
import Footer from "@/components/Footer";
import FantasySports from "@/components/MainBody/FantasySports";
import PaymentsAndSecurity from "@/components/MainBody/CommonComponents/paymentSecurity";
import QuicklinksComponent from "@/components/MainBody/CommonComponents/quicklinksComponent";
import QuickLinks from "@/components/MainBody/CommonComponents/Quicklinks";
import FooterComponent from "@/components/MainBody/CommonComponents/footerComponent";
import AboutA23Games from "@/components/MainBody/CommonComponents/aboutA23Games";
import { quickDisclosureItems } from "@/components/Data/homeData";

const  Page = () => {
  return (

    <div id="wrapper">

      <LayoutWraper>

        {/* Header */}
        <Header/>
        
        {/* Body */}
        <MainBody>

            <FantasySports/>

        </MainBody>
        
        {/* Footer */}
        <Footer>

          <AboutA23Games />

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
