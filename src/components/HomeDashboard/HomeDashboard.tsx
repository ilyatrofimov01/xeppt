import { DashboardContainer, DashboardContentContainer } from "components/shared-components/styled-components";
import { AddMoneySection, ContentSection } from "./components";
import { globeImage } from "assets/img";
import { GlobeImage } from "./styled-components";

export function HomeDashboard(){
    return (
        <DashboardContainer>
            <DashboardContentContainer>
                <ContentSection />
                <AddMoneySection />
            </DashboardContentContainer>
            <GlobeImage src={globeImage} alt="globe backgroundImage"/>
        </DashboardContainer>
    )
}