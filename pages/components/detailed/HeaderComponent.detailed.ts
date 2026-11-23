// 1. Импортируем интерфейсы Page и Locator из библиотеки @playwright/test для управления элементами страницы
import { type Page, type Locator } from '@playwright/test';

// 2. Объявляем класс компонента шапки сайта HeaderComponent
export class HeaderComponent {
    // 3. Ссылка на экземпляр текущей страницы браузера
    readonly page: Page;
    // 4. Локатор главного контейнера тега <header> шапки сайта
    readonly header: Locator;

    // Вспомогательные элементы и навигация
    // 5. Локатор ссылки быстрого перехода к основному содержимому для доступности (a11y)
    readonly skipToMainContentLink: Locator;
    // 6. Локатор ссылки с логотипом компании Poclain Hydraulics
    readonly logoLink: Locator;
    // 7. Локатор кнопки открытия адаптивного бургер-меню на мобильных экранах
    readonly menuToggleButton: Locator;
    // 8. Локатор кнопки/ссылки открытия строки поиска сайта
    readonly searchLink: Locator;

    // Верхнее меню и переключатель языка
    // 9. Локатор ссылки раздела "About Us" в верхней строке шапки
    readonly aboutUsNavLink: Locator;
    // 10. Локатор ссылки раздела "Network" (Сеть представительств)
    readonly networkNavLink: Locator;
    // 11. Локатор ссылки раздела "News" (Новости) в верхней строке шапки
    readonly newsNavLink: Locator;
    // 12. Локатор переключателя языка на английский (English)
    readonly languageEnglishLink: Locator;
    // 13. Локатор переключателя языка на французский (Français)
    readonly languageFrenchLink: Locator;
    // 14. Локатор ссылки перехода в интернет-магазин Poclain eShop
    readonly eshopNavLink: Locator;

    // Основные 8 разделов главного меню
    // 15. Локатор ссылки раздела каталога продукции "PRODUCTS"
    readonly productsMenuLink: Locator;
    // 16. Локатор ссылки раздела отраслей применения "APPLICATIONS"
    readonly applicationsMenuLink: Locator;
    // 17. Локатор ссылки инновационного раздела "HEVO"
    readonly hevoMenuLink: Locator;
    // 18. Локатор ссылки раздела электрических систем "ELECTRIFICATION"
    readonly electrificationMenuLink: Locator;
    // 19. Локатор ссылки комплексных систем "SYSTEMS"
    readonly systemsMenuLink: Locator;
    // 20. Локатор ссылки сервисного обслуживания "SERVICES & SUPPORT"
    readonly servicesSupportMenuLink: Locator;
    // 21. Локатор ссылки технической документации "RESOURCES"
    readonly resourcesMenuLink: Locator;
    // 22. Локатор кнопки выпадающего меню корпоративного раздела "CORPORATE"
    readonly corporateMenu: Locator;

    // Подменю: Products (Основные категории)
    // 23. Локатор подраздела гидромоторов "Hydraulic Motors"
    readonly hydraulicMotorsMenuLink: Locator;
    // 24. Локатор подраздела гидронасосов "Hydraulic Pumps"
    readonly hydraulicPumpsMenuLink: Locator;
    // 25. Локатор подраздела гидравлических клапанов "Hydraulic Valves"
    readonly hydraulicValvesMenuLink: Locator;

