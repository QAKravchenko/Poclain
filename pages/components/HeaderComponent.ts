import { type Page, type Locator } from '@playwright/test';

export class HeaderComponent {
    readonly page: Page;
    readonly header: Locator;

    // Вспомогательные элементы и навигация
    readonly skipToMainContentLink: Locator;
    readonly logoLink: Locator;
    readonly menuToggleButton: Locator;
    readonly searchLink: Locator;

    // Верхнее меню и переключатель языка
    readonly aboutUsNavLink: Locator;
    readonly networkNavLink: Locator;
    readonly newsNavLink: Locator;
    readonly languageEnglishLink: Locator;
    readonly languageFrenchLink: Locator;
    readonly eshopNavLink: Locator;

    // Основные 8 разделов главного меню
    readonly productsMenuLink: Locator;
    readonly applicationsMenuLink: Locator;
    readonly hevoMenuLink: Locator;
    readonly electrificationMenuLink: Locator;
    readonly systemsMenuLink: Locator;
    readonly servicesSupportMenuLink: Locator;
    readonly resourcesMenuLink: Locator;
    readonly corporateMenu: Locator;

    // Подменю: Products (Основные категории)
    readonly hydraulicMotorsMenuLink: Locator;
    readonly hydraulicPumpsMenuLink: Locator;
    readonly hydraulicValvesMenuLink: Locator;

    // Подменю Products: Серии гидромоторов (Hydraulic Motors)
    readonly mkCompactnessMenuLink: Locator;
    readonly mgSteerableWheelMenuLink: Locator;
    readonly mhpHighPerformanceMenuLink: Locator;
    readonly msMultipurposeMenuLink: Locator;
    readonly mlChainDriveMenuLink: Locator;
    readonly mfRotatingCamMenuLink: Locator;
    readonly mtTrackDriveMenuLink: Locator;
    readonly miHighPowerMenuLink: Locator;
    readonly mzSwingDriveMenuLink: Locator;
    readonly cdmClutchableDoubleShaftMenuLink: Locator;
    readonly mhdMotorsMenuLink: Locator;

    // Подменю Products: Гидронасосы (Hydraulic Pumps)
    readonly pmAxialPistonPumpsMenuLink: Locator;

    // Подменю Products: Гидроклапаны (Hydraulic Valves)
    readonly vbHydraulicBrakeValvesMenuLink: Locator;
    readonly motionControlValvesMenuLink: Locator;

    // Подменю: HEVO
    readonly hevoTechnologiesMenuLink: Locator;
    readonly hevoBoosterMenuLink: Locator;
    readonly hevoDualMenuLink: Locator;

    // Подменю: Electrification
    readonly eWheelMenuLink: Locator;
    readonly ePowertrainMenuLink: Locator;
    readonly invertersMenuLink: Locator;
    readonly eMotorsMenuLink: Locator;

    // Подменю: Corporate
    readonly corporateTheGroupMenu: Locator;
    readonly corporateGovernanceMenuLink: Locator;
    readonly corporateCsrMenuLink: Locator;
    readonly corporateHistoryMenuLink: Locator;
    readonly corporateInnovationMenuLink: Locator;
    readonly corporateValuesMenuLink: Locator;
    readonly corporateCareersMenu: Locator;
    readonly corporateGrowWithUsMenuLink: Locator;
    readonly corporateJoinUsMenuLink: Locator;
    readonly foundationMenuLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('header');

        this.skipToMainContentLink = page.getByRole('link', { name: 'Skip to main content' });
        this.logoLink = this.header.getByRole('link', { name: 'Poclain Hydraulics logo' });
        this.menuToggleButton = this.header.locator('.header-btn-menu');
        this.searchLink = this.header.locator('a[href="/search"]');

        this.aboutUsNavLink = this.header.locator('a[href="/about-us"]').first();
        this.networkNavLink = this.header.locator('a[href="/network"]').first();
        this.newsNavLink = this.header.locator('a[href="/news"]').first();
        this.languageEnglishLink = this.header.getByRole('link', { name: 'English' }).first();
        this.languageFrenchLink = this.header.getByRole('link', { name: 'Français' }).first();
        this.eshopNavLink = this.header.locator('a[href="https://eshop.poclain-hydraulics.com/"]').first();

