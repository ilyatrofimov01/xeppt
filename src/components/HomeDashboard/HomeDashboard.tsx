import { DashboardContainer } from "components/shared-components/styled-components";
import { AddMoneySection, ContentSection } from "./components";

export function HomeDashboard(){
    return (
        <DashboardContainer>
            <ContentSection />
            <AddMoneySection />
        </DashboardContainer>
    )
}