    // Подменю Products: Серии гидромоторов (Hydraulic Motors)
    // 26. Локатор серии компактных моторов MK Compactness
    readonly mkCompactnessMenuLink: Locator;
    // 27. Локатор серии рулевых колесных моторов MG Steerable Wheel
    readonly mgSteerableWheelMenuLink: Locator;
    // 28. Локатор серии высокопроизводительных моторов MHP High Performance
    readonly mhpHighPerformanceMenuLink: Locator;
    // 29. Локатор серии многоцелевых гидромоторов MS Multipurpose
    readonly msMultipurposeMenuLink: Locator;
    // 30. Локатор серии моторов с цепным приводом ML Chain Drive
    readonly mlChainDriveMenuLink: Locator;
    // 31. Локатор серии моторов с кулачковым механизмом MF Rotating Cam
    readonly mfRotatingCamMenuLink: Locator;
    // 32. Локатор серии моторов для гусеничного привода MT Track Drive
    readonly mtTrackDriveMenuLink: Locator;
    // 33. Локатор серии моторов повышенной мощности MI High Power
    readonly miHighPowerMenuLink: Locator;
    // 34. Локатор серии моторов поворотного привода MZ Swing Drive
    readonly mzSwingDriveMenuLink: Locator;
    // 35. Локатор серии моторов с подключаемым двойным валом CDM Clutchable Double Shaft
    readonly cdmClutchableDoubleShaftMenuLink: Locator;
    // 36. Локатор серии высоконагруженных моторов MHD Motors
    readonly mhdMotorsMenuLink: Locator;

    // Подменю Products: Гидронасосы (Hydraulic Pumps)
    // 37. Локатор серии аксиально-поршневых насосов PM Axial Piston Hydraulic Pumps
    readonly pmAxialPistonPumpsMenuLink: Locator;

    // Подменю Products: Гидроклапаны (Hydraulic Valves)
    // 38. Локатор тормозных клапанов VB Hydraulic brake valves
    readonly vbHydraulicBrakeValvesMenuLink: Locator;
    // 39. Локатор клапанов контроля движения Motion control valves
    readonly motionControlValvesMenuLink: Locator;

    // Подменю: HEVO
    // 40. Локатор страницы технологий HEVO Technologies
    readonly hevoTechnologiesMenuLink: Locator;
    // 41. Локатор подраздела усилителей мощности HEVO Booster
    readonly hevoBoosterMenuLink: Locator;
    // 42. Локатор подраздела двухконтурных систем HEVO Dual
    readonly hevoDualMenuLink: Locator;

    // Подменю: Electrification
    // 43. Локатор решений мотор-колес eWheel
    readonly eWheelMenuLink: Locator;
    // 44. Локатор электрических силовых установок ePowertrain
    readonly ePowertrainMenuLink: Locator;
    // 45. Локатор электронных инверторов Inverters
    readonly invertersMenuLink: Locator;
    // 46. Локатор тяговых электромоторов eMotors
    readonly eMotorsMenuLink: Locator;

    // Подменю: Corporate
    // 47. Локатор выпадающего подраздела группы компаний The Group
    readonly corporateTheGroupMenu: Locator;
    // 48. Локатор раздела корпоративного управления Governance
    readonly corporateGovernanceMenuLink: Locator;
    // 49. Локатор раздела социальной ответственности CSR
    readonly corporateCsrMenuLink: Locator;
    // 50. Локатор раздела исторического развития History
    readonly corporateHistoryMenuLink: Locator;
    // 51. Локатор раздела научных разработок Innovation
    readonly corporateInnovationMenuLink: Locator;
    // 52. Локатор раздела ключевых ценностей Values
    readonly corporateValuesMenuLink: Locator;
    // 53. Локатор выпадающего подраздела карьеры Careers
    readonly corporateCareersMenu: Locator;
    // 54. Локатор раздела профессионального роста Grow with us
    readonly corporateGrowWithUsMenuLink: Locator;
    // 55. Локатор раздела открытых вакансий Join us
    readonly corporateJoinUsMenuLink: Locator;
    // 56. Локатор раздела благотворительного фонда Foundation
    readonly foundationMenuLink: Locator;