        // 8 основных разделов
        this.productsMenuLink = this.header.locator('a[href="/products"]').first();
        this.applicationsMenuLink = this.header.locator('a[href="/applications"]').first();
        this.hevoMenuLink = this.header.locator('a[href="/hevo"]').first();
        this.electrificationMenuLink = this.header.locator('a[href="/electrification"]').first();
        this.systemsMenuLink = this.header.locator('a[href="/systems"]').first();
        this.servicesSupportMenuLink = this.header.locator('a[href="/services-support"]').first();
        this.resourcesMenuLink = this.header.locator('a[href="/resources"]').first();
        this.corporateMenu = this.header.locator('.header-navigation__menu-btn').filter({ hasText: 'Corporate' }).first();

        // Подменю Products
        this.hydraulicMotorsMenuLink = this.header.locator('a[href="/products/hydraulic-motors"]').first();
        this.hydraulicPumpsMenuLink = this.header.locator('a[href="/products/hydraulic-pumps"]').first();
        this.hydraulicValvesMenuLink = this.header.locator('a[href="/products/hydraulic-valves"]').first();

        this.mkCompactnessMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mk-compactness"]').first();
        this.mgSteerableWheelMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mg-steerable-wheel"]').first();
        this.mhpHighPerformanceMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mhp-high-performance"]').first();
        this.msMultipurposeMenuLink = this.header.locator('a[href="/products/hydraulic-motors/ms-multipurpose"]').first();
        this.mlChainDriveMenuLink = this.header.locator('a[href="/products/hydraulic-motors/ml-chain-drive"]').first();
        this.mfRotatingCamMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mf-rotating-cam"]').first();
        this.mtTrackDriveMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mt-track-drive"]').first();
        this.miHighPowerMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mi-high-power"]').first();
        this.mzSwingDriveMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mz-swing-drive"]').first();
        this.cdmClutchableDoubleShaftMenuLink = this.header.locator('a[href="/products/hydraulic-motors/cdm-clutchable-double-shaft"]').first();
        this.mhdMotorsMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mhd-motors"]').first();

        this.pmAxialPistonPumpsMenuLink = this.header.locator('a[href="/products/hydraulic-pumps/axial-piston-hydraulic-pumps"]').first();

        this.vbHydraulicBrakeValvesMenuLink = this.header.locator('a[href="/products/hydraulic-valves/hydraulic-brake-valves"]').first();
        this.motionControlValvesMenuLink = this.header.locator('a[href="/products/hydraulic-valves/hydraulic-valves-power-transmission-motion-control"]').first();

        // Подменю HEVO
        this.hevoTechnologiesMenuLink = this.header.locator('a[href="/hevo"]').first();
        this.hevoBoosterMenuLink = this.header.locator('a[href="/hevo/hevo-booster"]').first();
        this.hevoDualMenuLink = this.header.locator('a[href="/hevo/hevo-dual"]').first();

        // Подменю Electrification
        this.eWheelMenuLink = this.header.locator('a[href="/electrification/ewheel"]').first();
        this.ePowertrainMenuLink = this.header.locator('a[href="/electrification/epowertrain"]').first();
        this.invertersMenuLink = this.header.locator('a[href="/electrification/emdrive-inverters"]').first();
        this.eMotorsMenuLink = this.header.locator('a[href="/electrification/mma-emotors"]').first();

        // Подменю Corporate
        this.corporateTheGroupMenu = this.header.locator('.header-navigation__menu-btn').filter({ hasText: 'The Group' }).first();
        this.corporateGovernanceMenuLink = this.header.locator('a[href="/corporate/governance"]').first();
        this.corporateCsrMenuLink = this.header.locator('a[href="/corporate/corporate-social-responsibility-csr"]').first();
        this.corporateHistoryMenuLink = this.header.locator('a[href="/corporate/history"]').first();
        this.corporateInnovationMenuLink = this.header.locator('a[href="/corporate/innovation"]').first();
        this.corporateValuesMenuLink = this.header.locator('a[href="/corporate/vision-values"]').first();
        this.corporateCareersMenu = this.header.locator('.header-navigation__menu-btn').filter({ hasText: 'Careers' }).first();
        this.corporateGrowWithUsMenuLink = this.header.locator('a[href="/corporate/careers/grow-with-us"]').first();
        this.corporateJoinUsMenuLink = this.header.locator('a[href="/corporate/careers/join-us"]').first();
        this.foundationMenuLink = this.header.locator('a[href="/foundation"]').first();
    }
}
