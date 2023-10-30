'use client'

import LayoutWraper from "@/components/LayoutWraper";
import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";
import MenuComponent from "@/components/Header/Menu";
import SignupOrLogin from "@/components/Header/SignupOrLogin";
import MainBody from "@/components/MainBody";
import About from "@/components/MainBody/About";
import Footer from "@/components/Footer";
import QuickLinks from "@/components/MainBody/CommonComponents/Quicklinks";
import QuicklinksComponent from "@/components/MainBody/CommonComponents/quicklinksComponent";
import { quickDisclosureItems } from "@/components/Data/homeData";
import { useSearchParams  } from "next/navigation";


const  Page = () => {
  const searchParams = useSearchParams()
  const source = searchParams.get('src')
  const platformapp = searchParams.get('platformapp')
  const header = searchParams.get('header')

  return (
    <div>
      <LayoutWraper>

        {/* Header */}
        {source !== 'mapp'&&
        <Header>
           <Logo/>
           <MenuComponent/>
           <SignupOrLogin/>
        </Header>}
        
        {/* Body */}
        <MainBody>
            <About header={header === 'Y'|| header === null ? true : false} platformapp = {platformapp === 'Y' ? true : false }/>
        </MainBody>
        

        {/* Footer */}
        {source !== 'mapp'&&
        <Footer>
          <QuicklinksComponent >
              <QuickLinks quickDisclosureItems={quickDisclosureItems}/>
          </QuicklinksComponent>
        </Footer>}

      </LayoutWraper>
    </div>
  );
}

export default Page;