    // 57. Конструктор компонента инициализирует локаторы через переданный объект page
    constructor(page: Page) {
        // 58. Сохраняем ссылку на объект страницы
        this.page = page;
        // 59. Находим тег header шапки сайта
        this.header = page.locator('header');

        // 60. Находим ссылку быстрого перехода по роли link и тексту
        this.skipToMainContentLink = page.getByRole('link', { name: 'Skip to main content' });
        // 61. Находим ссылку с логотипом компании внутри шапки
        this.logoLink = this.header.getByRole('link', { name: 'Poclain Hydraulics logo' });
        // 62. Находим кнопку мобильного бургер-меню по уникальному CSS классу
        this.menuToggleButton = this.header.locator('.header-btn-menu');
        // 63. Находим ссылку поиска по адресу атрибута href
        this.searchLink = this.header.locator('a[href="/search"]');

        // 64. Находим ссылку About Us по относительному пути
        this.aboutUsNavLink = this.header.locator('a[href="/about-us"]').first();
        // 65. Находим ссылку Network по относительному пути
        this.networkNavLink = this.header.locator('a[href="/network"]').first();
        // 66. Находим ссылку News по относительному пути
        this.newsNavLink = this.header.locator('a[href="/news"]').first();
        // 67. Находим переключатель английской языковой версии
        this.languageEnglishLink = this.header.getByRole('link', { name: 'English' }).first();
        // 68. Находим переключатель французской языковой версии
        this.languageFrenchLink = this.header.getByRole('link', { name: 'Français' }).first();
        // 69. Находим ссылку на внешний портал интернет-магазина eShop
        this.eshopNavLink = this.header.locator('a[href="https://eshop.poclain-hydraulics.com/"]').first();

        // 70. Находим ссылку раздела PRODUCTS
        this.productsMenuLink = this.header.locator('a[href="/products"]').first();
        // 71. Находим ссылку раздела APPLICATIONS
        this.applicationsMenuLink = this.header.locator('a[href="/applications"]').first();
        // 72. Находим ссылку раздела HEVO
        this.hevoMenuLink = this.header.locator('a[href="/hevo"]').first();
        // 73. Находим ссылку раздела ELECTRIFICATION
        this.electrificationMenuLink = this.header.locator('a[href="/electrification"]').first();
        // 74. Находим ссылку раздела SYSTEMS
        this.systemsMenuLink = this.header.locator('a[href="/systems"]').first();
        // 75. Находим ссылку раздела SERVICES & SUPPORT
        this.servicesSupportMenuLink = this.header.locator('a[href="/services-support"]').first();
        // 76. Находим ссылку раздела RESOURCES
        this.resourcesMenuLink = this.header.locator('a[href="/resources"]').first();
        // 77. Находим меню раздела CORPORATE по тексту Corporate
        this.corporateMenu = this.header.locator('.header-navigation__menu-btn').filter({ hasText: 'Corporate' }).first();

        // 78. Находим подраздел Hydraulic Motors
        this.hydraulicMotorsMenuLink = this.header.locator('a[href="/products/hydraulic-motors"]').first();
        // 79. Находим подраздел Hydraulic Pumps
        this.hydraulicPumpsMenuLink = this.header.locator('a[href="/products/hydraulic-pumps"]').first();
        // 80. Находим подраздел Hydraulic Valves
        this.hydraulicValvesMenuLink = this.header.locator('a[href="/products/hydraulic-valves"]').first();

        // 81. Находим серию моторов MK Compactness
        this.mkCompactnessMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mk-compactness"]').first();
        // 82. Находим серию моторов MG Steerable Wheel
        this.mgSteerableWheelMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mg-steerable-wheel"]').first();
        // 83. Находим серию моторов MHP High Performance
        this.mhpHighPerformanceMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mhp-high-performance"]').first();
        // 84. Находим серию моторов MS Multipurpose
        this.msMultipurposeMenuLink = this.header.locator('a[href="/products/hydraulic-motors/ms-multipurpose"]').first();
        // 85. Находим серию моторов ML Chain Drive
        this.mlChainDriveMenuLink = this.header.locator('a[href="/products/hydraulic-motors/ml-chain-drive"]').first();
        // 86. Находим серию моторов MF Rotating Cam
        this.mfRotatingCamMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mf-rotating-cam"]').first();
        // 87. Находим серию моторов MT Track Drive
        this.mtTrackDriveMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mt-track-drive"]').first();
        // 88. Находим серию моторов MI High Power
        this.miHighPowerMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mi-high-power"]').first();
        // 89. Находим серию моторов MZ Swing Drive
        this.mzSwingDriveMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mz-swing-drive"]').first();
        // 90. Находим серию моторов CDM Clutchable Double Shaft
        this.cdmClutchableDoubleShaftMenuLink = this.header.locator('a[href="/products/hydraulic-motors/cdm-clutchable-double-shaft"]').first();
        // 91. Находим серию моторов MHD Motors
        this.mhdMotorsMenuLink = this.header.locator('a[href="/products/hydraulic-motors/mhd-motors"]').first();

        // 92. Находим насосы серии PM Axial Piston Hydraulic Pumps
        this.pmAxialPistonPumpsMenuLink = this.header.locator('a[href="/products/hydraulic-pumps/axial-piston-hydraulic-pumps"]').first();

        // 93. Находим тормозные клапаны VB Hydraulic brake valves
        this.vbHydraulicBrakeValvesMenuLink = this.header.locator('a[href="/products/hydraulic-valves/hydraulic-brake-valves"]').first();
        // 94. Находим клапаны регулирования движения Motion control valves
        this.motionControlValvesMenuLink = this.header.locator('a[href="/products/hydraulic-valves/hydraulic-valves-power-transmission-motion-control"]').first();

        // 95. Находим ссылку раздела HEVO Technologies
        this.hevoTechnologiesMenuLink = this.header.locator('a[href="/hevo"]').first();
        // 96. Находим ссылку подраздела HEVO Booster
        this.hevoBoosterMenuLink = this.header.locator('a[href="/hevo/hevo-booster"]').first();
        // 97. Находим ссылку подраздела HEVO Dual
        this.hevoDualMenuLink = this.header.locator('a[href="/hevo/hevo-dual"]').first();

        // 98. Находим ссылку решения eWheel
        this.eWheelMenuLink = this.header.locator('a[href="/electrification/ewheel"]').first();
        // 99. Находим ссылку силовой установки ePowertrain
        this.ePowertrainMenuLink = this.header.locator('a[href="/electrification/epowertrain"]').first();
        // 100. Находим ссылку раздела Inverters
        this.invertersMenuLink = this.header.locator('a[href="/electrification/emdrive-inverters"]').first();
        // 101. Находим ссылку раздела тяговых электромоторов eMotors
        this.eMotorsMenuLink = this.header.locator('a[href="/electrification/mma-emotors"]').first();

        // 102. Находим подраздел The Group
        this.corporateTheGroupMenu = this.header.locator('.header-navigation__menu-btn').filter({ hasText: 'The Group' }).first();
        // 103. Находим подраздел управления Governance
        this.corporateGovernanceMenuLink = this.header.locator('a[href="/corporate/governance"]').first();
        // 104. Находим подраздел CSR
        this.corporateCsrMenuLink = this.header.locator('a[href="/corporate/corporate-social-responsibility-csr"]').first();
        // 105. Находим подраздел History
        this.corporateHistoryMenuLink = this.header.locator('a[href="/corporate/history"]').first();
        // 106. Находим подраздел Innovation
        this.corporateInnovationMenuLink = this.header.locator('a[href="/corporate/innovation"]').first();
        // 107. Находим подраздел корпоративных ценностей Values
        this.corporateValuesMenuLink = this.header.locator('a[href="/corporate/vision-values"]').first();
        // 108. Находим подраздел карьеры Careers
        this.corporateCareersMenu = this.header.locator('.header-navigation__menu-btn').filter({ hasText: 'Careers' }).first();
        // 109. Находим подраздел развития Grow with us
        this.corporateGrowWithUsMenuLink = this.header.locator('a[href="/corporate/careers/grow-with-us"]').first();
        // 110. Находим подраздел вакансий Join us
        this.corporateJoinUsMenuLink = this.header.locator('a[href="/corporate/careers/join-us"]').first();
        // 111. Находим подраздел благотворительного фонда Foundation
        this.foundationMenuLink = this.header.locator('a[href="/foundation"]').first();
    }
}
