import { CategoryMenu } from "../CategoryMenu/CategoryMenu"
import { CurrencySelector } from "../CurrencySelector/CurrencySelector"
import { Footer } from "../Footer/Footer"
import { IconMenu } from "../IconMenu/IconMenu"
import { Logo } from "../Logo/Logo"
import { MainMenu } from "../MainMenu/MainMenu"
import { TopBar } from "../TopBar/TopBar"
import { MainContent } from "../MainContent/MainContent"
export function Layout({ children }) {
    return (
        <>
            <MainContent>
                <TopBar>
                    <MainMenu></MainMenu>
                    <Logo></Logo>
                    <div>
                        <CurrencySelector></CurrencySelector>
                        <IconMenu></IconMenu>
                    </div>
                    
                </TopBar>
                <CategoryMenu></CategoryMenu>
                {children}
            </MainContent>
            <Footer></Footer>
        </>
    )
}